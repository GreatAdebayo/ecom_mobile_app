import ContentLoader, { Rect, Circle } from "react-content-loader/native";

export const ProductLoader = () => {
  return (
    <ContentLoader backgroundColor="#1A1A1A">
      <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
      <Rect x="80" y="40" rx="3" ry="3" width="300" height="13" />
    </ContentLoader>
  );
};
