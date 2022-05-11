const submitBtn = document.querySelector('.btn')
const ratings = document.querySelectorAll('.rating');
const sectionContainer = document.querySelector('.section-container');
const thankyouContainer = document.querySelector('.thankyou-container');
const result = document.querySelector('.result');
const resultContainer = document.querySelector('.result-container');

let text = []
ratings.forEach(function(rating){
    rating.addEventListener('click',function(e){
        const element = e.currentTarget;
        text = element.textContent;
        result.textContent = text
        
        
    })
})

submitBtn.addEventListener('click',function(){
    sectionContainer.classList.add('hide')
    thankyouContainer.classList.remove('hide')
    if(text.length < 1){
        resultContainer.textContent = `Oops! You did not give a rating.`
        
    }
})