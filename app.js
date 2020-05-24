const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cors());

//my routes
const authRoutes = require('./routes/auth');
const imageRoutes = require('./routes/image');

//routes
app.use("/api", authRoutes);
app.use("/api", imageRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
	console.log(`App is running on port ${PORT}`)
});