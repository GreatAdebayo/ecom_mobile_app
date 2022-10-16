import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import BottomStack from "./BottomStack";

const Drawer = createDrawerNavigator();

import DrawerContent from "./DrawerContent";

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="bottom"
        component={BottomStack}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
