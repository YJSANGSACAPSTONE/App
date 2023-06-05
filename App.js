import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import LoginPage from './pages/LoginPage';
import ChallengeAll from './pages/ChallengeAll';
import ChallengeRead from './pages/ChallengeRead';
import ChallengeSignUp from './pages/ChallengeSignUp';
import MyChallenge from './pages/MyChallenge';
<<<<<<< Updated upstream
import ChallengeWrite from "./pages/ChallengeWrite";
=======
import ChallengeVerify from './pages/ChallengeVerify';
>>>>>>> Stashed changes

export default function App() {
  const [user, setUser] = useState("");
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    // 리액트 네이티브에서는 DOM 조작이 필요하지 않으므로 해당 부분은 제거합니다.
  }, []);

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="ChallengeAll" component={ChallengeAll} />
        <Stack.Screen name="ChallengeWrite" component={ChallengeWrite} />
        <Stack.Screen name="ChallengeRead" component={ChallengeRead} />
        <Stack.Screen name="ChallengeSignUp" component={ChallengeSignUp} />
        <Stack.Screen name="ChallengeVerify" component={ChallengeVerify} />
        <Stack.Screen name="MyChallenge" component={MyChallenge} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}