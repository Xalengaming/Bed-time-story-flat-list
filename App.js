import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Header } from "react-native-elements";
import WriteStoryScreen from "./screens/WriteStoryScreen";
import ReadStoryScreen from "./screens/ReadStoryScreen";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={"black"}
          centerComponent={{ text: "Story Hub", style: { color: "pink" } }}
        />
        <AppContainer />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Writing: { screen: WriteStoryScreen },
    Reading: { screen: ReadStoryScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ }) => {
        const routeName = navigation.state.routeName;

        if (routeName === "Writing") {
          return (
            <Image
              source={require("./assets/write.png")}
              style={{ width: 30, height: 30 }}
            />
          );
        } else if (routeName === "Reading") {
          return (
            <Image
              source={require("./assets/read.png")}
              style={{ width: 30, height: 30 }}
            />
          );
        }
      },
    }),
  },
  {
    tabBarOptions: {
      style: { backgroundColor: "#000000" }
    }
  },
);

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
