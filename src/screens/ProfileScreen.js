import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { GeneralContext } from "../contexts/general/state";

const ProfileScreen = ({ navigation }) => {
  const { colorScheme } = useContext(GeneralContext);
  return (
    <SafeAreaView
      style={{
        flexGrow: 1,
        justifyContent: "space-between",
        backgroundColor: colorScheme === "light" ? "#F5F5F8" : "#1A1A1A",
      }}
    >
      <View
        style={[
          tw`pt-3 px-8`,
          {
            flex: 1,
          },
        ]}
      >
        <View
          style={[
            tw`pb-5`,
            {
              flexDirection: "row",
              justifyContent: "space-between",
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign
              name="arrowleft"
              size={24}
              color={colorScheme === "light" ? "#200E32" : "white"}
            />
          </TouchableOpacity>
          <Text
            style={[
              tw`text-base`,
              {
                fontFamily: "Raleway_600SemiBold",
                fontSize: 18,
                color: colorScheme === "light" ? "black" : "white",
              },
            ]}
          >
            My Profile
          </Text>
          <View></View>
        </View>

        <View style={tw`mt-5`}>
          <View
            style={[
              tw`rounded-xl mb-3 p-10`,
              {
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colorScheme === "light" ? "white" : "black",
              },
            ]}
          >
            <Image
              source={require("../assets/user.png")}
              style={tw`w-25 h-25`}
            />
            <View style={tw`mt-3`}>
              <Text
                style={[
                  tw`text-base`,
                  {
                    fontFamily: "Raleway_600SemiBold",
                    fontSize: 18,
                    color: colorScheme === "light" ? "black" : "white",
                  },
                ]}
              >
                Rosina Doe
              </Text>
            </View>
            <View style={[tw`mt-3`, { flexDirection: "row" }]}>
              <Ionicons
                name="ios-location-outline"
                size={25}
                color={colorScheme === "light" ? "black" : "white"}
              />
              <Text
                style={[
                  tw`text-base`,
                  {
                    fontFamily: "Raleway_400Regular",
                    fontSize: 18,
                    color: colorScheme === "light" ? "black" : "white",
                  },
                ]}
              >
                Address: 43 Oxford Road M13 4GR Manchester, UK
              </Text>
            </View>
          </View>
        </View>
        <View style={tw`mt-5`}>
          <View
            style={[
              tw`rounded-xl p-5`,
              {
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: colorScheme === "light" ? "white" : "black",
              },
            ]}
          >
            <Text
              style={[
                tw`text-base`,
                {
                  fontFamily: "Raleway_600SemiBold",
                  fontSize: 18,
                  color: colorScheme === "light" ? "black" : "white",
                },
              ]}
            >
              Deliveries
            </Text>
            <TouchableOpacity>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color={colorScheme === "light" ? "black" : "white"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
