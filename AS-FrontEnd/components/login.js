import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View , Switch} from 'react-native';
import { Link } from '@react-navigation/native';
import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from '../styles/login_registration_style'; 

const Login = () =>{
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isEnabled, setIsEnabled] = useState(false);

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const navigation = useNavigation();

    const userPool = new CognitoUserPool({
      UserPoolId: 'eu-central-1_D8FZol1hO',
      ClientId: '2cceeue0ughpuusn1jrkvqq6u7',
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
          navigation.navigate('Welcome');
        },
        onFailure: (error) => {
          // Handle sign-in failure
          console.error('Sign-in failed:', error);
        },
      });
    }

    const redirectToSignUp = () => {
      navigation.navigate('Registration'); // Use the navigate method to navigate to the 'Registration' screen
    }

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Sign in to your account</Text>
            <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail}/>
            <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} value={password} onChangeText={setPassword}/>
            <Button title="Sign in" color="#d3d0cb" onPress={handleSignIn}/>
            <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, marginTop: 25, marginBottom:5}}/>
            <View style={styles.row}>
              <Text style={styles.text}>Don`t have account yet?</Text>
              <Text onPress={redirectToSignUp} style={styles.link}>Sign up</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.text}>Are you a teacher?</Text>
            <Switch
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            </View>
        </View>
    )
}
export default Login;