import React, { Fragment, useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/SigninScreen";
import GadgetDetailsScreen from "../screens/GadgetDetailsScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import DrawerNavigator from "./DrawerNavigator";
import OrdersScreen from "../screens/OrdersScreen";
import WearablesScreen from "../screens/WearableScreen";
import LaptopScreen from "../screens/LaptopScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import NoInternetScreen from "../screens/NoInternetScreen";
import SignUpScreen from "../screens/SignupScreen";
import { GeneralContext } from "../contexts/general/state";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { isConnected } = useContext(GeneralContext);

  return (
    <Stack.Navigator>
      {isConnected ? (
        <Fragment>
          <Stack.Screen
            name="signin"
            component={SignInScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="signup"
            component={SignUpScreen}
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
        </Fragment>
      ) : (
        <Stack.Screen
          name="no_internet"
          component={NoInternetScreen}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
