import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeced',
  },

  text: {
    marginLeft: 10,
  },

  title: {
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: 600,
    color: '#2e3e4b'
  },

  titleBlock: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 20,
    paddingTop: 30,
  },

  inputBlock: {
    margin: 10,

  },

  input: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#CCE5FF',
    textDecorationColor: '#000000',
    paddingHorizontal: 10,
    height: 50,
    borderRadius: 7,
  },

  buttonNext: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 170,
    backgroundColor: '#2cb859',
    borderRadius: 3,
  },

  containerButton: {
    marginTop: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default styles;