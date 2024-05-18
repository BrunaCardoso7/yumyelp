import axios from "axios";

const url = 'https://yumyelp-api.onrender.com'

async function createUser (nome, email, senha) {
    try {

    console.log("credentials to api: ", nome, email, senha)

    
        const response = await axios.post(url+"/user/create", {
            nome: nome,
            email: email, 
            senha: senha
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

export default createUser 