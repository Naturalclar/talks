import React from "react";
import { storiesOf } from "@storybook/react";
import { Logo } from "./Logo";

storiesOf("Components/Logo", module).add("typescript", () => (
  <Logo name="typescript" />
));
