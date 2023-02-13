import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { GeneralContext } from "../contexts/general/state";
import { ScrollView } from "react-native-gesture-handler";
import { ProductContext } from "../contexts/products/state";

const CheckoutScreen = ({ navigation }) => {
  const { colorScheme } = useContext(GeneralContext);
  const { order } = useContext(ProductContext);
  return (
    <SafeAreaView
      style={{
        flexGrow: 1,
        justifyContent: "space-between",
        backgroundColor: colorScheme === "light" ? "#E5E5E5" : "black",
      }}
    >
      <ScrollView
        style={[
          tw`pt-3 px-8`,
          {
            flex: 1,
          },
        ]}
        contentContainerStyle={{ flexGrow: 1 }}
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
            <AntDesign
              name="arrowleft"
              size={24}
              color={colorScheme === "light" ? "#200E32" : "white"}
            />
          </TouchableOpacity>
          <Text
            style={[
              tw`text-base`,
              {
                fontFamily: "Raleway_600SemiBold",
                fontSize: 18,
                color: colorScheme === "light" ? "#200E32" : "white",
              },
            ]}
          >
            Checkout
          </Text>
          <View></View>
        </View>

        <View
          style={[
            tw`mt-5`,
            { flexDirection: "row", justifyContent: "space-between" },
          ]}
        >
          <Text
            style={[
              tw`text-base`,
              {
                fontFamily: "Raleway_600SemiBold",
                color: colorScheme === "light" ? "#200E32" : "white",
              },
            ]}
          >
            Order Information
          </Text>
        </View>
        <View style={tw`mt-5`}>
          <View
            style={[
              tw`rounded-xl p-8 mb-3 py-10`,
              {
                backgroundColor:
                  colorScheme === "light" ? "#E5E5E5" : "#1A1A1A",
              },
            ]}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={[
                  tw`text-base`,
                  {
                    fontFamily: "Raleway_400Regular",
                    color: colorScheme === "light" ? "#200E32" : "white",
                  },
                ]}
              >
                Order ID:
              </Text>
              <View style={tw`ml-2`}>
                <Text
                  style={[
                    tw`text-base`,
                    {
                      fontFamily: "Raleway_400Regular",
                      color: colorScheme === "light" ? "#200E32" : "white",
                    },
                  ]}
                >
                  {order.orderId && order.orderId.slice(0, 20)}
                  {order.orderId && [...order.orderId].length > 11 && "..."}
                </Text>
              </View>
            </View>
            <View
              style={[tw`mt-4`, { flexDirection: "row", alignItems: "center" }]}
            >
              <Text
                style={[
                  tw`text-base`,
                  {
                    fontFamily: "Raleway_400Regular",
                    color: colorScheme === "light" ? "#200E32" : "white",
                  },
                ]}
              >
                Status:
              </Text>
              <View style={tw`ml-2`}>
                <Text
                  style={[
                    tw`text-base capitalize`,
                    {
                      fontFamily: "Raleway_400Regular",
                      color: colorScheme === "light" ? "#200E32" : "white",
                    },
                  ]}
                >
                  {order.status}
                </Text>
              </View>
            </View>
            <View
              style={[tw`mt-4`, { flexDirection: "row", alignItems: "center" }]}
            >
              <Text
                style={[
                  tw`text-base`,
                  {
                    fontFamily: "Raleway_400Regular",
                    color: colorScheme === "light" ? "#200E32" : "white",
                  },
                ]}
              >
                No of Gadgets:
              </Text>
              <View style={tw`ml-2`}>
                <Text
                  style={[
                    tw`text-base`,
                    {
                      fontFamily: "Raleway_400Regular",
                      color: colorScheme === "light" ? "#200E32" : "white",
                    },
                  ]}
                >
                  {order.noOfProducts}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[
            tw`mt-8`,
            { flexDirection: "row", justifyContent: "space-between" },
          ]}
        >
          <Text
            style={[
              tw`text-base`,
              {
                fontFamily: "Raleway_600SemiBold",
                color: colorScheme === "light" ? "#200E32" : "white",
              },
            ]}
          >
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
          <View
            style={[
              tw`rounded-xl p-8 mb-3 py-10`,
              {
                backgroundColor:
                  colorScheme === "light" ? "#E5E5E5" : "#1A1A1A",
              },
            ]}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome
                name="user-o"
                size={22}
                color={colorScheme === "light" ? "#200E32" : "white"}
              />
              <View style={tw`ml-2`}>
                <Text
                  style={[
                    tw`text-base`,
                    {
                      fontFamily: "Raleway_400Regular",
                      color: colorScheme === "light" ? "#200E32" : "white",
                    },
                  ]}
                >
                  Rosin Doe
                </Text>
              </View>
            </View>
            <View
              style={[tw`mt-4`, { flexDirection: "row", alignItems: "center" }]}
            >
              <Ionicons
                name="ios-location-outline"
                size={25}
                color={colorScheme === "light" ? "#200E32" : "white"}
              />
              <View style={tw`ml-2`}>
                <Text
                  style={[
                    tw`text-base`,
                    {
                      fontFamily: "Raleway_400Regular",
                      color: colorScheme === "light" ? "#200E32" : "white",
                    },
                  ]}
                >
                  Address: 43 Oxford Road M13 4GR Manchester, UK
                </Text>
              </View>
            </View>
            <View
              style={[tw`mt-4`, { flexDirection: "row", alignItems: "center" }]}
            >
              <Entypo
                name="phone"
                size={24}
                color={colorScheme === "light" ? "#200E32" : "white"}
              />
              <View style={tw`ml-2`}>
                <Text
                  style={[
                    tw`text-base`,
                    {
                      fontFamily: "Raleway_400Regular",
                      color: colorScheme === "light" ? "#200E32" : "white",
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
                color: colorScheme === "light" ? "#200E32" : "white",
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
            ₦{order.totalCost}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckoutScreen;
