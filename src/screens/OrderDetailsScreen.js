import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import React, { Fragment, useContext, useEffect } from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { GeneralContext } from "../contexts/general/state";
import { ProductContext } from "../contexts/products/state";
import OrderDetails from "../components/OrderDetails";

const OrderDetailsScreen = ({ navigation, route }) => {
  const { colorScheme } = useContext(GeneralContext);
  const { fetchOrderDetails, fetchOrderDetailsLoading } =
    useContext(ProductContext);

  useEffect(() => {
    fetchOrderDetails(route.params.orderId);
  }, []);

  return (
    <SafeAreaView
      style={{
        flexGrow: 1,
        justifyContent: "space-between",
        backgroundColor: colorScheme === "light" ? "#F5F5F8" : "black",
      }}
      edges={["top"]}
    >
      <ScrollView
        style={[
          tw`pt-3 px-4`,
          {
            flex: 1,
          },
        ]}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            isRefreshing={fetchOrderDetailsLoading}
            onRefresh={() => {
              fetchOrderDetails(route.params.orderId);
            }}
            tintColor={colorScheme === "light" ? "white" : "#5956E9"}
            colors={[colorScheme === "light" ? "white" : "#5956E9"]}
          />
        }
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
            }}
          >
            <AntDesign
              name="arrowleft"
              size={24}
              color={colorScheme === "light" ? "#200E32" : "white"}
            />
          </TouchableOpacity>
          <Text
            style={[
              tw`text-base`,
              {
                fontFamily: "Raleway_600SemiBold",
                fontSize: 18,
                color: colorScheme === "light" ? "black" : "white",
              },
            ]}
          >
            {[...route.params.orderId].slice(0, 20)}...
          </Text>
          <View></View>
        </View>
        {fetchOrderDetailsLoading ? (
          <ActivityIndicator
            size="small"
            color={colorScheme === "light" ? "#5956E9" : "white"}
          />
        ) : (
          <OrderDetails />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetailsScreen;
