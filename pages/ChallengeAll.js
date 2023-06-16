import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { fetchChallengeList } from './api/apis';
// import Axios from 'axios';

function ChallengeAll() {
  const navigation = useNavigation();

  // const [popularChallenges, setPopularChallenges] = useState([]);
  // const [newChallenges, setNewChallenges] = useState([]);
  const [myChallenges, setMyChallenges] = useState([]);
  const popularChallenges = [
    { id: 1, title: '인기 챌린지 1' },
    { id: 2, title: '인기 챌린지 2' },
    { id: 3, title: '인기 챌린지 3' },
    { id: 4, title: '인기 챌린지 4' },
    { id: 5, title: '인기 챌린지 5' },
  ];

  const newChallenges = [
    { id: 1, title: '신규 챌린지 1' },
    { id: 2, title: '신규 챌린지 2' },
    { id: 3, title: '신규 챌린지 3' },
    { id: 4, title: '신규 챌린지 4' },
    { id: 5, title: '신규 챌린지 5' },
  ];
  useEffect(() => {
    // const fetchChallenges = async () => {
    //   try {
    //     const response = await fetchChallengeList();
    //     setPopularChallenges(response.popularlist);
    //     setNewChallenges(response.recentlist);
    //     setMyChallenges(response.mylist);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // fetchChallenges();

    
  }, []);

  const handleClick = () => {
    navigation.navigate('ChallengeRead');
  };

  const handleToChallengeWrite = () => {
    navigation.navigate('ChallengeWrite');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* 헤더 컴포넌트 */}
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryTitle}>
            <Text style={styles.categoryTitleText}>인기 챌린지</Text>
          </View>
          <View style={styles.challengeContainer}>
            {/* 인기 챌린지 목록 */}
            {popularChallenges.map((challenge) => (
              <TouchableOpacity onPress={handleClick} style={styles.challengeItem} key={challenge.id}>
                <View>
                  <Text style={styles.challengeItemText}>{challenge.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryTitle}>
            <Text style={styles.categoryTitleText}>신규 챌린지</Text>
          </View>
          <View style={styles.challengeContainer}>
            {/* 신규 챌린지 목록 */}
            {newChallenges.map((challenge) => (
              <TouchableOpacity style={styles.challengeItem} key={challenge.id} onPress={handleClick}>
                <View>
                  <Text style={styles.challengeItemText}>{challenge.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>


       {/* <View style={styles.buttom}>
         <TouchableOpacity style={styles.button} onPress={handleToChallengeWrite}>
             <Text style={styles.buttonText}>새로운 챌린지 작성</Text>
         </TouchableOpacity>
       </View> */}

      <TouchableOpacity style={styles.button} onPress={handleToChallengeWrite}>
        <Text style={styles.buttonText}>새로운 챌린지 작성</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    // 헤더 스타일링
  },
  content: {
    flex: 1,
    padding: 10,
  },
  buttom: {
    height: 50,
  },

  categoryContainer: {
    marginBottom: 10,
  },
  categoryTitle: {
    marginBottom: 5,
  },
  categoryTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    // 카테고리 타이틀 텍스트 스타일링
  },
  challengeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  challengeItem: {
    width: '48%',
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  challengeItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    // 챌린지 아이템 텍스트 스타일링
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ChallengeAll;