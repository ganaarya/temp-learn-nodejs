// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const {readFile,writeFile} = require('fs').promises;

const textResult = async() => {
  try {
    const first = await readFile('./content/first.txt','utf8')
    const second = await readFile('./content/second.txt','utf8')
    await writeFile('./content/result-mind-grenade.txt',`THIS IS AWESOME : ${first} ${second}`,{flag:'a'})
    console.log(first)
    console.log(second)
  } catch (error) {
    console.log(error)
  }
}

textResult()

// const getText = (path) => {
//   return new Promise((resove,reject) => {
//     readFile(path,'utf8',(err, data) => {
//       if (err) {
//         reject(err)
//       }else{
//         resove(data)
//       }
//     })
//   })
// }

// getText('./content/first.txt')
//   .then(result => console.log(result))
//   .catch(err => console.log(err))

// getText2('./content/first.txt')

// const getText3 = async() => {
//   try {
//     const first = await readFile('./content/first.txt','utf8')
//     const second = await readFile('./content/second.txt','utf8')
//     console.log(first)
//     console.log(second)
//   } catch (error) {
//     console.log(error)
//   }
// }

// getText3()

// const getText2 = async(path) => {
//   await readFile(path,'utf8',(err, data) => {
//     if (err) {
//       console.log(err)
//     }else{
//       console.log(data)
//     }
//   })
// }