import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Profile = () => {
  const userData = {
    name: '강신성',
    level: 'Lv 1',
    points: 1000,
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

      <View style={styles.buttonView}>
        <Button title="계정 정보" onPress={() => navigateToAccountInformation()} style={styles.button} />
      </View>

      <View style={styles.buttonView}>
        <Button title="ZEP ID 인증" onPress={() => navigateToAccountInformation()} style={styles.button} />
      </View>

      <View style={styles.buttonView}>
        <Button title="마이 챌린지" onPress={() => navigateToAccountInformation()} style={styles.button} />
      </View>

      <View style={styles.buttonView}>
        <Button title="알람" onPress={() => navigateToAccountInformation()} style={styles.button} />
      </View>

      <View style={styles.buttonView}>
        <Button title="포인트 충전" onPress={() => navigateToAccountInformation()} style={styles.button} />
      </View>

      <View style={styles.buttonView}>
        <Button title="포인트 사용 내역" onPress={() => navigateToAccountInformatiRon()} style={styles.button} />
      </View>

      <View style={styles.buttonView}>
        <Button title="결제 내역" onPress={() => navigateToAccountInformation()} style={styles.button} />
      </View>

      {/* Add similar button views for other buttons */}

      <View style={styles.buttonView}>
        <Button title="로그아웃" onPress={handleLogout} style={styles.button} />
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
  buttonView: {
    marginBottom: 15,
  },
});

export default Profile;
