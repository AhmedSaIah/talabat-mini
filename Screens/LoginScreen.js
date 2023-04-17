import { React, useState } from "react";
import {
  Alert,
  Text,
  View,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { login } from "../Firebase/auth";
import COLORS from "../assets/COLORS";
import { Title, Subheading, TextInput } from "react-native-paper";
import GButton from "../Components/GButton";
import GInput from "../Components/GInput";
import globalStyles from "../styles/style";
import { auth, db } from "../Firebase/firebase-config";



export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState(COLORS.black);
  const [secureText, setSecureText] = useState(true);
  // const adminEmail = "";
  // const adminPassword = "";
  function signInUser() {
    // if (login(adminEmail, adminPassword)) {
    //    TODO: Implement admin authority
    //   navigation.navigate("Profile");
    // }
    login(email, password)
      .then(() => {
        navigation.navigate("Profile");
        // console.log(auth.currentUser.uid);
      })
      .catch((e) => {
        Alert.alert("Something went wrong", e.message);
        console.log("Error logging user in: ", e.message);
      });
  }

  function onPress() {
    setColor(COLORS.primary);
    setSecureText(!secureText);
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={globalStyles.container} onPress={Keyboard.dismiss}>
        <Title style={globalStyles.Title}>Welcome Back!</Title>

        <Subheading>Login to continue</Subheading>

        <View style={{ paddingTop: 50 }}>
          <GInput
            modeValue={"outlined"}
            labelName={"Email"}
            onChangeText={setEmail}
            value={email}
          />

          <GInput
            modeValue={"outlined"}
            labelName={"Password"}
            secureTextEntry={secureText}
            // Fix eye not showing
            right={
              <TextInput.Icon
                name={secureText ? "eye" : "eye-off"}
                color={color}
                onPress={onPress}
              />
            }
            onChangeText={setPassword}
            value={password}
          />

          <GButton
            mode="text"
            labelStyle={[
              globalStyles.btnText,
              { textDecorationLine: "underline" },
            ]}
            textColor={COLORS.black}
            title={"Forgot Password ?"}
            onPress={() => navigation.navigate("Forgot")}
          />

          <GButton
            mode="contained"
            labelStyle={globalStyles.btnText}
            title={"Login"}
            buttonColor={COLORS.primary}
            textColor={COLORS.white}
            onPress={() => {
              signInUser();
            }}
          />
        </View>

        <Text style={styles.Text}>OR</Text>

        {/* <GButton
          mode="outlined"
          icon={"facebook"}
          labelStyle={globalStyles.btnText}
          title={"Login With Facebook"}
          buttonColor={COLORS.white}
          textColor={COLORS.primary}
        />

        <GButton
          mode="outlined"
          icon={"google"}
          labelStyle={globalStyles.btnText}
          title={"Login With Google"}
          buttonColor={COLORS.white}
          textColor={COLORS.darkOrange}
        /> */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
            marginTop: 40,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ color: COLORS.primary, fontWeight: "bold" }}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  ContinuesButtonLabel: {
    fontSize: 14,
  },

  Text: {
    fontSize: 14,
    paddingTop: 20,
    alignItems: "center",
  },
});
