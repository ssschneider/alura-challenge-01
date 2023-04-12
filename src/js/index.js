const text = document.querySelector(".user-insert #text");
const cryptograph = document.querySelector("nav .action.cryptograph");
const decrypt = document.querySelector("nav .action.decrypt");
const codedTextArea = document.querySelector(".criptographed");
const copyBtn = document.querySelector(".criptographed .action");
let codedText;
let decodedText;


const cryptographText = (text) => {
	return btoa(text);
};

const decryptText = (codedText) => {
	return atob(codedText);
};

const validateInput = () => {
    codedText = text.value
    codedText = codedText.normalize("NFD").replace(/[^a-zA-Z\s]/g, "")
}

cryptograph.addEventListener("click", async () => {
        codedText = cryptographText(text.value)
        //copyBtn.classList.remove("inactive");
        codedTextArea.innerHTML = `
            <textarea name="text" id="coded-text" cols="30" rows="10">${codedText}</textarea>
            // <button class="action inactive" id="copy-btn">Copiar</button>
        `;
});

decrypt.addEventListener("click", async () => {
	decodedText = decryptText(codedText);
	text.value = decodedText;
});

/*copyBtn.onclick(() => {
    console.log(codedText);
	navigator.clipboard.writeText(codedText)
        .then(() => {
            alert("Mensagem criptografada copiada com sucesso!");
        });
});*/
