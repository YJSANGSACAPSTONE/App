import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ChallengeRead = ({ navigation }) => {
  // 더미 데이터 예시
  const challenge = {
    name: '챌린지 이름',
    maxParticipants: 100,
    startDate: '2023-06-01',
    endDate: '2023-06-30',
    category: '카테고리',
    participationFee: 5000,
    requiredPhotoCount: 3,
    certificationType: '사진',
    frequencyType: '매일',
    description: '챌린지 소개글...',
    };

    const handleToChallengeAll = () => { 
        navigation.navigate('ChallengeAll');
    }

    const handleToChallengeSignUp = () => { 
      navigation.navigate('ChallengeSignUp');
  }
    

  return (
    <View style={styles.container}>
      <Text style={styles.challengeName}>{challenge.name}</Text>
      <View style={styles.content}>
        <View style={styles.leftContent}>
          {/* <Image
            source={require('./challengeImage.jpg')}
            style={styles.challengeImage}
          /> */}
        </View>
        <View style={styles.rightContent}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>최대 참가 인원 : {challenge.maxParticipants}</Text>
            {/* <Text style={styles.infoValue}></Text> */}
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>시작일 : {challenge.startDate}</Text>
            {/* <Text style={styles.infoValue}></Text> */}
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>종료일 : {challenge.endDate}</Text>
            {/* <Text style={styles.infoValue}></Text> */}
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>카테고리 : {challenge.category}</Text>
            {/* <Text style={styles.infoValue}></Text> */}
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>참가금 : {challenge.participationFee}</Text>
            {/* <Text style={styles.infoValue}></Text> */}
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>필수 등록 사진 개수 : {challenge.requiredPhotoCount}</Text>
            {/* <Text style={styles.infoValue}></Text> */}
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>인증 타입 : {challenge.certificationType}</Text>
            {/* <Text style={styles.infoValue}></Text> */}
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>빈도 타입 : {challenge.frequencyType}</Text>
            {/* <Text style={styles.infoValue}></Text> */}
          </View>
        </View>
      </View>
      <Text style={styles.description}>{challenge.description}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleToChallengeAll}>
          <Text style={styles.buttonText}>목록</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>수정하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>삭제하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleToChallengeSignUp}>
          <Text style={styles.buttonText}>참가신청</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>인증하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  challengeName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  content: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  leftContent: {
    flex: 1,
    marginRight: 10,
  },
  rightContent: {
    flex: 1,
  },
  challengeImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoLabel: {
    width: '100%',
    fontWeight: 'bold',
  },
  infoValue: {
    width: '40%',
  },
  description: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});

export default ChallengeRead;