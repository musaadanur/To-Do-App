import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyButton from './MyButton';

type Props = {
    todo: string;
    onDelete: (todo: string) => void
}

const TodoListItem = ({ todo, onDelete }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{todo}</Text>
            <MyButton onPress={() => onDelete(todo)} text='Sil' variant={"destructive"} />
        </View>
    )
}

export default TodoListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#f4f6f7",
        padding: 8,
        alignItems: "center",
    },
    text: {
        fontSize: 16,
    },
});