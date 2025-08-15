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

  },

  icon: {
    width: 24,
    height: 24,
    marginLeft: 5
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CCE5FF',
    borderRadius: 5,
    paddingHorizontal: 10
  },

  password: {
    flex: 1,
    paddingVertical: 10
  },

  input: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#CCE5FF',
    textDecorationColor: '#000000',
    paddingVertical: 10
  },

  Checkbox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 10
  },

  buttonEntry: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 170,
    backgroundColor: '#28a751',
    borderRadius: 3,
  },

  buttonOther: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 170,
    backgroundColor: '#ffffff',
    borderRadius: 3,
    borderColor: '#43d38d',
    borderWidth: 1,
  },

  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 100,
  },

  dividingLine: {
    height: 1,
    backgroundColor: '#000000',
    marginVertical: 10,
    marginHorizontal: 50,
    marginBottom: 30,
    justifyContent: 'space-evenly'
  },

  containerImage: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 170,
  }
});

export default styles;