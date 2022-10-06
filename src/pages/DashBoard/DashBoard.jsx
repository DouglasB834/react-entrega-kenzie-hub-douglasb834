
// import { HeaderHome } from "../../components/Header/headerHome/indx"
import { useEffect, useState } from "react"
import { instance } from "../../Api/instance"
import { User } from "./componenents/User"
import { MainStyled } from "./style"



export const DashBoard =()=>{

    useEffect(()=>{
        
        const token = localStorage.getItem("@token")
        instance.defaults.headers.authorization = `Bearer ${token}`
        instance.get(`/profile`)                
        .then(({data}) =>{
            setUser(data)
        })
        .catch(error => console.log(error))
    },[])

    const [user, setUser] = useState()
   
    

    return (
        <MainStyled>
        <User user={user} />
        <div className="container">
            <section>

                <div>
                    <h3>Que pena! Estamos em desenvolvimento 😪</h3>
                    <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                </div>

            {/* finalizando essa parte tambem para adiantar */}
                {/* <div>
                    <h4>Tecnologias</h4>

                    <button>X</button>
                </div>
                <ul>
                <p>componente List </p>

                    <li>
                        componente de card
                    </li>
                </ul> */}

            </section>
        </div>
            

           
        </MainStyled>
    )

}