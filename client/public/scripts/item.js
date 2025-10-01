const renderGift = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/items'); // Proxy will forward to server
    const data = await response.json();
    const giftContent = document.getElementById('gift-content')
    
    let gift;
    if (data) {
        gift = data.find(item => item.id === requestedID) // Changed 'gift' to 'item' for consistency
    }
    
    if (gift) {
        // Find or create the image container
        const imageContainer = document.querySelector('.image-container');
        const img = document.getElementById('image') || document.createElement('img');
        img.id = 'image';
        img.src = gift.image;
        img.alt = gift.name;
        img.style.width = '100%';
        img.style.height = '400px';
        img.style.objectFit = 'cover';
        img.style.borderRadius = 'var(--pico-border-radius)';
        
        if (!document.getElementById('image')) {
            imageContainer.appendChild(img);
        }
        
        // Find or create the gift details container
        let detailsContainer = document.querySelector('.gift-details');
        if (!detailsContainer) {
            detailsContainer = document.createElement('article');
            detailsContainer.className = 'gift-details';
            giftContent.appendChild(detailsContainer);
        }
        
        // Create or update the name
        let nameElement = document.getElementById('name');
        if (!nameElement) {
            nameElement = document.createElement('h2');
            nameElement.id = 'name';
            detailsContainer.appendChild(nameElement);
        }
        nameElement.textContent = gift.name;
        nameElement.style.color = 'var(--custom-green, #000000ff)';
        nameElement.style.marginBottom = '1rem';
        
        // Create or update the prices
        let priceElement = document.getElementById('pricePoint');
        if (!priceElement) {
            priceElement = document.createElement('p');
            priceElement.id = 'pricePoint';
            detailsContainer.appendChild(priceElement);
        }
        priceElement.textContent = 'Price: ' + gift.pricepoint;
        priceElement.style.fontSize = '1.5rem';
        priceElement.style.fontWeight = '600';
        
        // Create or update the description
        let descElement = document.getElementById('description');
        if (!descElement) {
            descElement = document.createElement('p');
            descElement.id = 'description';
            detailsContainer.appendChild(descElement);
        }
        descElement.textContent = gift.description;
        descElement.style.lineHeight = '1.6';
        descElement.style.color = 'var(--pico-color)';
        
        
    } else {
        // Create error message using Pico styling
        giftContent.innerHTML = ''; // Clear existing content
        
        const errorContainer = document.createElement('article');
        errorContainer.style.textAlign = 'center';
        errorContainer.style.padding = '3rem';
        errorContainer.style.margin = '2rem auto';
        errorContainer.style.maxWidth = '500px';
        
        const message = document.createElement('h2');
        message.textContent = 'Item Not Available 😞';
        message.style.color = 'var(--pico-muted-color)';
        message.style.marginBottom = '1rem';
        
        const subMessage = document.createElement('p');
        subMessage.textContent = 'The item you\'re looking for doesn\'t exist or has been removed.';
        subMessage.style.color = 'var(--pico-muted-color)';
        
        const homeButton = document.createElement('a');
        homeButton.textContent = 'Back to Home';
        homeButton.setAttribute('role', 'button');
        homeButton.href = '/';
        homeButton.style.marginTop = '1rem';
        homeButton.style.backgroundColor = 'var(--custom-green, #10b981)';
        homeButton.style.borderColor = 'var(--custom-green, #10b981)';
        
        errorContainer.appendChild(message);
        errorContainer.appendChild(subMessage);
        errorContainer.appendChild(homeButton);
        giftContent.appendChild(errorContainer);
    }
}   

renderGift();