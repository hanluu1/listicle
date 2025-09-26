const renderGifts = async () => {
    const response = await fetch('/items');
    const data = await response.json();
    const mainContent = document.querySelector('#main-content');
    
    if (data) {
        data.map(item => {
            // Use Pico's semantic article element
            const card = document.createElement('article');

            // Use custom class for image styling
            const imageDiv = document.createElement('div');
            imageDiv.className = 'item-image';
            imageDiv.style.backgroundImage = `url(${item.image})`;

            // Let Pico style these automatically
            const name = document.createElement('h3');
            name.textContent = item.name;

            const price = document.createElement('p');
            price.textContent = `Price: ${item.pricePoint}`;

            const link = document.createElement('a');
            link.textContent = 'Read More';
            link.setAttribute('role', 'button'); // Pico button styling
            link.className = 'read-more-btn';
            link.href = `/items/${item.id}`;
            

            card.appendChild(imageDiv);
            card.appendChild(name);
            card.appendChild(price);
            card.appendChild(link);
            mainContent.appendChild(card);
        });
    }
};

renderGifts();