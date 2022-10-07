
import React from 'react'
import { Link } from 'react-router-dom'
import Error from "../../assets/404Error.gif"
import {DivErrorStyled } from './style'
export const NotFound = () => {
  return (
    <DivErrorStyled>
        <img src={Error} alt="img error 404" />
        <Link className="linkBackHome" to="/"> go to Home</Link>
    </DivErrorStyled>
  )
}
