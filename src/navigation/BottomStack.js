import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import TabContent from "./BottomTabContent";
import FavoriteScreen from "../screens/FavoriteScreen";
import ProfileScreen from "../screens/ProfileScreen";
import BasketScreen from "../screens/BasketScreen";

const Tab = createBottomTabNavigator();

const BottomStack = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabContent {...props} />}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="favorites"
        component={FavoriteScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="basket"
        component={BasketScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomStack;
