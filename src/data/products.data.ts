import prod1 from "@/assets/product/productoDst1.png";
import prod2 from "@/assets/product/productoDst2.png";
import prod3 from "@/assets/product/productoDst3.png";
import prod4 from "@/assets/product/productoMsV1.png";

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    stock: number;
    category: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Camiseta básica",
        price: 45000,
        description: "Camiseta de algodón 100% color negro.",
        image: prod1,
        stock: 8,
        category: "Moda",
    },
    {
        id: 2,
        name: "Camiseta dorada",
        price: 120000,
        description: "Camiseta manga corta color dorado.",
        image: prod2,
        stock: 8,
        category: "Hogar",
    },
    {
        id: 3,
        name: "Camiseta deportiva",
        price: 30000,
        description: "Camiseta sin mangas para deporte.",
        image: prod3,
        stock: 8,
        category: "Accesorios",
    },
    {
        id: 4,
        name: "Producto más vendido",
        price: 80000,
        description: "El más vendido del mes en TechStore.",
        image: prod4,
        stock: 8,
        category: "Tecnología",
    },
];



export const featuredProducts: Product[] = [
    {
        id: 3,
        name: "Camiseta deportiva",
        price: 30000,
        description: "Camiseta sin mangas para deporte.",
        image: prod3,
        stock: 8,
        category: "Accesorios",
    },
    {
        id: 4,
        name: "Producto más vendido",
        price: 80000,
        description: "El más vendido del mes en TechStore.",
        image: prod4,
        stock: 8,
        category: "Tecnología",
    },
    {
        id: 1,
        name: "Camiseta básica",
        price: 45000,
        description: "Camiseta de algodón 100% color negro.",
        image: prod2,
        stock: 8,
        category: "Moda",
    },

];


export const promotionalSlides = [
    {
        img: "/src/assets/product/bannerPromocionalMinimalista.png",
        title: "¡Promociones!",
    },
    {
        img: "/src/assets/product/prodAccesrios-1.png",
        title: "¡Promociones!",
    },
];