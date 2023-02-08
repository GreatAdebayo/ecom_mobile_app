import { Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { Fragment, useContext } from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GeneralContext } from "../contexts/general/state";

const Accessories = () => {
  const navigation = useNavigation();
  const products = ["s", "d", "e"];
  const { colorScheme } = useContext(GeneralContext);
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
              tw`px-15 mr-6`,
              {
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colorScheme === "light" ? "white" : "black",
              },
            ]}
            key={index}
            onPress={() => {
              navigation.navigate("gadget_details");
            }}
          >
            <Image
              source={require("../assets/airpod.png")}
              style={tw`w-30 h-30 rounded-lg`}
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
            {
              color: colorScheme === "light" ? "#5956E9" : "white",
              fontFamily: "Raleway_600SemiBold",
            },
          ]}
        >
          see more{" "}
          <AntDesign
            name="arrowright"
            size={18}
            color={colorScheme === "light" ? "#5956E9" : "white"}
          />
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default Accessories;
