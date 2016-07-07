import Radium from "radium";

export default function ConfiguredRadium(component) {
  return Radium({ userAgent: "all" })(component);
}