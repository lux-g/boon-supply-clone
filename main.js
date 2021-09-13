const navLinks = document.querySelectorAll('.link')

//NAVLINKS ADD AND REMOVE FUNCTIONS
const removeClass = (target, classname) => {
    target.classList.remove(classname)
}
const addClass = (target, classname) => {
    target.classList.add(classname)
}

navLinks.forEach(link => {
    const shopLink = document.querySelector('.shop-link')
    const fundraiseLink = document.querySelector('.fundraise-link')
    const navMenuShop = document.querySelector('.nav-menu-shop')
    const navMenuFundraiser = document.querySelector('.nav-menu-fundraiser');
    const navContainer = document.querySelector('.nav-container')

    link.addEventListener('mouseenter', (e) => {
        if(e.target === shopLink){
            //remove any class
            removeClass(navMenuFundraiser, 'open-nav-menu-shop')
            //add classes
            addClass(navMenuShop, 'open-nav-menu-shop')
            addClass(navContainer, 'nav-container-background')
        }
        if(e.target === fundraiseLink){
            //remove any class
            removeClass(navMenuShop, 'open-nav-menu-shop')
            //add classes
            addClass(navMenuFundraiser, 'open-nav-menu-shop')
            addClass(navContainer, 'nav-container-background')
        }
    })

    //EVENT LISTENER SHOP MOUSELEAVE
    navMenuShop.addEventListener('mouseleave', ()=> {
        removeClass(navMenuShop, 'open-nav-menu-shop')
        addClass(navContainer, 'nav-container-background')
    })
    //EVENT LISTENER FUNDRAISER MOUSELEAVE
    navMenuFundraiser.addEventListener('mouseleave', ()=> {
        removeClass(navMenuFundraiser, 'open-nav-menu-shop')
        addClass(navContainer, 'nav-container-background')

    })
})

window.addEventListener('scroll', ()=> {
    if(scrollY >= 100) {
        document.querySelector('.nav-container').classList.add('nav-container-background')
    } else {
        document.querySelector('.nav-container').classList.remove('nav-container-background')
    }
})









const cardBtn = document.querySelectorAll('.card-btn')
const closeCard = document.querySelector('.close-btn')
const modal = document.querySelector('.modal')
const modalImg = document.querySelector('.modal-img')
const modalContainer = document.querySelector('.modal-container')

//IMAGES
import imgOne from './images/1_2c03dedc-7682-4230-b399-73c8e08a130e_348x.webp'
import imgTwo from './images/3_45347f99-6fe0-4f6e-aac1-10eb4e26124a_348x.webp'
import imgThree from './images/gifting-featured-collection_8f42de05-a776-4366-9645-194eec1cb77a_400x.webp'
import imgFour from './images/1_d6395417-ef46-4353-b423-53dec91fa749_348x.webp'

cardBtn.forEach(btn => {
    btn.addEventListener('click', (e)=> {
        //console.log(e.currentTarget)
        modal.classList.add('handle-modal')
        modalContainer.classList.add('handle-modal')

        if(e.currentTarget === document.querySelector('.btn-one')) {
            modalImg.src = imgOne
        }
        if(e.currentTarget === document.querySelector('.btn-two')) {
            modalImg.src = imgTwo
        }
        if(e.currentTarget === document.querySelector('.btn-three')) {
            modalImg.src = imgThree
        }
        if(e.currentTarget === document.querySelector('.btn-four')) {
            modalImg.src = imgFour
        }
    })
});

closeCard.addEventListener('click', ()=> {
    modal.classList.remove('handle-modal')
    modalContainer.classList.remove('handle-modal')
})
window.addEventListener('click', (e)=> {
    if(e.target === modalContainer) {
        modal.classList.remove('handle-modal')
        modalContainer.classList.remove('handle-modal')
    }
})

