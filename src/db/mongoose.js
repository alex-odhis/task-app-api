const mongoose = require('mongoose')

mongoose.connect(process.env.DEV_CONNECTION_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})



