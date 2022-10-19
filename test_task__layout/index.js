const timeBtns = document.querySelectorAll(".excursion-times")

timeBtns.forEach(btn => {
    const timeBtn = btn.querySelectorAll(".excursion-time__btn")

    if (timeBtn.length > 4) {
        timeBtn[3].textContent = 'еще..'

        for(i=4; i<timeBtn.length; i++) {
            timeBtn[i].classList.add("hidden" , "btns__margin")
        }

        timeBtn[3].addEventListener('click', () => {
            for(i=4; i<timeBtn.length; i++) {
                timeBtn[i].classList.toggle("hidden")
            }
        })
    }
})