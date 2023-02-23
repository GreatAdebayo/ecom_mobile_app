import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import NotFound from "../components/NotFound";
import Search from "../components/Search";
import { GeneralContext } from "../contexts/general/state";
import React, { useContext } from "react";
import { ProductContext } from "../contexts/products/state";

const SearchResultScreen = ({ navigation }) => {
  const { colorScheme } = useContext(GeneralContext);
  const {
    searchedProducts,
    searchProductLoading,
    searchProduct,
    searchProductMsg,
  } = useContext(ProductContext);
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
              placeholder="Search Gadget"
              style={[
                tw`ml-2 w-full`,
                { fontFamily: "Raleway_400Regular", fontSize: 17 },
              ]}
              placeholderTextColor={colorScheme === "light" ? "gray" : "white"}
              autoCapitalize="none"
              onChangeText={(value) => {
                searchProduct(value);
              }}
              autoFocus
              color={colorScheme === "light" ? "black" : "white"}
            />
          </View>
        </View>
        <View
          style={[
            tw`mt-6`,
            {
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          <Text
            style={{
              fontSize: 23,
              fontFamily: "Raleway_600SemiBold",
              color: colorScheme === "light" ? "black" : "white",
            }}
          >
            {searchProductMsg}
          </Text>
        </View>
        {searchProductLoading ? (
          <ActivityIndicator
            size="small"
            color={colorScheme === "light" ? "#5956E9" : "white"}
          />
        ) : searchedProducts.length > 0 ? (
          <Search />
        ) : (
          <NotFound />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchResultScreen;
