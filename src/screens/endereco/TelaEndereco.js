import { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Alert } from "react-native";
import styles from './telaEnderecoStyle';
import Header from '../../components/Header/Header';

export default function TelaEndereco({ navigation }) {
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [estado, setEstado] = useState('');

    const handleContinuar = () => {
        if (!rua.trim() || !bairro.trim() || !estado.trim()) {
            Alert.alert("Campos incompletos", "Por favor, preencha todos os campos.");
            return;
        }

        // Todos os campos preenchidos → navega
        navigation.navigate('');
    };

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.titleBlock}>
                <Text style={styles.title}>Qual é o seu endereço?</Text>
            </View>

            <View style={styles.inputBlock}>
                <Text style={{ margin: 5 }}>Rua: </Text>
                <TextInput
                    placeholder="nome da rua"
                    style={styles.input}
                    value={rua}
                    onChangeText={setRua}
                />
                <Text style={{ margin: 5 }}>Bairro: </Text>
                <TextInput
                    placeholder="nome do bairro"
                    style={styles.input}
                    value={bairro}
                    onChangeText={setBairro}
                />
                <Text style={{ margin: 5 }}>Estado: </Text>
                <TextInput
                    placeholder="nome do Estado"
                    style={styles.input}
                    value={estado}
                    onChangeText={setEstado}
                />
            </View>

            <View style={styles.containerButton}>
                <TouchableOpacity
                    style={styles.buttonNext}
                    onPress={handleContinuar}
                >
                    <Text style={{ color: '#ffffff' }}>Continuar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}