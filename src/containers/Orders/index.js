import React, { useState, useEffect } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import H1 from '../../components/Title'
import Button from '../../components/Button'

import {
  Container,
  Image,
  ContainerItens,
  Order,
  POrder,
  PClient,
} from './styles'

import BurguerBag from '../../assets/BurguerBag.svg'
import Trash from '../../assets/trash.svg'

function Orders() {

  // const newOrders = []
  const [newOrders, setNewOrders] = useState([])
  const navigate = useNavigate()
 


  useEffect (() => {
   async function fetchNewOrders () {
    const{ data: getOrders } = await axios.get('http://localhost:3001/orders/')
    
    setNewOrders(getOrders);
  }

   fetchNewOrders()

  }, [])

  function goBackPage() {
    navigate('/');
  }


  async function deleteOrder(ordersId) {
    await axios.delete(`http://localhost:3001/orders/${ordersId}`)
    const newOrder = newOrders.filter(orders => orders.id !== ordersId)

    setNewOrders(newOrder)
  }

  return <Container>

    <Image alt="Logo Burguer Bag" src={BurguerBag} />

    <ContainerItens>
      <H1>Pedidos</H1>

      <ul>
        {newOrders.map((orders) => (
          <Order key={orders.id}>
            <div>
              <POrder> {orders.order}</POrder>
              <PClient> {orders.clientName}</PClient>
            </div>
            <button onClick={() => deleteOrder(orders.id)}>
              <img alt="trash icon" src={Trash} />
            </button>
          </Order>
        ))}
      </ul>

      <Button isBack={true} onClick={goBackPage}>Voltar</Button>

    </ContainerItens>
  </Container>
}

export default Orders
