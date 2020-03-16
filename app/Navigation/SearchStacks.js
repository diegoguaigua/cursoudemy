import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "../screens/Search";

export const SearchScreenStacks = createStackNavigator({
  Home: {
    screen: SearchScreen,
    navigationOptions: () => ({
      title: "Services"
    })
  }
});

export default SearchScreenStacks;
