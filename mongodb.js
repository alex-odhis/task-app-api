//CRUDE OPERATIONS

const mongodb = require ('mongodb');
const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName ='task-manager'


MongoClient.connect(connectionUrl, {useUnifiedTopology: true}, (err, client)=>{
    if (err) {
        return console.log(`Unable to connect to database`);
    }
    
    const db = client.db(databaseName) //Creating a DB

    // inserting data to DB
    // db.collection('users').insertOne({
    //     name: 'Alex',
    //     age: 30
    // }), (error, result)=>{
    //     if (error) {
    //        return console.log(`Unable to insert User`);
    //     }
    //      return console.log(result.ops); 
    // }

    // db.collection('newTask').insertMany([
    //     {
    //         description: 'raw data',
    //         complet: true
    //     },
    //     {
    //         description: 'maji moto',
    //         complet: false
    //     },
    //     {
    //         description: 'typing',
    //         complet: true
    //     }
    // ]), (error, result)=>{
    //         if (error) {
    //             return console.log('Unable to insert documents');
    //         }
    //         console.log(result.ops);
    //     }


    //READING DATA FROM THE DATA BASE

    // db.collection('users').findOne({ _id: new ObjectID("5fad0e1eba065f2e00356f07")}, (error, user)=>{
    //     if (error) {
    //         return console.log(`unable to fetch`);
    //     }
    //      console.log(user); 
    // })

    //Reading multiple fields on the database collection
    // db.collection('newTask').find({complet: true}).toArray((error, users)=>{
    //     if (error) {
    //         console.log(`can't fetch`);
    //     }
    //     console.log(users);
    // })

    //UPDATING A FIELD IN THE DATABASE
    // db.collection('users').updateOne({
    //      _id: new ObjectID("5fad0e1eba065f2e00356f07")}, {
    //         $set: {
    //             name: ' Woshington'
    //         }
    //         //  $inc:{
    //         //     age: 4 
    //         //  }
    //      }).then((result) => {
    //     console.log(result);
    //      }).catch((error) => {
    //     console.log(error);
    //     })

    // db.collection('newTask').updateMany({
    //     complet: true
    // }, {
    //     $set: {
    //         complet: false
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    //DELETING MULTIPLE FIELDS IN A DATABASE
    // db.collection('users').deleteMany({
    //     age : 32
    // }).then((results)=>{
    //     console.log(results);
    // }).catch((error)=>{
    //     console.log(error);
    // })

    db.collection('newTask').deleteOne({
        _id: new ObjectID("5fb206dbf5610e1424033571")
    }).then((results)=>{
        console.log(results);
    }).catch((error)=>{
        console.log(error);
    })

}) 

    //USING MULTER TO UPLOAD FILES
    // const multer = require('multer')
// const upload= multer({
//     dest: 'images',
//     limits:{
//         fileSize: 1000000
//     },
    // fileFilter(req, file, cb){
    //     if (!file.originalname.endsWith('pdf')) {
    //         return cb(new Error('PLease upload a pdf file'))
    //     }
    //     cb(undefined, true)
    // }

//     fileFilter(req, file, cb){
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a word document'))
//         }
//         cb(undefined, true)
//     }
// })

// app.post('/upload', upload.single('upload'), (req, res)=>{
//     res.send()
// }, (error, req, res, next)=>{
//     res.status(400).send({Error: error.message})
// })