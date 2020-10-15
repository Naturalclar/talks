import React from "react";

type Logos =
  | "action-toolkit"
  | "bucklescript"
  | "flowtype"
  | "javascript"
  | "ocaml"
  | "react"
  | "reason"
  | "reason-long"
  | "typescript"
  | "swiftui";

type Props = { name: Logos; size?: number; style?: Record<string, string> };

const getLogo = (name: Logos) => {
  switch (name) {
    case "action-toolkit":
      return require("file-loader!./assets/logo-action-toolkit.png");
    case "bucklescript":
      return require("file-loader!./assets/logo-bucklescript.svg");
    case "flowtype":
      return require("file-loader!./assets/logo-flowtype.png");
    case "javascript":
      return require("file-loader!./assets/logo-javascript.png");
    case "ocaml":
      return require("file-loader!./assets/logo-ocaml.svg");
    case "react":
      return require("file-loader!./assets/logo-react.png");
    case "reason":
      return require("file-loader!./assets/logo-reason.png");
    case "reason-long":
      return require("file-loader!./assets/logo-reason-long.svg");
    case "typescript":
      return require("file-loader!./assets/logo-typescript.png");
    case "swiftui":
      return require("file-loader!./assets/logo-swiftui.png");
  }
};

export const Logo = ({ name, size = 120, style = {} }: Props) => {
  return <img src={getLogo(name)} height={size.toString()} style={style} />;
};
