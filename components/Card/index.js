import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Color from "../../constants/Colors.js";

const Card = ({ data }) => {
  const navigation = useNavigation(); // ✅ ใช้ useNavigation() ใน Functional Component

  if (!data) {
    return null;
  }

  const toEvent = () => {
    navigation.navigate("EventScreen", { data });
  };

  return (
    <TouchableWithoutFeedback onPress={toEvent}>
      <View style={styles.wraps}>
        <Image style={styles.images} source={{ uri: data.image }} />
        <View style={styles.right}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.speaker}>{data.speaker}</Text>
          <Text style={styles.date}>
            {data.date} / {data.time}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wraps: {
    height: 200,
    alignSelf: "stretch",
    padding: 10,
    borderBottomColor: Color.accent,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  images: {
    width: 180, // ✅ แก้จาก '180' เป็นตัวเลข 180
    height: 180, // ✅ แก้จาก '180' เป็นตัวเลข 180
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  right: {
    flex: 1,
  },
  speaker: {
    flex: 1,
    marginTop: 4,
  },
  date: {
    color: Color.accent,
  },
});

export default Card;
