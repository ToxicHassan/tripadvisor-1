const $ = document

// Menu

const hamburgerBtn = $.querySelector('.hamburger-btn')
const navMenu = $.querySelector('.menu')
const navCloseMenuBtn = $.querySelector('.close-btn')


hamburgerBtn.addEventListener('click', () => {
    navMenu.style.right = '0'
})
navCloseMenuBtn.addEventListener('click', () => {
    navMenu.style.right = '-29rem'
})

// Search Bar
const categoriesBtnWrapper = $.querySelectorAll('.categories-btn-wrapper')
const searchInput = $.querySelector('#search-input')

let searchInputPlaceholder = [
    {id: 'categories-btn-1', placeHolder: 'مکان هایی برای رفتن، کارهایی که می‌توانید انجام دهید، هتل ها...'},
    {id: 'categories-btn-2', placeHolder: 'نام هتل یا مسیر'},
    {id: 'categories-btn-3', placeHolder: 'جاذبه، فعالیت یا مسیر'},
    {id: 'categories-btn-4', placeHolder: 'رستوران یا مسیر'},
    {id: 'categories-btn-6', placeHolder: 'مسیر'},
]

categoriesBtnWrapper.forEach(btn => {
    btn.addEventListener('click', e => {
        let btnElemObj = searchInputPlaceholder.find(btnElem => {
            return btnElem.id == btn.id
        })
        if (btnElemObj) {
            searchInput.setAttribute('placeholder', btnElemObj.placeHolder)
        }
        if (btn.id == 'categories-btn-5') {
            console.log('clicked')
        }
    })
})
    