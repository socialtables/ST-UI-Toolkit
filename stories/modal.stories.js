import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import Loader from "@socialtables/react-loader";
import { Modal, Button } from "../src/index";
import Code from "./lib/Code";
import { propertyNameStyle, propertyDescriptionStyle, storyStyle } from "./style";
import "./css/normalize.css";
import "./css/style.css";

const basicCodeExample = `<Button onClick={() => this.setState({isOpen: true})}>
  Click to Open Modal
</Button>

<Modal
  open={this.state.isOpen}
  listenForExternalCloseEvent={true}
  onCloseRequest={() => this.setState({isOpen: false})}>
  <section style={{padding: 15}}>
    <h1>{this.state.modalHeader}</h1>
    <div>
      <div>
        <a onClick={() => this.setState({modalHeader: "My New Title!"})}>Click Here</a> to change the title of the header
      </div>
      <div>To close the modal, press the \`Esc\` key, click outside the Modal content, or click the Close button</div>
      <Button
        color="fail"
        onClick={() => this.setState({isOpen: false})}>
        Close
      </Button>
    </div>
  </section>
</Modal>`;

const multipleModalsCodeExample = `<Button onClick={() => this.setState({isFirstModalOpen: true})}>
  Click to Open First Modal
</Button>

<Modal open={this.state.isFirstModalOpen}>
  <section style={{padding: 15}}>
    <h2>First Modal</h2>
    <Button
      color="fail"
      onClick={() => this.setState({isFirstModalOpen: false})}>
      Close
    </Button>
  </section>
</Modal>

<Button onClick={() => this.setState({isSecondModalOpen: true})}>
  Click to Open Second Modal
</Button>

<Modal open={this.state.isSecondModalOpen}>
  <section style={{padding: 15}}>
    <h2>Second Modal</h2>
    <Button
      color="fail"
      onClick={() => this.setState({isSecondModalOpen: false})}>
      Close
    </Button>
  </section>
</Modal>`;

const fixedWidthCodeExample = `<Button onClick={() => this.setState({isFixedWidthModalOpen: true})}>
  Click to Open
</Button>

<Modal
  width="800px"
  open={this.state.isFixedWidthModalOpen}>
  <section style={{padding: 15}}>
    <h2>Fixed Width Modal</h2>
    <p>
      This modal will always be 800px wide.
    </p>
    <Button
      color="fail"
      onClick={() => this.setState({isFixedWidthModalOpen: false})}>
      Close
    </Button>
  </section>
</Modal>`;

const responsiveWidthCodeExample = `<Button onClick={() => this.setState({isResponsiveWidthModalOpen: true})}>
  Click to Open
</Button>

<Modal
  width="70%"
  maxWidth="100%"
  open={this.state.isResponsiveWidthModalOpen}>
  <section style={{padding: 15}}>
    <h2>Responsive Width Modal</h2>
    <p>
      Resize the browser window to see the responsive behavior of this modal's width.
      <br/>
      <br/>
      The modal will always be 70% of the browser window width.
    </p>
    <Button
      color="fail"
      onClick={() => this.setState({isResponsiveWidthModalOpen: false})}>
      Close
    </Button>
  </section>
</Modal>`;

const radiumStylesCodeExample = `<Button onClick={() => this.setState({isCustomModalOpen: true})}>
  Click to Open
</Button>

<Modal
  style={{
    base: {
      height: "200px",
      overflowY: "scroll"
    }
  }}
  open={this.state.isCustomModalOpen}
  listenForExternalCloseEvent={true}
  onCloseRequest={() => this.setState({isCustomModalOpen: false})}>
  <section style={{padding: 15}}>
    <h2>Custom Modal</h2>
    <p>
      The key to more success is to have a lot of pillows.
      They will try to close the door on you, just open it.
      Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion!
      Egg whites, turkey sausage, wheat toast, water.
      Of course they don’t want us to eat our breakfast, so we are going to enjoy our breakfast.
      The key to success is to keep your head above the water, never give up.
      I’m up to something.
    </p>
    <Button
      color="fail"
      onClick={() => this.setState({isCustomModalOpen: false})}>
      Close
    </Button>
  </section>
</Modal>`;

