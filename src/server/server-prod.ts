import path from 'path'
import express from 'express'

const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html') as any


(app as any).use(express.static(DIST_DIR))

(app as any).app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
})

const PORT = (process as any).env.PORT || 8080 as any
(app as any).app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})