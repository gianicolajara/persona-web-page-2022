import { BiWalk, BiCoffeeTogo, BiGame } from "react-icons/bi";
import { GiBigWave } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbDogBowl } from "react-icons/tb";
import { BsBuilding } from "react-icons/bs";

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
  {
    key: 5,
    title: "Gaming Page",
    body: "Pagina web gaming hecha en nextjs",
    icon: <BiGame />,
    image: "/images/gaming-page.png",
    url: "https://gaming-platform-web-design.vercel.app/",
  },
  {
    key: 6,
    title: "Roslynka",
    body: "Pagina web de venta de arte de resina",
    icon: <GiBigWave />,
    image: "/images/roslynka.png",
    url: "https://roslynka-web-example.vercel.app/",
  },
  ,
  {
    key: 7,
    title: "Administración",
    body: "App para la administración de ingresos y egresos",
    icon: <BsBuilding />,
    image: "/images/administration.jpg",
    url: "https://administration-system-green.vercel.app/",
  },
];
