const express = require('express')
const cors = require('cors')
const startApolloServer = require('./apollo-server');

const app = express();

startApolloServer(app);

// to access graphql API from the client side
app.use(cors({

}))

const port = process.env.PORT || 5000
app.listen(port, (err) => {
  if (err) throw err
  console.log(`Graphql Server started on: http://localhost:${port}`)
})
