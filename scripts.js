/**
 * Lage en funksjon som kan bytte
 * CSS klassen på hoved form elementet
 */
function changeStep() {
    // Vi må finne dette html elementet
    const formElement = document.getElementById("multi-step-form")

    // Først fjern den gamle klassen
    formElement.classList.remove("current-step-1")
    formElement.classList.remove("current-step-2")
    formElement.classList.remove("current-step-3")
    formElement.classList.remove("current-step-4")

    // Legg til den klassen vi ønsker
    formElement.classList.add("current-step-4")
}
