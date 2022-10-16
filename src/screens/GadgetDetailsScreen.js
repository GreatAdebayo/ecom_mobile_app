import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

const GadgetDetailsScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flexGrow: 1,
        justifyContent: "space-between",
        backgroundColor: "#F6F6F9",
      }}
    >
      <View
        style={[
          tw`pt-18 px-8`,
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
            <AntDesign name="arrowleft" size={24} color="#200E32" />
          </TouchableOpacity>
          <Ionicons name="ios-heart-circle" size={30} color="#200E32" />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {/* <Image
            source={require("../assets/airpod.png")}
            style={tw`w-50 h-50`}
          /> */}
        </View>
      </View>
      <View
        style={[
          tw`py-10 px-8`,
          {
            backgroundColor: "white",
            flex: 2,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        ]}
      >
        <View style={tw`mx-5`}>
          <View>
            <Text style={[{ fontFamily: "Raleway_600SemiBold", fontSize: 25 }]}>
              2020 Apple iPad Air 10.9"
            </Text>
          </View>

          <View style={tw`mt-5`}>
            <Text
              style={[tw`text-base`, { fontFamily: "Raleway_600SemiBold" }]}
            >
              Colors
            </Text>
            <View
              style={[
                tw`mt-2`,
                { flexDirection: "row", justifyContent: "space-between" },
              ]}
            >
              <View
                style={[
                  tw`bg-white px-3 py-3 rounded-lg border border-gray-200`,
                  {
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  },
                ]}
              >
                <Octicons name="dot-fill" size={20} color="blue" />
                <Text style={{ fontFamily: "Raleway_600SemiBold" }}>
                  {" "}
                  Sky Blue
                </Text>
              </View>
              <View
                style={[
                  tw`bg-white px-3 py-3 rounded-lg border  border-yellow-400`,
                  {
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  },
                ]}
              >
                <Octicons
                  name="dot-fill"
                  size={20}
                  style={tw`text-yellow-400`}
                />
                <Text style={{ fontFamily: "Raleway_600SemiBold" }}>
                  {" "}
                  Rose Gold
                </Text>
              </View>
              <View
                style={[
                  tw`bg-white px-3 py-3 rounded-lg border border-gray-200`,
                  {
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  },
                ]}
              >
                <Octicons name="dot-fill" size={20} color="green" />
                <Text style={{ fontFamily: "Raleway_600SemiBold" }}>
                  {" "}
                  Green
                </Text>
              </View>
            </View>
            <View style={tw`mt-8`}>
              <Text
                style={[tw`text-base`, { fontFamily: "Raleway_600SemiBold" }]}
              >
                Get Apple TV+ free for a year
              </Text>
              <Text
                style={[
                  tw`text-base`,
                  { fontFamily: "Raleway_400Regular", color: "gray" },
                ]}
              >
                Available when you purchase any new iPhone, iPad, iPod Touch,
                Mac or Apple TV, £4.99/month after free trial.
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
                $579
              </Text>
            </View>
          </View>
        </View>
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
      </View>
    </View>
  );
};

export default GadgetDetailsScreen;
