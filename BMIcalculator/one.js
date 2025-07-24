const  form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(!height || height<0 || isNaN(height)){
        results.innerHTML = 'Not a valid height input'
    }
    else if(!weight|| weight<0 || isNaN(weight)){
        results.innerHTML = 'Not a valid weight input'
        }
    else{
        const BMI = (weight / ((height*height) / 10000)).toFixed(2);
        if(BMI<18.6){
            results.innerHTML = `<span> You are underweight: ${BMI}</span>`
            
        }
        else if(BMI>24.9){
            results.innerHTML = `<span> You are Overweight: ${BMI}</span>`
            
        }
        else if(BMI>=18.6 && BMI<=24.9){
            results.innerHTML = `<span> in the normal weight range: ${BMI}</span>`
            
        }
           
    }


})