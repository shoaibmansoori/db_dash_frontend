import axios from "../interceptor/interceptor.js";
const signUpUser = async (data)=>
{   
    // console.log(URL+"api/user");
    //first_name = 
    //last_name
    //email
    return await axios.post("http://localhost:5000/"+"users/" ,data );
}
export {signUpUser};