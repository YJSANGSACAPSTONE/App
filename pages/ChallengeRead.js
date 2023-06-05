import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';

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
  };

  const handleToChallengeSignUp = () => {
    navigation.navigate('ChallengeSignUp');
  };

  const handleToChallengeVerify = () => {
    navigation.navigate('ChallengeVerify');
  };

  const handleEditChallenge = () => {
    // 수정 로직 실행
    Alert.alert('챌린지 수정', '챌린지를 수정합니다.', [
      { text: '취소', style: 'cancel' },
      { text: '확인', onPress: () => console.log('챌린지 수정됨') },
    ]);
  };

  const handleDeleteChallenge = () => {
    // 삭제 로직 실행
    Alert.alert('챌린지 삭제', '정말로 챌린지를 삭제하시겠습니까?', [
      { text: '취소', style: 'cancel' },
      { text: '확인', onPress: () => console.log('챌린지 삭제됨') },
    ]);
  };

  return (
    <ScrollView style={styles.content}>
    <View style={styles.container}>
      <Text style={styles.challengeName}>{challenge.name}</Text>
      <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
            <Image
              source={require('../assets/img/morning.png')}
              style={styles.challengeImage}
            />
          </View>
        </View>
      <View style={styles.detailsContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>최대 참가 인원: {challenge.maxParticipants}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>시작일: {challenge.startDate}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>종료일: {challenge.endDate}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>카테고리: {challenge.category}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>참가금: {challenge.participationFee}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>필수 등록 사진 개수: {challenge.requiredPhotoCount}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>인증 타입: {challenge.certificationType}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>빈도 타입: {challenge.frequencyType}</Text>
        </View>
      </View>
      <Text style={styles.description}>{challenge.description}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleToChallengeAll}>
          <Text style={styles.buttonText}>목록</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEditChallenge}>
          <Text style={styles.buttonText}>수정하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDeleteChallenge}>
          <Text style={styles.buttonText}>삭제하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleToChallengeSignUp}>
          <Text style={styles.buttonText}>참가신청</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleToChallengeVerify}>
          <Text style={styles.buttonText}>인증하기</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  challengeName: {
    paddingTop:30,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  imageWrapper: {
    width: '100%',  // 이미지의 크기를 조절하기 위한 Wrapper View
    aspectRatio: 1,
    borderRadius: 10,
    overflow: 'hidden',  // 이미지를 Wrapper 내에 꽉 채우도록 설정
  },
  challengeImage: {
    flex: 1,  // Wrapper View 내에서 이미지가 꽉 채우도록 설정
  },
  detailsContainer: {
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoLabel: {
    width: '100%',
    fontWeight: 'bold',
  },
  description: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom:100,
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