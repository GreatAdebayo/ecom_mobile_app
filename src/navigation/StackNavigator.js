import React, { Fragment, useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/SigninScreen";
import GadgetDetailsScreen from "../screens/GadgetDetailsScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import DrawerNavigator from "./DrawerNavigator";
import OrdersScreen from "../screens/OrdersScreen";
import SeeMoreScreen from "../screens/SeeMoreScreen";
import LaptopScreen from "../screens/LaptopScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import NoInternetScreen from "../screens/NoInternetScreen";
import SignUpScreen from "../screens/SignupScreen";
import { GeneralContext } from "../contexts/general/state";
import { StatusBar } from "expo-status-bar";
import EmailConfirmationScreen from "../screens/EmailConfirmScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { isConnected, colorScheme } = useContext(GeneralContext);
  return (
    <Fragment>
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
              name="see_more"
              component={SeeMoreScreen}
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
            <Stack.Screen
              name="email_confirm"
              component={EmailConfirmationScreen}
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
      <StatusBar style={colorScheme === "light" ? "dark" : "light"} />
    </Fragment>
  );
};

export default StackNavigator;
