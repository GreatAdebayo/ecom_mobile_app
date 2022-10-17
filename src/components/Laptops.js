import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { Fragment } from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Laptops = () => {
  const navigation = useNavigation();
  const products = ["s", "d", "e"];
  return (
    <Fragment>
      <ScrollView
        style={[
          tw`my-10 ml-5`,
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
              tw`bg-white px-15 mr-6`,
              {
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
            key={index}
            onPress={() => {
              navigation.navigate("gadget_details");
            }}
          >
            <Image
              source={require("../assets/laptop.png")}
              style={tw`w-30 h-30`}
            />
            <Text
              style={[
                tw`mt-5`,
                { fontFamily: "Raleway_600SemiBold", fontSize: 20 },
              ]}
            >
              Apple Watch
            </Text>
            <Text
              style={[
                tw`text-base mt-3`,
                { color: "gray", fontFamily: "Raleway_400Regular" },
              ]}
            >
              Series 6 .Red
            </Text>
            <Text
              style={[
                tw`text-base mt-3`,
                { color: "#5956E9", fontFamily: "Raleway_600SemiBold" },
              ]}
            >
              $399
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={[{ alignItems: "flex-end" }, tw`m-5`]}
        onPress={() => {
          navigation.navigate("wearables");
        }}
      >
        <Text
          style={[
            tw`text-base`,
            { color: "#5956E9", fontFamily: "Raleway_600SemiBold" },
          ]}
        >
          see more <AntDesign name="arrowright" size={18} color="#5956E9" />
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default Laptops;
