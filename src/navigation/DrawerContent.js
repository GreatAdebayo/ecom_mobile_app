import React, { useContext } from "react";
import { Text, View, Pressable } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { GeneralContext } from "../contexts/general/state";

const DrawerContent = () => {
  const { toggleColor } = useContext(GeneralContext);
  const navigation = useNavigation();
  const menu = [
    {
      title: "Profile",
      icon: <FontAwesome name="user-o" size={18} color="white" />,
      path: "profile",
    },
    {
      title: "My Orders",
      icon: <MaterialIcons name="shopping-cart" size={20} color="white" />,
      path: "orders",
    },
    {
      title: "Favorites",
      icon: <Ionicons name="ios-heart-circle" size={25} color="white" />,
      path: "favorites",
    },
    {
      title: "Delivery",
      icon: <SimpleLineIcons name="handbag" size={22} color="white" />,
      path: "orders",
    },
    {
      title: "Support",
      icon: <MaterialIcons name="support-agent" size={24} color="white" />,
      path: "support",
    },
  ];

  return (
    <View
      style={[
        {
          flexGrow: 1,
          backgroundColor: "#5956E9",
        },
      ]}
    >
      <SafeAreaView style={tw`mx-10 mt-30`} edges={["top"]}>
        {menu.map((item, index) => (
          <Pressable
            style={[tw`mb-2`, { flexDirection: "row", alignItems: "center" }]}
            onPress={() => {
              navigation.navigate(item.path);
              toggleColor(`#F5F5F8`);
            }}
            key={index}
          >
            {item.icon}
            <View
              style={[
                tw`py-5 w-30 border-b-white ml-3`,
                {
                  borderBottomWidth: 0.4,
                },
              ]}
              key={index}
            >
              <Text
                style={[
                  tw`text-base`,
                  {
                    color: "white",
                    fontFamily: "Raleway_700Bold",
                  },
                ]}
              >
                {"  "}
                {item.title}
              </Text>
            </View>
          </Pressable>
        ))}
      </SafeAreaView>
      <Pressable style={tw`mt-50 mx-10`}>
        <View
          style={[tw`mb-2`, { flexDirection: "row", alignItems: "center" }]}
        >
          <MaterialCommunityIcons name="logout" size={23} color="white" />
          <View style={tw`py-5 w-30 ml-3`}>
            <Text
              style={[
                tw`text-base`,
                {
                  color: "white",
                  fontFamily: "Raleway_700Bold",
                },
              ]}
            >
              Sign Out
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default DrawerContent;
