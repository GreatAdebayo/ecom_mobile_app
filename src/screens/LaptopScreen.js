import { View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Wearables from "../components/seeMore/Wearables";
import Laptop from "../components/seeMore/Laptop";

const LaptopScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flexGrow: 1,
        justifyContent: "space-between",
        backgroundColor: "#F5F5F8",
      }}
    >
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={[
              tw`mx-10 my-2`,
              {
                flexDirection: "row",
                alignItems: "center",
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{ flex: 1 }}
            >
              <AntDesign name="arrowleft" size={24} color="#200E32" />
            </TouchableOpacity>
            <View
              style={[
                tw`p-4`,
                {
                  flex: 5,
                  borderRadius: 30,
                  borderColor: "gray",
                  borderWidth: 0.3,
                  flexDirection: "row",
                  alignItems: "center",
                },
              ]}
            >
              <Ionicons name="search" size={24} color="black" />
              <TextInput
                placeholder="Search Laptops"
                style={[
                  tw`ml-2`,
                  { fontFamily: "Raleway_400Regular", fontSize: 17 },
                ]}
                placeholderTextColor="gray"
                autoCapitalize="none"
              />
            </View>
          </View>
          <Laptop />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default LaptopScreen;