const backgroundOverrideExample = `<Button onClick={() => this.setState({isBackgroundModalOpen: true})}>
 Click to Open
   </Button>
<Modal
 background={"none"}
 open={this.state.isBackgroundModalOpen}
 listenForExternalCloseEvent={true}
 onCloseRequest={() => this.setState({isBackgroundModalOpen: false})}>
 <Loader style={{width: "200px", margin: "50px auto"}} />
</Modal>`;

export default {
	title: "Modal",
	component: Modal
};

export const ModalStory = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalHeader, setModalHeader] = useState("");
    const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
    const [isFixedWidthModalOpen, setIsFixedWidthModalOpen] = useState(false);
    const [isResponsiveWidthModalOpen, setIsResponsiveWidthModalOpen] = useState(false);
    const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
    const [isBackgroundModalOpen, setIsBackgroundModalOpen] = useState(false);
    return (<div style={storyStyle}>
        <h2 style={ {marginTop: 0, marginBottom: 40} }>Modal</h2>

        <Button onClick={() => setIsOpen(true)}>
        Click to Open Modal
        </Button>
        <Modal
        open={isOpen}
        listenForExternalCloseEvent={true}
        onCloseRequest={() => setIsOpen(false)}>
        <section style={{padding: 15}}>
            <h1>{modalHeader}</h1>
            <div>
            <div><a onClick={() => setModalHeader("My New Title!")}>Click Here</a> to change the title of the header</div>
            <br/>
            <div>To close the modal, press the `Esc` key, click outside the Modal content, or click the Close button</div>
            <br/>
            <br/>
            <Button
                color="fail"
                onClick={() => setIsOpen(false)}>
                Close
            </Button>
            <br/>
            </div>
        </section>
        </Modal>

        <Code value={ basicCodeExample } style={ {marginTop: 40} } />

        <h3>Properties</h3>

        <table><tbody>

        <tr>
            <td style={ propertyNameStyle }>
            open
            </td>
        </tr>
        <tr>
            <td style={ propertyDescriptionStyle }>
            <p >
                <i>Boolean</i>
                <br />
                <b>default:</b> false
            </p>
            <p>If true, the modal will be displayed. If false, the modal will be hidden</p>
            </td>
        </tr>

        <tr>
            <td style={ propertyNameStyle }>
            width
            </td>
        </tr>
        <tr>
            <td style={ propertyDescriptionStyle }>
            <p >
                <i>String</i>
                <br />
                <b>default:</b> "30%"
            </p>
            <p>Sets the width of the modal.
            <br/>
            <br/>
            This value can be expressed as either a percent string or a pixel string</p>
            </td>
        </tr>

        <tr>
            <td style={ propertyNameStyle }>
            maxWidth
            </td>
        </tr>
        <tr>
            <td style={ propertyDescriptionStyle }>
            <p >
                <i>String</i>
                <br />
                <b>default:</b> "750px"
            </p>
            <p>
                The maximum width the modal can be.
                <br/>
                <br/>
                This value can be expressed as either a percent string or a pixel string
            </p>
            </td>
        </tr>

        <tr>
            <td style={ propertyNameStyle }>
            onCloseRequest
            </td>
        </tr>
        <tr>
            <td style={ propertyDescriptionStyle }>
            <p >
                <i>Boolean</i>
                <br />
                <b>default:</b> no-op function
            </p>
            <p>Function is triggered when the modal is about to close. A closing event can be one of the following: </p>
            <ul>
                <li>The Modal component is given a prop of <b>open: false</b> on the next React rendering cycle</li>
                <li>An external close event is triggered: see documentation for the <b>listenForExternalCloseEvent</b> prop for a list of external close events</li>
            </ul>
            </td>
        </tr>

        <tr>
            <td style={ propertyNameStyle }>
            listenForExternalCloseEvent
            </td>
        </tr>
        <tr>
            <td style={ propertyDescriptionStyle }>
            <p >
                <i>Boolean</i>
                <br />
                <b>default:</b> true
            </p>
            <div>
                If true, the <b>onCloseRequest()</b> callback will be triggered when either of the follow events occurs:
                <ul>
                <li><i>Esc</i> key is pressed</li>
                <li>Clicking outside the modal content box</li>
                </ul>
            </div>
            </td>
        </tr>

        <tr>
            <td style={ propertyNameStyle }>
            background
            </td>
        </tr>
        <tr>
            <td style={ propertyDescriptionStyle }>
            <p >
                <i>String</i>
                <br />
                <b>default:</b> "white"
            </p>
            <div>
                The background property of the modal will be set to the value specified.
            </div>
            </td>
        </tr>

        </tbody></table>


        <h3>More Examples</h3>

        <ul>

        <li>
            <h4>Multiple Modals</h4>
            <Button onClick={() => setIsFirstModalOpen(true)}>
            Click to Open First Modal
            </Button>
            <Modal open={isFirstModalOpen}>
            <section style={{padding: 15}}>
                <h2>First Modal</h2>
                <Button
                color="fail"
                onClick={() => setIsFirstModalOpen(false)}>
                Close
                </Button>
            </section>
            </Modal>
            <br/>
            <br/>
            <Button onClick={() => setIsSecondModalOpen(true)}>
            Click to Open Second Modal
            </Button>
            <Modal open={isSecondModalOpen}>
            <section style={{padding: 15}}>
                <h2>Second Modal</h2>
                <Button
                color="fail"
                onClick={() => setIsSecondModalOpen(false)}>
                Close
                </Button>
            </section>
            </Modal>
            <Code value={ multipleModalsCodeExample } style={ {marginTop: 20} } />
        </li>

        <li>
            <h4>Fixed Width Modal</h4>
            <Button onClick={() => setIsFixedWidthModalOpen(true)}>
            Click to Open
            </Button>

            <Modal
            width="800px"
            open={isFixedWidthModalOpen}>
            <section style={{padding: 15}}>
                <h2>Fixed Width Modal</h2>
                <p>
                This modal will always be 800px wide.
                </p>
                <Button
                color="fail"
                onClick={() => setIsFixedWidthModalOpen(false)}>
                Close
                </Button>
            </section>
            </Modal>
            <Code value={ fixedWidthCodeExample } style={ {marginTop: 20} } />
        </li>

        <li>
            <h4>Responsive Width Modal</h4>
            <Button onClick={() => setIsResponsiveWidthModalOpen(true)}>
            Click to Open
            </Button>

            <Modal
            width="70%"
            maxWidth="100%"
            open={isResponsiveWidthModalOpen}>
            <section style={{padding: 15}}>
                <h2>Responsive Width Modal</h2>
                <p>
                Resize the browser window to see the responsive behavior of this modal's width.
                <br/>
                <br/>
                The modal will always be 70% of the browser window width.
                </p>
                <Button
                color="fail"
                onClick={() => setIsResponsiveWidthModalOpen(false)}>
                Close
                </Button>
            </section>
            </Modal>
            <Code value={ responsiveWidthCodeExample } style={ {marginTop: 20} } />
        </li>

        <li>
            <h4>Override Radium Styles</h4>
            <Button onClick={() => setIsCustomModalOpen(true)}>
            Click to Open
            </Button>
            <Modal
            style={{
                base: {
                height: "200px",
                overflowY: "scroll"
                }
            }}
            open={isCustomModalOpen}
            listenForExternalCloseEvent={true}
                onCloseRequest={() => setIsCustomModalOpen(false)}>
            <section style={{padding: 15}}>
                <h2>Custom Modal</h2>
                <p>
                The key to more success is to have a lot of pillows.
                They will try to close the door on you, just open it.
                Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion!
                Egg whites, turkey sausage, wheat toast, water.
                Of course they don’t want us to eat our breakfast, so we are going to enjoy our breakfast.
                The key to success is to keep your head above the water, never give up.
                I’m up to something.
                </p>
                <Button
                color="fail"
                onClick={() => setIsCustomModalOpen(false)}>
                Close
                </Button>
            </section>
            </Modal>
            <Code value={ radiumStylesCodeExample } style={ {marginTop: 20} } />
        </li>

        <li>
            <h4>Override Modal Background Property</h4>
            <p>An example use case is to specify `background: none` when using the Modal in combination with React Loader.</p>
            <Button onClick={() => setIsBackgroundModalOpen(true)}>
            Click to Open
            </Button>
            <Modal
            background={"none"}
            open={isBackgroundModalOpen}
            listenForExternalCloseEvent={true}
            onCloseRequest={() => setIsBackgroundModalOpen(false)}>
            <Loader style={{width: "200px", margin: "50px auto"}} />
            </Modal>
            <Code value={ backgroundOverrideExample } style={ {marginTop: 20} } />
        </li>

        </ul>
    </div>);
};

ModalStory.story = {
	name: "Modal"
};
