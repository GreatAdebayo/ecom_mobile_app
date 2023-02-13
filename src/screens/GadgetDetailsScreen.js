import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { Fragment, useContext, useEffect } from "react";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { GeneralContext } from "../contexts/general/state";
import { ProductContext } from "../contexts/products/state";
import { SliderBox } from "react-native-image-slider-box";

const GadgetDetailsScreen = ({ navigation, route }) => {
  const { colorScheme } = useContext(GeneralContext);
  const {
    getProductDetails,
    productDetails,
    isProductDetailsLoading,
    variant,
    setVariant,
    addToFavorites,
    favorites,
    removeFromFavorites,
    addToBasket,
    basket,
  } = useContext(ProductContext);

  useEffect(() => {
    getProductDetails(route.params.id);
  }, []);

  return (
    <SafeAreaView
      flexGrow={1}
      style={{
        flexGrow: 1,
        justifyContent: "space-between",
        backgroundColor: colorScheme === "light" ? "#F6F6F9" : "#1A1A1A",
      }}
      edges={["top"]}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={[
            tw`pt-2 px-8`,
            {
              flex: 1,
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
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
            {favorites.find(
              (favorite) => favorite._id === productDetails._id
            ) ? (
              <TouchableOpacity
                onPress={() => {
                  removeFromFavorites(productDetails._id);
                }}
              >
                <Ionicons name="ios-heart-circle" size={30} color="#5956E9" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  addToFavorites(productDetails);
                }}
              >
                <Ionicons
                  name="ios-heart-circle"
                  size={30}
                  color={colorScheme === "light" ? "#200E32" : "white"}
                />
              </TouchableOpacity>
            )}
          </View>
          <View
            style={[
              tw`mt-3 mb-10`,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            {isProductDetailsLoading ? (
              <ActivityIndicator
                size="small"
                color={colorScheme === "light" ? "#5956E9" : "white"}
              />
            ) : (
              variant.images && (
                <SliderBox
                  images={variant.images}
                  dotColor="#5956E9"
                  inactiveDotColor="gray"
                  imageLoadingColor="#5956E9"
                  sliderBoxHeight={400}
                />
              )
            )}
          </View>
        </View>

        <View
          style={[
            tw`py-10 px-8`,
            {
              backgroundColor: colorScheme === "light" ? "white" : "black",
              flex: 2,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
          ]}
        >
          {isProductDetailsLoading ? (
            <ActivityIndicator
              size="small"
              color={colorScheme === "light" ? "#5956E9" : "white"}
            />
          ) : (
            <Fragment>
              <View style={tw`mx-3`}>
                <View>
                  <Text
                    style={[
                      {
                        fontFamily: "Raleway_600SemiBold",
                        fontSize: 25,
                        color: colorScheme === "light" ? "black" : "white",
                      },
                    ]}
                  >
                    {productDetails.name} • {productDetails.model}
                  </Text>
                </View>

                <View style={tw`mt-5`}>
                  <Text
                    style={[
                      tw`text-base`,
                      {
                        fontFamily: "Raleway_600SemiBold",
                        color: colorScheme === "light" ? "black" : "white",
                      },
                    ]}
                  >
                    Variants
                  </Text>
                  <View style={[tw`mt-2`, { flexDirection: "row" }]}>
                    {productDetails.variant &&
                      productDetails.variant.map((item, index) => (
                        <TouchableOpacity
                          style={[
                            tw`bg-white px-3 py-3 rounded-lg border mx-1`,
                            {
                              justifyContent: "center",
                              alignItems: "center",
                              flexDirection: "row",
                              borderColor:
                                variant._id === item._id ? item.hexa : "white",
                              borderWidth: variant._id === item._id ? 5 : 0,
                            },
                          ]}
                          key={index}
                          onPress={() => {
                            setVariant(item);
                          }}
                        >
                          <Octicons
                            name="dot-fill"
                            size={20}
                            color={item.hexa}
                          />
                          <Text
                            style={[
                              tw`capitalize`,
                              { fontFamily: "Raleway_600SemiBold" },
                            ]}
                          >
                            {" "}
                            {item.color}
                          </Text>
                        </TouchableOpacity>
                      ))}
                  </View>
                  <View style={tw`mt-8`}>
                    <Text
                      style={[
                        tw`text-base`,
                        {
                          fontFamily: "Raleway_600SemiBold",
                          color: colorScheme === "light" ? "black" : "white",
                        },
                      ]}
                    >
                      Description
                    </Text>
                    <Text
                      style={[
                        tw`text-base`,
                        { fontFamily: "Raleway_400Regular", color: "gray" },
                      ]}
                    >
                      {productDetails.description}
                    </Text>
                  </View>
                  <View
                    style={[
                      tw`mt-8`,
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
                      Price
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
                      ₦{productDetails.price}
                    </Text>
                  </View>
                </View>
              </View>
              {basket.find((basket) => basket._id === productDetails._id) ? (
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
                    navigation.navigate("basket");
                  }}
                >
                  <Text
                    style={[
                      tw`text-base`,
                      { color: "white", fontFamily: "Raleway_700Bold" },
                    ]}
                  >
                    View basket
                  </Text>
                </TouchableOpacity>
              ) : (
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
                    addToBasket(productDetails);
                  }}
                >
                  <Text
                    style={[
                      tw`text-base`,
                      { color: "white", fontFamily: "Raleway_700Bold" },
                    ]}
                  >
                    Add to basket
                  </Text>
                </TouchableOpacity>
              )}
            </Fragment>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GadgetDetailsScreen;
