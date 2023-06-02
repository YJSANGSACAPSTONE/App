import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ChallengeSignUp = ({ navigation }) => {
  // 더미 데이터 예시
  const challenge = {
    // image: require('./challengeImage.jpg'), // 챌린지 이미지 경로
    title: '챌린지 제목',
    description: '챌린지 내용...',
    duration: '2023.06.01 - 2023.06.30', // 챌린지 기간
    feeRange: '200,000P', // 참가비 범위
  };

const handleToMyChallenge = () => { 
    navigation.navigate('MyChallenge');
}

  return (
    <ScrollView style={styles.container}>
        
        <View style={styles.imageContainer}>
            {/* <Image source={challenge.image} style={styles.challengeImage} /> */}
        </View>
        <View style={styles.titleContainer}>
            <Text style={styles.challengeTitle}>{challenge.title}</Text>
            <Text style={styles.challengeDescription}>{challenge.description}</Text>
            <Text style={styles.durationText}>기간: {challenge.duration}</Text>
        </View>
        {/* <View style={styles.durationContainer}>
            
        </View> */}
        <View style={styles.feeContainer}>
            <Text style={styles.feeHeaderText}>참가비가 얼마인지 볼 수 있어요!</Text>
            <Text style={styles.feeRangeText}>{challenge.feeRange}</Text>
        </View>
        <View style={styles.expectedReturnContainer}>
            <Text style={styles.expectedReturnTitle}>예상 페이백 금액</Text>
            <View style={styles.expectedReturnLayout}>
            <Text style={styles.expectedReturnText}>챌린지 100% 성공 : 1000P</Text>
            <Text style={styles.expectedReturnText}>챌린지 85% 성공 : 750P</Text>
            <Text style={styles.expectedReturnText}>챌린지 85% 미만 성공 : 성공률에 따라 다름</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleToMyChallenge}>
            <Text style={styles.buttonText}>참가하기</Text>
        </TouchableOpacity>
        
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  imageContainer: {
    flex:2.5,
    aspectRatio: 1,
    marginBottom: 10,
    backgroundColor: 'lightgray',
  },
  challengeImage: {
    width: '100%',
    height: 120, // 사진의 높이를 조절하세요
  },
  titleContainer: {
    flex:1,
    justifyContent:'center',
    marginBottom: 10,
  },
  challengeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  challengeDescription: {
    fontSize: 16,
    marginTop: 5,
  },
  durationContainer: {
    marginBottom: 10,
  },
  durationText: {
    fontWeight: 'bold',
  },
  feeContainer: {
    marginBottom: 10,
  },
  feeHeaderText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  feeRangeText: {
    marginTop: 5,
    fontSize: 18, // 큰 글자로 수정하세요
  },
  expectedReturnContainer: {
    marginBottom: 10,
  },
  expectedReturnTitle: {
    fontWeight: 'bold',
  },
  expectedReturnLayout: {
    backgroundColor: 'lightgray',
    padding: 10,
    marginTop: 5,
  },
  expectedReturnText: {
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});

export default ChallengeSignUp;