import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";
import logo from "../assets/images/GCAPurple.png";
import LoginForm from "../components/LoginForm";

class LoginScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.loginContainer}>
          <Image resizeMode="contain" style={styles.logo} source={logo} />
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  loginContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  logo: {
    marginLeft: 150,
    width: 500,
    height: 300
  },
  title: {
    color: "#FFF",
    marginTop: 120,
    width: 180,
    textAlign: "center",
    opacity: 0.9
  }
});

export default LoginScreen;
