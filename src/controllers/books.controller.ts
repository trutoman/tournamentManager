import { Request, Response } from 'express'
import BookModel, { Book } from '../models/book'

class BooksController {
  public async index (req: Request, res: Response): Promise<void> {
    const books : Book[] = await BookModel.find().lean()
    res.render('books/index', {
      title: 'This a book catalog manager',
      books
    })
  }

  public addBook (req: Request, res: Response): void {
    res.render('books/add', { title: 'Add a new book in database' })
  }

  public async saveBook (req: Request, res: Response) {
    const { title, author, isbn } = req.body
    const book: Book = new BookModel({ title, author, isbn })
    await book.save()
    res.redirect('/books')
  }
}

const booksController = new BooksController()
export default booksController
