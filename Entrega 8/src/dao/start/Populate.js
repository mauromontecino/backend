import { knex } from "../../db.js";

const productos = [
  {
    timestamp: new Date().toISOString().slice(0, 19).replace("T", " "),
    title: "Some Product 1",
    price: 100,
    description: "Some dummy description 1",
    code: "X-1",
    image: "someDummyUrl1.com",
    stock: 150,
  },
  {
    timestamp: new Date().toISOString().slice(0, 19).replace("T", " "),
    title: "Some Product 2",
    price: 200,
    description: "Some dummy description 2",
    code: "X-2",
    image: "someDummyUrl2.com",
    stock: 250,
  },
  {
    timestamp: new Date().toISOString().slice(0, 19).replace("T", " "),
    title: "Some Product 3",
    price: 300,
    description: "Some dummy description 3",
    code: "X-3",
    image: "someDummyUrl3.com",
    stock: 350,
  },
  {
    timestamp: new Date().toISOString().slice(0, 19).replace("T", " "),
    title: "Some Product 4",
    price: 400,
    description: "Some dummy description 4",
    code: "X-4",
    image: "someDummyUrl4.com",
    stock: 450,
  },
];

const carritos = [
  {
    timestamp: new Date().toISOString().slice(0, 19).replace("T", " "),
  },
  {
    timestamp: new Date().toISOString().slice(0, 19).replace("T", " "),
  },
  {
    timestamp: new Date().toISOString().slice(0, 19).replace("T", " "),
  },
];

const productoCarritoRelations = [
  {
    carritoId: 2,
    productoId: 1,
  },
  {
    carritoId: 2,
    productoId: 2,
  },
  {
    carritoId: 2,
    productoId: 3,
  },
];

export async function populateProducts() {
  try {
    await knex.insert(productos).from("producto");
    console.log("๐งช Se agregaron Productos a la tabla");
  } catch (error) {
    console.log(error);
  }
}

export async function populateCarts() {
  try {
    await knex.insert(carritos).from("carrito");
    console.log("๐ Se agregaron Carritos a la tabla");
  } catch (error) {
    console.log(error);
  }
}

export async function populateProductoCarrito() {
  try {
    await knex.insert(productoCarritoRelations).from("productoCarrito");
    console.log("๐<->๐งช Se agregaron relaciones a la tabla");
    return;
  } catch (error) {
    console.log(error);
  }
}
