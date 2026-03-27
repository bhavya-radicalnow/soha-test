<?php

$totalAmount = 1000;   
$discountRate = 0.10;  
$taxRate = 0.1; // 5% tax

function getFinalPrice($total, $discountRate, $taxRate) {
    // 1️⃣ Calculate discount
    $discount = $total * $discountRate;        
    $subtotal = $total - $discount;  
    $tax = $subtotal * $taxRate;
    $finalPrice = $subtotal + $tax;

    return $finalPrice;
}

echo "Welcome to the Store!\n";
echo "Original Total: $" . $totalAmount . "\n";
echo "Final Price after 10% discount and 5% tax: $" . getFinalPrice($totalAmount, $discountRate, $taxRate) . "\n";

?>

