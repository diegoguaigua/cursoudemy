import { createStackNavigator } from "react-navigation-stack";
import TopScreen from "../screens/MyGroups";

const TopServiceScreenStacks = createStackNavigator({
  Definir1: {
    screen: TopScreen,
    navigationOptions: () => ({
      title: "My Groups"
    })
  }
});

export default TopServiceScreenStacks;
