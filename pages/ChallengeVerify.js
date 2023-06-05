import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ChallengeVerify = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleBackground}>
          <Text style={styles.challengeName}>미라클 모닝</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>본인의 인증 사진을 업로드해주세요.</Text>
        <Text style={styles.subtext}>(양식에 맞춰 업로드해주세요!)</Text>
        <Text style={styles.subtext}>*(사진을 클릭하시면 됩니다!)</Text>
      </View>
      <View style={styles.uploadContainer}>
        <View style={styles.line} />
        <Image source={require('../assets/img/camera.png')} style={styles.thumbnail} />
        <View style={styles.line} />
      </View>
      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>올바른 촬영 TIP!</Text>
        <Text style={styles.tipText}>- 인증 목적에 맞게 구도를 설정해주세요.</Text>
        <Text style={styles.tipText}>- 밝은 배경에서 인증 장면을 촬영하세요.</Text>
        <Text style={styles.tipText}>- 혹시 촬영이 안되신다면 "휴대폰 설정 > 어플리케이션 > 권한"에서 카메라 허용으로 선택해주세요.</Text>
      </View>
      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>사진 올리기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  titleBackground: {
    backgroundColor: '#4c6ef5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  challengeName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
  subtext: {
    fontSize: 12,
    color: 'gray',
  },
  uploadContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  line: {
    width: '80%',
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 5,
  },
  tipContainer: {
    marginBottom: 20,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tipText: {
    marginBottom: 5,
  },
  uploadButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#4c6ef5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ChallengeVerify;