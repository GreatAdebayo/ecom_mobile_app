import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { Fragment } from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import { Octicons } from "@expo/vector-icons";

const Basket = () => {
  const products = ["s", "d", "e"];
  const navigation = useNavigation();
  return (
    <Fragment>
      <SwipeListView
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={(data, rowMap) => (
          <View
            style={[
              tw`bg-white rounded-xl h-40 p-4 mb-3`,
              {
                flexDirection: "row",
                alignItems: "center",
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
                style={tw`w-20 h-20`}
              />
            </View>
            <View style={{ flex: 2, justifyContent: "center" }}>
              <Pressable
                onPress={() => {
                  navigation.navigate("gadget_details");
                }}
              >
                <Text
                  style={[tw`text-base`, { fontFamily: "Raleway_600SemiBold" }]}
                >
                  2020 Apple iPad Air 10.9"
                </Text>
              </Pressable>
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
                    color: "gray",
                  }}
                >
                  Quantity{" "}
                </Text>
                <TouchableOpacity
                  style={[
                    tw`bg-blue-300 px-2 py-1 rounded`,
                    {
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
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
                    }}
                  >
                    1
                  </Text>
                </View>
                <TouchableOpacity
                  style={[
                    tw`bg-blue-300 px-2 py-1 rounded`,
                    {
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
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
              </View>
            </View>
          </View>
        )}
        renderHiddenItem={(data, rowMap) => (
          <View style={{ alignItems: "flex-end" }}>
            <View style={[tw`py-15 px-5`, { justifyContent: "center" }]}>
              <Octicons name="trash" size={24} color="red" />
            </View>
          </View>
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
