const express = require("express");
const app = express();
const port = 8000;
const cors = require('cors');

app.use(express.json())
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000"
}))

    
require("./config/mongoose.config");
    
    
const ShelterSchemaRoutes = require("./routes/shelter.routes");
ShelterSchemaRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));