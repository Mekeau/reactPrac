import React from "react";
import { render } from "react-dom";
import {
  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock,
  FieldGroup,
  Button,
  Form
} from "react-bootstrap";

export default class Register extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: ""
    };
  }

  getValidationState() {
    const length = this.state.name.length;
    if (length > 10) return "success";
    else if (length > 5) return "warning";
    else if (length > 0) return "error";
    return null;
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div className="wrapper-register">
        <h3>Register Page</h3>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        />
        <form>
          <Form inline>
            <FormGroup controlId="formInlineName">
              <ControlLabel>Name</ControlLabel> <FormControl type="text" />
            </FormGroup>{" "}
            <FormGroup controlId="formInlinePassword">
              <ControlLabel>Password</ControlLabel>{" "}
              <FormControl type="password" placeholder={this.state.name} />
            </FormGroup>{" "}
            <Button type="submit">Register</Button>
          </Form>
        </form>
      </div>
    );
  }
}
