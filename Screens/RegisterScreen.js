import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { register } from "../Firebase/auth";
import { COLORS } from "../assets/COLORS";
import { globalStyles } from "../styles/style"

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [displayName, setDisplayName] = useState("");
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  // const minNumberofChars = 6;
  // const maxNumberofChars = 16;
  // const namePattern = /^[a-zA-Z ]{2,30}$/;

  function registerUser() {
    if (email === "" || password === "") {
      alert("Email or password or username is empty");
    } else if (!emailPattern.test(email)) {
      alert("Please use a real email");
    }
    // else if (password < minNumberofChars || password > maxNumberofChars) {
    //   // Something is wrong in this case
    //   alert("Can not use this password");
    // }
    else if (password !== confirmPassword) {
      alert("Passwords doesn't match");
    } 
    // else if (!namePattern.test(displayName)) {
    //   alert("Invalid display name!");
    // } 
    else {
      register(email, password).then(() => {
        navigation.navigate("Login");
      });
    }
  }

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.inputView}>
        <TextInput
          style={globalStyles.TextInput}
          placeholder="Email"
          placeholderTextColor={COLORS.black}
          autoFocus={true}
          cursorColor={COLORS.black}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      {/* <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Display Name"
          placeholderTextColor="white"
          cursorColor={"white"}
          autoCapitalize="words"
          onChangeText={(displayName) => setDisplayName(displayName)}
        />
      </View> */}
      <View style={globalStyles.inputView}>
        <TextInput
          style={globalStyles.TextInput}
          placeholder="Password"
          placeholderTextColor={COLORS.black}
          secureTextEntry={true}
          cursorColor={COLORS.black}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={globalStyles.inputView}>
        <TextInput
          style={globalStyles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor={COLORS.black}
          secureTextEntry={true}
          cursorColor={COLORS.black}
          onChangeText={(password) => setConfirmPassword(password)}
        />
      </View>
      <TouchableOpacity
        style={globalStyles.registerBtn}
        onPress={() => {
          registerUser();
        }}
      >
        <Text style={globalStyles.textStyle}>Register</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "white",
    fontSize: 15,
  },
  inputView: {
    backgroundColor: "#FF7000",
    borderRadius: 10,
    width: "85%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
  registerBtn: {
    alignItems: "center",
    width: "35%",
    height: 40,
    borderRadius: 15,
    backgroundColor: "#FF7000",
    textAlign: "center",
    padding: 10,
    marginVertical: 30
  },
});
