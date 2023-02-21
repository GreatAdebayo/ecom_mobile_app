import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import tw from "twrnc";
import { Zocial } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { GeneralContext } from "../contexts/general/state";
import { Formik } from "formik";
import * as yup from "yup";
import { AuthContext } from "../contexts/auth/state";
import { AlertContext } from "../contexts/alert/state";
import { Alert } from "../components/Alert";

//Validation Schema
const signupValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
      message: "Password too weak",
    }),
});

const SignUpScreen = ({ navigation }) => {
  const { colorScheme } = useContext(GeneralContext);
  const [showPassword, setShowPassword] = useState(true);
  const { setAlert } = useContext(AlertContext);
  const {
    signUp,
    isSubmitting,
    signupFailMsg,
    clearMsg,
    signupSuccessMsg,
    userInfo,
  } = useContext(AuthContext);

  useEffect(() => {
    if (signupFailMsg) {
      setAlert(signupFailMsg, "fail");
      clearMsg();
    }

    if (signupSuccessMsg) {
      setAlert(signupSuccessMsg, "success");
      clearMsg();
      navigation.navigate("email_confirm", { email: userInfo.email });
    }
  }, [signupFailMsg, signupSuccessMsg]);
  return (
    <SafeAreaView
      style={{
        flexGrow: 1,
        justifyContent: "space-between",
        backgroundColor: "#5956E9",
      }}
      edges={["top"]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
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
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => signUp(values)}
          validationSchema={signupValidationSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View
              style={[
                tw`p-8 mt-10`,
                {
                  backgroundColor:
                    colorScheme === "light" ? "white" : "#1A1A1A",
                  flex: 2,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                },
              ]}
            >
              <Alert />
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
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  color={colorScheme === "light" ? "black" : "white"}
                />
              </View>
              {errors.email && touched.email && (
                <Text
                  style={[
                    tw`mt-2 ${
                      colorScheme === "light" ? "text-red-700" : "text-red-500"
                    }`,
                    { fontSize: 13, fontFamily: "Raleway_400Regular" },
                  ]}
                >
                  {errors.email}
                </Text>
              )}
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
                    style={[
                      tw`ml-2 w-50`,
                      { fontFamily: "Raleway_400Regular" },
                    ]}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    autoCapitalize="none"
                    color={colorScheme === "light" ? "black" : "white"}
                    secureTextEntry={showPassword}
                  />
                </View>
                <Pressable
                  onPress={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  <Text
                    style={{
                      color: colorScheme === "light" ? "#5956E9" : "white",
                      fontFamily: "Raleway_600SemiBold",
                    }}
                  >
                    {showPassword ? "Show" : "Hide"}
                  </Text>
                </Pressable>
              </View>
              {errors.password && touched.password && (
                <Text
                  style={[
                    tw`mt-2 ${
                      colorScheme === "light" ? "text-red-700" : "text-red-500"
                    }`,
                    { fontSize: 13, fontFamily: "Raleway_400Regular" },
                  ]}
                >
                  {errors.password}
                </Text>
              )}
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
                onPress={handleSubmit}
                disabled={isSubmitting}
              >
                <Text
                  style={[
                    tw`text-base`,
                    { color: "white", fontFamily: "Raleway_700Bold" },
                  ]}
                >
                  {isSubmitting ? (
                    <ActivityIndicator
                      size="small"
                      color={colorScheme === "light" ? "white" : "black"}
                    />
                  ) : (
                    "SignUp"
                  )}
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
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
