import { View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Wearables from "../components/seeMore/Wearables";
import React, { useContext } from "react";
import { GeneralContext } from "../contexts/general/state";
import Laptop from "../components/seeMore/Laptop";
import Phones from "../components/seeMore/Phones";
import Accesories from "../components/seeMore/Accessories";

const SeeMoreScreen = ({ navigation, route }) => {
  const { colorScheme } = useContext(GeneralContext);
  return (
    <SafeAreaView
      style={{
        flexGrow: 1,
        justifyContent: "space-between",
        backgroundColor: colorScheme === "light" ? "#F5F5F8" : "black",
      }}
      edges={["top"]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            tw`mx-10 my-2`,
            {
              flexDirection: "row",
              alignItems: "center",
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{ flex: 1 }}
          >
            <AntDesign
              name="arrowleft"
              size={24}
              color={colorScheme === "light" ? "#200E32" : "white"}
            />
          </TouchableOpacity>
          <View
            style={[
              tw`p-4`,
              {
                flex: 5,
                borderRadius: 30,
                borderColor: "gray",
                borderWidth: 0.3,
                flexDirection: "row",
                alignItems: "center",
              },
            ]}
          >
            <Ionicons
              name="search"
              size={24}
              color={colorScheme === "light" ? "black" : "white"}
            />
            <TextInput
              placeholder={`Search ${route.params.type}`}
              style={[
                tw`ml-2 w-full`,
                { fontFamily: "Raleway_400Regular", fontSize: 17 },
              ]}
              placeholderTextColor={colorScheme === "light" ? "gray" : "white"}
              autoCapitalize="none"
            />
          </View>
        </View>
        {route.params.type === "laptops" && <Laptop />}
        {route.params.type === "wearables" && <Wearables />}
        {route.params.type === "phones" && <Phones />}
        {route.params.type === "accessories" && <Accesories />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SeeMoreScreen;
