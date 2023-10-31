<?php

// Make combinations
function generateCombinations($arrays, $i = 0) {
    if (!isset($arrays[$i])) {
        return array();
    }
	
    if ($i == count($arrays) - 1) {
        return $arrays[$i];
    }

    // get combinations from subsequent arrays
    $tmp = generateCombinations($arrays, $i + 1);

    $result = array();

    // concat each array from tmp with each element from $arrays[$i]
    foreach ($arrays[$i] as $v) {
        foreach ($tmp as $t) {
            $result[] = is_array($t) ? array_merge(array($v), $t) : array($v, $t);
        }
    }
    
    return $result;
}

/**
 * Generate combinations
 * 
 * @param array $variants
 * @param array $options
 * @param bool $asText
 * 
 * @return array
 */
function combinations($variants, $options, $asText=false) : array
{
    $output = [];
    $result = generateCombinations($options);

    foreach ($result as $row) {
        if($asText) {
            $option = join('-', array_values($row));
        } else {
            $option = [];

            foreach ($row as $i => $data) {
                $option[$variants[$i]] = $data;
            }
        }

        $output[] = $option;
    }

    return $output;
}

$variants = ['size', 'color', 'country'];
$options = [
    ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    ['Red', 'Green', 'Blue', 'Black'],
    ['BD', 'IN', 'PK']
];

echo "<pre>";
print_r(combinations($variants, $options));
echo "</pre>";

?>