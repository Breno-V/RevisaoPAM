import { Text, View, TextInput } from "react-native";
import styles from './TelaOPStyle';

export default function TelaOP() {
    return (
        <View style={styles.container}>
            <View style={styles.titleBlock}>
                <Text style={styles.title}>Acesse</Text>
            </View>
            <View style={styles.inputBlock}>
                <Text>Login</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.inputBlock}>
                <Text>Senha</Text>
                <TextInput style={styles.input}/>
            </View>
        </View>
    )
}