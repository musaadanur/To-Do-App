import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoListItem from './TodoListItem';

type Props = {
    todoList: string[];
    onDelete: (todo: string) => void;
};

const TodoList = ({ todoList, onDelete }: Props) => {

    return (
        <FlatList
            contentContainerStyle={{ gap: 12 }}
            data={todoList}
            keyExtractor={(todo) => todo}
            renderItem={({ item }) => <TodoListItem onDelete={onDelete} todo={item} />}
        />
    );
};

export default TodoList
