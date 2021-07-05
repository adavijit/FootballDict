import React, { Component } from "react";
import { fetchAllPlayers } from "../../services/redux/actions/PlayerActions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import GridIcon from "../../assets/grid.png";
import TableIcon from "../../assets/table.png";
import { FullScreenLoader } from "../../components/shared/Loader/Loader";
import _ from "lodash";
import TableView from "../../components/TableView/TableView";
import GridView from "../../components/GridView/GridView";
import ErrorComponent from "../../components/shared/ErrorComponent/ErrorComponent";
class ListingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      table: false,
    };
  }

  componentDidMount() {
    this.props.fetchAllPlayers(10);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      //dispatching action to get all the players
      //passing argument as future scope for pagination
      this.props.fetchAllPlayers(10);
    }
  }

  //this method will return one component after checking all loading and error states
  getMainView = () => {
    if (this.props.fetching_players_details) {
      return <FullScreenLoader />;
    } else if (!_.isEmpty(this.props.fetch_error)) {
      return <ErrorComponent message={"Something went wrong!"} />;
    } else if (this.props.players_details.length === 0) {
      return (
        <ErrorComponent
          message={"Currently there are no players! PLease add a new player"}
        />
      );
    } else {
      return (
        <React.Fragment>
          <div className={`switch-div`}>
            <img
              src={GridIcon}
              alt="grid"
              className={`${!this.state.table ? "switch-div-active" : ""}`}
              onClick={() => {
                this.setState({ table: false });
              }}
            />
            <img
              src={TableIcon}
              alt="grid"
              className={`${this.state.table ? "switch-div-active" : ""}`}
              onClick={() => {
                this.setState({ table: true });
              }}
            />
          </div>
          {this.state.table ? (
            <TableView players_details={this.props.players_details} />
          ) : (
            <GridView players_details={this.props.players_details} />
          )}
        </React.Fragment>
      );
    }
  };

  render() {
    return this.getMainView();
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPlayers: (data) => {
      dispatch(fetchAllPlayers(data));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    players_details: state.PlayersReducer.players_details,
    fetching_players_details: state.PlayersReducer.fetching_players_details,
    fetch_error: state.PlayersReducer.fetch_error,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ListingScreen)
);
