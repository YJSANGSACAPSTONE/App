import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const MyChallenge = () => {
  // 더미 데이터 예시 (여러 개의 챌린지 데이터)
  const challenges = [
    {
      id: 1,
    //   image: require('./challengeImage1.jpg'), // 챌린지 이미지 경로
      title: '챌린지 1',
      progress: 0, // 진행률 (0 ~ 100)
    },
    {
      id: 2,
    //   image: require('./challengeImage2.jpg'), // 챌린지 이미지 경로
      title: '챌린지 2',
      progress: 50, // 진행률 (0 ~ 100)
    },
    {
      id: 3,
    //   image: require('./challengeImage3.jpg'), // 챌린지 이미지 경로
      title: '챌린지 3',
      progress: 100, // 진행률 (0 ~ 100)
    },
  ];

  return (
    <View style={styles.container}>
      {challenges.map(challenge => (
        <TouchableOpacity
          key={challenge.id}
          style={styles.challengeContainer}
          onPress={() => handleChallengePress(challenge.id)}
        >
          <View style={styles.imageContainer}>
            {/* <Image source={challenge.image} style={styles.challengeImage} /> */}
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.challengeTitle}>{challenge.title}</Text>
            <View style={styles.progressContainer}>
              <View style={[styles.progressBar, { width: `${challenge.progress}%` }]} />
              <Text style={styles.progressText}>{`${challenge.progress}%`}</Text>
            </View>
            <Text style={styles.progressInfo}>진행현황</Text>
          </View>
          <TouchableOpacity style={styles.certifyButton}>
            <Text style={styles.certifyButtonText}>인증하기</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const handleChallengePress = (challengeId) => {
  // 챌린지 아이템 클릭 시 처리할 로직 작성
  // 예: 해당 챌린지의 상세 페이지로 이동
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  challengeContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
  },
  imageContainer: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  challengeImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  challengeTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  progressText: {
    marginLeft: 5,
    fontSize: 12,
  },
  progressInfo: {
    fontSize: 12,
    color: 'gray',
  },
  certifyButton: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  certifyButtonText: {
    fontWeight: 'bold',
    fontSize: 14,
    paddingVertical: 5,
  },
});

export default MyChallenge;