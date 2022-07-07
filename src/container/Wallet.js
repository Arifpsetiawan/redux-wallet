import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  deposit,
  selectBalance,
  selectUser,
  withdraw,
} from "../reducers/walletSlice"

function Wallet() {
  const user = useSelector(selectUser)
  const balance = useSelector(selectBalance)

  const [currentAmount, setCurrentAmount] = useState(0)

  const dispatch = useDispatch()

  const handleWithdraw = (amount) => {
    dispatch(withdraw(amount))
  }
  const handleDeposit = (amount) => {
    dispatch(deposit(amount))
  }

  return (
    <>
      <h1>{user} Wallet</h1>
      <h2>Balance: Rp{balance.toLocaleString("ID")}</h2>
      <button onClick={() => handleWithdraw({ amount: 5000 })}>
        Withdraw -Rp5.000
      </button>
      <button onClick={() => handleDeposit({ amount: 5000 })}>
        Deposit +Rp5.000
      </button>
      <br />
      <input
        type="number"
        onChange={(e) =>
          e.target.value === ""
            ? setCurrentAmount(0)
            : setCurrentAmount(parseInt(e.target.value))
        }
      ></input>
      <button onClick={() => handleWithdraw({ amount: currentAmount })}>
        Withdraw
      </button>
      <button onClick={() => handleDeposit({ amount: currentAmount })}>
        Deposit
      </button>
    </>
  )
}

export default Wallet
