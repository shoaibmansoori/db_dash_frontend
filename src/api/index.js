// import axios from "../interceptor/interceptor.js";
// const URL = process.env.REACT_APP_API_BASE_URL;


// const signUpUser = async (data)=>
// {   
//     // console.log(URL+"api/user");
//     return await axios.post(URL +"/users" ,data );
// }

// const createUser = async (data)=>
// {
//     return await axios.post(URL + "/users",data);
// }

// const getAllUsers = async()=>
// {
//     return await axios.get(URL + "/users")
// }

// const getUserById = async (id)=>
// {
//     return await axios.get(URL + `/users/${id}`)
// }

// const updateUser = async (id,data) =>
// {
//     return await axios.patch(URL + `/users/${id}`,data);
// }

// const deleteUser = async (id) =>
// {
//     return await axios.delete(URL + `/users/${id}`);
// }

// const findUserByEmail = async (email) =>
// {
//     return await axios.get(URL + `/users/${email}`);
// }

// //Orgnization API

// const createOrg = async (data) =>
// {
//     return await axios.post(URL + "/orgs",data)
// }

// const getAllOrgs = async () => 
// {
//     return await axios.get(URL +"/orgs");
// }

// const getOrgById = async (id) =>
// {
//     return await axios.get(URL +`/orgs/${id}`);
// }

// const addUserInOrg = async (id, data) =>
// {
//     return  await axios.patch(URL + `/orgs/${id}/adduser`,data)
// }

// const updateOrg = async (id ,data) =>
// {
//     return await axios.patch(URL + `/orgs/${id}`,data)
// }

// const removeUserInOrg = async (id , data) =>
// {
//     return await axios.patch(URL + `/orgs/${id}/removeuser`,data)
// }    

// const deleteOrg = async (id)=>
// {
//     return await axios.delete(URL + `/orgs/${id}`)
// }

// // DB API

// const createDb = async (orgId , data) =>
// {
//     return await axios.post(URL + `/dbs/${orgId}/dbs`,data)
// }

// const getAllDb = async () =>
// {
//     return await axios.get(URL + "/dbs")
// }

// const getDbById = async (dbId) =>
// {
//     return await axios.get(URL +`/dbs/${orgId}/dbs/${dbId}`);
// }

// const getDbByOrgId = async (orgId) =>
// {
//     return await axios.get(URL + `/dbs/${orgId}/alldbs`)
// }

// const renameDb = async (id,data) =>
// {
//     return await axios.patch(URL +`/dbs/${orgId}/dbs/${id}`,data)
// }

// const deleteDb = async (id) =>
// {
//     return await axios.delete(URL +`/dbs/${orgId}/dbs/${id}`)
// }


// //table Api

// const createTable = async (db_id , data) =>
// {
//     return await axios.post(URL +`/dbs/${db_id}/table`,data)
// }

// const getTable = async (db_id , tableName) =>
// {
//     return await axios.get(URL +`/dbs/${db_id}/${tableName}/fetchtable`)
// }

// const updateTable = async(db_id , data) =>
// {
//     return await axios.patch(URL +`/dbs/${db_id}/updatetable`,data)
// }

// const deleteTable = async (db_id,data) =>
// {
//     return await axios.delete(URL +`/dbs/${db_id}/deletetable/${id}`,data)
// }


// //View API

// const createView = async (db_id,tableName,data) =>
// {
//     return await axios.post(URL +`/dbs/${db_id}/view/${tableName}`,data)
// }

// const deleteView = async (db_id,tableName,data) =>
// {
//     return await axios.delete(URL +`/dbs/${db_id}/deleteview/${tableName}`,data)
// }

// const deleteFieldInView = async (db_id,tableName,data) =>
// {
//     return await axios.delete(URL +`/dbs/${db_id}/deletefieldinview/${tableName}`,data)
// }


// //form API
// const createForm = async (db_id,tableName) =>
// {
//     return await axios.post(URL +`/dbs/${db_id}/table/${tableName}/form`)
// }


// //Field API
// const createField = async (db_id,tableName,data) =>
// {
//     return await axios.post(URL +`/dbs/${db_id}/${tableName}/field`,data)
// }


// const updateField = async (db_id,tableName,data) =>
// {
//     return await axios.patch(URL +`/dbs/${db_id}/${tableName}/updatefield`,data)
// }

// const deleteField = async (db_id,tableName,data) =>
// {
//     return await axios.delete(URL +`/dbs/${db_id}/${tableName}/deletefield`,data)
// }


// //filter API

// const createFilter = async (db_id,tableName,data) =>
// {
//     return await axios.post(URL +`/dbs/${db_id}/${tableName}/filter`,data)
// }

// const updateFilterName = async (db_id,tableName,data) =>
// {
//     return await axios.patch(URL +`/dbs/${db_id}/${tableName}/updateFilter`,data)
// }

// const deleteFilter = async (db_id,tableName,data) =>
// {
//     return await axios.delete(URL +`/dbs/${db_id}/${tableName}/deleteFilter`,data)
// }

// const updateQuery = async (db_id,tableName,data) =>
// {
//     return await axios.patch(URL +`/dbs/${db_id}/${tableName}/updateQuery`,data)
// }




// export {signUpUser,createUser,getAllUsers,getUserById,updateUser,deleteUser,findUserByEmail,
    
    
    
    
//     createForm,
   
//     createFilter,updateFilterName,deleteFilter,updateQuery};
