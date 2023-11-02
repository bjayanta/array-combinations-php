function generateCartesian(args) {
    var r = [], 
        max = args.length - 1;

    function helper(arr, i) {
        for (var j=0, l=args[i].length; j<l; j++) {
            var a = arr.slice(0); // clone arr

            a.push(args[i][j]);

            if (i==max)
                r.push(a);
            else
                helper(a, i+1);
        }
    }

    helper([], 0);

    return r;
}

function cartesian(options, formatOrVariants=[]) {
    const combinations = generateCartesian(options)

    // Text Format
    if(formatOrVariants.constructor === String && formatOrVariants === 'plane') {
        const output = []

        combinations.map(combination => output.push(combination.join('-')))

        return output
    }

    // Object Format
    if(formatOrVariants.constructor === Array && formatOrVariants.length > 0) {
        const option = {}

        combinations.map(combination => {
            combination.map((data, i) => option[variants[i]] = data)
        })
        
    }

    // Array Format
    return combinations
}



// Variants
variants = ['size', 'color', 'country', 'grade'];

// Options
const size = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
const color = ['Red', 'Green', 'Blue', 'Yellow']
const country = ['BD', 'PK', 'IN']
const grade = ['A', 'B']

// Array Format
const result = cartesian([size, color, country])

// Text Format
// const result = cartesian([size, color, country], 'plane')

// Object Format
// const result = cartesian([size, color, country, grade], variants)

console.log(result);