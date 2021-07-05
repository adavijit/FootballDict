import React from "react";
import Button from "../../components/shared/Button/Button";

export default function HomeScreen(props) {
  return (
    <section id="main-content">
      <div id="football-home-ad">
        <div className="football-home-ad-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-6 bp-ad-content-wrap">
                <h1 className="bp-ad-title">
                  MyHealth<i>One</i> introduces enhanced bill pay
                </h1>
                <p className="bp-ad-content">
                  MyHealth<i>One</i> now offers an improved feature to make
                  paying your hospital bills, tracking payments and managing
                  multiple accounts even faster. Just click "Bill Pay" below or
                  in the navigation bar to the left and get started.
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
                  <img
                    className="bp-ad-img"
                    src="https://img.icons8.com/cotton/2x/fa314a/football-ball.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
