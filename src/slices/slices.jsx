import {createSlice} from '@reduxjs/toolkit'

const initialState={
    isLogged:false
}

const userLogged=createSlice({
    name:"userLogged",
    initialState,
    reducers:{
        setLogin:(state,action)=>{
            state.isLogged=true
        },
        setLogout:(state,action)=>{
            state.isLogged=false
        }
    }

})

export const {setLogin,setLogout}=userLogged.actions

export default userLogged.reducer