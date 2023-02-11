import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { Fragment, useContext } from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import { Octicons } from "@expo/vector-icons";
import { GeneralContext } from "../contexts/general/state";
import { ProductContext } from "../contexts/products/state";

const Basket = () => {
  const navigation = useNavigation();
  const { colorScheme } = useContext(GeneralContext);
  const { basket, increaseQuantity, reduceQuantity, removeFromBasket } =
    useContext(ProductContext);

  return (
    <Fragment>
      <SwipeListView
        showsVerticalScrollIndicator={false}
        data={basket}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              tw`rounded-lg h-40 p-5 mb-3`,
              {
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: colorScheme === "light" ? "white" : "#1A1A1A",
              },
            ]}
            onPress={() => {
              navigation.navigate("gadget_details", {
                id: item._id,
              });
            }}
          >
            <View
              style={{
                flex: 1,
              }}
            >
              <Image
                style={tw`w-20 h-20 rounded-lg`}
                source={{
                  uri: item.variant[0].images[0],
                }}
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
                {item.name} • {item.model}
              </Text>
              <View style={tw`mt-2`}>
                <Text
                  style={{
                    fontFamily: "Raleway_600SemiBold",
                    color: "#5956E9",
                  }}
                >
                  ₦{item.price}
                </Text>
              </View>
              <View
                style={[
                  tw`mt-2`,
                  {
                    flexDirection: "row",
                    alignItems: "center",
                  },
                ]}
              >
                <Text
                  style={{
                    fontFamily: "Raleway_400Regular",
                    color: colorScheme === "light" ? "gray" : "white",
                  }}
                >
                  Quantity{" "}
                </Text>
                <TouchableOpacity
                  style={[
                    tw`px-2 py-1 rounded`,
                    {
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#5956E9",
                    },
                  ]}
                  onPress={() => {
                    reduceQuantity(item);
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Raleway_600SemiBold",
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                    -
                  </Text>
                </TouchableOpacity>
                <View
                  style={[
                    tw`mx-2`,
                    {
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <Text
                    style={{
                      fontFamily: "Raleway_600SemiBold",
                      color: colorScheme === "light" ? "black" : "white",
                    }}
                  >
                    {item.quantity}
                  </Text>
                </View>
                <TouchableOpacity
                  style={[
                    tw`px-2 py-1 rounded`,
                    {
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#5956E9",
                    },
                  ]}
                  onPress={() => {
                    increaseQuantity(item);
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Raleway_600SemiBold",
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
        renderHiddenItem={({ item }) => (
          <TouchableOpacity
            style={{ alignItems: "flex-end" }}
            onPress={() => {
              removeFromBasket(item._id);
            }}
          >
            <View style={[tw`py-15 px-5`, { justifyContent: "center" }]}>
              <Octicons name="trash" size={24} color="red" />
            </View>
          </TouchableOpacity>
        )}
        rightOpenValue={-75}
      />

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
              color: colorScheme === "light" ? "black" : "white",
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
          ₦
          {basket.reduce((acc, obj) => {
            return acc + obj.total;
          }, 0)}
        </Text>
      </View>
      <TouchableOpacity
        style={[
          tw`my-10 py-6 rounded-lg px-3 shadow-lg`,
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
          Checkout
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default Basket;
