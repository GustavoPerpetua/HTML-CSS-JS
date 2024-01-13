const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://gustavoaperpe:Puli122221@cluster0.ik1nith.mongodb.net/miapp?retryWrites=true&w=majority"
);

const User = mongoose.model("User", {
  username: String,
  edad: Number,
});

const crear = async () => {
  const user = new User({ username: "agustin", edad: 25 });
  const saveUser = await user.save();
  console.log(saveUser);
};

// crear();

const buscarTodo = async () => {
  const users = await User.find();
  console.log(users);
};

// buscarTodo();

const buscar = async () => {
  const user = await User.find({ username: "gustavo" });
  console.log(user);
};

// buscar();

const buscarUno = async () => {
  const user = await User.findOne({ username: "gustavo" });
  console.log(user);
};

// buscarUno();

const actualizar = async () => {
  const user = await User.findOne({ username: "gustavo" });
  console.log(user);
  user.edad = 30;
  await user.save();
};

// actualizar();

const eliminar = async () => {
  const user = await User.findOne({ username: "gustavo" });
  console.log(user);
  if (user) {
    await user.remove();
  }
};

eliminar();
