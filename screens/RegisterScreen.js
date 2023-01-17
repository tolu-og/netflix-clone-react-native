import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import image from "../assets/netflix.webp";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <View style={styles.logoContainer}>
          <Image source={image} style={styles.logo} />
        </View>

        <View style={styles.text}>
          <Input
            value={email}
            onChangeText={(text) => setEmail(text)}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            style={styles.emailText}
            type="email"
            placeholder="Email"
            placeholderTextColor={"white"}
          />
          <Input
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            style={styles.emailText}
            type="password"
            placeholder="Password"
            placeholderTextColor={"white"}
          />
        </View>

        <TouchableOpacity
          disabled={!email && !password}
          onPress={() =>
            navigation.navigate("Plans", {
              email: email,
              password: password,
            })
          }
          style={
            password.length > 4
              ? {
                  backgroundColor: "red",
                  width: 300,
                  marginLeft: "auto",
                  marginRight: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 14,
                }
              : {
                  width: 300,
                  marginLeft: "auto",
                  marginRight: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "white",
                  borderWidth: 2,
                  padding: 14,
                }
          }
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 10,
    alignItems: "center",
  },

  buttonText: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    width: 320,
    marginTop: 45,
  },
  emailText: {
    width: 330,
    padding: 15,
    borderRadius: 5,
    color: "white",
    backgroundColor: "gray",
  },
  logo: {
    height: 50,
    width: 150,
    marginTop: 20,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});
