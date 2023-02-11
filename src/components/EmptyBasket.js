import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { Fragment, useContext } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { GeneralContext } from "../contexts/general/state";

const EmptyBaasket = () => {
  const navigation = useNavigation();
  const { colorScheme } = useContext(GeneralContext);
  return (
    <Fragment>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../assets/fav.png")} style={tw`w-90 h-100`} />
        <Text
          style={[
            tw`text-base`,
            {
              fontFamily: "Raleway_700Bold",
              fontSize: 20,
              color: colorScheme === "light" ? "black" : "white",
            },
          ]}
        >
          Empty Basket
        </Text>
        <View style={tw`mt-5`}>
          <Text
            style={[
              tw`text-base`,
              {
                fontFamily: "Raleway_400Regular",
                color: colorScheme === "light" ? "gray" : "white",
              },
            ]}
          >
            Hit the blue button down below to Create an order
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={[
          tw`mt-15 py-6 rounded-lg px-3 shadow-lg`,
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#58C0EA",
          },
        ]}
        onPress={() => {
          navigation.navigate("home");
        }}
      >
        <Text
          style={[
            tw`text-base`,
            { color: "white", fontFamily: "Raleway_700Bold" },
          ]}
        >
          Start Ordering
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default EmptyBaasket;
