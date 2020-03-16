import React from "react";
import { Icon } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import HomeScreenStacks from "./HomeStacks";
import TopServiceScreenStacks from "./TopSS";
import SearchScreenStacks from "./SearchStacks";
import ProfileScreenStacks from "./ProfileStacks";

const NavigationStacks = createBottomTabNavigator(
  {
    //Stacks de navegacion
    Home: {
      screen: HomeScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="home-outline"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    Search: {
      screen: SearchScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Search",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="magnify"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    TopSS: {
      screen: TopServiceScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "My groups",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="heart-outline"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    Profile: {
      screen: ProfileScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="account"
            size={22}
            color={tintColor}
          />
        )
      })
    }
  },
  {
    initialRouteName: "Home",
    order: ["Home", "TopSS", "Search", "Profile"],
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#00a680"
    }
  }
);

export default createAppContainer(NavigationStacks);
