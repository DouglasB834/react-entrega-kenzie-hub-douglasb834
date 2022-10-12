
import { useContext } from "react"
import { DataContext } from "../../../../Context/DataContext/context"
import { UserDivStyled } from "./style"


export const User =() =>{
    const { user}= useContext(DataContext)
    
    return(
        <UserDivStyled>
            <div className="contentUser">
                <h2>Olá {user?.name} </h2>
                <p>{user?.course_module}</p>
            </div>
        </UserDivStyled>

    )
}