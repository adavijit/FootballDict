import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class MainContainer extends Component {
  getTempText=()=>{
    if(this.props.location.pathname==="/players"){
      return `Create new player >`
    }
    return "< Back to player list"
  }
  redirectToPatch=()=>{
   
      if(this.props.location.pathname==="/players"){
        this.props.history.push("/players/add")
      }else{
        this.props.history.push("/players")
      }
  }
  
  
  render() {
    return (
      <React.Fragment>
        <div className={"main-container-header"}>
          <p onClick={()=> this.redirectToPatch()} >{this.getTempText()}</p> 
        </div>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default withRouter(MainContainer);