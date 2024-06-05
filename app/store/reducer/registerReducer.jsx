import { createSlice } from '@reduxjs/toolkit'

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    formInput:{
        firstName: null,
        sureName: null,
        gender: null,
        email: null,
        password: null,
        birthDate: null
    },
    optGender:[
        {label:"Laki-laki", value:"L"},
        {label:"Perempuan", value:"P"}
    ]
  },
  reducers: {
    setFirstName:(state, action) => {
        state.formInput.firstName = action.payload
    },
    setSurenName:(state, action) => {
        state.formInput.sureName = action.payload
    },
    setGender:(state, action) => {
        state.formInput.gender = action.payload
    },
    setEmail:(state, action) => {
        state.formInput.email = action.payload
    },
    setPassword:(state, action) => {
        state.formInput.password = action.payload
    },
    sethDate:(state, action) => {
        state.formInput.birthDate = action.payload
    },
    resetRegisterData:(state) =>{
        state.formInput = {
            firstName: null,
            sureName: null,
            gender: null,
            email: null,
            password: null,
            birthDate: null
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
    setFirstName, 
    setSurenName,
    setGender, 
    setEmail, 
    setPassword, 
    sethDate,
    resetRegisterData
} = registerSlice.actions

export default registerSlice.reducer