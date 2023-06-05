import React from 'react';
import { View, TextInput, Button, StyleSheet, CheckBox, Text, ScrollView } from 'react-native';

const ChallengeWrite = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topView}>
      <Text style={styles.challengeText}>챌린지 명:</Text>
      {/* <TextInput style={styles.input} /> */}

      </View>
      <View style={styles.middleView}>
        <Text>참가 인원:</Text>
        <TextInput style={styles.input} />
        <Text>시작일 종요일:</Text>
        {/* 날짜 선택을 위한 DatePicker 등을 사용하세요 */}
      </View>
      
        <Text>카테고리:</Text>
        <TextInput style={styles.input} />
        <Text>참가금:</Text>
        <TextInput style={styles.input} />
        <Text>필수 등록 사진 개수:</Text>
        <TextInput style={styles.input} />
        <Text>인증 타입:</Text>
        <View style={styles.checkboxContainer}>
          {/* <CheckBox />
          <Text>사진</Text>
          <CheckBox />
          <Text>메타버스</Text>
        </View>
        <Text>빈도 타입:</Text>
        <View style={styles.checkboxContainer}>
          <CheckBox />
          <Text>하루에 N번</Text>
          <CheckBox /> */}
          <Text>N일에 한번</Text>
        </View>
        <Text>빈도:</Text>
        <TextInput style={styles.input} />
        <Text>성공점수:</Text>
        <TextInput style={styles.input} />
        <Text>빈도:</Text>
        <TextInput style={styles.input} />
        <Text>성공점수:</Text>
        <TextInput style={styles.input} />
        <Text>빈도:</Text>
        <TextInput style={styles.input} />
        <Text>성공점수:</Text>
        <TextInput style={styles.input} />
      
      <View style={styles.bottomView}>
      <View style={styles.buttonView}>
        <Button style={styles.button} title="사진 선택하러 가기" onPress={() => {}} />
        <Button style={styles.button} title="개설하기" onPress={() => {}} />
      </View>
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    // justifyContent: 'center',
    justifyContent: 'flex-start',
  },
  topView: {
    flex: 1,
    justifyContent: 'flex-start',
    // marginBottom: 10,
    margin : 30,
  },
  challengeText: {
    fontSize: 30, // 원하는 크기로 설정
  },
  middleView: {
    flex: 2,
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  bottomView: {
    flex: 1,
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
    // marginBottom: 10,
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default ChallengeWrite;