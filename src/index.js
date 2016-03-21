import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import TextBox from "./components/TextBox/TextBox";
import Checkbox from "./components/Checkbox/Checkbox";
import Tab from "./components/Tabs/Tab";
import Tabs from "./components/Tabs/Tabs";
import Modal from "./components/Modal/Modal";
import RadioButton from "./components/RadioButton/RadioButton";
import RadioButtonGroup from "./components/RadioButton/RadioButtonGroup";
import SelectBox from "./components/SelectBox/SelectBox";
import SelectBoxOption from "./components/SelectBox/SelectBoxOption";

export default {
	Button,
	Card,
	TextBox,
	Checkbox,
	Tab,
	Tabs,
	Modal,
	RadioButton,
	RadioButtonGroup,
	SelectBox,
	SelectBoxOption,
	// NOTE: These will be removed on the next minor version
	get RoundTextBox() {
		console.warn("ST UI Toolkit Warning: RoundTextBox aliases to TextBox and will be removed on next minor version bump");
		return TextBox;
	},
	get RoundSelectBox() {
		console.warn("ST UI Toolkit Warning: RoundSelectBox aliases to SelectBox and will be removed on next minor version bump");
		return SelectBox;
	},
	get RoundSelectBoxOption() {
		console.warn("ST UI Toolkit Warning: RoundSelectBoxOption aliases to SelectBoxOption and will be removed on next minor version bump");
		return SelectBoxOption;
	}
};
