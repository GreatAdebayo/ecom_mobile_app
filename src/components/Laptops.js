import {
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { Fragment, useContext } from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GeneralContext } from "../contexts/general/state";
import { ProductContext } from "../contexts/products/state";

const Laptops = () => {
  const navigation = useNavigation();
  const { colorScheme } = useContext(GeneralContext);
  const { laptops } = useContext(ProductContext);

  return (
    <Fragment>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={laptops}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              tw`px-15 mr-6 py-10 ${index === 0 ? "ml-5" : ""}`,
              {
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colorScheme === "light" ? "white" : "#1A1A1A",
              },
            ]}
            onPress={() => {
              navigation.navigate("gadget_details", {
                id: item._id,
              });
            }}
          >
            <Image
              style={tw`w-50 h-40 rounded-lg`}
              source={{
                uri: item.variant[0].images[0],
              }}
            />
            <Text
              style={[
                tw`mt-5`,
                {
                  fontFamily: "Raleway_600SemiBold",
                  fontSize: 20,
                  color: colorScheme === "light" ? "black" : "white",
                },
              ]}
            >
              {item.name && item.name.slice(0, 11)}
              {item.name && [...item.name].length > 11 && "..."}
            </Text>
            <Text
              style={[
                tw`text-base mt-3`,
                {
                  color: colorScheme === "light" ? "gray" : "white",
                  fontFamily: "Raleway_400Regular",
                },
              ]}
            >
              {item.model}
            </Text>
            <Text
              style={[
                tw`text-base mt-3`,
                { color: "#5956E9", fontFamily: "Raleway_600SemiBold" },
              ]}
            >
              ₦{item.price}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item._id}
      />
      <TouchableOpacity
        style={[{ alignItems: "flex-end", justifyContent: "center" }, tw`m-5`]}
        onPress={() => {
          navigation.navigate("see_more", {
            type: "laptops",
          });
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
          see more{" "}
          <AntDesign
            name="arrowright"
            size={18}
            color={colorScheme === "light" ? "#5956E9" : "white"}
          />
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default Laptops;
