import mongoose from 'mongoose'
import { mongodb } from './keys'

mongoose.connect(mongodb.URI, { dbName: 'ts_crud', user: 'admin', pass: 'admin' })
  .then(db => console.log('DB is connected'))
  .catch(error => console.log('Error connecting DB'))
