import React from 'react';
import Product from './Product';

const Products = () => {

    const products = [
        {
            "id": 1,
            "name": "MacBook",
            "price": "Price: 100000",
            "left": "Left: 31",
            "image": "https://intocode.ru/d/react-project-1/images/1.jpg",
        },
        {
            id: 2,
            name: "Galaxy",
            price: "Price: 35999",
            left: "Left: 11",
            image: "http://intocode.ru/d/react-project-1/images/2.jpg",
        },
        {
            id: 3,
            name: "Скутер",
            price: "Price: 65500",
            left: "Left: 0",
            image: "http://intocode.ru/d/react-project-1/images/3.jpg",
        },
        {
            id: 4,
            name: "Монитор Samsung",
            price: "Price: 12000",
            left: "Left: 7",
            image: "http://intocode.ru/d/react-project-1/images/4.jpg",
        },
        {
            id: 5,
            name: "Респераторная маска",
            price: "Price: 500",
            left: "Left: 24",
            image: "http://intocode.ru/d/react-project-1/images/5.jpg",
        },
        {
            id: 6,
            name: "Стиральная машина",
            price: "Price: 100000",
            left: "Left: 0",
            image: "http://intocode.ru/d/react-project-1/images/6.jpg",
        },
        {
            id: 7,
            name: "Белый холодильник",
            price: "Price: 43100",
            left: "Left: 18",
            image: "http://intocode.ru/d/react-project-1/images/7.jpg",
        },
        {
            id: 8,
            name: "Колонка",
            price: "Price: 3000",
            left: "Left: 1",
            image: "http://intocode.ru/d/react-project-1/images/8.jpg",
        },
        {
            id: 9,
            name: "Наушники",
            price: "Price: 1500",
            left: "Left: 5",
            image: "http://intocode.ru/d/react-project-1/images/9.jpg",
        },
    ]

    return (
        <>
            {products.map((item) => {
                return <Product key={item.id} name={item.name} price={item.price} left={item.left} image={item.image} />
            })}
        </>
    );
};

export default Products;