import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import styles from './TelaOPStyle';
import Header from '../../components/Header/Header';
import Checkbox from 'expo-checkbox';
export default function TelaOP({navigation}) {
    const [senha, setSenha] = useState('');
    const [oculto, setOculto] = useState(true);
    const [marcado, setMarcado] = useState(false);
    function handleSocialLogin () {
        Alert.alert('Login inválido!', 'Funcionalidade ainda não implementada.');
    };

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.titleBlock}>
                <Text style={styles.title}>Acesse</Text>
            </View>

            <View style={styles.inputBlock}>
                <Text style={{ margin: 5 }}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder='digite seu email'
                />
            </View>

            <View style={styles.inputBlock}>
                <Text style={{ margin: 5 }}>Senha</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.password}
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry={oculto}
                        placeholder='digite sua senha'
                    />
                    <TouchableOpacity onPress={() => setOculto(!oculto)}>
                        <Image
                            source={oculto ? require('../../../assets/images/eye-open.png') : require('../../../assets/images/eye-closed.png')}
                            style={styles.icon}
                        />

                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.Checkbox}>
                <Checkbox
                    value={marcado}
                    onValueChange={setMarcado}
                    color={marcado ? '#4630EB' : undefined}
                />
                <Text style={styles.text}>Concordo com os Termos de Serviço</Text>
            </View>

            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.buttonEntry}>
                    <Text style={{ color: '#ffffff' }}>Entre</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonOther} onPress={() => navigation.navigate('Register')}>
                    <Text style={{ color: '#000000' }}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerLine}>
                <View style={styles.dividingLine} />

                <Text style={styles.textLine}>OU</Text>

                <View style={styles.dividingLine} />
            </View>
            <View style={styles.containerImage}>
                <TouchableOpacity onPress={handleSocialLogin}>
                    <Image
                        source={require('../../../assets/images/Google.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSocialLogin}>
                    <Image
                        source={require('../../../assets/images/Facebook.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}