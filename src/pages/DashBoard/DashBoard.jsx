import { User } from "./componenents/User"
import { MainStyled } from "./style"



export const DashBoard =()=>{
    
    return (
        <MainStyled>
       

        <User/>
    

        <div className="container">
                <section>
                    <div>componente para add mais 
                        <h3>Tecnologias</h3>
                        <button>X</button>
                    </div>

                    <ul>
                    <p>componente List </p>

                        <li>
                            componente de card
                        </li>

                    </ul>
                </section>
            

            </div>
           
        </MainStyled>
    )

}