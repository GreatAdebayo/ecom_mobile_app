import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { Fragment, useContext, useEffect } from "react";
import tw from "twrnc";
import { Zocial, Foundation } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { GeneralContext } from "../contexts/general/state";
import { Formik } from "formik";
import * as yup from "yup";
import { AuthContext } from "../contexts/auth/state";
import { AlertContext } from "../contexts/alert/state";
import { Alert } from "../components/Alert";

//Validation Schema
const confirmValidationSchema = yup.object().shape({
  code: yup
    .number()
    .required("Code is Required")
    .min(4, ({ min }) => `Code must be at least ${min} characters`),
});

const EmailConfirmationScreen = ({ navigation, route }) => {
  const { colorScheme } = useContext(GeneralContext);
  const { email } = route.params;
  const {
    confirmEmail,
    resendCode,
    sendCodeFailMsg,
    sendCodeSuccessMsg,
    confirmFailMsg,
    isAuthenticated,
    clearMsg,
    isSubmitting,
  } = useContext(AuthContext);
  const { setAlert } = useContext(AlertContext);

  useEffect(() => {
    if (sendCodeFailMsg) {
      setAlert(sendCodeFailMsg, "fail");
      clearMsg();
    }

    if (sendCodeSuccessMsg) {
      setAlert(sendCodeSuccessMsg, "success");
      clearMsg();
    }

    if (confirmFailMsg) {
      setAlert(confirmFailMsg, "fail");
      clearMsg();
    }

    if (isAuthenticated) {
      navigation.navigate("index");
    }
  }, [sendCodeFailMsg, sendCodeSuccessMsg, confirmFailMsg, isAuthenticated]);

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
              Welcome
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontFamily: "Raleway_600SemiBold",
              }}
            >
              Gadgets at your finger tips
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
            Confirm your email
          </Text>
          <Formik
            initialValues={{
              code: "",
            }}
            onSubmit={(values) =>
              confirmEmail({ values, email: route.params.email })
            }
            validationSchema={confirmValidationSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <Fragment>
                <Alert />
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
                    color={colorScheme === "light" ? "black" : "white"}
                    value={email}
                    editable={false}
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
                  <Foundation name="clock" size={20} color="#868686" />
                  <TextInput
                    placeholder="4 Digit Code"
                    placeholderTextColor="gray"
                    style={[
                      tw`ml-2 w-50`,
                      { fontFamily: "Raleway_400Regular" },
                    ]}
                    autoCapitalize="none"
                    color={colorScheme === "light" ? "black" : "white"}
                    onChangeText={handleChange("code")}
                    onBlur={handleBlur("code")}
                    value={values.code}
                  />
                </View>
                {errors.code && touched.code && (
                  <Text
                    style={[
                      tw`mt-2 ${
                        colorScheme === "light"
                          ? "text-red-700"
                          : "text-red-500"
                      }`,
                      { fontSize: 13, fontFamily: "Raleway_400Regular" },
                    ]}
                  >
                    {errors.code}
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
                      "Confirm"
                    )}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[{ alignItems: "center" }, tw`my-5`]}
                  onPress={() => {
                    resendCode(email);
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
                    Resend Code
                  </Text>
                </TouchableOpacity>
              </Fragment>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EmailConfirmationScreen;
