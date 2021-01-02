import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
/********************* Navigation imports
 *******
 */

const Stack = createStackNavigator();

/********************* Screens
 *******
 */
import IntroScreen from "../../screen/IntroScreen/IntroScreen";
import AuthScreen from "../../screen/AuthScreen/AuthScreen";
/********************* Navigation Stacks
 *******
 */
const MainNavigation = () => {
  const isLogin = useSelector((state) => state.userReducer.isUserLogin);
  const net = useSelector((state) => state);
  console.log("ppopopopopoo ", net);
  const linking = {
    prefixes: ["https://rncpolicy.com", "com.rncpolicy://"],
    config: {
      screens: {
        Login: {
          screens: {
            MainPdfScreen: "document/:docId/:docSub/:sub",
          },
        },
      },
    },
  };
  return (
    <NavigationContainer linking={linking} fallback={<Text>loading....</Text>}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {true ? (
          <Stack.Screen name="LoginStack" component={LoginStack} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const LoginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
