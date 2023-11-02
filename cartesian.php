<?php

/**
 * Generate combinations
 * 
 * @param array $arrays
 * @param int $i
 * @return array
 */
function generateCombinations($arrays, $i = 0) : array
{
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
 * Cartesian formater
 * 
 * @param array $options
 * @param array|string $variants
 * @return array
 */
function combinations($options, $variants=[]) : array
{
    $output = [];
    $combinations = generateCombinations($options);
	
	// Text Format
	if (gettype($variants) == 'string' && $variants == 'plane') {
		foreach ($combinations as $combination) {
			$output[] = join('-', array_values($combination));
		}
		
		return $output;
	}
	
	// Associative Array Format
	if (gettype($variants) == 'array' && count($variants) > 0) {
		foreach ($combinations as $combination) {
			$option = [];
			
			foreach ($combination as $i => $data) {
				$option[$variants[$i]] = $data;
			}
			
			$output[] = $option;
		}
	}
    
	// Array Format
    return $combinations;
}

// Example:
$variants = ['size', 'color', 'country'];
$options = [
    ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    ['Red', 'Green', 'Blue', 'Black'],
    ['BD', 'IN', 'PK']
];

// Array Format
// $result = combinations($options);

// Text Format
// $result = combinations($options, 'plane');

// Associative Array Format
$result = combinations($options, $variants);

echo "<pre>";
print_r($result);
echo "</pre>";

?>