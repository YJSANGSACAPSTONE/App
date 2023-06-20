import React from 'react';
import { View, Button } from 'react-native';
import axios from 'axios';

const api = () => {

    const createPost = async () => {
        try {
          const response = await axios.post('http://localhost:8080/app/post', {
            title: 'My Post Title',
            content: 'Lorem ipsum dolor sit amet.',
          });
      
          // Handle the response here
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      
  const handleButtonClick = () => {
    createPost();
  };

  return (
    <View>
      <Button title="Create Post" onPress={handleButtonClick} />
    </View>
  );
};

export default api;