import tw from "twrnc";
import { View, TouchableOpacity } from "react-native";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

const TabContent = ({ state, descriptors, navigation }) => {
  const [defaultBg, setDefaultBg] = useState(`#E5E5E5`);
  return (
    <View
      style={[
        tw`py-5 h-25`,
        {
          alignItems: "flex-start",
          flexDirection: "row",
          backgroundColor: defaultBg,
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
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }

          if (index === 0) {
            setDefaultBg("#E5E5E5");
          } else if (index === 1 || index === 2 || index === 3) {
            setDefaultBg("#F5F5F8");
          } else {
            setDefaultBg("#E5E5E5");
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
            }}
          >
            <View
              style={{
                alignItems: "center",
              }}
            >
              {index === 0 &&
                (isFocused ? (
                  <Foundation name="home" size={35} color="#5956E9" />
                ) : (
                  <Foundation name="home" size={35} color="#200E32" />
                ))}
              {index === 1 &&
                (isFocused ? (
                  <Ionicons name="ios-heart-circle" size={35} color="#5956E9" />
                ) : (
                  <Ionicons name="ios-heart-circle" size={35} color="#200E32" />
                ))}
              {index === 2 &&
                (isFocused ? (
                  <FontAwesome name="user-o" size={32} color="#5956E9" />
                ) : (
                  <FontAwesome name="user-o" size={32} color="#200E32" />
                ))}
              {index === 3 &&
                (isFocused ? (
                  <MaterialIcons
                    name="shopping-cart"
                    size={32}
                    color="#5956E9"
                  />
                ) : (
                  <MaterialIcons
                    name="shopping-cart"
                    size={32}
                    color="#200E32"
                  />
                ))}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabContent;
