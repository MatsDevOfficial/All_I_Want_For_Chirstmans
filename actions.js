document.getElementById('wishlist-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const itemInput = document.getElementById('item');
    const itemText = itemInput.value.trim();

    if (itemText !== '') {
        const wishlist = document.getElementById('wishlist');
        const listItem = document.createElement('li');
        listItem.textContent = itemText;
        wishlist.appendChild(listItem);
        itemInput.value = '';
    }
});