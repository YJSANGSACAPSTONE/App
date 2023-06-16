import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import SchedulePopup from './SchedulePopup';

export default function OtherScreen({ navigation }) {
  const [scheduleList, setScheduleList] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const saveSchedule = (schedule) => {
    setScheduleList([...scheduleList, schedule]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>This is the Other Screen</Text>
      </View>
      <View style={styles.scheduleList}>
        {scheduleList.map((schedule, index) => (
          <Text key={index} style={styles.scheduleText}>{schedule.task}</Text>
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={openPopup}>
        <Text style={styles.buttonText}>할 일 추가 +</Text>
      </TouchableOpacity>
      <SchedulePopup visible={popupVisible} onClose={closePopup} onSave={saveSchedule} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4C6EF5',
  },
  textContainer: {
    marginBottom: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  scheduleList: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
  },
  scheduleText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#E1CA00',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  buttonText: {
    textAlign: 'center',
    color: '#381B1A',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
