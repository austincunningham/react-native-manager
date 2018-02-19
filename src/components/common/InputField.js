import React from 'react';
import { TextInput, View, Text } from 'react-native';


const InputField = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { TextInputStyle, labelStyle, containerStyle } = styles;

    console.log(value);
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>
                {label}
            </Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={TextInputStyle}


            />
        </View>
    );
};

const styles = {
    TextInputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        backgroundColor: '#F8F8F8',
        elevation: 1,
        flex: 3,

    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1

    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { InputField };
