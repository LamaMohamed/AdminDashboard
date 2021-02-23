let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  dataBaseConfig = require('./database/db');

// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dataBaseConfig.db, {
  useNewUrlParser: true,
  useFindAndModify: false
}).then(() => {
    console.log('Database connected sucessfully ')
  },
  error => {
    console.log('Could not connected to database : ' + error)
  }
)

// Set up express js port
const restaurantRoute = require('./routes/restaurant.route')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

// Setting up static directory
app.use(express.static(path.join(__dirname, 'dist/AdminDashboard')));


// RESTful API root

app.use('/api', restaurantRoute)

// PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/admin-dashboard/index.html'));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});


// edited hotel 
const hotelRoute = require('./routes/hotel.route')
const app2 = express();
app2.use(bodyParser.json());
app2.use(bodyParser.urlencoded({
  extended: false
}));
app2.use(cors());

// Setting up static directory
app2.use(express.static(path.join(__dirname, 'dist/admin_dashboard')));


// RESTful API root

app2.use('/api', hotelRoute)

// PORT
const port2 = process.env.PORT || 8008;

app2.listen(port2, () => {
  console.log('Connected to port ' + port)
})

// Find 404 and hand over to error handler
app2.use((req, res, next) => {
  next(createError(404));
});

// Index Route
app2.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app2.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/admin-dashboard/index.html'));
});

// error handler
app2.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});