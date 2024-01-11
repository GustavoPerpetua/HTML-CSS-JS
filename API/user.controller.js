const User = {
  get: (req, res) => {
    res.status(200).send("este es un saludo");
  },
  list: (req, res) => {
    res.status(200).send("hola");
  },
  create: (req, res) => {
    res.status(201).send("creando saludo");
  },
  destroy: (req, res) => {
    res.status(204).send("eliminando saludo");
  },
  update: (req, res) => {
    res.status(204).send("actualizando saludo");
  },
};

module.exports = User;
