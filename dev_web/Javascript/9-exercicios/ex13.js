const somenteNums = (array) => {
    return array.filter(x => typeof x === 'number')
}

console.log(somenteNums([1, 2, 3, 'a', 'b', 'c', true, false, 1.2]))