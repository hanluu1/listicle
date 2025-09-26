const header = document.querySelector('header');
const headerContainer = document.createElement('div')
headerContainer.className = 'header-container';

const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';

const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const logo = document.createElement('img');
logo.src = '/Elogo.jpg';
// Add logo styling
logo.style.height = '40px';
logo.style.width = '40px';
logo.style.objectFit = 'cover';
logo.style.borderRadius = 'var(--pico-border-radius)';
logo.style.cursor = 'pointer';

const headerTitle = document.createElement('h1')
headerTitle.textContent = 'Evermore'
// Style the title
headerTitle.style.margin = '0';
headerTitle.style.fontSize = '1.75rem';

headerLeft.appendChild(logo)
headerLeft.appendChild(headerTitle)

// Fixed: Create a button element, not 'Home' element
const headerButton = document.createElement('button')
headerButton.textContent = 'Home'
    
headerButton.addEventListener('click', function handleClick(event) {
  window.location = '/'
})

headerRight.appendChild(headerButton)
headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)
header.appendChild(headerContainer)