
let item;
onLoad();
function onLoad() {
    let bagItemStr = localStorage.getItem('item');
    item = bagItemStr ? JSON.parse(bagItemStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
}

function addToBag(itemId) {
    item.push(itemId);
    localStorage.setItem('item', JSON.stringify(item));
    displayBagIcon();
}
function displayBagIcon() {
    let BagItemCountElement = document.querySelector(".bag-item-count");
    if (item.length > 0) {
        BagItemCountElement.innerText = item.length;
        BagItemCountElement.style.visibility = 'visible';
    } else {
        BagItemCountElement.style.visibility = 'hidden';
    }

}
function displayItemsOnHomePage() {
    let itemContainer = document.querySelector(".items-container");
    if (!itemContainer) {
        return;
    }
    let innerHtml = '';
    items.forEach(item => {

        innerHtml += `<div class="item-container">
                <img class="item-img" src="${item.image}" alt="item1">
                <div class="rating">
                    ${item.rating.stars} ⭐|${item.rating.count}
                </div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="curr-price">Rs ${item.current_price}</span>
                    <span class="org-price">Rs ${item.original_price}</span>
                    <span class="discount">(${item.discount_percentage}% off)</span>

                </div>
                <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>

            </div>`
    })
    itemContainer.innerHTML = innerHtml;

}
