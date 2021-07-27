import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: '#2F3137',
    paddingHorizontal: 25,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  formStyle: {
    backgroundColor: 'grey',
    width: '100%',
    height: '50%',
    borderRadius: 5,
    paddingVertical: 15,
  },

  fontTitleStyle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  inputContainer: {
    paddingHorizontal: 10,
    paddingTop: 15,
  },

  fontInput: {
    fontStyle: 'italic',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
    padding: 10,
  },

  input: {
    width: '100%',
    height: 30,
    borderWidth: 1,
  },

  btnInput: {
    backgroundColor: 'grey',
    width: 275,
    height: 55,
    borderColor: 'white',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textBtn: {
    color: 'white',
    fontSize: 16,
  },
});
