import React from "react";
import Button from "../../components/shared/Button/Button";
import FootballImage from "../../assets/football.png";
export default function HomeScreen(props) {
  return (
    <section id="main-content">
      <div id="football-home-ad">
        <div className="football-home-ad-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-6 bp-ad-content-wrap">
                <h1 className="bp-ad-title">
                  Football<i>Dict</i>
                </h1>
                <p className="bp-ad-content">
                  Football<i>Dict</i> offers you a centralized database where
                  you can store your favourite player details{" "}
                </p>
                <Button
                  name={"See players"}
                  className={"btn-banner"}
                  onButtonClick={() => props.history.push("/players")}
                />
                <p
                  className={"p-banner"}
                  onClick={() => props.history.push("/players/add")}
                >
                  Add a player
                </p>
              </div>
              <div className="hidden-xs hidden-sm col-md-6">
                <div id="bp-img-container">
                  <img className="bp-ad-img" src={FootballImage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
