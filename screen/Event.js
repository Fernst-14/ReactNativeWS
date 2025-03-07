import React from "react";
import { StyleSheet, Text, ScrollView, Image, SafeAreaView } from "react-native";
import mock from "../mock";
import Colors from "../constants/Colors";
import { useRoute } from "@react-navigation/native";

const Event = () => {
  const route = useRoute();
  const {data} = route.params
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.images} source={{ uri: data.image }} />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.speaker}>{data.speaker}</Text>
      <Text style={styles.description}>{data.description}</Text>
      <Text style={styles.date}>
        {data.date} / {data.time}
      </Text>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 8,
  },
  images : {
    height : 320,
    alignSelf : 'stretch'
  },
  title : {
    marginTop : 10,
    fontSize : 20,
    fontWeight: 700
  },
  speaker : {
    marginTop: 8 ,
    fontSize  : 16,
    fontWeight : 500
  },
  date : {
    marginTop: 8 ,
    fontSize  : 16,
    color :  Colors.accent
  },
  description : {
    marginTop : 8,

  }
});

export default Event;
