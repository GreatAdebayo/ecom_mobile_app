import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Fragment, useContext } from "react";
import { GeneralContext } from "../contexts/general/state";
import { SwipeListView } from "react-native-swipe-list-view";

const Favorite = () => {
  const products = ["s", "d", "e"];
  const navigation = useNavigation();
  const { colorScheme } = useContext(GeneralContext);
  return (
    <SwipeListView
      showsVerticalScrollIndicator={false}
      data={products}
      renderItem={(data, rowMap) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("gadget_details");
          }}
        >
          <View
            style={[
              tw`rounded-xl h-40 p-4 mb-3`,
              {
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: colorScheme === "light" ? "white" : "black",
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
                style={tw`w-20 h-20 rounded-lg`}
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
                2020 Apple iPad Air 10.9"
              </Text>
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
                <TouchableOpacity
                  style={[
                    tw`px-2 py-1 rounded`,
                    {
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#5956E9",
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
                    Add to basket
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
      renderHiddenItem={(data, rowMap) => (
        <TouchableOpacity style={{ alignItems: "flex-end" }}>
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
