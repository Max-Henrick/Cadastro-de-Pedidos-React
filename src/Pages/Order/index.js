import React, { useState, useEffect } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import Embalagem from "../../assets/embalagem.png"
import Trash from "../../assets/trash.svg"
import { Container, Image, ContainerData, H1, Button, Order, NameClient, TrashImage, ListOrder, Data } from "./styles"

const App = () => {

  const [order, setOrder] = useState([])
  const navigate = useNavigate()
  console.log(order)
  useEffect(() => {

    // Função que exibe na Tela todos os Pedidos Realizados
    async function consultOrder() {
      const { data: fetchOrder } = await Axios.get("http://localhost:3001/order",)
      setOrder(fetchOrder)
    }
    consultOrder()

  }, [])

    // Função para Deletar Pedidos
    async function deleteOrder(orderId) {
      await Axios.delete(`http://localhost:3001/order/${orderId}`)

      const newOrders = order.filter(order => order.id !== orderId)
      setOrder(newOrders)  
    }

    // Função para voltar a Tela Inicial
    function goBackHome() {
      navigate("/")
    }


  return (

    <Container>

      <Image alt="Logo-CodeBurger" src={Embalagem}></Image>

      <ContainerData>

        <H1>Pedidos</H1>
        {
          order.map(order => (
            <ListOrder key={order.id}>

              <Data>
                <Order>{order.order}</Order>
                <NameClient>{order.clientName}</NameClient>
              </Data>

              <button onClick={() => deleteOrder(order.id)}>
                <TrashImage alt="Lata-de-Lixo" src={Trash}></TrashImage>
              </button>

            </ListOrder>
          ))
        }

        <Button onClick={goBackHome} >Voltar</Button>

      </ContainerData>

    </Container>



  )
}

export default App