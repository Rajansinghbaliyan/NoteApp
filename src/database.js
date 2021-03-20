const mongoose = require("mongoose");
const config = require("./config");

const MONGODB_URI = 'mongodb+srv://rajansinghbaliyan:joSSfsBJL31PCPbn@cluster0.560cd.mongodb.net/noteApp?retryWrites=true&w=majority';

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((db) => console.log("Mongodb is connected to", db.connection.host))
  .catch((err) => console.error(err));
