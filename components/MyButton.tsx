import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { isSmallDevice } from '@/constants/screenWidths';

// Buton bileşeni için props türleri tanımlanıyor
type Props = {
    variant?: "primary" | "secondary" | "destructive" | "success"; // Butonun stil tipi
    text?: string; // Butonun içinde gösterilecek metin
    onPress?: () => void; // Butona tıklandığında çalışacak fonksiyon
};

// Buton bileşeni
const MyButton = ({ text, onPress, variant = "primary" }: Props) => {
    let backgroundColor = "dodgerblue"; // Varsayılan arkaplan rengi
    const { width, height } = useWindowDimensions(); // Cihazın genişliğini ve yüksekliğini al

    // Butonun stilini belirleyen switch-case yapısı
    switch (variant) {
        case "primary":
            backgroundColor = "#373a42"; // Ana buton rengi
            break;
        case "secondary":
            backgroundColor = "blueviolet"; // İkincil buton rengi
            break;
        case "destructive":
            backgroundColor = "#7a8796"; // Silme veya uyarı amaçlı buton rengi
            break;
        case "success":
            backgroundColor = "mediumseagreen"; // Başarı durumunu belirten buton rengi
            break;
        default:
            backgroundColor = "dodgerblue"; // Varsayılan renk
            break;
    }

    return (
        // Butonun kendisi (TouchableOpacity dokunulabilir bir bileşendir)
        <TouchableOpacity onPress={onPress} style={[styles.container, { backgroundColor: backgroundColor }]}>
            {/* Buton içindeki metin */}
            <Text style={[styles.text, { fontSize: isSmallDevice(width) ? 12 : 18 }]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default MyButton

// Stil tanımları
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#3e424c", // Varsayılan arkaplan rengi
        alignSelf: "flex-end", // Butonu sağa hizalar
        paddingHorizontal: 32, // Yatay iç boşluk
        paddingVertical: 16, // Dikey iç boşluk
        borderRadius: 16, // Köşeleri yuvarlat
        borderWidth: 4, // Kenarlık kalınlığı
        borderColor: "#cbd0d6", // Kenarlık rengi
    },
    text: {
        color: "white", // Yazı rengi
    },
});
