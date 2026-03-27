<?php

$totalAmount = 1000;   
$discountRate = 0.10;  
$taxationRate = 0.1;

function getFinalPrice($total, $discountRate, $taxationRate) {
    // 1️⃣ Calculate discount
    $discount = $total * $discountRate;        
    $subtotal = $total - $discount;  
    $tax = $subtotal * $taxationRate;
    $finalPrice = $subtotal + $tax;

    return $finalPrice;
}

echo "Welcome to the Store!\n";
echo "Original Total: $" . $totalAmount . "\n";
echo "Final Price after 10% discount and 5% tax: $" . getFinalPrice($totalAmount, $discountRate, $taxationRate) . "\n";

?>

