import { BiWalk, BiCoffeeTogo } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbDogBowl } from "react-icons/tb";

export const typesProjectsList = [
  {
    key: 1,
    title: "PetCare",
    body: "Pagina web para la promoción de una tienda de cuidado de mascotas",
    icon: <TbDogBowl />,
    image: "/images/petcare.jpg",
    url: "https://gianicolajara.github.io/pet-care/",
  },
  {
    key: 2,
    title: "Walkout",
    body: "Pagina web para pronostico del tiempo en una ciudad",
    icon: <BiWalk />,
    image: "/images/walkout.jpg",
    url: "https://walkout-gianicolajara.vercel.app/",
  },
  {
    key: 3,
    title: "Ecommerce Shopify",
    body: "Pagina web tipo ecommerce de ropa",
    icon: <AiOutlineShoppingCart />,
    image: "/images/shopify.jpg",
    url: "https://ecommerce-nextjs-shopify-beige.vercel.app/",
  },
  {
    key: 4,
    title: "Wordpress Coffee",
    body: "Pagina web wordpress para una tienda de cafe",
    icon: <BiCoffeeTogo />,
    image: "/images/coffee.jpg",
    url: "https://wordpress-nextjs-example.vercel.app/",
  },
];
