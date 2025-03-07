import React from "react";
import { Dimensions, StyleSheet,Text,View } from "react-native";
import MapView, { Marker } from 'react-native-maps';

const mapDelta = 0.0122
const coordinate = {
  latitude: 13.736717,
  longitude: 100.501769,
  latitudeDelta: 2,
  longitudeDelta: 2,
}


const Map = () =>{
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 13.736717, // พิกัดของประเทศไทย (กรุงเทพฯ)
          longitude: 100.523186,
          latitudeDelta: mapDelta,
          longitudeDelta: (mapDelta * Dimensions.get('window').width) / Dimensions.get('window').height,
        }}
      >
        <Marker
          coordinate={{ latitude: 13.736717, longitude: 100.523186 }}
          title="Bangkok"
          description="Capital of Thailand"
        />
      </MapView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width
    }
  });

export default Map