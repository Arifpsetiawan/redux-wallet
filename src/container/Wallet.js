import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectBalance, selectUser } from "../rootReducer"

function Wallet() {
  const user = useSelector(selectUser)
  const balance = useSelector(selectBalance)

  const [currentAmount, setCurrentAmount] = useState(0)

  const dispatch = useDispatch()

  const onWithdraw = (amount) => {
    dispatch({
      type: "withdraw",
      amount,
    })
  }
  const onDeposit = (amount) => {
    dispatch({
      type: "deposit",
      amount,
    })
  }

  return (
    <>
      <h1>{user} Wallet</h1>
      <h2>Balance: Rp{balance.toLocaleString("ID")}</h2>
      <button onClick={() => onWithdraw(5000)}>Withdraw -Rp5.000</button>
      <button onClick={() => onDeposit(5000)}>Deposit +Rp5.000</button>
      <br />
      <input
        type="number"
        onChange={(e) => setCurrentAmount(parseInt(e.target.value))}
      ></input>
      <button onClick={() => onWithdraw(currentAmount)}>Withdraw</button>
      <button onClick={() => onDeposit(currentAmount)}>Deposit</button>
    </>
  )
}

export default Wallet
