import express from 'express'
import history from 'connect-history-api-fallback'
import path from 'path'

const __dirname = path.resolve()

const app = express()

app.use(history())

app.use(express.static('dist'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'))
})

app.listen(3000, () => {
    console.log('server start')
})
