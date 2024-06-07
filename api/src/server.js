import express from 'express'

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT || 8080

        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
        this.routes()    
    }

    getConnection() {}

    middlewares() {}

    routes() {
        // this.app.get('/', (req, res) => res.redirect('/api'))
        // this.app.use('/api', (req, res) => res.json({ status: 'success', payload: 'The API server is OK' }))
        this.app.use('/api/user', (req, res) => res.json({ mensaje: `Message from /api/users: ${process.env.MENSAJE}` }))
    }

    listen() {
        this.app.listen(this.port, () => { 
            console.log(`🚀 Server running on PORT=${this.port}`)
        })
    }
}

export default Server