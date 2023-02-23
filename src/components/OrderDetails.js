import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import tw from "twrnc";
import { GeneralContext } from "../contexts/general/state";
import { ProductContext } from "../contexts/products/state";
import { useNavigation } from "@react-navigation/native";

const OrderDetails = () => {
  const { colorScheme } = useContext(GeneralContext);
  const { orderDetails } = useContext(ProductContext);
  const navigation = useNavigation();
  return (
    <View
      style={[
        tw`pt-2`,
        {
          flex: 1,
        },
      ]}
    >
      <View style={tw`mt-1`}>
        <View
          style={[
            tw`rounded-xl mb-3 px-13 py-5`,
            {
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colorScheme === "light" ? "white" : "#1A1A1A",
            },
          ]}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={[
                tw`text-base`,
                {
                  fontFamily: "Raleway_400Regular",
                  fontSize: 15,
                  color: colorScheme === "light" ? "black" : "white",
                },
              ]}
            >
              Order ID:{" "}
            </Text>
            <Text
              style={[
                tw`text-base`,
                {
                  fontFamily: "Raleway_400Regular",
                  fontSize: 15,
                  color: colorScheme === "light" ? "black" : "white",
                },
              ]}
            >
              {orderDetails.orderId}
            </Text>
          </View>
          <View style={[tw`mt-3`, { flexDirection: "row" }]}>
            <Text
              style={[
                tw`text-base`,
                {
                  fontFamily: "Raleway_400Regular",
                  fontSize: 15,
                  color: colorScheme === "light" ? "black" : "white",
                },
              ]}
            >
              Status:{" "}
            </Text>
            <Text
              style={[
                tw`text-base capitalize ${
                  orderDetails.status === "unpaid"
                    ? "text-red-500"
                    : "text-green-700"
                }`,
                {
                  fontFamily: "Raleway_400Regular",
                  fontSize: 15,
                },
              ]}
            >
              {orderDetails.status}
            </Text>
          </View>
        </View>
      </View>
      <View style={tw`mt-5`}>
        <Text
          style={[
            tw`text-base`,
            {
              fontFamily: "Raleway_600SemiBold",
              fontSize: 16,
              color: colorScheme === "light" ? "black" : "white",
            },
          ]}
        >
          Product
          {orderDetails.productsPurchased &&
          orderDetails.productsPurchased.length > 0
            ? "s"
            : ""}{" "}
          Purchased
        </Text>
        {orderDetails.productsPurchased &&
          orderDetails.productsPurchased.length > 0 &&
          orderDetails.productsPurchased.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("gadget_details", {
                  id: item._id._id,
                });
              }}
              key={index}
            >
              <View
                style={[
                  tw`rounded-xl h-40 p-4 mb-3 mt-3`,
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor:
                      colorScheme === "light" ? "white" : "#1A1A1A",
                  },
                ]}
              >
                <View
                  style={{
                    flex: 1,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Image
                      style={tw`w-20 h-20 rounded-lg`}
                      source={{
                        uri: item._id.variant[0].images[0],
                      }}
                    />
                  </View>
                </View>
                <View style={[tw`ml-4`, { flex: 2, justifyContent: "center" }]}>
                  <Text
                    style={[
                      tw`text-base`,
                      {
                        fontFamily: "Raleway_600SemiBold",
                        color: colorScheme === "light" ? "black" : "white",
                      },
                    ]}
                  >
                    {item._id.name}
                  </Text>
                  <View style={tw`mt-2`}>
                    <Text
                      style={{
                        fontFamily: "Raleway_600SemiBold",
                        color: colorScheme === "light" ? "black" : "white",
                      }}
                    >
                      {item._id.model}
                    </Text>
                  </View>
                  <View style={tw`mt-2`}>
                    <Text
                      style={{
                        fontFamily: "Raleway_600SemiBold",
                        color: "#5956E9",
                      }}
                    >
                      ₦{item._id.price}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

export default OrderDetails;
