const Radium = require("radium")({ userAgent: "all" });

const isRadiumDefinedAsFunction = (typeof Radium === "function");

export default function ConfiguredRadium(component) {
	if (isRadiumDefinedAsFunction) {
		return Radium(component);
	}
	else {
		return component;
	}
}