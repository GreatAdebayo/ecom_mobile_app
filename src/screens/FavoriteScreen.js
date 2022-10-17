import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext } from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import NoFavorite from "../components/NoFavorite";
import Favorite from "../components/Favorite";
import { SafeAreaView } from "react-native-safe-area-context";
import { GeneralContext } from "../contexts/general/state";

const FavoriteScreen = ({ navigation }) => {
  const { toggleColor } = useContext(GeneralContext);
  return (
    <SafeAreaView
      style={{
        flexGrow: 1,
        justifyContent: "space-between",
        backgroundColor: "#F5F5F8",
      }}
      edges={["top"]}
    >
      <ScrollView
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
              toggleColor(`#E5E5E5`);
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
    </SafeAreaView>
  );
};

export default FavoriteScreen;
