import ContentLoader, { Rect } from "react-content-loader/native";
import { useContext } from "react";
import { GeneralContext } from "../contexts/general/state";
import { View } from "react-native";
import tw from "twrnc";

export const ProductLoader = () => {
  const { colorScheme } = useContext(GeneralContext);
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <ContentLoader backgroundColor="#1A1A1A">
        <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <Rect x="80" y="40" rx="3" ry="3" width="300" height="13" />
      </ContentLoader>
    </View>
  );
};
