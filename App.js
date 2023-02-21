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
import { ProductState } from "./src/contexts/products/state";
import { AuthState } from "./src/contexts/auth/state";
import { AlertState } from "./src/contexts/alert/state";

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
      <AlertState>
        <GeneralState>
          <ProductState>
            <AuthState>
              <NavigationContainer>
                <StackNavigator />
              </NavigationContainer>
            </AuthState>
          </ProductState>
        </GeneralState>
      </AlertState>
    </SafeAreaProvider>
  );
};

export default App;
