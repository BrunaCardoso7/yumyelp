import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const url = 'https://yumyelp-api.onrender.com'

export async function getRestaurantes () {
    try {
        
        const response = await axios.get(url+'/rest/')

        return response.data
    } catch (error) {
        console.error("Error during API call:", error);
        throw error;
    }
}

async function createUser (nome, email, senha, data) {
    try {

    console.log("credentials to api: ", nome, email, senha, data)

    
        const response = await axios.post(url+"/user/create", {
            nome: nome,
            email: email, 
            senha: senha,
            tipo: data
        }, {
            "headers": {
                "Content-Type": "application/json"
            }
        })

        console.log("Response received:", response);
        return response
    } catch (error) {
        console.error("Error during API call:", error);
        throw error;
    }
}

export async function createRestaurante (formData, userId) {
    try {
        console.log('função foi chamada', formData, userId)
        
        const result = await axios.post(`https://yumyelp-api.onrender.com/rest/create/`, formData,
            {
                "params":{
                    "user_id": userId
                },
                "headers": {
                    "Content-Type": "multipart/form-data"
                }
            }
        )
        
        return result
    } catch (error) {
        console.error("Error during API call:", error);
        throw error;
    }
}

export async function loginUser (email, senha) {
    try {

    console.log("credentials to api: ", email, senha)

    
        const response = await axios.post(url+"/user/login", {
            email: email, 
            senha: senha
        }, 
        {
            "headers": {
                "Content-Type": "application/json"
            }
        })
        console.log("Response received:", response.data);

        const token = response.data.tokenPrivate

        if(!token) {
            console.log('token não informado')
        }

        const userId = response.data.user.id

        if(!userId) {
            console.log('user id não informado')
        }

        await AsyncStorage.setItem("token", token)
        await AsyncStorage.setItem("userId", userId)


        return response.data
    } catch (error) {
        console.error("Error during API call:", error);
        throw error;
    }
}
export async function getById (id) {
    try {
        const response = await axios.get(`${url}/rest/${id}`)

        return response.data
    } catch (error) {
        console.error("Error during API call:", error);
        throw error;
    }
}
export async function getUserById (id) {
    try {
        const response = await axios.get(`${url}/user/${id}`)

        return response.data
    } catch (error) {
        console.error("Error during API call:", error);
        throw error;
    }
}

export async function getAllProdutos () {
    try {
        
        const produtos = await axios.get(`${url}/prod/`)

        return produtos.data
    } catch (error) {
        console.error("Error during API call:", error);
        throw error;
    }
}

export async function createProduto (formData, restId) {
    try {
        console.log('função foi chamada', formData, restId)
        
        const result = await axios.post('https://yumyelp-api.onrender.com/prod/create/', formData,
        {
            "params": {
                "rest_id": restId
            },
            "headers": {
                "Content-Type": "multipart/form-data"
            }
        }
        )
        
        return result
    } catch (error) {
        console.error("Error during API call:", error);
        throw error;
    }
}
export async function getRest (user_id) {
    try {
        console.log('função foi chamada', user_id)
        
        const result = await axios.get('https://yumyelp-api.onrender.com/rest/get/',
        {
            "params": {
                "user_id": user_id
            },
            "headers": {
                "Content-Type": "multipart/form-data"
            }
        }
        )
        return result
    } catch (error) {
        console.error("Error during API call:", error);
        throw error;
    }
}



export default createUser