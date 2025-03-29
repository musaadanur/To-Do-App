import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { isSmallDevice } from '@/constants/screenWidths';

type Props = {
    variant?: "primary" | "secondary" | "destructive" | "success";
    text?: string;
    onPress?: () => void;
};

const MyButton = ({ text, onPress, variant = "primary" }: Props) => {
    let backgroundColor = "dodgerblue"
    const { width, height } = useWindowDimensions()


    switch (variant) {
        case "primary":
            backgroundColor = "#373a42"
            break;
        case "secondary":
            backgroundColor = "blueviolet"
            break;
        case "destructive":
            backgroundColor = "#7a8796"
            break;
        case "success":
            backgroundColor = "mediumseagreen"
            break;
        default:
            backgroundColor = "dodgerblue"
            break;

    }

    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, { backgroundColor: backgroundColor }]}>
            <Text style={[styles.text, { fontSize: isSmallDevice(width) ? 12 : 18 }]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default MyButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#3e424c",
        alignSelf: "flex-end",
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderRadius: 16,
        borderWidth: 4,
        borderColor: "#cbd0d6",

    },
    text: {
        color: "white",
    },
})