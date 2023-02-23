import {
  View,
  Text,
  TextInput,
  Pressable,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import Wearables from "../components/Wearables";
import Laptops from "../components/Laptops";
import Phones from "../components/Phones";
import Accessories from "../components/Accesories";
import { GeneralContext } from "../contexts/general/state";
import { ScrollView } from "react-native-gesture-handler";
import { ProductContext } from "../contexts/products/state";
import { Fragment } from "react/cjs/react.production.min";

const HomeScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  const { colorScheme } = useContext(GeneralContext);
  const {
    wearables,
    getWearables,
    getLaptops,
    getPhones,
    getAccessories,
    phones,
    laptops,
    accessories,
    isWearablesLoading,
    isLaptopsLoading,
    isPhonesLoading,
    isAccessoriesLoading,
  } = useContext(ProductContext);

  useEffect(() => {
    getWearables();
    getLaptops();
    getPhones();
    getAccessories();
  }, []);
  return (
    <SafeAreaView
      edges={["top"]}
      style={{
        width: width,
        height: height,
        flexGrow: 1,
        backgroundColor: colorScheme === "light" ? "#E5E5E5" : "black",
      }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            tw`mx-10 my-2`,
            {
              flexDirection: "row",
              alignItems: "center",
            },
          ]}
        >
          <Pressable
            style={{ flex: 1 }}
            onPress={() => {
              navigation.toggleDrawer();
            }}
          >
            <Ionicons
              name="ios-menu-outline"
              size={42}
              color={colorScheme === "light" ? "gray" : "white"}
            />
          </Pressable>
          <Pressable
            style={[
              tw`p-4`,
              {
                flex: 5,
                flexDirection: "row",
                alignItems: "center",
              },
            ]}
            onPress={() => {
              navigation.navigate("search_result");
            }}
          >
            <Ionicons
              name="search"
              size={24}
              color={colorScheme === "light" ? "black" : "white"}
            />
            <View style={tw`ml-3`}>
              <Text
                style={{
                  color: colorScheme === "light" ? "gray" : "white",
                  fontSize: 20,
                  fontFamily: "Raleway_700Bold",
                }}
              >
                Search a Gadget
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={tw`ml-10 my-10`}>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "Raleway_700Bold",
              color: colorScheme === "light" ? "black" : "white",
            }}
          >
            Order online,
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "Raleway_700Bold",
              color: colorScheme === "light" ? "black" : "white",
            }}
          >
            delivered to your door step.
          </Text>
        </View>
        {isWearablesLoading ||
        isLaptopsLoading ||
        isAccessoriesLoading ||
        isPhonesLoading ? (
          <ActivityIndicator
            size="small"
            color={colorScheme === "light" ? "#5956E9" : "white"}
          />
        ) : (
          <Fragment>
            {wearables.length > 0 && (
              <View style={{ flex: 1 }}>
                <View style={tw`m-5`}>
                  <Text
                    style={[
                      tw`text-base`,
                      {
                        color: colorScheme === "light" ? "#5956E9" : "white",
                        fontFamily: "Raleway_600SemiBold",
                        fontSize: 18,
                      },
                    ]}
                  >
                    Wearables
                  </Text>
                </View>
                <Wearables />
              </View>
            )}
            {laptops.length > 0 && (
              <View style={{ flex: 1 }}>
                <View style={tw`m-5`}>
                  <Text
                    style={[
                      tw`text-base`,
                      {
                        color: colorScheme === "light" ? "#5956E9" : "white",
                        fontFamily: "Raleway_600SemiBold",
                        fontSize: 18,
                      },
                    ]}
                  >
                    Laptops
                  </Text>
                </View>
                <Laptops />
              </View>
            )}
            {phones.length > 0 && (
              <View style={{ flex: 1 }}>
                <View style={tw`m-5`}>
                  <Text
                    style={[
                      tw`text-base`,
                      {
                        color: colorScheme === "light" ? "#5956E9" : "white",
                        fontFamily: "Raleway_600SemiBold",
                        fontSize: 18,
                      },
                    ]}
                  >
                    Phones
                  </Text>
                </View>
                <Phones />
              </View>
            )}
            {accessories.length > 0 && (
              <View style={[tw`mb-25`, { flex: 1 }]}>
                <View style={tw`m-5`}>
                  <Text
                    style={[
                      tw`text-base`,
                      {
                        color: colorScheme === "light" ? "#5956E9" : "white",
                        fontFamily: "Raleway_600SemiBold",
                        fontSize: 18,
                      },
                    ]}
                  >
                    Accessories
                  </Text>
                </View>
                <Accessories />
              </View>
            )}
          </Fragment>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
