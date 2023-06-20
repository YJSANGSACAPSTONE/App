import axios from 'axios';

// export const fetchChallengeList = async (uid) => {
//   try {
//     const response = await axios.get('http://localhost:8070/challenge/alllist');
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };


// axios.get('http://localhost:8070/api/reigster')
//   .then(response => {
//     // Handle the received data here
//     const data = response.data;
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });


//   import axios from 'axios';

const createPost = async () => {
  try {
    const response = await axios.post('http://localhost:8070/api/reigster', {
      title: 'My Post Title',
      content: 'Lorem ipsum dolor sit amet.',
    });

    // Handle the response here
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

// Call the createPost function when you want to send the data
createPost();