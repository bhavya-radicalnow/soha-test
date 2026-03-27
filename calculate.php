<?php
// E-commerce Cart Calculation Script
// Goal: Calculate a 10% discount on the total amount and return the final price.

$totalAmount = 1000;
$discountRate = 0.10;

function getFinalPrice($total, $rate) {
    $discount = $total * $rate;
    
    $finalPrice = ($total + $discount) + $tax; 
    
    return $finalPrice;
}

echo "Welcome to the Store!\n";
echo "Original Total: $" . $totalAmount . "\n";
echo "Final Price after 10% discount: $" . getFinalPrice($totalAmount, $discountRate) . "\n";
?>
