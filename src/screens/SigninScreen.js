import { View, TextInput, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { Zocial } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const SignInScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flexGrow: 1,
        justifyContent: "space-between",
        backgroundColor: "#5956E9",
      }}
    >
      <View
        style={[
          tw`pt-4`,
          {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 59,
              fontFamily: "Raleway_800ExtraBold",
            }}
          >
            Welcome
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 59,
              fontFamily: "Raleway_800ExtraBold",
            }}
          >
            back
          </Text>
        </View>
      </View>
      <View
        style={[
          tw`py-10 px-7`,
          {
            backgroundColor: "white",
            flex: 2,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        ]}
      >
        <Text
          style={[
            tw`text-base`,
            {
              fontFamily: "Raleway_700Bold",
            },
          ]}
        >
          SignIn
        </Text>
        <View
          style={[
            tw`my-5 py-6 rounded-lg px-3`,
            { flexDirection: "row", backgroundColor: "#F5F5F8" },
          ]}
        >
          <Zocial name="email" size={20} color="gray" />
          <TextInput
            placeholder="Email"
            style={[tw`ml-4`, { fontFamily: "Raleway_400Regular" }]}
            placeholderTextColor="gray"
            autoCapitalize="none"
          />
        </View>
        <View
          style={[
            tw`my-2 py-6 rounded-lg px-3`,
            {
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#F5F5F8",
            },
          ]}
        >
          <View style={{ flexDirection: "row" }}>
            <Entypo name="lock" size={20} color="gray" />
            <TextInput
              placeholder="Password"
              placeholderTextColor="gray"
              style={[tw`ml-2`, { fontFamily: "Raleway_400Regular" }]}
              autoCapitalize="none"
            />
          </View>
          <Text
            style={[{ color: "#5956E9", fontFamily: "Raleway_600SemiBold" }]}
          >
            Show
          </Text>
        </View>
        <View style={tw`mt-3`}>
          <Text
            style={[{ color: "#5956E9", fontFamily: "Raleway_600SemiBold" }]}
          >
            Forgot Password?
          </Text>
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
          onPress={() => {
            navigation.navigate("index");
          }}
        >
          <Text
            style={[
              tw`text-base`,
              { color: "white", fontFamily: "Raleway_700Bold" },
            ]}
          >
            SignIn
          </Text>
        </TouchableOpacity>
        <View style={[{ alignItems: "center" }, tw`my-5`]}>
          <Text
            style={[
              tw`text-base`,
              { color: "#5956E9", fontFamily: "Raleway_600SemiBold" },
            ]}
          >
            Create Account
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;
