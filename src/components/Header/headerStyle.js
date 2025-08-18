import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: width * 1,
    backgroundColor: '#b4bbc0ff',
  },
});

export default styles;