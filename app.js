<script>
  function payWithPaypal(amount) {
    // Redirect the user to the PayPal checkout page with the payment amount
    window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&amount=${amount}&business=your_business_email@example.com`;
  }
</script>

<form>
  <label>Enter Payment Amount:</label>
  <input type="number" id="amount" min="1" step="0.01" required>
  <button type="button" onclick="payWithPaypal(document.getElementById('amount').value)">Pay with PayPal</button>
</form>
