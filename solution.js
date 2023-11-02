function cartesian(...args) {
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

// Variants
const size = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
const color = ['Red', 'Green', 'Blue', 'Yellow']
const country = ['BD', 'PK', 'IN']
const grade = ['A', 'B']

const result = cartesian(size, color, country, grade)
console.log(result);