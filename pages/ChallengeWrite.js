import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
// import DatePicker from 'react-native-datepicker';
import CheckBox from 'expo-checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';


const ChallengeWrite = () => {

  const [isChecked, setChecked] = useState(false);
  const [isCheckeds, setCheckeds] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const handleStartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(false);
    setStartDate(currentDate);
  };

  const handleEndDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndDatePicker(false);
    setEndDate(currentDate);
  };

  const showStartDatePickerModal = () => {
    setShowStartDatePicker(true);
  };

  const showEndDatePickerModal = () => {
    setShowEndDatePicker(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.topView}>
        <Text style={styles.challengeText}>챌린지 명: 미라클 모닝</Text>
      </View>

      <View style={styles.middleView}>
        <Text>참가 인원: </Text>
        <TextInput style={styles.input} />

        {/* <Text>시작일:</Text> */}
        <TouchableOpacity onPress={showStartDatePickerModal}>
        <Text>시작일 선택하기</Text>
        </TouchableOpacity>
        <Text>{startDate.toDateString()}</Text>
        {/* <Text>{startDate}</Text> */}
        {showStartDatePicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={handleStartDateChange}
          />
        )}
        
        {/* <Text>종료일:</Text> */}
        <TouchableOpacity onPress={showEndDatePickerModal}>
        <Text>종료일 선택하기</Text>
        </TouchableOpacity>
        <Text>{endDate.toDateString()}</Text>
        {showEndDatePicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={handleEndDateChange}
          />
        )}

        <Text>카테고리: </Text>
        <TextInput style={styles.input} />
        <Text>참가금:</Text>
        <TextInput style={styles.input} />
        <Text>필요 등록 사진 개수:</Text>
        <TextInput style={styles.input} />

        <Text>인증 타입:   
        <Text>사진</Text>
        <CheckBox style={styles.checkbox} value={!isChecked} onValueChange={setChecked} color={'#4630EB'} />
        <Text>메타버스</Text>
        <CheckBox style={styles.checkbox} value={isChecked} onValueChange={setChecked} color={'#4630EB'} />
        </Text>

        <Text>빈도 타입: 
        <Text>하루에 N번</Text>
        <CheckBox style={styles.checkbox} value={!isCheckeds} onValueChange={setCheckeds} color={'#4630EB'}  />
        <Text>N일에 한번</Text>
        <CheckBox style={styles.checkbox} value={isCheckeds} onValueChange={setCheckeds} color={'#4630EB'}  />
        </Text>

        <Text>빈도:</Text>
        <TextInput style={styles.input} />
        <Text>성공점수:</Text>
        <TextInput style={styles.input} />

      </View>

      <View style={styles.bottomView}>
          <Button style={styles.button} title="사진 선택하러 가기" onPress={() => {}} />
      </View>

      <View style={styles.buttonView}>
        <Button style={styles.button} title="개설하기" onPress={() => {}} />
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    justifyContent: 'flex-start',
  },
  topView: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 30,
  },
  challengeText: {
    fontSize: 20,
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
  },
  input: {
    height: 40,
    width: '50%', 
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