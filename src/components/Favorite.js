import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Fragment } from "react";
const Favorite = () => {
  const products = ["s", "d", "e"];
  const navigation = useNavigation();
  return (
    <Fragment>
      {products.map((product, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            navigation.navigate("gadget_details");
          }}
        >
          <View
            style={[
              tw`bg-white rounded-xl h-40 p-4 mb-3`,
              {
                flexDirection: "row",
                alignItems: "center",
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
                style={tw`w-20 h-20`}
              />
            </View>
            <View style={{ flex: 2, justifyContent: "center" }}>
              <Text
                style={[tw`text-base`, { fontFamily: "Raleway_600SemiBold" }]}
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
                <View style={tw`mx-2`}></View>
                <TouchableOpacity
                  style={[
                    tw`px-2 py-1 rounded`,
                    {
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <Octicons name="trash" size={24} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </Fragment>
  );
};

export default Favorite;
