import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomStack from "./BottomStack";
import SignInScreen from "../screens/SigninScreen";
import GadgetDetailsScreen from "../screens/GadgetDetailsScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import DrawerNavigator from "./DrawerNavigator";
import OrdersScreen from "../screens/OrdersScreen";
import WearablesScreen from "../screens/WearableScreen";
import LaptopScreen from "../screens/LaptopScreen";
import CheckoutScreen from "../screens/CheckoutScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="signin"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="index"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="gadget_details"
        component={GadgetDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="search_result"
        component={SearchResultScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="orders"
        component={OrdersScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="wearables"
        component={WearablesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="laptop"
        component={LaptopScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="checkout"
        component={CheckoutScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
