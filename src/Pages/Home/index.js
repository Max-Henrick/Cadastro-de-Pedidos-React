import React,{ useState, useRef } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import CodeBurger from "../../assets/codeBurguer.png"
import { Container, Image, ContainerData, H1, Label, Input, Button } from "./styles"

const App = () => {

  const [order, setOrder] = useState([])
  const inputOrder = useRef()
  const inputClientName = useRef()
  const navigate = useNavigate()

  // Função para Criação de Novo Pedido
  async function addNewOrder () {
      const {data: orders} = await Axios.post("http://localhost:3001/order", {

      order: inputOrder.current.value,
      clientName: inputClientName.current.value
      })
  
  // Função para avançar a Tela que consulta Pedidos
  setOrder([...order, orders])
  navigate('/order')
  }

  return (

    <Container>

      <Image alt="Logo-CodeBurger" src={CodeBurger}></Image>

      <ContainerData>

        <H1>Faça seu pedido!</H1>

        <Label>Pedido</Label>
        <Input ref={inputOrder}placeholder="Faça seu Pedido"></Input>

        <Label>Nome do Cliente</Label>
        <Input ref={inputClientName} placeholder="Digite seu Nome"></Input>

        <Button onClick={addNewOrder}>Novo Pedido</Button>

      </ContainerData>

    </Container>

  )
}

export default App