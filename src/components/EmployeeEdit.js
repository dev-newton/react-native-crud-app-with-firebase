import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, Button1, Button2, Confirm } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';

class EmployeeEdit extends Component {
  state = { showModal: false };

componentWillMount() {
  _.each(this.props.employee, (value, prop) => {
    this.props.employeeUpdate({ prop, value });
  });
}

onButtonPress() {
  const { name, phone, shift } = this.props;

  this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
}
onTextPress() {
  const { phone, shift } = this.props;

  Communications.text(phone, `Your upcoming shift is on ${shift}`);
}

onAccept() {
  const { uid } = this.props.employee;

  this.props.employeeDelete({ uid });
}

onDecline() {
  this.setState({ showModal: false });
}

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Save Changes
            </Button>
            <Button1 onPress={() => this.setState({ showModal: !this.state.showModal })}>
              Delete
            </Button1>
          </CardSection>

          <CardSection>
            <Button2 onPress={this.onTextPress.bind(this)}>
              Text Schedule
            </Button2>
          </CardSection>

          <Confirm
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
          >
            Are you sure you want to delete this ?
          </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
   employeeUpdate, employeeSave, employeeDelete
  })(EmployeeEdit);
