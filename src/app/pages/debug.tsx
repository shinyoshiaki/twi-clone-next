import React, { FunctionComponent } from "react";
import TweetFormMol from "../components/molecules/tweetForm";

import InputAtom from "../components/atoms/search";
import ProfileMol from "../components/molecules/profile";

const Debug: FunctionComponent<{}> = ({}) => {
  return (
    <div>
      <TweetFormMol submit={() => {}} />

      <InputAtom submit={v => console.log({ v })} />
      <ProfileMol name="name" code="code" />
    </div>
  );
};

export default Debug;
