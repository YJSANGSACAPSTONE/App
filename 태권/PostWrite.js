import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PostWrite = () => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  // Function to handle saving the new entry
  const savePost = () => {
    // Add logic to save the post using an API or other method
    // You can access the entered title and contents using the 'title' and 'contents' variables
    console.log('Title:', title);
    console.log('Contents:', contents);

    // Clear the input fields
    setTitle('');
    setContents('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>제목:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>내용:</Text>
      <TextInput
        style={[styles.input, styles.contentsInput]}
        value={contents}
        onChangeText={setContents}
        multiline
        textAlignVertical="top"
      />

      <Button title="저장" onPress={savePost} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  contentsInput: {
    height: 300, 
  },
});

export default PostWrite;
