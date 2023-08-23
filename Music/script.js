let lightButton = document.getElementById('darkLightTheme__light-button')
let darkButton = document.getElementById('darkLightTheme__dark-button')

lightButton.addEventListener('click', function() {           // className Если вы используете className , он уничтожит все существующие классы при добавлении нового (или, если вы назначите пустую строку, она уничтожит их все).Использование className может быть удобным, когда вы знаете, что этот элемент не будет использовать никакие другие классы.

    document.body.className = 'darkLightTheme__light-button'
  })

  darkButton.addEventListener('click', function(){
    document.body.className = 'darkLightTheme__dark-button'
  })

// lightButton.addEventListener('click', function() {
//     document.body.classList.add('darkLightTheme__light-button')
//     document.body.classList.remove('darkLightTheme__dark-button')  // Используя "classList", вы можете добавлять или удалять класс, не затрагивая никаких других, которые могут быть у элемента.
// })

// darkButton.addEventListener('click', function() {
//     document.body.classList.add('darkLightTheme__dark-button') 
//     document.body.classList.remove('darkLightTheme__light-button')
// })





