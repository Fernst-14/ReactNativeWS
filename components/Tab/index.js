import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "../../Navigation/AppNavigator";
import Colors from "../../constants/Colors";
import Tab from "./tab";

class Tabs extends React.Component {


  render() {
    const {selected, select} = this.props
    return (
      <View style={styles.container}>
        <Tab onPress={() => select('All')} selected={selected === 'All'}>All</Tab>
        <Tab onPress={() => select('Friday')} selected={selected === 'Friday'}>Friday</Tab>
        <Tab onPress={() => select('Saturday')} selected={selected === 'Saturday'}>Saturday</Tab>
        <Tab onPress={() => select('Sunday')} selected={selected === 'Sunday'}>Sunday</Tab>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 32,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: Colors.accent,
    borderBottomWidth: 1,
    flexDirection: "row"
  }
});

export default Tabs;
