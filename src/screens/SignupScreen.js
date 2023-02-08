import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import tw from "twrnc";
import { Zocial } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { GeneralContext } from "../contexts/general/state";

const SignUpScreen = ({ navigation }) => {
  const { colorScheme } = useContext(GeneralContext);
  return (
    <SafeAreaView
      style={{
        flexGrow: 1,
        justifyContent: "space-between",
        backgroundColor: "#5956E9",
      }}
      edges={["top"]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 3,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../assets/welcome.png")}
            style={tw`w-60 h-60`}
          />
          <View style={[tw`mt-8`, { alignItems: "center" }]}>
            <Text
              style={{
                color: "white",
                fontSize: 59,
                fontFamily: "Raleway_800ExtraBold",
              }}
            >
              Hello
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontFamily: "Raleway_600SemiBold",
              }}
            >
              Get your cheap Gadgets here
            </Text>
          </View>
        </View>
        <View
          style={[
            tw`p-8 mt-10`,
            {
              backgroundColor: colorScheme === "light" ? "white" : "#1A1A1A",
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
                color: colorScheme === "light" ? "black" : "white",
              },
            ]}
          >
            SignUp
          </Text>
          <View
            style={[
              tw`px-4 py-6 my-4 `,
              {
                borderRadius: 30,
                borderColor: "#5956E9",
                borderWidth: 0.3,
                flexDirection: "row",
                alignItems: "center",
              },
            ]}
          >
            <Zocial name="email" size={20} color="#868686" />
            <TextInput
              placeholder="Username"
              style={[
                tw`ml-2 w-full`,
                { fontFamily: "Raleway_400Regular", fontSize: 17 },
              ]}
              placeholderTextColor="gray"
              autoCapitalize="none"
            />
          </View>
          <View
            style={[
              tw`px-4 py-6 my-4`,
              {
                borderRadius: 30,
                borderColor: "#5956E9",
                borderWidth: 0.3,
                flexDirection: "row",
                alignItems: "center",
              },
            ]}
          >
            <Zocial name="email" size={20} color="#868686" />
            <TextInput
              placeholder="Email"
              style={[
                tw`ml-2 w-full`,
                { fontFamily: "Raleway_400Regular", fontSize: 17 },
              ]}
              placeholderTextColor="gray"
              autoCapitalize="none"
            />
          </View>
          <View
            style={[
              tw`px-4 py-6 my-4`,
              {
                borderRadius: 30,
                borderColor: "#5956E9",
                borderWidth: 0.3,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              },
            ]}
          >
            <View style={{ flexDirection: "row" }}>
              <Entypo name="lock" size={20} color="#868686" />
              <TextInput
                placeholder="Password"
                placeholderTextColor="gray"
                style={[tw`ml-2 w-50`, { fontFamily: "Raleway_400Regular" }]}
                autoCapitalize="none"
              />
            </View>
            <Text
              style={[
                {
                  color: colorScheme === "light" ? "#5956E9" : "white",
                  fontFamily: "Raleway_600SemiBold",
                },
              ]}
            >
              Show
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
              SignUp
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ alignItems: "center" }, tw`my-5`]}
            onPress={() => {
              navigation.navigate("signin");
            }}
          >
            <Text
              style={[
                tw`text-base`,
                {
                  color: colorScheme === "light" ? "#5956E9" : "white",
                  fontFamily: "Raleway_600SemiBold",
                },
              ]}
            >
              SignIn Instead
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
