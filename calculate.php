<?php
// E-commerce Cart Calculation Script
// Goal: Calculate a 10% discount on the total amount and return the final price.

$totalAmount = 1000;   // Original total
$discountRate = 0.10;  // 10% discount

// Function to calculate final price after discount
function getFinalPrice($total, $rate) {
    $discount = $total * $rate;        // Calculate discount
    $finalPrice = $total - $discount;  // Subtract discount from total
    return $finalPrice;
}

echo "Welcome to the Store!\n";
echo "Original Total: $" . $totalAmount . "\n";
echo "Final Price after 10% discount: $" . getFinalPrice($totalAmount, $discountRate) . "\n";
?>
