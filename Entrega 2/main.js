const Contenedor = require("./Contenedor");

const contenedor = new Contenedor("productos.json");

const main = async () => {
  const id1 = await contenedor.save({ title: "Comida", price: 450 });
  const id2 = await contenedor.save({ title: "Bebida", price: 300 });
  const id3 = await contenedor.save({ title: "Aderezo", price: 100 });

  console.log(id1, id2, id3); // 1, 2, 3

  const object2 = await contenedor.getById(2);
  console.log(object2); // { title: 'Bebida', price: 300, id: 2 }

  await contenedor.deleteById(2);

  const allCurrentObjects = await contenedor.getAll();
  console.log(allCurrentObjects);
  /**
     * [
        { title: 'Comida', price: 450, id: 1 },
        { title: 'Aderezo', price: 100, id: 3 }
        ]
    */

  //await contenedor.deleteAll();
};

main();
