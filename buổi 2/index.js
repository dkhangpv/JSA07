// let i = 3

// // while (i < 3) {
// //     console.log("So " + i)
// //     i++
// // }

// do {
//     console.log("So " + i)
//     i++
//     while (i < 3)
// }

// for (let i = 0; i <= 2; j++) {
//     for (let y = 1; y <= 3; y++) {
  
// }

// let arr = ["Chau", "Khang", "Phuc"]
// console.log("arr" + arr)
// console.log("Lenght" + arr.length)
// console.log("Push" + arr.push("Nguyen"))
// console.log("arr" + arr)
// console.log("POP" + arr.pop())
// console.log("arr" + arr)
// console.log("shift" + arr.shift())
// console.log("arr" + arr)


let sp1 = {
    Name: "Ronaldo",
    Price: "10.000",
    Color: "Black",
    Material: "Feather"
}

let sp2 = {
    Name: "KDB",
    Price: "100.000",
    Color: "White",
    Material: "Wood"
}

console.log(sp1)
console.log(sp2)

sp2.option = "Waterproof"
sp2.note = "Buy or die"
sp2.Price = "10.000"

delete sp2.note

let arr = [sp1,sp2]

console.log(arr)

for (let i = 0; i < arr.length; i++) {
    if(arr[i].Color == "White"){
        console.log(arr[i].Name)
    }
}
