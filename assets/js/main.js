"use strict"

document.addEventListener("DOMContentLoaded", () => {

  const helpElements = document.querySelectorAll("[data-help]")
  for(const helpElement of helpElements) {
    helpElement.addEventListener("click", (event) => {
      event.preventDefault()
      event.stopPropagation()

      const helpText = helpElement.attributes["data-help"].value
      alert(helpText)
    })
  }

  const cardHeaders = document.getElementsByClassName("card-header")
  for(const cardHeader of cardHeaders) {
    const cardBody = cardHeader.nextElementSibling
    const cardIcon = cardHeader.querySelector(".card-toggle-icon")

    cardHeader.style.cursor = "pointer"

    cardBody.classList.add("d-none")
    cardIcon.classList.remove("fa-angle-double-down")
    cardIcon.classList.add("fa-angle-double-right")

    cardHeader.addEventListener("click", (event) => {
      
      cardBody.classList.toggle("d-none")

      if (cardBody.classList.contains("d-none")) {
        cardIcon.classList.remove("fa-angle-double-down")
        cardIcon.classList.add("fa-angle-double-right")
      } else {
        cardIcon.classList.remove("fa-angle-double-right")
        cardIcon.classList.add("fa-angle-double-down")
      }
    })
  }
})

