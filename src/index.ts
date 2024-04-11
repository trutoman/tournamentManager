import express from 'express'
import { engine } from 'express-handlebars'
import path from 'path'

// Import configuration library
import configuration from './lib/config'

// Importing Routes
import IndexRoutes from './routes/index.routes'
import BooksRoutes from './routes/books.routes'

// Initializations
const app = express()
import('./database')

// Settings
app.set('port', configuration.PORT)
app.set('views', path.join(__dirname, 'views'))

app.engine('.hbs', engine({
  extname: '.hbs',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  defaultLayout: 'main',
  partialsDir: path.join(app.get('views'), 'partials'),
  helpers: require('./lib/helpers')
}))

app.set('view engine', '.hbs')

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/', IndexRoutes)
app.use('/books', BooksRoutes)

// Static
app.use(express.static(path.join(__dirname, 'public')))

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
})
