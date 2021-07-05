import React, { Component } from 'react'
import { savePlayer } from '../../services/redux/actions/PlayerActions';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux"
import Faceplaceholder from '../../assets/faceplaceholder.jpg'
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import _ from 'lodash'
import TableColumns from '../../constants/TableColumns';
import { ComponentLoader } from '../../components/Loader/Loader';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

export class CreateScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            photo:"",
            name: "",
            country : "",
            deb_year: "",
            former_club: "",
            curr_club: "",
            assists:"",
            position:"",
            freekick_scored:"",
            modal_open:false,
            message:""
        }
        this.inputFileRef = React.createRef();
    }
    componentDidUpdate(prevProps, prevState){
        if(this.props.save_check !== prevProps.save_check){
            this.setState({
            photo:"",
            name: "",
            country : "",
            deb_year: "",
            former_club: "",
            curr_club: "",
            assists:"",
            position:"",
            freekick_scored:"",
            modal_open:true,
            message: "Saved successfully..." 
        })
        }

        if(!_.isEqual(this.props.save_error,prevProps.save_error)){
            this.setState({
            message : "Something went wrong!",
            modal_open:true 
        })
        }
    }

    imageUpload = e => {
        const file = e.target.files[0];
        this.setState({ ...this.state, photo: file });
    };

    

    uploadDetails = () => {
        getBase64(this.state.photo).then(base64 => {
            console.debug("file stored",base64);
            const data = {...this.state, photo : base64}
            delete data.modal_open;
            delete data.message;
            this.props.savePlayer(data)
        });
    };
      
    
    render() {
        const selectedImage = this.state.photo ?  URL.createObjectURL(this.state.photo) : Faceplaceholder;
        const disabled = this.state.name === "" ||this.state.country=== "" ||  this.state.deb_year === "" || this.state.former_club === "" || this.state.curr_club==="" || this.state.position ===""|| this.state.assists === "" || this.state.freekick_scored === ""
        return (
            <React.Fragment>
                 <Modal open={this.state.modal_open} onClose={()=>{this.setState({...this.state, modal_open: false})}} center>
                    <h2>{this.state.message}</h2>
                    <Button
                    disabled={false}
                    onButtonClick={()=>{
                        if(this.props.save_check){
                            this.props.history.push("/players")
                        }else{
                            this.setState({...this.state, modal_open: false})
                        }
                    }}
                    className={"btn-modal"}
                    name={"Okay"}
                    />
                </Modal>
      <div className={"create-screen-main"}>
                <div className={"create-screen-left"}>
                    <input
                    type="file"
                    id="imageFile" 
                    name='imageFile' 
                    ref={this.inputFileRef}
                    onChange={this.imageUpload}
                    className={"input-img"}
                    />
                    <img src={ selectedImage } alt="face"  />
                    <div className={"image-upload-right"}>
                        <Button 
                        onButtonClick={()=>this.inputFileRef.current.click()}
                        name={"Select image"}
                        className={"btn-img-upload"}/>

                        <p className={"remove-img"} onClick={()=> this.setState({...this.state, photo: ""})}>Remove image</p>
                    </div>

                </div>

                <div className={"create-screen-right"}>

                    <p className={"p-tag-1"}>Please enter all the fields</p>
                    {TableColumns.map((element,key)=>{
                        if(element.key!=="photo")
                        return <React.Fragment>
                            <a className={"field-a"}>{element.name}</a>
                            <Input
                            key={key}
                            type={element.type}
                            placeholder={`Type here...`}
                            onchange={(value)=>this.setState({...this.state, [element.key]:value })}
                            value={this.state[element.key]}
                        />
                        </React.Fragment>
                    })}
                    
                    {this.props.saving_player_details ? <ComponentLoader/> :<Button
                    className={`btn-save ${disabled? "btn-disabled": "btn-active"}`}
                    name={"Save"}
                    disabled={disabled}
                    onButtonClick={()=>this.uploadDetails()}
                    /> }
                    
                </div>
            </div>
            </React.Fragment>
           
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        savePlayer: (data) => {
        dispatch(savePlayer(data));
      }
    };
  };
  const mapStateToProps = (state) => {
    return {
      players_details: state.PlayersReducer.players_details,
      saving_player_details: state.PlayersReducer.saving_player_details,
      save_check: state.PlayersReducer.save_check,
      save_error: state.PlayersReducer.save_error,
    }
      
  };
  
  const getBase64 = (file) => {
    return new Promise((resolve,reject) => {
       const reader = new FileReader();
       reader.onload = () => resolve(reader.result);
       reader.onerror = error => reject(error);
       reader.readAsDataURL(file);
    });
  }
  export default withRouter(
      connect(mapStateToProps, mapDispatchToProps)(CreateScreen)
    );