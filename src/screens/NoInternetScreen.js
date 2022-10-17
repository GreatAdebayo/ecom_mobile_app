import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";

const NoInternetScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={[
        tw`m-15`,
        {
          flexGrow: 1,
          justifyContent: "space-between",
          backgroundColor: "#F5F5F8",
        },
      ]}
      edges={["top"]}
    >
      <View style={{ alignItems: "center" }}>
        <Image source={require("../assets/fav.png")} style={tw`w-90 h-100`} />
        <Text
          style={[
            tw`text-base`,
            { fontFamily: "Raleway_700Bold", fontSize: 20 },
          ]}
        >
          No internet Connection
        </Text>
        <View style={tw`mt-5`}>
          <Text
            style={[
              tw`text-base`,
              { fontFamily: "Raleway_400Regular", color: "gray" },
            ]}
          >
            Your internet connection is currently not available please check or
            try again.
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={[
          tw`py-6 rounded-lg px-3 shadow-lg`,
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#58C0EA",
          },
        ]}
      >
        <Text
          style={[
            tw`text-base`,
            { color: "white", fontFamily: "Raleway_700Bold" },
          ]}
        >
          Try again
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default NoInternetScreen;
