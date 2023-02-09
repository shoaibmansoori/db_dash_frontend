import axios from "../interceptor/interceptor.js";
const URl = "http://localhost:5000/";
const signUpUser = async (data)=>
{   console.log(URL+"api/user");
    return await axios.post("http://localhost:5000/"+"api/user" ,data );
}
export 
{
    signUpUser
};