import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import Wearables from "../components/Wearables";
import Laptops from "../components/Laptops";
import Phones from "../components/Phones";
import Accessories from "../components/Accesories";

const HomeScreen = ({ navigation }) => {
  const [view, setView] = useState({
    wearables: true,
    laptops: false,
    phones: false,
    accessories: false,
  });
  const changeView = (val1, val2, val3, val4) => {
    setView({
      ...view,
      wearables: val1,
      laptops: val2,
      phones: val3,
      accessories: val4,
    });
  };
  return (
    <View
      style={{
        flexGrow: 1,
        justifyContent: "space-between",
        backgroundColor: "#E5E5E5",
      }}
    >
      <SafeAreaView>
        <View
          style={[
            tw`mx-10 my-2`,
            {
              flexDirection: "row",
              alignItems: "center",
            },
          ]}
        >
          <Pressable
            style={{ flex: 1 }}
            onPress={() => {
              navigation.toggleDrawer();
            }}
          >
            <Ionicons name="ios-menu-outline" size={42} color="gray" />
          </Pressable>
          <Pressable
            style={[
              tw`p-4`,
              {
                flex: 5,
                borderRadius: 30,
                borderColor: "gray",
                borderWidth: 0.3,
                flexDirection: "row",
                alignItems: "center",
              },
            ]}
            onPress={() => {
              navigation.navigate("search_result");
            }}
          >
            <Ionicons name="search" size={24} color="black" />
            <TextInput
              placeholder="Search Gadget"
              style={[
                tw`ml-2`,
                { fontFamily: "Raleway_400Regular", fontSize: 17 },
              ]}
              placeholderTextColor="gray"
              autoCapitalize="none"
            />
          </Pressable>
        </View>
        <View style={tw`ml-10 mt-12`}>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "Raleway_700Bold",
            }}
          >
            Order online
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "Raleway_700Bold",
            }}
          >
            collect in store
          </Text>
        </View>
        <View
          style={[
            tw`mx-8 mt-15`,
            {
              flexDirection: "row",
              justifyContent: "space-between",
            },
          ]}
        >
          <Pressable
            style={{
              borderBottomColor: "#5956E9",
              borderBottomWidth: view.wearables ? 2 : 0,
            }}
            onPress={() => {
              changeView(true, false, false, false);
            }}
          >
            <Text
              style={[
                tw`text-base`,
                {
                  color: view.wearables ? "#5956E9" : "gray",
                  fontFamily: view.wearables
                    ? "Raleway_600SemiBold"
                    : "Raleway_400Regular",
                },
              ]}
            >
              Weareables
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              changeView(false, true, false, false);
            }}
            style={{
              borderBottomColor: "#5956E9",
              borderBottomWidth: view.laptops ? 2 : 0,
            }}
          >
            <Text
              style={[
                tw`text-base`,
                {
                  color: view.laptops ? "#5956E9" : "gray",
                  fontFamily: view.laptops
                    ? "Raleway_600SemiBold"
                    : "Raleway_400Regular",
                },
              ]}
            >
              Laptops
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              changeView(false, false, true, false);
            }}
            style={{
              borderBottomColor: "#5956E9",
              borderBottomWidth: view.phones ? 2 : 0,
            }}
          >
            <Text
              style={[
                tw`text-base`,
                {
                  color: view.phones ? "#5956E9" : "gray",
                  fontFamily: view.phones
                    ? "Raleway_600SemiBold"
                    : "Raleway_400Regular",
                },
              ]}
            >
              Phones
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              changeView(false, false, false, true);
            }}
            style={{
              borderBottomColor: "#5956E9",
              borderBottomWidth: view.accessories ? 2 : 0,
            }}
          >
            <Text
              style={[
                tw`text-base`,
                {
                  color: view.accessories ? "#5956E9" : "gray",
                  fontFamily: view.accessories
                    ? "Raleway_600SemiBold"
                    : "Raleway_400Regular",
                },
              ]}
            >
              Accessories
            </Text>
          </Pressable>
        </View>
        {/*  component */}
        {view.wearables && <Wearables />}
        {view.laptops && <Laptops />}
        {view.phones && <Phones />}
        {view.accessories && <Accessories />}
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
