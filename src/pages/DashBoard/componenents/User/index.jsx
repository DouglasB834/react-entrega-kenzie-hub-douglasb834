
import { UserDivStyled } from "./style"


export const User =({user}) =>{

    return(
        <UserDivStyled>
            <div className="contentUser">
                <h2>Olá {user.name} </h2>
                <p>{user.course_module}</p>

            </div>
        </UserDivStyled>

    )
}