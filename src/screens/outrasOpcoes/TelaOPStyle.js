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
    margin: 20,
    paddingTop: 30,
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
  },

  input: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#CCE5FF',
    textDecorationColor: '#000000',
    paddingHorizontal: 10,
    borderRadius: 7,
  },

  Checkbox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 10

  },

  buttonEntry: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 170,
    backgroundColor: '#2cb859',
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
    flex: 1,
    height: 1,
    backgroundColor: '#474747ff'
  },

  containerLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 50,
    marginTop: -50,
  },

  textLine: {
    marginHorizontal: 15,
    color: '#666',
    fontSize: 14,
    fontWeight: '500'
  },

  containerImage: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 230,
  }
});

export default styles;