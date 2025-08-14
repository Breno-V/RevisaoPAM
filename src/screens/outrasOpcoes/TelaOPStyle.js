import { StyleSheet } from "react-native"

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
});

export default styles;