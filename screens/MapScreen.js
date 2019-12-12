import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

function MapScreen() {
  const [region, setRegion] = React.useState({
    latitude: -30.8501718,
    longitude: -50.1700368,
    latitudeDelta: 0.922,
    longitudeDelta: 0.0421
  });

  return (
    <View style={styles.container}>
      <Text>Pantalla de inicio</Text>
      <MapView
        initialRegion={region}
        showsUserLocation={true}
        showsCompass={true}
        rotateEnabled={true}
        style={styles.map}
      />
    </View>
  );
}

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute"
  },
  map: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute"
  }
});
