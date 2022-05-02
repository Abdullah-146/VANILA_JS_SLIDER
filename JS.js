const Con = document.querySelector('.container')
const slidright = document.querySelector('.right-slider')
const slidrleft = document.querySelector('.left-slider')
const up = document.querySelector('.up-button')
const down = document.querySelector('.down-button')
const totLen = slidright.querySelectorAll('div').length;

let activeSlideIndex = 0

slidrleft.style.top = `-${(totLen -1) * 100}vh`

up.addEventListener('click', () => changeSlide('up'))
down.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {

    const Sheight = Con.clientHeight

    if (direction == 'up') {
        activeSlideIndex++
        if (activeSlideIndex > totLen - 1) {
            activeSlideIndex = 0
        }

    } else if (direction == 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = totLen - 1
        }

    }

    slidright.style.transform = `translateY(-${activeSlideIndex  * Sheight }px)`
    slidrleft.style.transform = `translateY(+${activeSlideIndex  * Sheight }px)`

}