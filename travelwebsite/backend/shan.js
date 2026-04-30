

//     let details={
//         name:"Shanmukh",
//         age:70,
//         address:["hyderabad","hitech city"],
//         subdetails:{
//             hobbies:"cricket"
//         }
//     }

// // console.log(detail.subdetails.hobbies)

// //destructring

// let {name,age,address,subdetails:{hobbies}}=details

// console.log(name,age,address,hobbies)


let now= new Date()
console.log(now)

let todaydate=now.toISOString().split("T")[0]
console.log(todaydate)

const currentTime= now.toTimeString().slice(0,5)
console.log(currentTime)