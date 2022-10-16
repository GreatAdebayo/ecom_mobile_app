import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const products = ["s", "d", "e", "s", "d", "e"];
  const navigation = useNavigation();
  return (
    <View
      style={[
        tw`mx-8`,
        {
          flexWrap: "wrap",
          flexDirection: "row",
        },
      ]}
    >
      {products.map((product, index) => (
        <TouchableOpacity
          style={[
            tw`bg-white py-5 m-2 px-2`,
            {
              borderRadius: 15,
              alignItems: "center",
              flexBasis: "45%",
            },
          ]}
          key={index}
          onPress={() => {
            navigation.navigate("gadget_details");
          }}
        >
          <Image
            source={require("../assets/laptop.png")}
            style={tw`w-20 h-20`}
          />
          <Text
            style={[
              tw`mt-5`,
              { fontFamily: "Raleway_600SemiBold", fontSize: 20 },
            ]}
          >
            Apple MacBook
          </Text>
          <Text
            style={[
              tw`text-base mt-3`,
              { color: "gray", fontFamily: "Raleway_400Regular" },
            ]}
          >
            2019 .Ash
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
    </View>
  );
};

export default Search;
