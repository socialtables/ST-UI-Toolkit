import colors from "../../shared-styles/colors";
import fonts from "../../shared-styles/fonts";
import colorLib from "color";

/*
  Default Styles
*/
export default function({ color }) {
  const btnBackgroundColor = color || colors.primary;

  return {
    base: {
      background: btnBackgroundColor,
      color: colors.white,
      border: 0,
      outline: 0,
      "userSelect": "none"
    },
    active: {
      transition: "background 0.2s",
      ":hover": {
        background: colorLib(btnBackgroundColor).darken(0.25).hexString(),
      }
    },
    disabled: {
      background: colors.disabled,
      color: colors.disabledText,
      cursor: "not-allowed"
    }
  };
};