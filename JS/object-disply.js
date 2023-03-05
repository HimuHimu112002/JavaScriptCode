const person = {
    name: "himu",
    age: 21,
}

let result = Object.values(person)
console.log(result)
// value gulir akti array print korbe

for (const item of result) {
    console.log(item)
}

console.log(JSON.stringify(person))
// JSON print korle sob property and value string dekhabe
// object er vitore functon method thakle stringify sei function ke
// access korte parena