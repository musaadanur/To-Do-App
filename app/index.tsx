import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputComponent from '@/components/InputComponent'
import MyButton from '@/components/MyButton';
import TodoList from '@/components/TodoList';
import AsyncStorage from '@react-native-async-storage/async-storage';

// AsyncStorage için kullanılan anahtarlar (Verileri kaydederken ve çekerken kullanacağız)
const KEY_TODO_LIST = "todos";
const KEY_CURRENT_TODO = "current_todo";

const index = () => {
    // Yapılacaklar listesi için state
    const [todoList, setTodoList] = useState<string[]>([]);
    // Kullanıcının yazdığı mevcut todo için state
    const [todo, setTodo] = useState("");

    // Uygulama ilk açıldığında AsyncStorage'dan verileri çek
    useEffect(() => {
        async function getTodos() {
            const todos = await AsyncStorage.getItem(KEY_TODO_LIST);
            if (todos !== null) {
                setTodoList(JSON.parse(todos)); // Eğer kayıtlı veriler varsa listeye ekle
            }
        }
        async function getCurrentTodo() {
            const todo = await AsyncStorage.getItem(KEY_CURRENT_TODO);
            if (todo !== null) {
                setTodo(todo); // Kullanıcının yazmakta olduğu son todo'yu geri yükle
            }
        }

        getTodos();
        getCurrentTodo();
    }, [])

    // Yapılacakları AsyncStorage'a kaydet
    const saveTodosToStorage = async (newList: string[]) => {
        const jsonValue = JSON.stringify(newList);
        await AsyncStorage.setItem(KEY_TODO_LIST, jsonValue);
    }

    // "Ekle" butonuna basıldığında çalışacak fonksiyon
    const handlePressed = () => {
        const newList = [...todoList, todo] // Yeni elemanı listeye ekle
        setTodoList(newList); // State'i güncelle
        setTodo(""); // Input'u temizle
        saveTodosToStorage(newList); // Yeni listeyi AsyncStorage'a kaydet
    }

    // Bir todo elemanı silindiğinde çalışacak fonksiyon
    const handleDelete = (deletedTodo: string) => {
        const newList = todoList.filter(todo => todo !== deletedTodo); // Silinen elemanı listeden çıkar
        setTodoList(newList); // State'i güncelle
        saveTodosToStorage(newList); // Güncellenmiş listeyi kaydet
    }

    // Kullanıcı inputa yazdığında çağrılan fonksiyon
    const handleSetTodo = async (text: string) => {
        setTodo(text); // Kullanıcının yazdığı değeri state'e ata
        await AsyncStorage.setItem(KEY_CURRENT_TODO, text); // AsyncStorage'a kaydet (sayfa kapanınca kaybolmasın)
    }

    return (
        <View style={styles.container}>
            {/* Kullanıcının todo gireceği input */}
            <InputComponent
                value={todo}
                onChangeText={handleSetTodo}
                placeholder='Ne yapacan?' />

            {/* "Ekle" butonu */}
            <MyButton text='Ekle Beni' onPress={() => handlePressed()} />

            {/* Todo listesini gösteren bileşen */}
            <TodoList onDelete={handleDelete} todoList={todoList} />
        </View>
    )
}

export default index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 16,
        flexDirection: "column",
        gap: 14,
    }
});
