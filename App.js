import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import Comp from "./src/Components/Comp";
import Call from "./src/Components/Call";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Comp />
      </View>
    );
  }
}
