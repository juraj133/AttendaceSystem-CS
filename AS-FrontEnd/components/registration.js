import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { CognitoUserPool, CognitoUserAttribute} from 'amazon-cognito-identity-js';
import styles from '../styles/login_registration_style'; 
import React, { useState } from 'react';

const Registration = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const redirectToSignIn = () => {
        navigation.navigate('Login'); // Use the navigate method to navigate to the 'Registration' screen
    }

      const handleRegistration = () => {
        if (password !== repeatPassword) {
          alert("Password and repeat password do not match.");
          return;
        }
        
        // Create a new CognitoUserPool instance
        const userPool = new CognitoUserPool({
            UserPoolId: 'eu-central-1_D8FZol1hO',
            ClientId: '2cceeue0ughpuusn1jrkvqq6u7',
            region: 'eu-central-1'
        });
    
        const attributeList = [];
        const dataEmail = {
        Name: 'email',
        Value: email,
        };
        attributeList.push(new CognitoUserAttribute(dataEmail));
    
        // Register the user with the provided email and password
        userPool.signUp(email, password, attributeList, null, (err, result) => {
          if (err) {
            console.error(err);
            alert('Failed to register user: ' + err.message);
          } else {
            console.log(result);
            alert('User registered successfully!');
            // Redirect to sign-in page
            // navigation.navigate('Login');
          }
        });
      }

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Registration</Text>
            <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail}/>
            <TextInput placeholder="Password" style={styles.input} secureTextEntry value={password} onChangeText={setPassword}/>
            <TextInput placeholder="Repeat password" style={styles.input} secureTextEntry value={repeatPassword} onChangeText={setRepeatPassword}/>
            <Button title="Sign up" color="#d3d0cb" onPress={handleRegistration}/>
            <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, marginTop: 25, marginBottom:5}}/>
            <View style={styles.row}>
              <Text style={styles.text}>Already have account yet?</Text>
              <Text onPress={redirectToSignIn} style={styles.link}>Sign in</Text>
            </View>
        </View>
    )
}

export default Registration;