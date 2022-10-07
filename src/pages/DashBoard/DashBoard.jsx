
// import { HeaderHome } from "../../components/Header/headerHome/indx"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { instance } from "../../Api/instance"
import { HeaderHome } from "../../components/Header/headerHome/indx"
import { User } from "./componenents/User"
import { MainStyled } from "./style"



export const DashBoard =()=>{
    const navigate = useNavigate()
    useEffect(()=>{        
        const token = localStorage.getItem("@token")
        instance.defaults.headers.authorization = `Bearer ${token}`
        instance.get(`/profile`)                
        .then(({data}) =>{
            setUser(data)
        })
        .catch(error => console.log(error))
        if(!token){
            navigate("/")         
        }

    },[])

    const [user, setUser] = useState({})
   
    

    return (
        <MainStyled>
            {/* <HeaderHome/> */}
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