const { calculateTip, celsiusToFarenheight, farenheightToCelsius, add } = require("../src/math");


test('should calculate the total with tip', ()=>{
    const total = calculateTip(10, 0.3)
    expect(total).toBe(13)
})

test('should calculate the tatal with default tip', ()=>{
    const total= calculateTip(10)
    expect(total).toBe(12.5)
})

test('should convert 32 F to 0 C', ()=>{
    const celsius= farenheightToCelsius(32)
    expect(celsius).toBe(0)
})

test('should convert 0 C to 32 F', () => {
    const farenheight = celsiusToFarenheight(0)
    expect(farenheight).toBe(32)
})

// test('async test demo', (done)=>{
//     setTimeout(() => {
//         expect(1).toBe(2)
//         done()
//     }, 2000);
// })

test('should add two numbers', (done)=>{
    add(2, 3).then((sum)=>{
        expect(sum).toBe(5)
        done()
    })      
})

test('should add two numbers', async () => {
    const sum = await add(1, 22)
    expect(sum).toBe(23)
})