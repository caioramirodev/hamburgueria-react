import React, { useState, useRef } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

import H1 from '../../components/Title'
import Button from '../../components/Button'

import {
  Container,
  Image,
  ContainerItens,
  InputLabel,
  Input,
} from './styles'

import Logo from '../../assets/CodeBurguer.svg'


function App() {

  // const newOrders = []
  const [newOrders, setNewOrders] = useState([])
  const inputOrder = useRef()
  const inputClientName = useRef()
  const navigate = useNavigate()

  async function addNewOrder() {

    const { data:newOrder}  = await axios.post("http://localhost:3001/orders", { 
     order: inputOrder.current.value, 
     clientName: inputClientName.current.value 
    })
 

    setNewOrders([...newOrders,newOrder])

    navigate('/pedidos')

    
  }


  return <Container>

    <Image alt="Logo Code Burguer" src={Logo} />

    <ContainerItens>
      <H1>Faça seu pedido!</H1>

      <InputLabel>Pedido</InputLabel>
      <Input ref={inputOrder} placeholder="Seu pedido"></Input>

      <InputLabel>Nome do Cliente</InputLabel>
      <Input ref={inputClientName} placeholder="Nome"></Input>

      <Button onClick={addNewOrder}>Novo Pedido</Button>

    </ContainerItens>
  </Container>
}

export default App
