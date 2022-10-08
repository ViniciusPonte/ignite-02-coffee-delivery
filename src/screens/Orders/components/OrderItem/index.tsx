import { CaretDown, CaretUp } from 'phosphor-react'
import { useState } from 'react'
import { IOrder } from '../../../../@types/order'
import { format, compareAsc } from 'date-fns'
import { CoffeeList, CoffeeRow } from './styles'

interface OrderItemProps {
  order: IOrder
}

export function OrderItem({ order }: OrderItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  console.log(order.date)

  const totalItems = order.orderItems.reduce((sum, i) => {
    if (i.quantity) {
      return sum + i.price * i.quantity
    } else {
      return sum
    }
  }, 0)

  const taxDelivery = 3.5

  const total = totalItems + taxDelivery

  return (
    <>
      <tr>
        <td>
          <strong>#{order.id}</strong>
        </td>
        <td>{format(new Date(order.date), 'dd/MM/yyyy')}</td>
        <td>{order.paymentMethod}</td>
        <td>
          {total.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </td>
        <td>
          {isOpen ? (
            <CaretUp
              size={22}
              onClick={() => setIsOpen(!isOpen)}
              style={{ cursor: 'pointer' }}
            />
          ) : (
            <CaretDown
              size={22}
              onClick={() => setIsOpen(!isOpen)}
              style={{ cursor: 'pointer' }}
            />
          )}
        </td>
      </tr>

      {isOpen && (
        <CoffeeList>
          {order.orderItems.map((coffee) => (
            <CoffeeRow key={coffee.id}>
              <img src={coffee.image} alt={coffee.name} />
              <span className="coffee-name">{coffee.name}</span>
              <span>x{coffee.quantity}</span>
              <span>
                {coffee.price.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </CoffeeRow>
          ))}
        </CoffeeList>
      )}
    </>
  )
}
