import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { GeneralContext } from "../contexts/general/state";

const ProfileScreen = ({ navigation }) => {
  const { toggleColor } = useContext(GeneralContext);
  return (
    <SafeAreaView
      style={{
        flexGrow: 1,
        justifyContent: "space-between",
        backgroundColor: "#F5F5F8",
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
              toggleColor(`#E5E5E5`);
            }}
          >
            <AntDesign name="arrowleft" size={24} color="#200E32" />
          </TouchableOpacity>
          <Text
            style={[
              tw`text-base`,
              { fontFamily: "Raleway_600SemiBold", fontSize: 18 },
            ]}
          >
            My Profile
          </Text>
          <View></View>
        </View>

        <View style={tw`mt-5`}>
          <View
            style={[
              tw`bg-white rounded-xl mb-3 p-10`,
              {
                alignItems: "center",
                justifyContent: "center",
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
                  },
                ]}
              >
                Rosina Doe
              </Text>
            </View>
            <View style={[tw`mt-3`, { flexDirection: "row" }]}>
              <Ionicons name="ios-location-outline" size={25} color="black" />
              <Text
                style={[
                  tw`text-base`,
                  {
                    fontFamily: "Raleway_400Regular",
                    fontSize: 18,
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
              tw`bg-white rounded-xl p-5`,
              {
                flexDirection: "row",
                justifyContent: "space-between",
              },
            ]}
          >
            <Text
              style={[
                tw`text-base`,
                {
                  fontFamily: "Raleway_600SemiBold",
                  fontSize: 18,
                },
              ]}
            >
              Deliveries
            </Text>
            <TouchableOpacity>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
