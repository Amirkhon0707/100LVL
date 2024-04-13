let products = [
    {
        id: 1,
        name: 'Crazy',
        price: 31000,
        img: 'images/products/burger-1.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    {
        id: 2,
        name: 'Light',
        price: 26000,
        img: 'images/products/burger-2.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    {
        id: 3,
        name: 'CheeseBurger',
        price: 29000,
        img: 'images/products/burger-3.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    {
        id: 4,
        name: 'dBurger',
        price: 24000,
        img: 'images/products/burger-4.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    {
        id: 5,
        name: 'beastBurger',
        price: 1100000000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqYjfwauDYY2WAf_5Zb0gPQNdx9mldZ88wwIz485Httw&s',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
]

let wrapperList = document.querySelector('.wrapper__list')

//outBurgers - Будет перебирать массив products, и выводить все данные в wrapperList

function outBurgers() {
    
    products.forEach((item) => {
        let { id, name, price, img, amount } = item
        
        wrapperList.innerHTML += `
        <div class="wrapper__list-card" id="${id}">
                <p class="wrapper__list-count"></p>
                <img class="wrapper__list-image" src="${img}">
                <h3 class="wrapper__list-title">${name}</h3>
                <div class="wrapper__list-sub">
                    <p class="wrapper__list-text">${price}</p>
                    <button class="wrapper__list-btn"><img src="images/sell-icon.svg" alt=""></button>
                </div>
            </div>
        `
        
    })
    
}

outBurgers()


let burgersBtn = document.querySelectorAll('.wrapper__list-btn'),
    cartBtn    = document.querySelector('.wrapper__navbar-btn'),
    basket     = document.querySelector('.wrapper__navbar-basket'),
    cartClose  = document.querySelector('.wrapper__navbar-close'),
    amountBasket = document.querySelector('.warapper__navbar-count'),
    cartTotalPrice = document.querySelector('.wrapper__navbar-totalprice'),
    korzina = []
    

    
cartBtn.addEventListener('click', () => basket.classList.add('active'))
cartClose.addEventListener('click', () => basket.classList.remove('active'))

burgersBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        addAmount(btn)
    })
})

// addAmount будет добавлять кол-во нашему выбронному бургеру

function addAmount(burgersBtn) {
    
    //closest() - метод который подключается к указанному ближайшему родителю 
    let id = burgersBtn.closest('.wrapper__list-card').getAttribute('id')
    let currentBurger = products.find((item) => item.id == id)
    currentBurger.amount++
        if (currentBurger.amount  === 10) {
            alert('МЫ ЗАБОТИМСЯ О ТВОЁМ ЖИВОТЕ : ) НЕ НАГРУЖАЙ ЕГО')
        }
    addToKorzina(currentBurger)
}

function addToKorzina(burger) {
    if(burger.amount > 0){
        if (!korzina.includes(burger)) {
            korzina.push(burger)
        }
    }
    outData()
}

function outData () {
    
    cartTotalPrice.innerHTML = getTotalPrice()
    let allAmount = getTotalAmount()
    if(allAmount > 0) {
        amountBasket.classList.add('active')
        amountBasket.innerHTML = allAmount
    }else {
        amountBasket.classList.remove('active')
        amountBasket.innerHTML = ''
    }
}

function getTotalAmount () {
    let sum = 0;
    products.forEach((item) => {
        sum +=  item.amount
    })
    return sum
}

function getTotalPrice() {
    let total = 0 
    products.forEach((item) => {
        total +=  item.totalSum
    })
    
    return total + 'сум'
}


const lvl = document.querySelector('.title');


function lvlh() {
    lvl.innerHTML++
    setTimeout(() => lvlh(), 50);
        
         if (lvl.innerHTML == 100) {
            let asd = ' lvl'
            lvl.style.fontSize = 100 + 'px'
            lvl.style.transition = .5 + 's'
            let rty = lvl.innerHTML + asd;
            lvl.innerHTML = rty;
            return(lvlh) = false;
        }
}

lvlh()
