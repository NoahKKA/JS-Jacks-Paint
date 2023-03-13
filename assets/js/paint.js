function configureListeners() {
    let images = document.querySelectorAll("img")// select img elements  

    console.log(images)
    images.forEach(element => {
        element.addEventListener('mouseover', addOpacity)
        element.addEventListener('mouseout', removeOpacity)
    })
}



function addOpacity(event) {
    // add appropriate CSS class
    if(!this.classList.contains('dim')){
        this.classList.add('dim')
    }
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
    this.classList.remove('dim')
    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':
            price = 14.99
            colorName = "Lime Green"
            updatePrice(price,colorName)           
            // set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
            price = 11.14
            colorName = "Medium Brown"
            updatePrice(price,colorName)   
            // set variables for price and color name and invoke a function to update the price    
            break;            
        case 'pn3':
            price = 22.99
            colorName = "Royal Blue"
            updatePrice(price,colorName)   
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
            price = 4.99
            colorName = "Solid Black"
            updatePrice(price,colorName)   
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
            price = 8.22
            colorName = "Solid Cyan"
            updatePrice(price,colorName)   
            // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
            price = 11.99
            colorName = "Solid Purple"
            updatePrice(price,colorName)   
            // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
            price = 13.42
            colorName = "Solid Red"
            updatePrice(price,colorName)   
            // set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
            price = 21.98
            colorName = "Solid White"
            updatePrice(price,colorName)   
            // set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
            price = 14.99
            colorName = "Solid Yellow"
            updatePrice(price,colorName)   
            // set variables for price and color name and invoke a function to update the price 
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.querySelector('#color-price')// select element with corresponding id
        colorPrice.textContent = price;// display price
        
        let color = document.querySelector('#color-name')// select element with corresponding id
        color.textContent = colorName;//display color name
    }
    
}
