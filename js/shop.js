
document.addEventListener("DOMContentLoaded", function() 
{
    const priceVV = document.querySelector(".price_vv");
    const odEntry = document.querySelector(".od_entry");
    const planText = document.querySelector(".plan_text");

    document.querySelectorAll("input[name='plan_v']").forEach((radio) => {
        radio.addEventListener("change", function() {
            if (this.value === "s") { // Monthly plan
                priceVV.textContent = document.getElementById("price_s").value;
                odEntry.textContent = "/ month";
                planText.textContent = "Billed monthly, cancel anytime";
            } else { // Permanent plan
                priceVV.textContent = document.getElementById("price_p").value;
                odEntry.textContent = "/ one-time";
                planText.textContent = "Permanent purchase, no subscription";
            }
        })
    });
})