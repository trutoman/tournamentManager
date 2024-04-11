import { Request, Response } from 'express'

class IndexController {
  public index (req: Request, res: Response) {
    res.render('index', { title: 'This a book catalog manager' })
  }

  public about (req: Request, res: Response) {
    res.render('about', { title: 'About us' })
  }
}

const indexController = new IndexController()
export default indexController
