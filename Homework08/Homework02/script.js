// #HOMEWORK02
// Return only truthy values ​​from the given Array!
// let test = [
//     [1, 2, undefined],
//     "Trajan",
//     null,
//     ["Trajan", null, undefined, undefined, 0],
//     false,
//     true,
//     10,
//     ["", undefined, "Trajan", 1]
// ]


function arrayWithTruthyValues(array) {
    let truthyArray = [];
    for (item of array) {
        if (Array.isArray(item)) {
            let emptyArray = [];
            for (arrayItem of item) {
                if (arrayItem) {
                    emptyArray.push(arrayItem);
                };
            };
            truthyArray.push(emptyArray);
        } else {
            if (item) {
                truthyArray.push(item);
            }
        }
    }
    return truthyArray;
}

let test = [
    [1, 2, undefined],
    "Trajan",
    null,
    ["Trajan", null, undefined, undefined, 0],
    false,
    true,
    10,
    ["", undefined, "Trajan", 1]
]
console.log(arrayWithTruthyValues(test));
