import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { Fragment } from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Wearables = () => {
  const navigation = useNavigation();
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
            onPress={() => {
              navigation.navigate("gadget_details");
            }}
          >
            <Image
              source={require("../assets/apple.png")}
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
        style={[{ alignItems: "flex-end" }, tw`mx-5`]}
        onPress={() => {
          navigation.navigate("wearables");
        }}
      >
        <Text
          style={[
            tw`text-base mt-3`,
            { color: "#5956E9", fontFamily: "Raleway_600SemiBold" },
          ]}
        >
          see more <AntDesign name="arrowright" size={18} color="black" />
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default Wearables;
