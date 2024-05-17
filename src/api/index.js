import axios from "axios";

const url = 'http://localhost:4000/rest/'

async function createUser (formData) {
    try {
 

        console.log(formData)

    
        const response = await axios.get(url)

        console.log("Response received:", response);
        return response
    } catch (error) {
        console.error("Error during API call:", error);
        throw error;
    }
}

export default createUser 