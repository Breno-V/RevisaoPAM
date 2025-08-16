import { StyleSheet } from "react-native";

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
    margin: 20,
    paddingTop: 30,
  },

  inputBlock: {
    margin: 10,
  },

  input: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#CCE5FF',
    textDecorationColor: '#000000',
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  inputError: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#CCE5FF',
    textDecorationColor: '#f07272ff',
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  password: {
    flex: 1,
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CCE5FF',
    borderRadius: 5,
    paddingHorizontal: 10
  },

  icon: {
    width: 24,
    height: 24,
    marginLeft: 5
  },

  buttonEntry: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 350,
    backgroundColor: '#2cb859',
    borderRadius: 3,
  },

  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 70,
    marginBottom: 30,
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
    marginHorizontal: 50
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
    marginBottom: 170,
  }

});

export default styles;