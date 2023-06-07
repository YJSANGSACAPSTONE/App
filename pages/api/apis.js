import axios from 'axios';

export const fetchChallengeList = async (uid) => {
  try {
    const response = await axios.get('http://localhost:8070/challenge/alllist');
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};