import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeced',
  },

  title: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 600,
    color: '#2e3e4b'
  },

  titleBlock: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 30,
    paddingTop: 40,
  },

  inputBlock: {
    margin: 10,
    width: width * 0.95,
    height: 50,
  },

  input: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#CCE5FF',
    textDecorationColor: '#000000',
  },   
});

export default styles;