// findFirstUniqueChar("keetnode")

function findFirstUniqueChar(arr){
    obj = {}
    for(let i=0;i<arr.length;i++){
        if (obj[arr[i]]){
            obj[arr[i]] += 1
        }else{
            obj[arr[i]] = 1
        }
    }
    ch = -1
    for (let k in obj){
        if (obj[k] == 1){
            ch = k
            break 
        }
    }
    index = -1
    for (let i in arr){
        if (ch == arr[i]){
            index = i
            break
        }
    }
    return index
}

console.log(findFirstUniqueChar("keetnode"))
console.log(findFirstUniqueChar("lovekeetnode"))
console.log(findFirstUniqueChar("aabb"))