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

  subtitle: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 13,
    fontWeight: 600,
    marginTop: 10,
    color: '#2e3e4b'
  },

  containerImage: {
    marginTop: 60,
    justifyContent: 'center',
    alignSelf: 'center'
  },

  imageDog: {
    width: width,
    heigth: height * 1,
    resizeMode: 'contain',
    overflow: 'hidden',
  },

  buttonG: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '10',
    alignSelf: 'center',
    backgroundColor: '#43d38d',
    height: 50,
    width: width * 0.8,
    borderRadius: 5,
  },

  buttonOther: {
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    height: 50,
    width: width * 0.8,
    borderRadius: 5,
    borderColor: '#43d38d',
    borderWidth: 1,
  },

  BGText: {
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 10,
    color: '#ffffff',
    fontWeight: '400',
  },

  BOText: {
    textAlign: 'center',
    justifyContent: 'center',
    textDecorationColor: '#000000',
    fontWeight: '400',
    margin: 10,
  },

  iconGoogle: {
    marginLeft: -45,
    backgroundColor: '#ffffff',
    borderRadius: 3,
    maxWidth: 30,
    maxHeight: 30,
    resizeMode: 'contain',
    marginRight: 35,
    overflow: 'hidden',
  }
});

export default styles;