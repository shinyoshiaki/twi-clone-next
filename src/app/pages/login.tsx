import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import LoginOrg from "../containers/organisms/login/form";
import { ReduxState } from "../modules/createStore";
import { Button, Divider } from "../style/emotion";

const Login: FunctionComponent<{}> = () => {
  return (
    <div style={{ height: "90vh" }}>
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
  );
};

export default connect((state: ReduxState) => Object.assign({}, state.user))(
  Login
);
