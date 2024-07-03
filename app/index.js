import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import LoginScreen from "./Screens/LoginScreen";
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "../app/Navigations/TabNavigation";

export default function Page() {
  const [fontsLoaded] = useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-SemiBold.ttf'),
  });
  return (
    <ClerkProvider publishableKey={'pk_test_Z3Jvd24tamVubmV0LTU5LmNsZXJrLmFjY291bnRzLmRldiQ'}>
    <View style={styles.container}>
      <SignedIn>
        <NavigationContainer independent={true}>
          <TabNavigation/>
        </NavigationContainer>
      </SignedIn>
      <SignedOut>
        <LoginScreen />
      </SignedOut>
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:20
  },
});
