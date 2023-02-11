import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { GeneralContext } from "../contexts/general/state";
import { SwipeListView } from "react-native-swipe-list-view";
import { ProductContext } from "../contexts/products/state";

const Favorite = () => {
  const navigation = useNavigation();
  const { colorScheme } = useContext(GeneralContext);
  const {
    favorites,
    removeFromFavorites,
    addToBasket,
    basket,
    removeFromBasket,
  } = useContext(ProductContext);
  return (
    <SwipeListView
      showsVerticalScrollIndicator={false}
      data={favorites}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("gadget_details", {
              id: item._id,
            });
          }}
        >
          <View
            style={[
              tw`rounded-xl h-40 p-5 mb-3`,
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
                {basket.find((f) => f._id === item._id) ? (
                  <TouchableOpacity
                    style={[
                      tw`px-2 py-3 rounded bg-red-500`,
                      {
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    ]}
                    onPress={() => {
                      removeFromBasket(item._id);
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Raleway_600SemiBold",
                        color: "white",
                        fontSize: 15,
                      }}
                    >
                      Remove from basket
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={[
                      tw`px-2 py-3 rounded`,
                      {
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#5956E9",
                      },
                    ]}
                    onPress={() => {
                      addToBasket(item);
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Raleway_600SemiBold",
                        color: "white",
                        fontSize: 15,
                      }}
                    >
                      Add to basket
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
      renderHiddenItem={({ item }) => (
        <TouchableOpacity
          style={{ alignItems: "flex-end" }}
          onPress={() => {
            removeFromFavorites(item._id);
          }}
        >
          <View style={[tw`py-15 px-5`, { justifyContent: "center" }]}>
            <Octicons name="trash" size={24} color="red" />
          </View>
        </TouchableOpacity>
      )}
      rightOpenValue={-75}
    />
  );
};

export default Favorite;
