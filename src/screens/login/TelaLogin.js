import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import Header from '../../components/Header/Header'
import styles from './telaLoginStyle';

export default function TelaLogin({ navigation }) {
    function handleGoogleLogin () {
        Alert.alert('Login com Google', 'Funcionalidade ainda não implementada.');
    };
    return (
        <View style={styles.container}>

            <Header />

            <View style={styles.containerImage}>
                <Image
                    source={require('../../../assets/images/casual_dog.png')}
                    style={styles.imageDog}
                    alt='a woman with her dog'
                />
            </View>

            <Text style={styles.title}>Ótimo dia!</Text>
            <Text style={styles.subtitle}>Como deseja acessar?</Text>


            <TouchableOpacity style={styles.buttonG} onPress={handleGoogleLogin}>
                <Image
                    source={require('../../../assets/images/Google.png')}
                    style={styles.iconGoogle}
                />
                <Text style={styles.BGText}>Como deseja acessar?

                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonOther} onPress={() => navigation.navigate('OutrasOpcoes')}>
                <Text style={styles.BOText}>Outras opções</Text>
            </TouchableOpacity>


        </View>
    );
}