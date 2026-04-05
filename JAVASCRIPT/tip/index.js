const calculate = document.querySelector("#calculate");

    calculate.onclick = function(){
        const Bamount = parseFloat(document.querySelector("#Bamount").value);
        const tip = parseFloat(document.querySelector("#tip").value);
        


        let Tamount = Bamount *(tip/100);
        let total = Bamount + Tamount;

        document.querySelector("#Tamount").textContent = "Tip Amount: " + Tamount;
        document.querySelector("#total").textContent = "Total Amount: " + total;


    }
