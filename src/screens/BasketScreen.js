import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useContext, useEffect } from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import Basket from "../components/Basket";
import EmptyBaasket from "../components/EmptyBasket";
import { SafeAreaView } from "react-native-safe-area-context";
import { GeneralContext } from "../contexts/general/state";
import { ProductContext } from "../contexts/products/state";

const BasketScreen = ({ navigation }) => {
  const { colorScheme } = useContext(GeneralContext);
  const { basket, getBasket, isGetBasketLoading } = useContext(ProductContext);

  useEffect(() => {
    getBasket();
  }, []);

  return (
    <SafeAreaView
      style={{
        flexGrow: 1,
        justifyContent: "space-between",
        backgroundColor: colorScheme === "light" ? "#F5F5F8" : "black",
      }}
      edges={["top"]}
    >
      <View
        style={[
          tw`pt-3 px-8`,
          {
            flex: 1,
          },
        ]}
        flexGrow={1}
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
                color: colorScheme === "light" ? "black" : "white",
              },
            ]}
          >
            Basket
          </Text>
          <View></View>
        </View>
        {isGetBasketLoading ? (
          <ActivityIndicator
            size="small"
            color={colorScheme === "light" ? "#5956E9" : "white"}
          />
        ) : basket !== null ? (
          <Basket />
        ) : (
          <EmptyBaasket />
        )}
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
