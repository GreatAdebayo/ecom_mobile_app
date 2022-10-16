import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const CheckoutScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flexGrow: 1,
        justifyContent: "space-between",
        backgroundColor: "#F5F5F8",
      }}
    >
      <View
        style={[
          tw`pt-20 px-8`,
          {
            flex: 1,
          },
        ]}
        showsVerticalScrollIndicator={false}
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
            Checkout
          </Text>
          <View></View>
        </View>

        <View
          style={[
            tw`mt-8`,
            { flexDirection: "row", justifyContent: "space-between" },
          ]}
        >
          <Text style={[tw`text-base`, { fontFamily: "Raleway_600SemiBold" }]}>
            Shipping Information
          </Text>
          <Text
            style={[
              tw`text-base`,
              { fontFamily: "Raleway_600SemiBold", color: "#5956E9" },
            ]}
          >
            change
          </Text>
        </View>
        <View style={tw`mt-5`}>
          <View style={tw`bg-white rounded-xl h-40 p-8 mb-3`}>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome name="user-o" size={22} color="black" />
              <View style={tw`ml-2`}>
                <Text
                  style={[
                    tw`text-base`,
                    {
                      fontFamily: "Raleway_400Regular",
                    },
                  ]}
                >
                  Rosin Doe
                </Text>
              </View>
            </View>
            <View style={[tw`mt-4`, { flexDirection: "row" }]}>
              <Ionicons name="ios-location-outline" size={25} color="black" />
              <View style={tw`ml-2`}>
                <Text
                  style={[
                    tw`text-base`,
                    {
                      fontFamily: "Raleway_400Regular",
                    },
                  ]}
                >
                  Rosin Doe
                </Text>
              </View>
            </View>
            <View style={[tw`mt-4`, { flexDirection: "row" }]}>
              <Entypo name="phone" size={24} color="black" />
              <View style={tw`ml-2`}>
                <Text
                  style={[
                    tw`text-base`,
                    {
                      fontFamily: "Raleway_400Regular",
                    },
                  ]}
                >
                  090336464673
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[
            tw`mt-10`,
            {
              flexDirection: "row",
              justifyContent: "space-between",
            },
          ]}
        >
          <Text
            style={[
              tw`text-base`,
              {
                fontFamily: "Raleway_400Regular",
                fontSize: 18,
              },
            ]}
          >
            Total
          </Text>
          <Text
            style={[
              tw`text-base`,
              {
                color: "#5956E9",
                fontFamily: "Raleway_600SemiBold",
                fontSize: 18,
              },
            ]}
          >
            $579
          </Text>
        </View>
        <TouchableOpacity
          style={[
            tw`mt-15 py-6 rounded-lg px-3 shadow-lg`,
            {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#5956E9",
            },
          ]}
          onPress={() => {
            navigation.navigate("checkout");
          }}
        >
          <Text
            style={[
              tw`text-base`,
              { color: "white", fontFamily: "Raleway_700Bold" },
            ]}
          >
            Confirm and pay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutScreen;
