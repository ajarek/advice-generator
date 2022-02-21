const DICE =document.querySelector('.dice')

async function showAdvice(){
    const advice = document.querySelector('.advice')
    const idAdvice =document.querySelector('.idAdvice')
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    advice.innerHTML =`"${data.slip.advice}"`
    idAdvice.innerHTML ='#'+ data.slip.id
    googleTranslateElementInit()
}

DICE.addEventListener('click', showAdvice)
    function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'bg,cs,de,pl,hr,hu,it,lt,ro,ru,sk,sl,uk', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true, gaId: 'UA-13192131-1'}, 'google_translate_element');
    }


