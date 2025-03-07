import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import AppNavigator from "../../Navigation/AppNavigator";
import Colors from "../../constants/Colors";

class Tab extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}style={styles.touchable }>
        <View style={[styles.tab, this.props.selected && styles.selected]}>
          <Text style={[this.props.selected && styles.selected]}>
            {this.props.children}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    color: Colors.accent,
    borderLeftColor: Colors.accent,
    borderRightColor: Colors.accent,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    flex: 1,
  },
  selected: {
    backgroundColor: Colors.accent,
    color: "white",
  },
  touchable : {
    flex : 1
  }
});

export default Tab;
