import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import styles from './TelaOPStyle';

export default function TelaOP() {
    const [senha, setSenha] = useState('');
    const [oculto, setOculto] = useState(true);

    return (
        <View style={styles.container}>
            <View style={styles.titleBlock}>
                <Text style={styles.title}>Acesse</Text>
            </View>

            <View style={styles.inputBlock}>
                <Text>Email</Text>
                <TextInput style={styles.input} placeholder='digite seu email' />
            </View>
            
            <View style={styles.inputBlock}>
                <Text>Senha</Text>
                <View style={styles.passwordContainer}>
                    <TextInput style={styles.password} value={senha} onChangeText={setSenha} secureTextEntry={oculto} placeholder='digite sua senha' />
                    <TouchableOpacity onPress={() => setOculto(!oculto)}>
                        <Image
                            source={oculto ? require('../../../assets/images/eye-open.png') : require('../../../assets/images/eye-closed.png')}
                            style={styles.icon}
                        />

                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}