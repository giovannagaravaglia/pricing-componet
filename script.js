let checkbox = document.getElementById('checkbox');
let priceYear = document.querySelectorAll('.price-year');
let priceMonth = document.querySelectorAll('.price-month');

function changePrices (){
    if (checkbox.checked){
        priceYear.forEach(priceYear =>{
            priceYear.style.display = 'none';
        })

        priceMonth.forEach(priceMonth =>{
            priceMonth.style.display = 'inline-block';
        })
    } else{
        priceYear.forEach(priceYear =>{
            priceYear.style.display = 'inline-block';
        })

        priceMonth.forEach(priceMonth =>{
            priceMonth.style.display = 'none';
        })
    }

 
}

checkbox.addEventListener('change', changePrices)