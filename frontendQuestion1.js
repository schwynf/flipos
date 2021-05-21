const updateArray = (array) => {
    let finalArray = [];
    for (let i = 0; i < array.length; i++) {
        for (x in array[i]) {
            finalArray.push({
                question_id: parseInt(x),
                answer_value: parseInt(array[i][x][0]),
                comments: array[i][x][1],
            })
        }
    }
    return finalArray;
}
