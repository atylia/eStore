<?php
$productid = $_POST['id'];
?>
<table class="innertable">
	<tr>
		<td rowspan="3" class="productimg"><div style="width: 100%; height: 100%; background: #000000;"> </div></td>
		<td class="productname"><?php echo $productid; ?></td>
	</tr>
	<tr>
		<td class="productprice">Price</td>
	</tr>
	<tr>
		<td class="productavailable">Availability</td>
	</tr>
	<tr>
		<td colspan="3" class="productinfo">Description</td>
	</tr>
	<tr>
		<td colspan="3" class="productbuy"><div class="button" style="width: 100px;">Add to cart!</div></td>
	</tr>
</table>