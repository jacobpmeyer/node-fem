import express from 'express'
import bp from 'body-parser'
import morgan from 'morgan'

const { urlencoded, json } = bp

const db = {
  todos: {},
}

const app = express()

const port = 8000

// Apply the middleware
app.use(urlencoded({ extended: true }))
app.use(json())
app.use(morgan('dev'))

// The goal is to handle POST and GET verbs
// On POST we take the request and add a todo to our database
// On GET we return all the todos

app.post('/todo', (req, res) => {
  // Now, the data that I am getting here has been run through the middleware
  // This is because I am calling .use with the instance of express above
  const newTodo = {
    id: Date.now(),
    // Specifically here, the request has a .body because of body parser
    text: req.body.text
  }

  db.todos[newTodo.id] = newTodo
  res.json({ data: db.todos[newTodo.id] })
})

app.get('/todo', (req, res) => {
  res.json(db.todos)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

// node app.mjs to start server
