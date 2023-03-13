import tradicionalImage from '../assets/cofffeesImagees/Type=Tradicional.png'
import americanoImage from '../assets/cofffeesImagees/Type=Americano.png'
import expressoCremosoImage from '../assets/cofffeesImagees/Type=Expresso_Cremoso.png'
import expressoGeladoImage from '../assets/cofffeesImagees/Type=Cafe_Gelado.png'
import cafeComLeiteImage from '../assets/cofffeesImagees/Type=Café_com_Leite.png'
import latteImage from '../assets/cofffeesImagees/Type=Latte.png'
import capuccinoImage from '../assets/cofffeesImagees/Type=Capuccino.png'
import MacchiatoImage from '../assets/cofffeesImagees/Type=Macchiato.png'
import MochaccinoImage from '../assets/cofffeesImagees/Type=Mochaccino.png'
import ChocolateQuenteImage from '../assets/cofffeesImagees/Type=Chocolate_Quente.png'
import cubanoImage from '../assets/cofffeesImagees/Type=Cubano.png'
import HavaianoImage from '../assets/cofffeesImagees/Type=Havaiano.png'
import arabeImage from '../assets/cofffeesImagees/Type=Árabe.png'
import irlandesImage from '../assets/cofffeesImagees/Type=Irlandês.png'

export const Coffee = [
  {
    id: 1,
    nome: 'Expresso Tradicional',
    preco: '9,90',
    descricao: 'O tradicional café feito com água quente e grãos moídos',
    image: tradicionalImage,
    tag: [{ id: 1, name: 'Tradicional' }],
  },
  {
    id: 2,
    nome: 'Expresso Americano',
    preco: '9,90',
    descricao: 'Expresso diluído, menos intenso que o tradicional',
    image: americanoImage,
    tag: [{ id: 1, name: 'Tradicional' }],
  },
  {
    id: 3,
    nome: 'Expresso Cremoso',
    preco: '9,90',
    descricao: 'Café expresso tradicional com espuma cremosa',
    image: expressoCremosoImage,
    tag: [{ id: 1, name: 'Tradicional' }],
  },
  {
    id: 4,
    nome: 'Expresso Gelado',
    preco: '9,90',
    descricao: 'Bebida preparada com café expresso e cubos de gelo',
    image: expressoGeladoImage,
    tag: [
      { id: 1, name: 'Tradicional' },
      { id: 2, name: 'Gelado' },
    ],
  },
  {
    id: 5,
    nome: 'Café com Leite',
    preco: '9,90',
    descricao: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: cafeComLeiteImage,
    tag: [
      { id: 1, name: 'Tradicional' },
      { id: 2, name: 'Com Leite' },
    ],
  },
  {
    id: 6,
    nome: 'Latte',
    preco: '9,90',
    descricao:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: latteImage,
    tag: [
      { id: 1, name: 'Tradicional' },
      { id: 2, name: 'Com leite' },
    ],
  },
  {
    id: 7,
    nome: 'Capuccino',
    preco: '9,90',
    descricao:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: capuccinoImage,
    tag: [
      { id: 1, name: 'Tradicional' },
      { id: 2, name: 'Com leite' },
    ],
  },
  {
    id: 8,
    nome: 'Macchiato',
    preco: '9,90',
    descricao: 'Café expresso misturado com um pouco de leite quente e espuma',
    image: MacchiatoImage,
    tag: [
      { id: 1, name: 'Tradicional' },
      { id: 2, name: 'Com leite' },
    ],
  },
  {
    id: 9,
    nome: 'Mocaccino',
    preco: '9,90',
    descricao: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: MochaccinoImage,
    tag: [
      { id: 1, name: 'Tradicional' },
      { id: 2, name: 'Com leite' },
    ],
  },
  {
    id: 10,
    nome: 'Chocolate Quente',
    preco: '9,90',
    descricao: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: ChocolateQuenteImage,
    tag: [
      { id: 1, name: 'Tradicional' },
      { id: 2, name: 'Com leite' },
    ],
  },
  {
    id: 11,
    nome: 'Cubano',
    preco: '9,90',
    descricao:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: cubanoImage,
    tag: [
      { id: 1, name: 'Especial' },
      { id: 2, name: 'Alcoólico' },
      { id: 3, name: 'Gelado' },
    ],
  },
  {
    id: 12,
    nome: 'Havaiano',
    preco: '9,90',
    descricao: 'Bebida adocicada preparada com café e leite de coco',
    image: HavaianoImage,
    tag: [{ id: 1, name: 'Especial' }],
  },
  {
    id: 13,
    nome: 'Árabe',
    preco: '9,90',
    descricao: 'Bebida preparada com grãos de café árabe e especiarias',
    image: arabeImage,
    tag: [{ id: 1, name: 'Especial' }],
  },
  {
    id: 14,
    nome: 'Irlandês',
    preco: '9,90',
    descricao: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: irlandesImage,
    tag: [
      { id: 1, name: 'Especial' },
      { id: 2, name: 'Alcoólico' },
    ],
  },
]
