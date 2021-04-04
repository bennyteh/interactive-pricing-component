let slider = document.getElementById('main_slider');
let pageview = document.getElementById('main_pageview')
let price = document.getElementById('main_price');
let checkbox = document.getElementById('billing__type')
let boldYearlyBilling = document.getElementById('bold')


slider.addEventListener('mousemove', () =>{
    let x = slider.value;
    let color = 'linear-gradient(90deg, var(--color-soft-cyan)'+ x + '%, rgba(160, 160, 160, 0.301)' + x + '%)';
    slider.style.background = color;
    pageview.innerHTML = multiplyer(x)[0];
    price.innerHTML = multiplyer(x)[1];
})

slider.addEventListener('change', () => {
    let x = slider.value
    let color = 'linear-gradient(90deg, var(--color-soft-cyan)'+ x + '%, rgba(160, 160, 160, 0.301)' + x + '%)';
    slider.style.background = color;
    pageview.innerHTML = multiplyer(x)[0];
    price.innerHTML = multiplyer(x)[1];
}) 

slider.addEventListener('touchmove', () => {
    let x = slider.value
    let color = 'linear-gradient(90deg, var(--color-soft-cyan)'+ x + '%, rgba(160, 160, 160, 0.301)' + x + '%)';
    slider.style.background = color;
    pageview.innerHTML = multiplyer(x)[0];
    price.innerHTML = multiplyer(x)[1];
})

checkbox.addEventListener('change', () => {
    let x = slider.value
    let color = 'linear-gradient(90deg, var(--color-soft-cyan)'+ x + '%, rgba(160, 160, 160, 0.301)' + x + '%)';
    slider.style.background = color;
    pageview.innerHTML = multiplyer(x)[0];
    price.innerHTML = multiplyer(x)[1];
})

checkbox.addEventListener('change', e => {
    if (e.target.checked) {
        boldYearlyBilling.style.fontWeight = "800";
        boldYearlyBilling.style.color = "var(--color-dark-desaturated-blue)";
    }else {
        boldYearlyBilling.style.fontWeight = "inherit"
        boldYearlyBilling.style.color = "inherit"
    }
} )


let multiplyer = (value) => {
    let output = [];

    if (checkbox.checked) {
        if (value <= 50) {
            output = [
                value * 2 + "K", 
                ((value * 0.32)* 0.75).toFixed(2)
            ]
        }
    
        if (value > 50 && value <= 90) {
            output = [
                ((value-50) * 10) + 100 + "K", 
                ((16 + (value-50) * 1.4) * 0.75).toFixed(2)
            ]
        }
    
        if (value > 90 && value <= 99) {
            output = [
                ((value-90) * 50) + 500 + "K",
                ((72 + (value-90) * 6)  * 0.75).toFixed(2)
            ]
        }

        if (value == 100) {
            output = ["1M", (95.00).toFixed(2)]
        }

        return output
    }
    if (value <= 50) {
        output = [
            value * 2 + "K",
            (value * 0.32).toFixed(2)
        ]
    }

    if (value > 50 && value <= 90) {
        output = [
            ((value-50) * 10) + 100 + "K",
            (16 + (value-50) * 1.4).toFixed(2)
        ]
    }

    if (value > 90 && value <= 99) {
        output = [
            ((value-90) * 50) + 500 + "K",
            (72 + (value-90) * 6).toFixed(2)
        ]
    }

    if (value == 100) {
        output = ["1M", (127.00).toFixed(2)]
    }

    return output;
}