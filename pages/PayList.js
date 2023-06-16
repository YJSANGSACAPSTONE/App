import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const PayList = () => {
  const userData = {
    name: '강신성',
    level: 'Lv 1',
    points: 1000,
  };

  const pointUsageHistory = [
    {
      challengeName: '챌린지 1',
      entryFee: '500',
      date: '2023-06-01',
      success: true,
    },
    {
      challengeName: '챌린지 2',
      entryFee: '700',
      date: '2023-06-05',
      success: false,
    },
    {
      challengeName: '챌린지 3',
      entryFee: '1000',
      date: '2023-06-10',
      success: true,
    },
  ];

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

      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeader}>충전 내역</Text>
      </View>

      <View style={styles.titleRow}>
        <Text style={styles.titleText}>날짜</Text>
        <Text style={styles.titleText}>결제 수단</Text>
        <Text style={styles.titleText}>가격</Text>
        <Text style={styles.titleText}>성공 여부</Text>
      </View>

      {pointUsageHistory.map((usage, index) => (
        <View style={styles.usageRow} key={index}>
          <Text style={styles.usageText}>{usage.challengeName}</Text>
          <Text style={styles.usageText}>{usage.entryFee}</Text>
          <Text style={styles.usageText}>{usage.date}</Text>
          <Text style={styles.usageText}>{usage.success ? '성공' : '실패'}</Text>
        </View>
      ))}

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
  sectionHeaderContainer: {
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  usageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  usageText: {
    fontSize: 16,
  },
});

export default PayList;
