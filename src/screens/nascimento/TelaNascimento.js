import { useState } from 'react';
import { Text, View, TouchableOpacity, Alert } from "react-native";
import styles from './telaNascimentoStyle';
import Header from '../../components/Header/Header';
import { MaskedTextInput } from "react-native-mask-text";
export default function TelaNascimento({ navigation }) {
    const [dataNascimento, setDataNascimento] = useState('');

    function calcularIdade(dataNascimento) {
        if (!dataNascimento || dataNascimento.length !== 10) return null; 
        //caso o campo esteja vazio ou incompleto (menos de 10 caracteres [xx/xx/xxxx]), retorna nulo

        const [dia, mes, ano] = dataNascimento.split("/").map(Number); //estaremos destrinchando a idade da pessoa em 3 números (dia, mes, ano) 
        const hoje = new Date();
        const nascimento = new Date(ano, mes - 1, dia);

        let idade = hoje.getFullYear() - nascimento.getFullYear(); //calcula a diferença de idade

        return idade;
    }

    const handleContinuar = () => {
        const idade = calcularIdade(dataNascimento);

        if (idade === null) {
            Alert.alert("Data inválida", "Por favor, preencha a data de nascimento completa.");
            return;
        }

        if (idade < 15) {
            Alert.alert("Atenção", "Você precisa ter pelo menos 15 anos.");
            return;
        }

        //passou pela verificação, navega até a tela de endereço
        navigation.navigate('Endereco');
    };

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.titleBlock}>
                <Text style={styles.title}>Quando você nasceu?</Text>
            </View>

            <View style={styles.inputBlock}>
                <Text style={{ margin: 5 }}>Data de Nascimento</Text>
                <MaskedTextInput
                    mask="99/99/9999"
                    value={dataNascimento}
                    onChangeText={(text) => setDataNascimento(text)}
                    keyboardType="numeric"
                    placeholder="DD/MM/AAAA"
                    style={styles.input}

                />
            </View>

            <View style={styles.containerButton}>
                <TouchableOpacity
                    style={styles.buttonNext}
                    onPress={ handleContinuar }
                >
                    <Text style={{ color: '#ffffff' }}>Continuar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}