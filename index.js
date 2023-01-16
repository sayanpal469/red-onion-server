const app = require('./app');
require('dotenv').config();
const connectDB = require('./dataBase')

connectDB()

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running at ${process.env.PORT || 4000}`);
})