
import React, { Component } from "react";
import { ScrollView } from "react-native";
import SensorView from "./Sensor/indexsensor";

const axis = [ "สุ่ม"];

const availableSensors = {
  accelerometer: axis,
};
const viewComponents = Object.entries(availableSensors).map(([name, values]) =>
  SensorView(name, values)
);

export default class App extends Component {
  render() {
    return (
      <ScrollView testID="scroller">
        {viewComponents.map((Comp, index) => <Comp key={index} />)}
      </ScrollView>
    );
  }
}

