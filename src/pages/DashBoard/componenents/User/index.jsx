import { useContext } from "react"
import { DataContext } from "../../../../Context/context"
import { UserDivStyled } from "./style"


export const User =() =>{

    const {user} =useContext(DataContext)
    console.log(user)
    return(
        <UserDivStyled>
            <div className="contentUser">
                <h2>Ola {user.user.name}</h2>
                <p>{user.user.course_module}</p>

            </div>
        </UserDivStyled>

    )
}