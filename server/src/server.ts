import express from 'express'
import history from 'connect-history-api-fallback'
import path from 'path'

const __dirname = path.resolve()

const port = Number(process.env.PORT || '3000')

const server = () => {
    const app = express()

    app.use(history())

    app.use(express.static('dist'))

    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'dist/index.html'))
    })

    app.listen(port, () => {
        console.log('server start')
    })
}

export default server
