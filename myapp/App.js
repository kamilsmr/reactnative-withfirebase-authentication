import React, {useState} from 'react';


import {
  TextInput,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { authentication } from './firebase/firebase-config';


const App =() => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  
  return (
    <View>
      <TextInput placeholder='Username' value={username} onChangeText={text => setUsername(text)} />
      <TextInput placeholder='Password' value={password} secureTextEntry={true}  onChangeText={text => setPassword(text)}/>
      <Button title='Sign in' />
    </View>
  
  );
};

const styles = StyleSheet.create({
  
});

export default App;
