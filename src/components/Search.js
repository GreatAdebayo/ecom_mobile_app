import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { GeneralContext } from "../contexts/general/state";
import { ProductContext } from "../contexts/products/state";

const Search = () => {
  const navigation = useNavigation();
  const { colorScheme } = useContext(GeneralContext);
  const { searchedProducts } = useContext(ProductContext);

  return (
    <View
      style={{
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {searchedProducts.length > 0 &&
        searchedProducts.map((item, index) => (
          <TouchableOpacity
            style={[
              tw`p-5 m-1`,
              {
                borderRadius: 15,
                alignItems: "center",
                flexBasis: "auto",
                backgroundColor: colorScheme === "light" ? "white" : "#1A1A1A",
              },
            ]}
            key={index}
            onPress={() => {
              navigation.navigate("gadget_details", {
                id: item._id,
              });
            }}
          >
            <Image
              style={tw`w-20 h-20 rounded-lg`}
              source={{
                uri: item.variant[0].images[0],
              }}
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
              {item.name && item.name.slice(0, 11)}
              {item.name && [...item.name].length > 11 && "..."}
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
              {item.model}
            </Text>
            <Text
              style={[
                tw`text-base mt-3`,
                { color: "#5956E9", fontFamily: "Raleway_600SemiBold" },
              ]}
            >
              ₦{item.price}
            </Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default Search;
