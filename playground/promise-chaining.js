require('../src/db/mongoose')
const User= require('../src/models/user')

// User.findByIdAndUpdate('5fb65a288d20942a70b009e7', {age : 1}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(e);
// })

const updateAgeAndCount = async(id, age)=>{
    const user = await User.findByIdAndUpdate(id, {age} )
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5fb65ec385d4ac266c3a8018', 1).then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})