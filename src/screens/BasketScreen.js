import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import Basket from "../components/Basket";
import EmptyBaasket from "../components/EmptyBasket";
import { SafeAreaView } from "react-native-safe-area-context";

const BasketScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flexGrow: 1,
        justifyContent: "space-between",
        backgroundColor: "#F5F5F8",
      }}
      edges={["top"]}
    >
      <View
        style={[
          tw`pt-3 px-8`,
          {
            flex: 1,
          },
        ]}
        flexGrow={1}
      >
        <View
          style={[
            tw`pb-5`,
            {
              flexDirection: "row",
              justifyContent: "space-between",
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={24} color="#200E32" />
          </TouchableOpacity>
          <Text
            style={[
              tw`text-base`,
              { fontFamily: "Raleway_600SemiBold", fontSize: 18 },
            ]}
          >
            Basket
          </Text>
          <Octicons name="trash" size={24} color="red" />
        </View>
        <Basket />
        {/* <EmptyBaasket /> */}
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
