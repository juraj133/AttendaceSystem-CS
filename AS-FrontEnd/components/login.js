import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Link } from '@react-navigation/native';
import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const styles = StyleSheet.create({
    input: {
      borderWidth: 0.5,
      borderRadius: 5,
      borderColor: '#000',
      backgroundColor: '#dedede',
      margin: 15,
      height: 40,
      width: 300
    },
    container: {
      flex: 1,
      backgroundColor: '#393e41',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
      color: '#e7e5df',
      fontSize: 30,
      textAlign: 'center',
    },
    text:{
      color: '#e7e5df',
      fontSize: 18,
      textAlign: 'center',
      marginRight: 10,
    },
    link:{
      flex: 1,
      textAlignVertical: 'center',
      color: '#9c9793',
    },
    row: {
      flexDirection: 'row',
    },
  });


const handleSignIn = () =>{
  const authDetails = new AuthenticationDetails({
    Username: email,
    Password: password,
  });

  const cognitoUser = new CognitoUser({
    Username: email,
    Pool: userPool,
  });

  cognitoUser.authenticateUser(authDetails, {
    onSuccess: (result) => {
      // Handle successful sign-in
      console.log('Sign-in successful:', result);
    },
    onFailure: (error) => {
      // Handle sign-in failure
      console.error('Sign-in failed:', error);
    },
  });
}

const Login = () =>{

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const navigation = useNavigation();

    const redirectToSignUp = () => {
      navigation.navigate('Registration'); // Use the navigate method to navigate to the 'Registration' screen
    }
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Sign in to your account</Text>
            <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail}/>
            <TextInput placeholder="Password" style={styles.input} value={password} onChangeText={setPassword}/>
            <Button title="Sign in" color="#d3d0cb" onPress={handleSignIn}/>
            <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, marginTop: 25, marginBottom:5}}/>
            <View style={styles.row}>
              <Text style={styles.text}>Don`t have account yet?</Text>
              <Text onPress={redirectToSignUp} style={styles.link}>Sign up</Text>
            </View>
            <StatusBar style="auto"/>
        </View>
    )
}
export default Login;