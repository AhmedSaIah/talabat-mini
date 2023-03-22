import { StatusBar } from "expo-status-bar";
import { React } from "react";
import { StyleSheet,ImageBackground, Text, View, TouchableOpacity } from "react-native";
import image from "../assets/peakpx.jpg";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="contain"></ImageBackground>
      <View style={styles.inputView}>
        <TouchableOpacity onPress={navigation.navigate("Login")}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputView}>
        <TouchableOpacity onPress={navigation.navigate("Register")}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={navigation.navigate("Forgot")}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      aspectRatio: 2/1,
      alignItems: 'center',
      marginBottom: 40,
    },
    inputView: {
      backgroundColor: "#FF7000",
      borderRadius: 30,
      width: "90%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      fontSize: 15
    },
    login:{
      width: "30%",
      borderRadius: 25,
      height: 50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      backgroundColor:"#FF7000",
      color: "white",
    },
    forgot: {
      height: 30,
      marginBottom: 30,
    },
  });
  