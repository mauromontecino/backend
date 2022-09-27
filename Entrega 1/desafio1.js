class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  addMascota(nombreMascota) {
    this.mascotas.push(nombreMascota);
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(titulo, nombreAutor) {
    this.libros.push({ nombre: titulo, autor: nombreAutor });
  }

  getBookNames() {
    return this.libros.map((libro) => libro.nombre);
  }
}

const libros = [
  {
    nombre: "El Libro Negro de las Horas",
    autor: "Eva García Sáenz de Urturi",
  },
  {
    nombre: "El mapa de los anhelos",
    autor: "Alice Kellen",
  },
];

const newUser = new Usuario("Mauro", "Montecino", libros, ["Perro", "Gato"]);

console.log(newUser.getFullName()); // Mauro Montecino

console.log(newUser.getBookNames()); // 'El Libro Negro de las Horas', 'El mapa de los anhelos'
newUser.addBook("El castillo de Barbazul", "Javier Cercas");
console.log(newUser.getBookNames()); // 'El Libro Negro de las Horas', 'El mapa de los anhelos', 'El castillo de Barbazul'

console.log(newUser.countMascotas()); // 2
newUser.addMascota("Pajarito");
console.log(newUser.countMascotas()); // 3
