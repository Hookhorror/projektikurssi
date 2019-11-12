import axios from 'axios';

const getWorldEducationYears = async () => {
  const response = await axios.get('/api/educationlength');
  return response.data;
};

// Post request for education data with country code
const getEducationLength = async code => {
  const postData = { code };
  const response = await axios.post('/api/educationlength', postData);
  return response.data;
};

export default { getEducationLength, getWorldEducationYears };
