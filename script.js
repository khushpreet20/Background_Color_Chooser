const container = document.querySelector('.container')
    const boxs = document.querySelectorAll('.box')
    boxs.forEach((box) =>{
        box.addEventListener('click', function(e){
            container.style.backgroundColor = e.target.id
        })
    })
    const button = document.querySelector('button')
    button.addEventListener('click', function(e){
        container.style.backgroundColor = 'white'
    })