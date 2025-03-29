import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyButton from './MyButton';

type Props = {
    todo: string; // Todo öğesinin içeriği
    onDelete: (todo: string) => void; // Todo öğesini silmek için çağrılacak fonksiyon
}

const TodoListItem = ({ todo, onDelete }: Props) => {
    return (
        <View style={styles.container}>
            {/* Todo öğesinin metnini ekrana basıyoruz */}
            <Text style={styles.text}>{todo}</Text>

            {/* Silme butonunu render ediyoruz, butona tıklandığında onDelete fonksiyonu çağrılır */}
            <MyButton onPress={() => onDelete(todo)} text='Sil' variant={"destructive"} />
        </View>
    )
}

export default TodoListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", // Öğeleri yatayda sıralar
        justifyContent: "space-between", // Elemanlar arasındaki boşluğu eşit şekilde dağıtır
        backgroundColor: "#f4f6f7", // Arka plan rengi
        padding: 8, // İçerik etrafında boşluk bırakır
        alignItems: "center", // Öğeleri dikeyde ortalar
    },
    text: {
        fontSize: 16, // Todo metninin yazı boyutu
    },
});
