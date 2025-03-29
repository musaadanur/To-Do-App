import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoListItem from './TodoListItem';

type Props = {
    todoList: string[]; // Yapılacaklar listesini içeren dizi
    onDelete: (todo: string) => void; // Bir öğe silindiğinde çağrılacak fonksiyon
};

const TodoList = ({ todoList, onDelete }: Props) => {
    return (
        <FlatList
            contentContainerStyle={{ gap: 12 }} // Öğeler arasında boşluk bırakır
            data={todoList} // Liste olarak gösterilecek veriler
            keyExtractor={(todo) => todo} // Her öğeye benzersiz bir anahtar atar
            renderItem={({ item }) => <TodoListItem onDelete={onDelete} todo={item} />} // Her öğeyi TodoListItem bileşeniyle render eder
        />
    );
};

export default TodoList
