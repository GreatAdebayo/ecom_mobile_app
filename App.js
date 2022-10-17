import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Raleway_100Thin,
  Raleway_200ExtraLight,
  Raleway_300Light,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
  Raleway_800ExtraBold,
  Raleway_900Black,
  Raleway_100Thin_Italic,
  Raleway_200ExtraLight_Italic,
  Raleway_300Light_Italic,
  Raleway_400Regular_Italic,
  Raleway_500Medium_Italic,
  Raleway_600SemiBold_Italic,
  Raleway_800ExtraBold_Italic,
  Raleway_900Black_Italic,
} from "@expo-google-fonts/raleway";
import StackNavigator from "./src/navigation/StackNavigator";
import { GeneralState } from "./src/contexts/general/state";

const App = () => {
  const [fontsLoaded] = useFonts({
    Raleway_100Thin,
    Raleway_200ExtraLight,
    Raleway_300Light,
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
    Raleway_800ExtraBold,
    Raleway_900Black,
    Raleway_100Thin_Italic,
    Raleway_200ExtraLight_Italic,
    Raleway_300Light_Italic,
    Raleway_400Regular_Italic,
    Raleway_500Medium_Italic,
    Raleway_600SemiBold_Italic,
    Raleway_800ExtraBold_Italic,
    Raleway_900Black_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <GeneralState>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
        <StatusBar style="dark" />
      </GeneralState>
    </SafeAreaProvider>
  );
};

export default App;
