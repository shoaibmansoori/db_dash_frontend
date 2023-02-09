import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Joi  from "joi"
import { useValidator } from "react-joi"
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
export default function Signupinput(props) {
    // Joi implementation
    const { state, setData, setExplicitField, validate } = useValidator({
        initialData: {
          firstname: null,
          lastname: null,
          email:null,
          password:null,
          confirmpassword:null
        },
        schema: Joi.object({
          firstname: Joi.string().min(3).required(),
          lastname: Joi.string().min(4).required(),
            email: Joi.string()
                .email({
                    tlds: { allow: false },
                })
                .required(),
          password: Joi.string().min(8).required(),
          confirmpassword: Joi.string().min(8).required(),
        }),
        explicitCheck: {
            firstname: false,
            lastname: false,
            email: false,
            password: false,
            confirmpassword: false
        },
        validationOptions: {
            abortEarly: true,
        },
    })
    const updateFirstname = (e) => {
        // react < v17
        e.persist()
        setData((old) => ({
            ...old,
            firstname: e.target.value,
        }))
    }
    const updateLastname = (e) => {
      // react < v17
      e.persist()
      setData((old) => ({
          ...old,
          lastname: e.target.value,
      }))
    }
    const updateEmail = (e) => {
        // react < v17
        e.persist()
        setData((old) => ({
            ...old,
            email: e.target.value,
        }))
    }
    const updatePassword = (e) => {
      // react < v17
      e.persist()
      setData((old) => ({
          ...old,
          password: e.target.value,
      }))
    }
    const updateConfirmpassword = (e) => {
        // react < v17
        e.persist()
        setData((old) => ({
            ...old,
            confirmpassword: e.target.value,
        }))
      }
    const onSubmitSignup = (e)=>{
      e.preventDefault();
      const userdata = {
        password : e.target.password.value,
        confirmpassword : e.target.confirmpassword.value,
        firstname : e.target.firstname.value,
        lastname : e.target.lastname.value,
        email : e.target.email.value,
      }
      if(userdata.password === userdata.confirmpassword)
      {
        props?.SignuphandleSubmit(userdata);
      }
    }
  return (
    <div>
        <Box onSubmit={onSubmitSignup} component="form"  style={{backgroundColor:"white",}}  sx={{width:'100%', height:'100%',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}>
        {/* First name and last name */}
        <Box sx={{width:'auto', height:'100%',display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: 'center',  px:2}} >
          <Box sx={{p:1}}>
            <TextField error={state?.$errors?.firstname.length === 0 ?false:state.$errors.firstname?true:false} required style={{width:"auto", height:"auto"}}  id="firstname" name='firstname' type="text" label="First Name" variant="outlined" onChange={updateFirstname}  onBlur={() => setExplicitField("firstname", true)}/>
            <div style={{color:'red', fontSize:'14px', padding:'3px'}}>
                {state.$errors.firstname.map((data) =>data.$message).join(",")}
            </div>
          </Box>
          <Box sx={{p:1}}>
            <TextField error={state?.$errors?.lastname.length === 0 ?false:state.$errors.lastname?true:false} required id="lastname" name='lastname' type="text" label="Last Name" variant="outlined" onChange={updateLastname}  onBlur={() => setExplicitField("lastname", true)} />
            <div style={{color:'red', fontSize:'14px',padding:'3px'}}>
             {state.$errors.lastname.map((data) => data.$message).join(",")}
            </div>
          </Box>
        </Box>
        {/* Email */}
        <Box style={{backgroundColor:''}} sx={{width:'100%', height:'100%',display: 'flex',flexDirection: 'row',justifyContent: '',alignItems: 'center',px:2}}>
          <TextField error={state?.$errors?.email.length === 0 ?false:state.$errors.email?true:false} sx={{mx:3}} required style={{width:"100%", height:"auto"}}  id="email" name='email' type="email" label="Email" variant="outlined" onChange={updateEmail}  onBlur={() => setExplicitField("email", true)} />
        </Box>
            <div style={{color:'red', fontSize:'14px',padding:'3px'}}>
                {state.$errors.email.map((data) => data.$message).join(",")}
            </div>
        {/* Password and confirm Password */}
        <Box sx={{width:'auto', height:'100%',display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: 'center',px:2 }}>
          <Box sx={{p:1}}>
            <TextField error={state?.$errors?.password.length === 0 ?false:state.$errors.password?true:false} required style={{width:"auto", height:"auto"}}  id="password" name='password' type="password" label="Password" variant="outlined" onChange={updatePassword}  onBlur={() => setExplicitField("password", true)}/>
              <div style={{color:'red', fontSize:'14px',padding:'3px'}}>
                {state.$errors.password.map((data) => data.$message).join(",")}
              </div>
          </Box>
          <Box sx={{p:1}}>
            <TextField error={state?.$errors?.confirmpassword.length === 0 ?false:state.$errors.confirmpassword?true:false} required id="confirmpassword" name="confirmpassword" type="password" label="Confirm Password" variant="outlined" onChange={updateConfirmpassword}  onBlur={() => setExplicitField("confirmpassword", true)}/>
            <div style={{color:'red', fontSize:'14px',padding:'3px'}}>
                {state.$errors.confirmpassword.map((data) => data.$message).join(",")}
            </div>
          </Box>
        </Box>
        <Button type='submit' onClick={validate} sx={{bgcolor: 'text.primary', width:"50%", my:2}} variant="contained">Signup</Button>
        </Box>
    </div>
  )
}
Signupinput.propTypes = {
  SignuphandleSubmit: PropTypes.func
}