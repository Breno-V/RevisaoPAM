import { Text, View, Image, TouchableOpacity } from 'react-native';
import Header from '../../components/Header/Header';
import styles from './telaHomeStyle';

export default function TelaHome() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Tela de home</Text>
        </View>
    )
}