import { View, Text, Image } from "react-native";
import tw from "twrnc";

const NotFound = () => {
  return (
    <View style={tw`px-8`}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../assets/notfound.png")}
          style={tw`w-full h-80`}
        />
        <Text
          style={[
            tw`text-base`,
            { fontFamily: "Raleway_700Bold", fontSize: 20 },
          ]}
        >
          Gadget not found
        </Text>
        <View style={tw`mt-5`}>
          <Text
            style={[
              tw`text-base`,
              { fontFamily: "Raleway_400Regular", color: "gray" },
            ]}
          >
            Try a more generic search term or try looking for alternative
            products.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NotFound;
