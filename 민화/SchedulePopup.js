import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, TimePickerAndroid, Platform } from 'react-native';

export default function SchedulePopup({ visible, onClose, onSave }) {
  const [task, setTask] = useState('');
  const [detail, setDetail] = useState('');
  const [time, setTime] = useState('');
  const [showTimePicker, setShowTimePicker] = useState(false);
  const timePickerRef = useRef();

  const handleSave = () => {
    // Save the schedule and close the popup
    onSave({ task, detail, time });
    onClose();
  };

  const openTimePicker = async () => {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        is24Hour: true,
      });
      if (action === TimePickerAndroid.timeSetAction) {
        const selectedTime = padZero(hour) + ':' + padZero(minute);
        setTime(selectedTime);
      }
    } catch ({ code, message }) {
      console.warn('Cannot open time picker', message);
    }
  };

  const padZero = (number) => {
    return String(number).padStart(2, '0');
  };

  const showPicker = () => {
    if (Platform.OS === 'android') {
      openTimePicker();
    } else {
      setShowTimePicker(true);
    }
  };

  const hidePicker = () => {
    if (Platform.OS === 'android') {
      // Do nothing
    } else {
      setShowTimePicker(false);
    }
  };

  const handleTimeChange = (event, selectedTime) => {
    if (selectedTime !== undefined) {
      const hours = selectedTime.getHours();
      const minutes = selectedTime.getMinutes();
      const selectedTimeString = padZero(hours) + ':' + padZero(minutes);
      setTime(selectedTimeString);
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.popupContainer}>
        <View style={styles.popupContent}>
          <Text style={styles.title}>일정 추가</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>할 일</Text>
            <TextInput
              style={styles.input}
              placeholder="할 일"
              value={task}
              onChangeText={setTask}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>상세 내용</Text>
            <TextInput
              style={styles.input}
              placeholder="상세 내용"
              value={detail}
              onChangeText={setDetail}
            />
          </View>
          <TouchableOpacity style={styles.timePicker} onPress={showPicker}>
            <Text style={styles.timePickerText}>{time ? time : '시간 선택'}</Text>
          </TouchableOpacity>
          {showTimePicker && (
            <DateTimePicker
              ref={timePickerRef}
              value={new Date()}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={handleTimeChange}
              onTouchCancel={hidePicker}
            />
          )}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>저장</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  popupContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  timePicker: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    justifyContent: 'center',
    marginBottom: 16,
  },
  timePickerText: {
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  button: {
    backgroundColor: '#E1CA00',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#381B1A',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
