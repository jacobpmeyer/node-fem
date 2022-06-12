import express from 'express'
import bp from 'body-parser'
import morgan from 'morgan'

const { urlencoded, json } = bp

const db = {
  todos: [],
}

const app = express()

app.use(urlencoded({ extended: true }))
app.use(json())
app.use(morgan('dev'))
