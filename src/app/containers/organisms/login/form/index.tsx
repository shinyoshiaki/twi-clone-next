import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import router from "next/router";
import { ReduxState } from "../../../../modules/createStore";
import { Dispatch } from "redux";
import { loginMod } from "../../../../modules/user";
import FormMol from "../../../../components/molecules/form";
import { Segment, Container } from "../../../../style/emotion";

const LoginOrg: FunctionComponent<{ dispatch: Dispatch }> = ({ dispatch }) => {
  const submit = async (e: any) => {
    const res = await loginMod(e.name, e.pass, dispatch);
    if (res) {
      router.push("/home");
    }
  };

  return (
    <div>
      <Segment>
        <p style={{ paddingLeft: "20%" }}>Login</p>
        <Container>
          <FormMol
            inputs={["name", "pass"]}
            submit={submit}
            submitLabel="login"
          />
        </Container>
      </Segment>
    </div>
  );
};

export default connect((state: ReduxState) => Object.assign({}, state.user))(
  LoginOrg
);
