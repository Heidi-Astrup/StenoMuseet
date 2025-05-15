//HTML injektion hvor teksten på spørgsmålsiden bliver udskiftet med første spørgsmål og 3 svarmulgiheder
    sporsmal.innerHTML = `
    <label for="ja" class="container">JA
        <input id="ja" type="radio" name="radio" value="Det er der også mange andre der har - Det vil kvinder nemlig høre 20 gange i sit liv">
        <span class="checkmark"></span>
    </label>

    <label for="nej" class="container">NEJ
        <input id="nej" type="radio" name="radio" value="Det er et udtryk som kvinder i gennemnit vil høre 20 gange i sit liv">
        <span class="checkmark"></span>
    </label>

    <div id="result"></div>
        
    `
    //ChatGPT er brugt til at give svar efter man trykker på et label - kilde: https://chatgpt.com/share/6825b403-5dac-800e-b939-6f6fe7095eb2
   document.querySelectorAll('input[name="radio"]').forEach(radio => {
        radio.addEventListener('change', () => {
            result.innerHTML = `<p>${radio.value}</p>`;
        });
    });



