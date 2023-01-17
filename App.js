import { StripeProvider } from "@stripe/stripe-react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <>
      <StripeProvider publishableKey="pk_test_51MRIyfC42Y8xQSXJy2I74hOLs9yE8ABIj6pG9p99sBIWj6WTAIBTYIm1RBhIULZheSnF2FFM8bNl2q3ehYsWMzbM00Y8UWYZs5">
        <StackNavigator />
        <StatusBar style="light" />
      </StripeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
