import axios from "../interceptor/interceptor.js";
const URL = process.env.REACT_APP_API_BASE_URL;

const createField = async (db_id,tableName,data) =>
{
    return await axios.post(URL +`/dbs/${db_id}/${tableName}/field`,data)
}
const getAllfields = async (db_id, tableName) =>{
    return  await axios.get(URL+`/dbs/${db_id}/${tableName}/field`)
}

const updateField = async (db_id,tableName,data) =>
{
    return await axios.patch(URL +`/dbs/${db_id}/${tableName}/updatefield`,data)
}

const deleteField = async (db_id,tableName,data) =>
{
    return await axios.delete(URL +`/dbs/${db_id}/${tableName}/deletefield`,data)
}





export{
    createField,
    updateField,
    deleteField,
    getAllfields
}