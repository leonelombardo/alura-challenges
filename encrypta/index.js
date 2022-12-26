const input = document.querySelector("#textarea")
const encryptButton = document.querySelector("#encrypt-button")
const decryptButton = document.querySelector("#decrypt-button")
const copyButton = document.querySelector("#copy-button")
const output = document.querySelector("#output")

encryptButton.addEventListener("click", () => {
    const text = input.value
    
    if(!text.length) {
        return output.innerHTML = `
            <img src="./public/waiting.svg" id="output-img"/>
            <h2 class="output-h2">There are no messages to decrypt</h2>
            <p class="output-description">Start adding text and try encrypting it</p>
        `
    }
    
    const i = text.replaceAll("i", "imes")
    const a = i.replaceAll("a", "ai")
    const e = a.replaceAll("e", "enter")
    const o = e.replaceAll("o", "ober")
    const u = o.replaceAll("u", "ufat")

    output.innerHTML = `<p class="output-description">${u}</p>`
})

decryptButton.addEventListener("click", () => {
    const text = input.value
    
    if(!text.length) {
        return output.innerHTML = `
            <img src="./public/waiting.svg" id="output-img"/>
            <h2 class="output-h2">There are no messages to decrypt</h2>
            <p class="output-description">Start adding text and try encrypting it</p>
        `
    }
    
    const a = text.replaceAll("ai", "a")
    const e = a.replaceAll("enter", "e")
    const i = e.replaceAll("imes", "i")
    const o = i.replaceAll("ober", "o")
    const u = o.replaceAll("ufat", "u")

    output.innerHTML = `<p class="output-description">${u}</p>`
})

copyButton.addEventListener("click", () => {
    const result = document.querySelector(".output-description")

    if(!result.innerHTML) return

    navigator.clipboard.writeText(result.innerHTML)
})