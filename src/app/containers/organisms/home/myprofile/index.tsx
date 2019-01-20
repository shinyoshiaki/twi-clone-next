import React, { FunctionComponent } from "react";
import ProfileMol from "../../../../components/molecules/profile";
import { connect } from "react-redux";
import { ReduxState } from "../../../../modules/createStore";
import { UserState } from "../../../../modules/user";

interface Props extends UserState {}

const MyProfileOrg: FunctionComponent<Props> = props => {
  const { name, id } = props;
  return name && id ? (
    <ProfileMol name={name} code={id.slice(0, 10)} />
  ) : (
    <div style={{ width: "25vw" }} />
  );
};

export default connect((state: ReduxState) => Object.assign({}, state.user))(
  MyProfileOrg
);
