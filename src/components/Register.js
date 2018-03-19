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
      value: ""
    };
  }

  getValidationState() {
    //Validamos
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="wrapper">
        <h3>Register Page</h3>
        <form>
          <Form inline>
            <FormGroup controlId="formInlineName">
              <ControlLabel>Name</ControlLabel>{' '}
              <FormControl type="text" placeholder="Jane Doe" />
            </FormGroup>{' '}
            <FormGroup controlId="formInlineEmail">
              <ControlLabel>Email</ControlLabel>{' '}
              <FormControl type="email" placeholder="jane.doe@example.com" />
            </FormGroup>{' '}
            <Button type="submit">Send invitation</Button>
          </Form>;
        </form>
      </div>
    );
  }
}
