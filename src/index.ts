
import express from 'express'
import diaryRoute from './routes/diaries'
const app = express()
app.use(express.json())//middleware que transforma la req boddy a um json

const PORT = 3000

//i los parametros quieren ser ignorados se coloca un guion bajo solo o al comienzo de parametro ,solo en typescript
app.get('/ping',  (_req, res) => {
    console.log("alguien pingueo", + new Date().toLocaleDateString())
    res.send("pong")
})

app.use('/api/diaries', diaryRoute)

app.listen(PORT, () => {
    console.log('server corriendo en el puerto ',PORT)
})
