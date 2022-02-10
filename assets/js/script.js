

let headCount = 0
let tailsCount = 0
// TODO: Refactor to use functions


document.addEventListener('DOMContentLoaded', function (e) {

    document.querySelector('#flip').addEventListener('click',
    function(e) {

        if (Math.random() > 0.5){
            console.log('heads')
            //update image
            let pennyFace = document.querySelector('#pennyFace')
            pennyFace.src = 'assets/images/penny-heads.jpg'
            pennyFace.alt = '2005 Penny, head side'
            //Log outcome
            document.querySelector('#message ').textContent = 'You Flipped Heads!'

            //Update JS global vars
            headCount++



            document.querySelector('#heads').textContent = headCount
            // #/total
            document.querySelector('#heads-percent').textContent = Math.round(headCount/(headCount+tailsCount)*100) + '%' 
            document.querySelector('#tails-percent').textContent = Math.round(tailsCount/(headCount+tailsCount)*100) + '%'

        }else{
            console.log('tails')
        }
    
        console.log(Math.random())


    })

    document.querySelector('#clear').addEventListener('click', function(e) {
     headCount = 0
     tailsCount = 0
     document.querySelector('#message') = "Let's get Rolling!"
     document.querySelector('#heads').textContent = 0
     document.querySelector('#tails').textContent = 0
     document.querySelector('#heads-percent').textContent = '0%'
     document.querySelector('#tails-percent').textContent = '0%'
     document.querySelector('#pennyFace').src = 'assets/images/penny-heads.jpg'
     document.querySelector('#pennyFace').alt = '2005 penny, heads side'
    })
})


