import tw from "twrnc";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { GeneralContext } from "../contexts/general/state";
import { useContext, useState } from "react";

const TabContent = ({ state, descriptors, navigation }) => {
  const { colorScheme } = useContext(GeneralContext);
  const [index, setIndex] = useState(0);
  return (
    <View
      style={[
        tw`h-20 py-5`,
        {
          flexDirection: "row",
          backgroundColor:
            colorScheme === "light"
              ? index === 0
                ? "#E5E5E5"
                : "#F5F5F8"
              : "black",
        },
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          setIndex(index);
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {index === 0 &&
              (isFocused ? (
                <Octicons name="home" size={30} color="#5956E9" />
              ) : (
                <Octicons
                  name="home"
                  size={30}
                  color={colorScheme === "light" ? "black" : "white"}
                />
              ))}
            {index === 1 &&
              (isFocused ? (
                <FontAwesome name="heart" size={30} color="#5956E9" />
              ) : (
                <FontAwesome
                  name="heart"
                  size={30}
                  color={colorScheme === "light" ? "black" : "white"}
                />
              ))}
            {index === 2 &&
              (isFocused ? (
                <FontAwesome name="user-o" size={30} color="#5956E9" />
              ) : (
                <FontAwesome
                  name="user-o"
                  size={30}
                  color={colorScheme === "light" ? "black" : "white"}
                />
              ))}
            {index === 3 &&
              (isFocused ? (
                <FontAwesome name="shopping-cart" size={30} color="#5956E9" />
              ) : (
                <FontAwesome
                  name="shopping-cart"
                  size={30}
                  color={colorScheme === "light" ? "black" : "white"}
                />
              ))}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabContent;
