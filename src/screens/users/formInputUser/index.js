import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
class FormInputUser extends React.Component {
  render() {
    return (
      <View style={styles.formContainer}>
        <View style={styles.formStyle}>
          <Text style={styles.fontTitleStyle}>Input User</Text>
          <SafeAreaView>
            <View style={styles.inputContainer}>
              <Text style={styles.fontInput}>Full Name</Text>
              <TextInput style={styles.input} />
              <Text style={styles.fontInput}>Age</Text>
              <TextInput style={styles.input} />
              <Text style={styles.fontInput}>Address</Text>
              <TextInput style={styles.input} />
            </View>
          </SafeAreaView>
        </View>
        <TouchableOpacity
          style={styles.btnInput}
          onPress={() => console.log('Gass')}>
          <Text style={styles.textBtn}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default FormInputUser;
