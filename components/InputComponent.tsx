import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

type Props = {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
};

const InputComponent = ({ placeholder, value, onChangeText }: Props) => {
    return (
        <TextInput
            placeholder={placeholder}
            style={style.input}
            onChangeText={onChangeText}
            value={value}
            autoComplete='off'


        />
    )
}

export default InputComponent


const style = StyleSheet.create({
    input: {
        borderRadius: 16,
        borderWidth: 4,
        paddingVertical: 14,
        paddingHorizontal: 16,
        fontSize: 20,
        borderColor: "#e3e6ea",
        backgroundColor: "#f4f6f7",

    },
});