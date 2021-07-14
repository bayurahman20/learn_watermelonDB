import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import FormInputUser from "../screens/users/formInputUser";
import ListUser from "../screens/users/listUser";

class AppNavigation extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    const Stack = createStackNavigator()

    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home} options={{
            headerShown: false
        }} />
        <Stack.Screen name='FormInput' component={FormInputUser} />
        <Stack.Screen name='ListUser' component={ListUser} />
      </Stack.Navigator>
    );
  }

}

export default AppNavigation

