import axios, { AxiosInstance } from 'axios'

const api : AxiosInstance = axios.create({
    baseURL: 'http://192.168.15.6:3333'
})

export default api;

/*
Dev's comments

Sometimes the local IP for the computer holding the server changes.
Use the ipconfig command in the CMD to find out the local IP address.
Look under "Adaptador de Rede sem Fio Wi-Fi:" and copy the sequence 
corresponding to "Endereço IPv4".
*/