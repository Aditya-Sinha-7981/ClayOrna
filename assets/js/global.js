const hamburgerButton = document.querySelector('.hamburger-btn');
const hamburgerClass = document.querySelector('.hamburger-menu');

hamburgerButton.addEventListener('click', () => {
    //Removal or addition of "active" class for hamburger

    let x = hamburgerClass
        
    if(x.classList.contains('active')){
        x.classList.remove('active');
        document.querySelector('body').style.overflow = 'auto'
    }else{
        x.classList.add('active');
        document.querySelector('body').style.overflow = 'hidden'
    }

    let y = hamburgerIcon

    if(y.classList.contains('fa-bars')){
        y.classList.remove('fa-bars');
        y.classList.add('fa-times');
    }else{
        y.classList.remove('fa-times');
        y.classList.add('fa-bars');
    }
});