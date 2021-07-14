import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      textBtnInput : 'Input User',
      textBtnList : 'Get All User'
    }
  }

  goToFormInput = () => {
    this.props.navigation.navigate('FormInput')
  }

  goToGetListUser = () => {
    this.props.navigation.navigate('ListUser')
  }

  render() {
    return (
      <View style={styles.containerView}>
        <View style={styles.viewBtnContainer}>
          <View style={styles.viewBtn}>
            <TouchableOpacity
              style={styles.btnInput}
              onPress={this.goToFormInput}
            >
              <Text style={styles.textBtn}>{this.state.textBtnInput}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewBtn}>
            <TouchableOpacity
              style={styles.btnInput}
              onPress={this.goToGetListUser}
            >
              <Text style={styles.textBtn}>{this.state.textBtnList}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

}

export default Home
