import React from "react";
import { StyleSheet,Text,View,FlatList } from "react-native";
import Card from "../components/Card";
import mock from "../mock";
import Tab from "../components/Tab";

class Events extends React.Component  {
    state = {
        selected : 'All'
    }

    select = (selected) => {
        this.setState({selected})
    }

    render() {
        const {selected} = this.state
        return (
            <View style={styles.wraps} >
                <Card />
                <Tab selected={selected} select={this.select}/>
                <FlatList
                    data={mock.filter(m => m.date === selected || selected === 'All')}
                    renderItem={({item}) => <Card data={item}
                    keyExtractor={item => item.id}
                    />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    wraps : {
        alignSelf: 'stretch'
    }
  });

export default Events