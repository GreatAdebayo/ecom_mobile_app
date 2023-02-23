import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { Fragment, useContext } from "react";
import { GeneralContext } from "../contexts/general/state";
import { ProductContext } from "../contexts/products/state";
import { MaterialIcons } from "@expo/vector-icons";

const Order = () => {
  const navigation = useNavigation();
  const { colorScheme } = useContext(GeneralContext);
  const { orders, fetchOrdersLoading } = useContext(ProductContext);

  return (
    <Fragment>
      {orders.length > 0 &&
        orders.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("order_details", {
                orderId: item.orderId,
              });
            }}
            key={index}
          >
            <View
              style={[
                tw`rounded-xl h-40 p-4 mb-3`,
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
                      uri: item.productsPurchased[0]._id.variant[0].images[0],
                    }}
                  />
                  {item.productsPurchased.length > 1 && (
                    <MaterialIcons
                      name="photo-library"
                      size={20}
                      color="white"
                    />
                  )}
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
                  {item.productsPurchased[0]._id.name}
                </Text>
                <View style={tw`mt-2`}>
                  <Text
                    style={{
                      fontFamily: "Raleway_600SemiBold",
                      color: "#5956E9",
                    }}
                  >
                    ₦{item.totalCost}
                  </Text>
                </View>
                <View style={tw`mt-2`}>
                  <Text
                    style={[
                      tw`${
                        item.status === "unpaid"
                          ? "text-red-500"
                          : "text-green-700"
                      }`,
                      {
                        fontFamily: "Raleway_600SemiBold",
                      },
                    ]}
                  >
                    {item.status}
                  </Text>
                </View>
                {item.productsPurchased.length > 1 && (
                  <View style={tw`mt-2`}>
                    <Text
                      style={{
                        fontFamily: "Raleway_600SemiBold",
                        color: colorScheme === "light" ? "black" : "white",
                      }}
                    >
                      1 of {item.productsPurchased.length}
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
    </Fragment>
  );
};

export default Order;
