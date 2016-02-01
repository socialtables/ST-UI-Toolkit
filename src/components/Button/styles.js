import colors from "../../shared-styles/colors";

/*
  Default Styles
*/
export default {
  base: {
    background: colors.primary,
    color: colors.white,
    border: 0,
    outline: 0,
    transition: "opacity 0.2s",
    "userSelect": "none",
    ":hover": {
      opacity: "0.8"
    }
  },
  disabled: {
    background: colors.disabled,
    color: colors.disabledText,
    cursor: "not-allowed",
    transition: "none",
    ":hover": {
      opacity: "1"
    }
  }
};