import React, { Component } from 'react'
import { fetchAllPlayers } from '../../services/redux/actions/PlayerActions';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux"
import TableRow from '../../components/TableRow/TableRow';
import Card from '../../components/Card/Card';
import TableColumns from '../../constants/TableColumns';
import GridIcon from '../../assets/grid.png'
import TableIcon from '../../assets/table.png'
import {FullScreenLoader} from '../../components/Loader/Loader';
import _ from 'lodash'
class HomeScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             table: false
        }
    }

    componentDidMount(){
        this.props.fetchAllPlayers(10)
    }
    componentDidUpdate(prevProps, prevState){
      if(this.props.location.pathname !== prevProps.location.pathname){
        this.props.fetchAllPlayers(10)
      }
  }

    updateTable=()=>{
      return this.props.players_details.map((player,key)=>{
        return (
          <TableRow player={player} key={key}/>
        )
      })
    }

    getTableView=()=>{
      return( 
            <table className="rwd-table">
            <thead>
              <tr>
                {TableColumns.map((element,key)=>{
                  return (<th key={key}>{element.name}</th>)
                })}
              </tr>
            </thead>
            <tbody>
              {this.updateTable()}
            </tbody>
          </table>
          )   
    }
    getGridView=()=>{
      return (<div className={"card-main"}>
      {this.props.players_details.map((player,key)=>{
        return (
            <Card player={player} key={key}/>
        )
      })}
    </div>)


    }
    
    getMainView=()=>{
      if(this.props.fetching_players_details){
        return <FullScreenLoader/>
      }else if(!_.isEmpty(this.props.fetch_error)){
        return <div>Something error</div>
      }else{
        return <React.Fragment>
        
        <div className={`switch-div`}>
          <img src={GridIcon} alt="grid" className={`${!this.state.table ? 'switch-div-active' : ''}`}
          onClick={()=>{this.setState({table: false})}}
          />
          <img src={TableIcon} alt="grid"  className={`${this.state.table ? 'switch-div-active' : ''}`}
           onClick={()=>{this.setState({table: true})}}
          />

        </div>
        {this.state.table ? this.getTableView() : this.getGridView()}
      </React.Fragment> 
      }
    }
    
    render() {
      return this.getMainView()
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPlayers: (data) => {
      dispatch(fetchAllPlayers(data));
    }
  };
};
const mapStateToProps = (state) => {
  return {
    players_details: state.PlayersReducer.players_details,
    fetching_players_details: state.PlayersReducer.fetching_players_details,
    fetch_error:  state.PlayersReducer.fetch_error,
  }
    
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
  );