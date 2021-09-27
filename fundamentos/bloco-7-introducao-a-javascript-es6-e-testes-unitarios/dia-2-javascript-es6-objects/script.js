const pedido = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };

  const customerInfo = (order) => {
      let mensagem = `Olá ${order.order.delivery.deliveryPerson}, entrega para ${order.name}: Telefone ${order.phoneNumber}, ${order.address.street}, Número: ${order.address.number}, AP: ${order.address.apartment}`
      return mensagem;
  }

  console.log(customerInfo(pedido));
  
  const orderModifier = (order) => {
    let newBuyer = order.name = 'Luiz Silva';
    let newTotal = order.payment.total = '50';
    let pizzas = Object.keys(order.order.pizza)

    let message = `Olá ${newBuyer}, o total do seu pedido de ${pizzas[1]}, ${pizzas[0]} e ${order.order.drinks.coke.type} é R$ ${newTotal}`;

    return message;
}
  
  console.log(orderModifier(pedido));
