import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useContext, useEffect } from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import NoFavorite from "../components/NoFavorite";
import { SafeAreaView } from "react-native-safe-area-context";
import { GeneralContext } from "../contexts/general/state";
import Favorite from "../components/Favorite";
import { ProductContext } from "../contexts/products/state";

const FavoriteScreen = ({ navigation }) => {
  const { colorScheme } = useContext(GeneralContext);
  const { favorites, getFavorites, getFavoritesLoading } =
    useContext(ProductContext);
  useEffect(() => {
    getFavorites();
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
        showsVerticalScrollIndicator={false}
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
            Favorites
          </Text>
          <View></View>
        </View>
        {getFavoritesLoading ? (
          <ActivityIndicator
            size="small"
            color={colorScheme === "light" ? "#5956E9" : "white"}
          />
        ) : favorites.length > 0 ? (
          <Favorite />
        ) : (
          <NoFavorite />
        )}
      </View>
    </SafeAreaView>
  );
};

export default FavoriteScreen;
