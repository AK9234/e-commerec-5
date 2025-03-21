let container_items = document.querySelector(".container-items");
let bagsitems = [];
displaybaricon();

function addtocart(itemId) {
    bagsitems.push(itemId);
    displaybaricon();
}

function displaybaricon() {
    let baricon = document.querySelector('.item-count');
    if (bagsitems.length > 0) {
        baricon.innerText = bagsitems.length;
        baricon.style.visibility = 'visible';
    } else {
        baricon.style.visibility = 'hidden';
    }
}

let items = [
    {
        id: '001',
        men_1: 'image-store/men-1.avif',
        item_name: 'SHIRT',
        company_name: 'ROUBERS',
        current_price: '560',
        original_price: '850',
        discount_price: 35
    },
    {
        id: '002',
        men_1: 'image-store/men-2.avif',
        item_name: 'SHIRT',
        company_name: 'FASHIONISTA',
        current_price: '999',
        original_price: '1200',
        discount_price: 17
    },
    {
        id: '003',
        men_1: 'image-store/men-3.avif',
        item_name: 'T-SHIRT',
        company_name: 'STYLEWORKS',
        current_price: '450',
        original_price: '700',
        discount_price: 35
    },
    {
        id: '004',
        men_1: 'image-store/men-4.webp',
        item_name: 'SHIRT',
        company_name: 'FABRICATE',
        current_price: '350',
        original_price: '550',
        discount_price: 36
    },
    {
        id: '005',
        men_1: 'image-store/women-1.jpeg',
        item_name: 'SUIT',
        company_name: 'FABRICATE',
        current_price: '700',
        original_price: '1150',
        discount_price: 39
    },
    {
        id: '006',
        men_1: 'image-store/women-3.jpeg',
        item_name: 'SUIT',
        company_name: 'FABRICATE',
        current_price: '499',
        original_price: '650',
        discount_price: 23
    },
    {
        id: '007',
        men_1: 'image-store/women-5.jpeg',
        item_name: 'SUIT',
        company_name: 'FASHIONISTA',
        current_price: '999',
        original_price: '1500',
        discount_price: 33
    },
    {
        id: '008',
        men_1: 'image-store/women-4.webp',
        item_name: 'SUIT',
        company_name: 'FASHIONISTA',
        current_price: '999',
        original_price: '1600',
        discount_price: 37
    },
    {
        id: '009',
        men_1: 'image-store/kids-2.jpeg',
        item_name: 'carboners',
        company_name: 'FASHIONISTA',
        current_price: '1150',
        original_price: '1250',
        discount_price: 8
    },
    {
        id: '010',
        men_1: 'image-store/men-5.webp',
        item_name: 'carboners',
        company_name: 'FASHIONISTA',
        current_price: '1150',
        original_price: '1250',
        discount_price: 8
    }
];

let itemHTML = '';

items.forEach(item => {
    itemHTML += `
        <div class="container-item">
            <img class="men-1" src="${item.men_1}" alt="${item.item_name}">
            <div class="item-name">${item.item_name}</div>
            <div class="company-name">${item.company_name}</div>
            <div class="price">
                <span class="current-price">${item.current_price} RS</span>
                <span class="original-price">${item.original_price} RS</span>
                <span class="discount-price">(${item.discount_price}% OFF)</span>
            </div>
            <button class="btn" onclick="addtocart('${item.id}')">Add to Cart</button>
        </div>
    `;
});

container_items.innerHTML = itemHTML;