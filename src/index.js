const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const cors = require('cors')
const path = require('path')


const app = express()
const port= process.env.PORT || 3000

// app.use((req, res, next)=>{
//     res.status(503).send('Service is currently under maintainance, Please try again soon') 
// })

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'))
})


//ROUTES
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=>{
    console.log('Server is up on port'+ port);
})

//(FINDING TASKS OF A USER USING THE CONNECTION)
// const main = async()=>{
    // const task = await Task.findById('5fd3699be1d59e15f4df67fd')
    // await task.populate('owner').execPopulate()
    // console.log('task.owner');

    // const user = await User.findById('5fd365a473e82a15487d9347')
    // await user.populate('tasks').execPopulate()
    // console.log(user.tasks);
//}