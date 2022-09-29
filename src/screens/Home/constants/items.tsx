import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { ReactNode } from 'react'
import { defaultTheme } from '../../../styles/themes/default'

interface IItem {
  id: string
  title: string
  color: string
  icon: ReactNode
}

export const items: IItem[] = [
  {
    id: '1',
    title: 'Compra simples e segura',
    icon: (
      <ShoppingCart weight="fill" size={16} color={defaultTheme.colors.white} />
    ),
    color: defaultTheme.colors['yellow-dark'],
  },
  {
    id: '2',
    title: 'Embalagem mantém o café intacto',
    icon: <Package weight="fill" size={16} color={defaultTheme.colors.white} />,
    color: defaultTheme.colors['base-text'],
  },
  {
    id: '3',
    title: 'Entrega rápida e rastreada',
    icon: <Timer weight="fill" size={16} color={defaultTheme.colors.white} />,
    color: defaultTheme.colors.yellow,
  },
  {
    id: '4',
    title: 'O café chega fresquinho até você',
    icon: <Coffee weight="fill" size={16} color={defaultTheme.colors.white} />,
    color: defaultTheme.colors.purple,
  },
]
