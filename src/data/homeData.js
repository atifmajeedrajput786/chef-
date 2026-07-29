import headImg from '../assets/img/head-img.png'
import headBtnImg from '../assets/img/head-btn-img.png'
import tomettto from '../assets/img/tomettto.svg'
import headBorderImg from '../assets/img/head-border-img.svg'
import rectangleImg from '../assets/img/Rectangle-img.png'

import t1 from '../assets/img/t1.svg'
import t2 from '../assets/img/t2.svg'
import t3 from '../assets/img/t3.svg'
import t4 from '../assets/img/t4.svg'
import t5 from '../assets/img/t5.svg'

import simg1 from '../assets/img/simg1.png'
import simg2 from '../assets/img/simg2.png'

import f1 from '../assets/img/f-1.svg'
import f2 from '../assets/img/f-2.svg'
import f3 from '../assets/img/f-3.svg'
import tImg from '../assets/img/t-img.png'

import C1 from '../assets/img/C1.svg'
import C2 from '../assets/img/C2.svg'
import C3 from '../assets/img/C3.svg'
import C4 from '../assets/img/C4.svg'

export const heroSlides = [
  {
    title: 'More taste,\nLess waste.',
    image: headImg,
    dish: 'Thai Green Curry with Spring Vegetables',
  },
  {
    title: 'Cook smarter,\nEat better.',
    image: headImg,
    dish: 'Cuban Tomato and Black Bean Soup',
  },
]

export const heroDecor = { headBtnImg, tomettto, headBorderImg, rectangleImg }

export const cuisineTabs = [
  { key: 'all', label: 'ALL CUISINES', icon: t1 },
  { key: 'tai', label: 'TAI', icon: t2 },
  { key: 'italian', label: 'ITALIAN', icon: t3 },
  { key: 'japanise', label: 'JAPANISE', icon: t4 },
  { key: 'american', label: 'AMERICAN', icon: t5 },
]

export const sampleDishes = [
  { image: simg1, cuisine: 'Thai food', title: 'Thai Green Curry with Spring Vegetables', rating: '4.6' },
  { image: simg2, cuisine: 'cuban food', title: 'Cuban Tomato and Black Bean Soup', rating: '4.8' },
  { image: simg1, cuisine: 'Thai food', title: 'Thai Green Curry with Spring Vegetables', rating: '4.6' },
  { image: simg2, cuisine: 'cuban food', title: 'Cuban Tomato and Black Bean Soup', rating: '4.8' },
]

export const thinkingItems = [
  {
    icon: f1,
    title: 'Our AI know what is 47 is!',
    text: "Joking. Of Course no, we don't know what is 47 is. But our AI model know all about all food recipes in the world.",
    image: tImg,
  },
  {
    icon: f2,
    title: 'We Train our Own AI Models',
    text: 'Training our own AI model requires selecting a suitable algorithm, preparing and cleaning data, defining model architecture.',
    image: tImg,
  },
  {
    icon: f3,
    title: 'We belives in Unlimited Potential',
    text: 'The unlimited potential of AI lies in its ability to analyze vast amounts of data, automate processes, and provide solutions of problems.',
    image: tImg,
  },
]

export const testimonials = [
  { icon: C1, name: 'Jason Biggs' },
  { icon: C2, name: 'Annette Black' },
  { icon: C3, name: 'Courtney Henry' },
  { icon: C4, name: 'Esther Howard' },
  { icon: C1, name: 'Jason Biggs' },
  { icon: C2, name: 'Annette Black' },
  { icon: C3, name: 'Courtney Henry' },
  { icon: C4, name: 'Esther Howard' },
]

import Vector1 from '../assets/img/Vector 1.png'
import Vector2 from '../assets/img/Vector 2.png'
import Vector3 from '../assets/img/Vector 3.png'

export const receiptSteps = [
  {
    image: Vector3,
    title: 'Sign up for desktop\nor mobile',
    text: "Signing up for our receipts app allows you to easily keep track of your expenses, organize your receipts, and access valuable financial insights and analysis, all in one convenient location.",
  },
  {
    image: Vector2,
    title: 'Search\ningridients',
    text: "Use our receipt app's search feature to find recipes that include specific ingredients. Discover new meal ideas and easily access ingredients lists and preparation instructions for each recipe.",
  },
  {
    image: Vector1,
    title: 'Get Desired\nRecipes',
    text: 'Our receipts app allows you to filter recipes based on your dietary preferences, cooking time, and other criteria. Find the perfect recipe for any occasion and enjoy cooking with confidence.',
  },
]

export const testimonialQuote =
  'Signing up for our receipts app allows you to easily keep track of your expenses, organize your receipts, and access valuable financial insights and analysis, all in one convenient location.'
