import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rajaongkir.com/starter/',
  headers: {'key': '193d631c58eb75d93bdc5c112e2c08b0'}
});
