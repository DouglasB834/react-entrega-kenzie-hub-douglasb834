import React, { useContext } from 'react'
import { List } from '../List'
import { UlcardStyled } from './style'
import { DataContext } from "../../../../Context/DataContext/context"

const Card = () => {
  const { user}= useContext(DataContext)
  console.log(user)
  return (
    <UlcardStyled>
      {
        user.techs.map(tech =>(
        <List key={tech.id} tech={tech}/>
          
        ))
      }
    </UlcardStyled>
  )
}

export default Card
