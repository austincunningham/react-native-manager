import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardItem, InputField, Button } from './common';

class EmployeeCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props; 
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <InputField
                        label="Name"
                        placeholder="Austin"
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
                    />
                </CardItem>

                <CardItem>
                    <InputField
                            label="Phone"
                            placeholder="555-555-5555"
                            value={this.props.phone}
                            onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
                    />
                </CardItem >

                <CardItem style={{ flexDirection: 'column' }} >
                    <Text style={styles.pickerLabelStyle}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
                    >
                       <Picker.Item label="Monday" value="Monday" /> 
                       <Picker.Item label="Tuesday" value="Tuesday" /> 
                       <Picker.Item label="Wednesday" value="Wednesday" /> 
                       <Picker.Item label="Thursday" value="Thursday" /> 
                       <Picker.Item label="Friday" value="Friday" /> 
                       <Picker.Item label="Saturday" value="Saturday" /> 
                       <Picker.Item label="Sunday" value="Sunday" /> 
                    </Picker>
                </CardItem>

                <CardItem>
                    <Button 
                        onPress={this.onButtonPress.bind(this)} 
                    >
                        Create
                    </Button>    
                </CardItem>
            </Card>
        );
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 24
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { 
    employeeUpdate, employeeCreate
 })(EmployeeCreate); 