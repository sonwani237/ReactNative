import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import LoginScreen from "../src/components/LoginScreen";
import MainActivity from "../src/components/MainActivity";
import SecondActivity from "../src/components/SecondActivity";

const screens = {
  Login: {
    screen: LoginScreen,
  },
  Second: {
    screen: MainActivity,
  },
  Third: {
    screen: SecondActivity,
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
