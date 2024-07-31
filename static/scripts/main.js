document.addEventListener("DOMContentLoaded", e => {
    // header
    const header = document.querySelector("header")
    const headerMenuToggleButtons = header.querySelectorAll(".m-menu-open-button, .m-menu-close-button")
    headerMenuToggleButtons.forEach(button => {
        button.addEventListener("click", e => {
            header.classList.toggle("m-active")
        })
    })

    // SECTION how-it-works-mobile открытие карточек
    const cardToggleButtons = document.querySelectorAll("section.how-it-works.mobile h6.item-description img")
    cardToggleButtons.forEach(button => {
        button.addEventListener("click", e => {
            const itemBlock = button.closest(".item-block")
            itemBlock.classList.toggle("active")
        })
    })

    // SECTION FAQ открытие вопросов
    const questionButtons = document.querySelectorAll(".question-container .question-toggle-button")
    questionButtons.forEach(button => {
        button.addEventListener("click", e => {
            const row = e.target.closest(".question")
            row.classList.toggle("active")
        })
    })

    // section terms&rules
    const toggleIconSubSection = document.querySelectorAll("section.privacy-\\&-terms b img")
    toggleIconSubSection.forEach(icon => {
        icon.addEventListener("click", e => {
            const subSection = icon.closest("p.subsection")
            subSection.classList.toggle("active")
        })
    })
})


document.addEventListener("DOMContentLoaded", e => {
    // Открытие меню
    const langBlock = document.querySelector("header .lang-block")
    const selectLangBlock = langBlock.querySelector(".select-lang")
    langBlock.addEventListener("click", e => {
        selectLangBlock.classList.toggle("active")
    })

    // Изменение титла в зависимости от секции
    const header = document.querySelector("header")
    const headerMenuLinks = header.querySelectorAll("ul.menu > li.link > a, .m-menu > ul.m-sub-menu li a")
    headerMenuLinks.forEach(link => {
        link.addEventListener("click", e => {
            let mainTitle, linkName;
            linkName = "ROOH | " + link.innerText;
            mainTitle = document.querySelector("title");
            mainTitle.innerText = linkName
            header.classList.remove("m-active")
        })
    })
})