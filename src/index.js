module.exports = function reverse(n) {

    return (
        // gets float number from integer
        parseFloat(
            n
            // typecasting, from int to String
            // 123 => "123"
            .toString()
            // creating an array from string 
            // "123" => ["1", "2", "3"]
            .split('')
            // reverse of array
            // ["1", "2", "3"] => ["3", "2", "1"]
            .reverse()
            // getting string from an array
            // ["3", "2", "1"] => "321"
            .join('')
        ) * Math.sign(n) //to return the sign of number
    )

}