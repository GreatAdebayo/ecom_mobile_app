import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { Fragment } from "react";
import tw from "twrnc";

const NoOrder = () => {
  return (
    <Fragment>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../assets/fav.png")} style={tw`w-90 h-100`} />
        <Text
          style={[
            tw`text-base`,
            { fontFamily: "Raleway_700Bold", fontSize: 20 },
          ]}
        >
          No History Yet
        </Text>
        <View style={tw`mt-5`}>
          <Text
            style={[
              tw`text-base`,
              { fontFamily: "Raleway_400Regular", color: "gray" },
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

export default NoOrder;
