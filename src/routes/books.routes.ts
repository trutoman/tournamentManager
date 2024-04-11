import { Router, Request } from 'express'
import booksController from '../controllers/books.controller'

const router: Router = Router()

router.get('/', booksController.index)
router.get('/add', booksController.addBook)
router.post('/add', booksController.saveBook)

export default router
