import dotenv from 'dotenv'
import express from 'express'
import 'reflect-metadata'

import AppDataSource from './config/db.config.js'

const PORT = process.env.PORT || 5000

dotenv.config()

const app = express()

app.use(express.json())
// app.use('/products', productRout)

AppDataSource.initialize()
   .then(() => {
      console.log('✓ Database: connected sucessfully')
   })
   .catch(err => {
      console.log(`✕ Database: error connecting database - ${err}`)
   })

app.listen(PORT, () => {
   console.log(`✓ Server: listening on port ${PORT}`)
})
