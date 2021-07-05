import React, { Component } from "react";
import { savePlayer } from "../../services/redux/actions/PlayerActions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from "../../components/shared/Button/Button";
import Input from "../../components/shared/Input/Input";
import _ from "lodash";
import TableColumns from "../../constants/TableColumns";
import { ComponentLoader } from "../../components/shared/Loader/Loader";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import getBase64 from "../../utils/helpers/ImageHelpers";
import CustomModal from "../../components/shared/CustomModal/CustomModal";
import { validateInput } from "../../utils/helpers/Validators";

export class CreateScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: "",
      name: "",
      country: "",
      deb_year: "",
      former_club: "",
      curr_club: "",
      assists: "",
      position: "",
      freekick_scored: "",
      modal_open: false,
      message: "",
    };
    this.inputFileRef = React.createRef();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.save_check !== prevProps.save_check) {
      this.setState({
        photo: "",
        name: "",
        country: "",
        deb_year: "",
        former_club: "",
        curr_club: "",
        assists: "",
        position: "",
        freekick_scored: "",
        modal_open: true,
        message: "Saved successfully...",
      });
    }

    if (!_.isEqual(this.props.save_error, prevProps.save_error)) {
      this.setState({
        message: "Something went wrong!",
        modal_open: true,
      });
    }
  }

  uploadDetails = () => {
    getBase64(this.state.photo).then((base64) => {
      const data = { ...this.state, photo: base64 };
      delete data.modal_open;
      delete data.message;
      this.props.savePlayer(data);
    });
  };

  render() {
    const disabled = validateInput(this.state);
    return (
      <React.Fragment>
        <CustomModal
          modal_open={this.state.modal_open}
          onClose={() => this.setState({ ...this.state, modal_open: false })}
          message={this.state.message}
          onButtonClick={() => {
            if (this.props.save_check) {
              this.props.history.push("/players");
            } else {
              this.setState({ ...this.state, modal_open: false });
            }
          }}
        />
        <div className={"create-screen-main"}>
          <div className={"create-screen-left"}>
            <ImageUpload
              removePhoto={() => this.setState({ ...this.state, photo: "" })}
              setImage={(photo) =>
                this.setState({ ...this.state, photo: photo })
              }
            />
          </div>

          <div className={"create-screen-right"}>
            <p className={"p-tag-1"}>Please enter all the fields</p>
            {TableColumns.map((element, key) => {
              if (element.key !== "photo")
                return (
                  <React.Fragment>
                    <a className={"field-a"}>{element.name}</a>
                    <Input
                      key={key}
                      type={element.type}
                      placeholder={`Type here...`}
                      onchange={(value) =>
                        this.setState({ ...this.state, [element.key]: value })
                      }
                      value={this.state[element.key]}
                    />
                  </React.Fragment>
                );
            })}

            {this.props.saving_player_details ? (
              <ComponentLoader />
            ) : (
              <Button
                className={`btn-save ${
                  disabled ? "btn-disabled" : "btn-active"
                }`}
                name={"Save"}
                disabled={disabled}
                onButtonClick={() => this.uploadDetails()}
              />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    savePlayer: (data) => {
      dispatch(savePlayer(data));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    players_details: state.PlayersReducer.players_details,
    saving_player_details: state.PlayersReducer.saving_player_details,
    save_check: state.PlayersReducer.save_check,
    save_error: state.PlayersReducer.save_error,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CreateScreen)
);
