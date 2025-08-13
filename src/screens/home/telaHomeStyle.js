import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeced',
  },
  
  title: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: 600,
    color: '#2e3e4b'
  },
  
});

export default styles;