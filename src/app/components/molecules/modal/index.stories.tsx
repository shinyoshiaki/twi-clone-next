import * as React from "react";
import { storiesOf } from "@storybook/react";

import Component from ".";

storiesOf("molecules", module).add("modal", () => (
  <Component label="tweet">something</Component>
));
