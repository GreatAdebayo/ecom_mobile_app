import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { GeneralContext } from "../contexts/general/state";

const Search = () => {
  const products = ["s", "d", "e", "s", "d", "e"];
  const navigation = useNavigation();
  const { colorScheme } = useContext(GeneralContext);
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
            tw`py-5 m-2 px-2`,
            {
              borderRadius: 15,
              alignItems: "center",
              flexBasis: "45%",
              backgroundColor: colorScheme === "light" ? "white" : "black",
            },
          ]}
          key={index}
          onPress={() => {
            navigation.navigate("gadget_details");
          }}
        >
          <Image
            source={require("../assets/laptop.png")}
            style={tw`w-20 h-20 rounded-lg`}
          />
          <Text
            style={[
              tw`mt-5`,
              {
                fontFamily: "Raleway_600SemiBold",
                fontSize: 20,
                color: colorScheme === "light" ? "black" : "white",
              },
            ]}
          >
            Apple MacBook
          </Text>
          <Text
            style={[
              tw`text-base mt-3`,
              {
                color: colorScheme === "light" ? "gray" : "white",
                fontFamily: "Raleway_400Regular",
              },
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
