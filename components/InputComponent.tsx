import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

// Input bileşeni için props türleri tanımlanıyor
type Props = {
    placeholder?: string; // Placeholder opsiyonel olabilir
    value?: string; // Inputun mevcut değeri (kontrollü bileşen)
    onChangeText?: (text: string) => void; // Kullanıcı yazdığında çağrılacak fonksiyon
};

// Input bileşeni
const InputComponent = ({ placeholder, value, onChangeText }: Props) => {
    return (
        <TextInput
            placeholder={placeholder} // Kullanıcıya gösterilecek açıklama metni
            style={style.input} // Stiller
            onChangeText={onChangeText} // Kullanıcı yazdığında üst bileşene bildir
            value={value} // Değeri dışarıdan al (kontrollü bileşen)
            autoComplete='off' // Otomatik tamamlama kapalı
        />
    )
}

export default InputComponent

// Stil tanımları
const style = StyleSheet.create({
    input: {
        borderRadius: 16, // Köşeleri yuvarlak yap
        borderWidth: 4, // Kenarlık kalınlığı
        paddingVertical: 14, // Dikey iç boşluk
        paddingHorizontal: 16, // Yatay iç boşluk
        fontSize: 20, // Yazı boyutu
        borderColor: "#e3e6ea", // Kenarlık rengi
        backgroundColor: "#f4f6f7", // Arkaplan rengi
    },
});
