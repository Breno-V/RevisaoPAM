import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    width: width * 1,
    backgroundColor: '#8d9296ff',
  },
});

export default styles;