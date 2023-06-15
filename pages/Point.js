import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const Point = () => {
  const userData = {
    name: '강신성',
    level: 'Lv 1',
    points: 1000,
  };

  const [chargeAmount, setChargeAmount] = useState('');

  const handleCharge = () => {
    // Logic for charging points
    console.log('Charge amount:', chargeAmount);
  };

  const handleLogout = () => {
    // Logic for logging out the user
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImage}></View>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.level}>{userData.level}</Text>
          <Text style={styles.points}>Points: {userData.points}</Text>
        </View>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>사용자 아이디:</Text>
        <Text style={styles.userData}>{userData.name}</Text>

        <Text style={styles.label}>충전 금액:</Text>
        <TextInput
          style={styles.input}
          value={chargeAmount}
          onChangeText={setChargeAmount}
          keyboardType="numeric"
        />

        <Button title="충전하기" onPress={handleCharge} style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'gray', // Add your profile image styling here
    marginRight: 10,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  level: {
    fontSize: 16,
    marginBottom: 5,
  },
  points: {
    fontSize: 16,
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userData: {
    fontSize: 16,
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 15,
  },
  button: {
    marginBottom: 15,
  },
});

export default Point;
