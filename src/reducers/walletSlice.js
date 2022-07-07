import { createSlice } from "@reduxjs/toolkit"

const initialState = { user: "Arif", balance: 100000 }

const walletSlice = createSlice({
  name: "wallet",
  initialState: initialState,
  reducers: {
    deposit: (state, action) => {
      state.balance += action.payload.amount
    },
    withdraw: (state, action) => {
      if (state.balance >= action.payload.amount) {
        state.balance -= action.payload.amount
      }
    },
  },
})

export const { deposit, withdraw } = walletSlice.actions

export const selectUser = (state) => state.wallet.user
export const selectBalance = (state) => state.wallet.balance

export default walletSlice.reducer
