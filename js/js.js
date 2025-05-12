

//HTML injektion hvor teksten på spørgsmålsiden bliver udskiftet med første spørgsmål og 3 svarmulgiheder
    sporsmal.innerHTML = `
    <label for="ja" class="container">JA
        <input id="ja" type="radio" name="radio">
        <span class="checkmark"></span>
    </label>

    <label for="nej" class="container">NEJ
        <input id="nej" type="radio" name="radio">
        <span class="checkmark"></span>
    </label>
        
    `

//kilde: https://css-tricks.com/snippets/jquery/click-input-when-label-clicked/ 
    $('label').click(function () {
       ja = $(this).attr('for');
       $('#'+ja).trigger('click');
});


    function svar () {
        sporsmal.innerHTML += `
        <p>Det vil kvinder i gennemnit høre 20 gange i sit liv</p>
    

        `
    }