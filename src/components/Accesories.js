import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { Fragment } from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";

const Accessories = () => {
  const products = ["s", "d", "e"];
  return (
    <Fragment>
      <ScrollView
        style={[
          tw`my-15 ml-5`,
          {
            flexDirection: "row",
          },
        ]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {products.map((product, index) => (
          <TouchableOpacity
            style={[
              tw`bg-white py-7 px-15 mr-6`,
              {
                borderRadius: 15,
                alignItems: "center",
              },
            ]}
            key={index}
          >
            <Image
              source={require("../assets/airpod.png")}
              style={tw`w-30 h-30`}
            />
            <Text
              style={[
                tw`mt-5`,
                { fontFamily: "Raleway_600SemiBold", fontSize: 20 },
              ]}
            >
              Apple Airpod
            </Text>
            <Text
              style={[
                tw`text-base mt-3`,
                { color: "gray", fontFamily: "Raleway_400Regular" },
              ]}
            >
              2nd Gen .White
            </Text>
            <Text
              style={[
                tw`text-base mt-3`,
                { color: "#5956E9", fontFamily: "Raleway_600SemiBold" },
              ]}
            >
              $199
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={[{ alignItems: "flex-end" }, tw`mx-5`]}>
        <Text
          style={[
            tw`text-base mt-3`,
            { color: "#5956E9", fontFamily: "Raleway_600SemiBold" },
          ]}
        >
          see more <AntDesign name="arrowright" size={18} color="black" />
        </Text>
      </View>
    </Fragment>
  );
};

export default Accessories;
