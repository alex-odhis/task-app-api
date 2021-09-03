require('../src/db/mongoose')
const { findByIdAndDelete, countDocuments } = require('../src/models/task');
const Task = require('../src/models/task')

// Task.findByIdAndRemove('5fbb859fe88ffd1d30e3aa87').then((task)=>{
//     console.log(task);
//     return Task.countDocuments({complete: false})
// }).then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(e);
// })

const deleteTaskAndCount = async(id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({complete : false})
    return count
}

deleteTaskAndCount('5fbff469aeeee5315cdcea85').then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})