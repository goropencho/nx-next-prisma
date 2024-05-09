import cors from 'cors'
import express from 'express'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (_, res) => {
  return res.send('HELLO WORLD')
})

app.listen(3001, () => {
  console.log('Listening on Port ', 3001)
})
