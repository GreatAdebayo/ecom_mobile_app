import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { Fragment, useContext } from "react";
import { GeneralContext } from "../contexts/general/state";

const Order = () => {
  const products = ["s", "d", "e"];
  const navigation = useNavigation();
  const { colorScheme } = useContext(GeneralContext);
  return (
    <Fragment>
      {products.map((product, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            navigation.navigate("gadget_details", {
              id: item._id,
            });
          }}
        >
          <View
            style={[
              tw`rounded-xl h-40 p-4 mb-3`,
              {
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: colorScheme === "light" ? "white" : "#1A1A1A",
              },
            ]}
          >
            <View
              style={{
                flex: 1,
              }}
            >
              <Image
                source={require("../assets/laptop.png")}
                style={tw`w-20 h-20 rounded-lg`}
              />
            </View>
            <View style={{ flex: 2, justifyContent: "center" }}>
              <Text
                style={[
                  tw`text-base`,
                  {
                    fontFamily: "Raleway_600SemiBold",
                    color: colorScheme === "light" ? "black" : "white",
                  },
                ]}
              >
                2020 Apple iPad Air 10.9"
              </Text>
              <View style={tw`mt-2`}>
                <Text
                  style={{
                    fontFamily: "Raleway_600SemiBold",
                    color: "#5956E9",
                  }}
                >
                  $579
                </Text>
              </View>
              <View style={tw`mt-2`}>
                <Text
                  style={[
                    tw`text-green-700`,
                    {
                      fontFamily: "Raleway_600SemiBold",
                    },
                  ]}
                >
                  Shipped
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </Fragment>
  );
};

export default Order;
