import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from './telaNomeStyle';
import Header from '../../components/Header/Header';
export default function TelaNome({ navigation }) {

    const [nome, setNome] = useState('');

    function handleContinuar() {
        if(!nome.trim()){
            Alert.alert("Nome não preenchido!", "Por favor, preencha o campo do seu nome.")
            return;
        }
        navigation.navigate('Nascimento')
    }
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.titleBlock}>
                <Text style={styles.title}>Qual é o seu nome?</Text>
            </View>

            <View style={styles.inputBlock}>
                <Text style={{ margin: 5 }}>Nome</Text>
                <TextInput
                    style={styles.input}
                    placeholder='digite seu nome'
                    value={nome}
                    onChangeText={setNome}
                />
            </View>

            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.buttonNext} onPress={handleContinuar}>
                    <Text style={{ color: '#ffffff' }}>Continuar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}