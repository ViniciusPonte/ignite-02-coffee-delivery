import coffee1 from '../../../assets/coffees/coffee-1.svg'
import coffee2 from '../../../assets/coffees/coffee-2.svg'
import coffee3 from '../../../assets/coffees/coffee-3.svg'
import coffee4 from '../../../assets/coffees/coffee-4.svg'
import coffee5 from '../../../assets/coffees/coffee-5.svg'
import coffee6 from '../../../assets/coffees/coffee-6.svg'
import coffee7 from '../../../assets/coffees/coffee-7.svg'
import coffee8 from '../../../assets/coffees/coffee-8.svg'
import coffee9 from '../../../assets/coffees/coffee-9.svg'
import coffee10 from '../../../assets/coffees/coffee-10.svg'
import coffee11 from '../../../assets/coffees/coffee-11.svg'
import coffee12 from '../../../assets/coffees/coffee-12.svg'
import coffee13 from '../../../assets/coffees/coffee-13.svg'
import coffee14 from '../../../assets/coffees/coffee-14.svg'
import { ICoffee } from '../../../@types/coffee'

export const coffees: ICoffee[] = [
  {
    id: '1',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: coffee1,
    category: ['Tradicional'],
    price: 9.9,
  },
  {
    id: '2',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: coffee2,
    category: ['Tradicional'],
    price: 9.9,
  },
  {
    id: '3',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    image: coffee3,
    category: ['Tradicional'],
    price: 9.9,
  },
  {
    id: '4',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: coffee4,
    category: ['Tradicional', 'Gelado'],
    price: 7.9,
  },
  {
    id: '5',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: coffee5,
    category: ['Tradicional', 'Com leite'],
    price: 11.9,
  },
  {
    id: '6',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: coffee6,
    category: ['Tradicional', 'Com leite'],
    price: 11.9,
  },
  {
    id: '7',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: coffee7,
    category: ['Tradicional', 'Com leite'],
    price: 11.9,
  },
  {
    id: '8',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    image: coffee8,
    category: ['Tradicional', 'Com leite'],
    price: 11.9,
  },
  {
    id: '9',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: coffee9,
    category: ['Tradicional', 'Com leite'],
    price: 11.9,
  },
  {
    id: '10',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: coffee10,
    category: ['Especial', 'Com leite'],
    price: 13.9,
  },
  {
    id: '11',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: coffee11,
    category: ['Especial', 'Alcoolico', 'Gelado'],
    price: 15.9,
  },
  {
    id: '12',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: coffee12,
    category: ['Especial'],
    price: 12.9,
  },
  {
    id: '13',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: coffee13,
    category: ['Especial'],
    price: 12.9,
  },
  {
    id: '14',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: coffee14,
    category: ['Especial', 'Alcoolico'],
    price: 14.9,
  },
]
