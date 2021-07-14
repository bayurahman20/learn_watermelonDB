import { StyleSheet } from "react-native";

export const styles =  StyleSheet.create({

  containerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F3137',
    paddingVertical: 275
  },

  btnInput: {
    backgroundColor: 'grey',
    width: 275,
    height: 55,
    borderColor: 'white',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },

  viewBtn: {
    backgroundColor: 'white',
    width: 280,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3
  },

  textBtn: {
    color: 'white',
    fontSize: 16
  },

  viewBtnContainer : {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
})
