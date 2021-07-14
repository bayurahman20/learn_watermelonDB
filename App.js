import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./src/navigation/AppNavigation";

class App extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    );
  }
}

export default App
