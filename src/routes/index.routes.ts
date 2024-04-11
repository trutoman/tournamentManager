import { Router, Request } from 'express'
import indexController from '../controllers/index.controller'

const router: Router = Router()

router.get('/', indexController.index)
router.get('/about', indexController.about)

export default router
