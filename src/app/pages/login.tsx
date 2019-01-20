import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import LoginOrg from "../containers/organisms/login/form";
import { ReduxState } from "../modules/createStore";
import { Button, Divider } from "../style/emotion";
import LoadingOverlay from "react-loading-overlay";
import { UserState } from "../modules/user";

const Login: FunctionComponent<UserState> = props => {
  return (
    <LoadingOverlay
      active={props.ui.login}
      spinner
      text="Loading your content..."
    >
      <div style={{ height: "95vh" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "70%",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <Button color="#66747E" background="white">
              some
            </Button>
            lang
          </div>
        </div>
        <Divider />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            background: "#E5EBF0",
            height: "100%"
          }}
        >
          <div style={{ width: "70%" }}>
            <LoginOrg />
          </div>
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default connect((state: ReduxState) => Object.assign({}, state.user))(
  Login
);
