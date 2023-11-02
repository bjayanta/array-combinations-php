/**
 * Generate combinations
 * 
 * @param {Array} args 
 * @returns Array
 */
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

/**
 * Cartesian formater
 * 
 * @param {Array} options 
 * @param {Array|String} variants 
 * @returns Array
 */
function cartesian(options, variants=[]) {
    var output = []
    const combinations = generateCartesian(options)

    // Text Format
    if(variants.constructor === String && variants === 'plane') {
        combinations.map(combination => output.push(combination.join('-')))
        return output
    }

    // Object Format
    if(variants.constructor === Array && variants.length > 0) {
        combinations.map(combination => {
            const option = {}

            combination.map((data, i) => option[variants[i]] = data)
            output.push(option)
        })
        
        return output
    }

    // Array Format
    return combinations
}


// Variants
const variants = ['size', 'color', 'country', 'grade'];

// Options
const size = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
const color = ['Red', 'Green', 'Blue', 'Yellow']
const country = ['BD', 'PK', 'IN']
const grade = ['A', 'B']

// Array Format
// const result = cartesian([size, color, country, grade])

// Text Format
// const result = cartesian([size, color, country, grade], 'plane')

// Object Format
const result = cartesian([size, color, country, grade], variants)

console.log(result);