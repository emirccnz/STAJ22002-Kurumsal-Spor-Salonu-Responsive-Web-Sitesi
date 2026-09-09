const monthButtons = Array.from(document.querySelectorAll(".monthBtn"))

monthButtons.forEach(element => {
    element.addEventListener("click", ()=>{
        let activeButton = element.closest(".mCard").querySelector(".activeBtn")
        let priceButton = element.closest(".mCard").querySelector(".priceBtn")
        activeButton.classList.remove("activeBtn")
        element.classList.add("activeBtn")
        priceButton.innerHTML = `<span>${element.value}000₺</span> 'den başlayan fiyatlarla`
    })
})

