import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchChallengeList } from './api/apis';
import Axios from 'axios';

const BulletinBoardButton = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.bulletinBoardButton}>
    <Text>{title}</Text>
  </TouchableOpacity>
);

const PostAll = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    // 서버 또는 API에서 게시물 데이터 가져오기
    fetchPosts();
  }, []);

  // 더미데이터 
  const fetchPosts = async () => {
    try {
      const dummyData = [
        {
          id: 1,
          title: 'Sample Post 1',
          content: 'This is the content of Sample Post 1.',
          date: '2023-06-15',
          author: 'John Doe',
          views: 10,
          comments: 5,
        },
        {
          id: 2,
          title: 'Sample Post 2',
          content: 'This is the content of Sample Post 2.',
          date: '2023-06-14',
          author: 'Jane Smith',
          views: 5,
          comments: 2,
        },
      ];

      setPosts(dummyData);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const renderPostItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('PostDetails', { postId: item.id })}
      style={styles.postItemContainer}
    >
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postContent}>{item.content}</Text>
      <View style={styles.postInfoContainer}>
        <View style={styles.postInfoItem}>
          <Image source={require('../assets/img/views-icon.png')} style={styles.viewsIcon} />
          <Text style={styles.postInfoText}>{item.views}</Text>
        </View>
        <View style={styles.postInfoItem}>
          <Image source={require('../assets/img/message-icon.png')} style={styles.icon} />
          <Text style={styles.postInfoText}>{item.comments}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handleSearch = () => {
    const filteredPosts = posts.filter((post) => post.title.includes(searchText));
    setFilteredPosts(filteredPosts);
  };

  const navigateToPostWrite = () => {
    navigation.navigate('PostWrite');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/img/reading-glasses.png')} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
          placeholder="제목 검색"
          onSubmitEditing={handleSearch}
          blurOnSubmit={false}
        />
      </View>
      <View style={styles.boardSelectionContainer}>
        <BulletinBoardButton
          title="게시판 1"
          onPress={() => console.log('Bulletin Board 1 pressed')}
        />
        <BulletinBoardButton
          title="게시판 2"
          onPress={() => console.log('Bulletin Board 2 pressed')}
        />
        {/* Add additional bulletin board buttons here */}
      </View>
      <FlatList
        data={searchText ? filteredPosts : posts}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.postListContainer}
      />
      <TouchableOpacity onPress={navigateToPostWrite} style={styles.createButton}>
        <Text>작성하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  boardSelectionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  bulletinBoardContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  bulletinBoardButton: {
    marginRight: 20,
    fontSize: 30,
  },
  postListContainer: {
    paddingVertical: 10,
  },
  postItemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  postContent: {
    fontSize: 16,
  },
  postInfoContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  postInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  viewsIcon: {
    width: 25,
    height: 13,
    marginRight: 5,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  postInfoText: {
    fontSize: 14,
  },
  createButton: {
    alignSelf: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
});

export default PostAll;
