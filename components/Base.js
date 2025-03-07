import React from "react";

import AppNavigator from "../../Navigation/AppNavigator";

class Base extends React.Component {
    render (){
        return (
            <View style={styles.container}>
                <Text>Event</Text>
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
  });


export default Base