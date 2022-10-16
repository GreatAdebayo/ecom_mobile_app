import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import NoFavorite from "../components/NoFavorite";
import Favorite from "../components/Favorite";

const FavoriteScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flexGrow: 1,
        justifyContent: "space-between",
        backgroundColor: "#F5F5F8",
      }}
    >
      <ScrollView
        style={[
          tw`pt-20 px-8`,
          {
            flex: 1,
          },
        ]}
        showsVerticalScrollIndicator={false}
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
            <AntDesign name="arrowleft" size={24} color="#200E32" />
          </TouchableOpacity>
          <Text
            style={[
              tw`text-base`,
              { fontFamily: "Raleway_600SemiBold", fontSize: 18 },
            ]}
          >
            Favorites
          </Text>
          <View></View>
        </View>
        <NoFavorite />

        {/* <Favorite /> */}
      </ScrollView>
    </View>
  );
};

export default FavoriteScreen;