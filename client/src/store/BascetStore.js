// import { makeAutoObservable } from 'mobx'

// class BasketStore {
//     _cards = []

//     constructor() {
//         makeAutoObservable(this)
//     }

//     get cards() {
//         return this._cards
//     }

//     get count() { // всего позиций в корзине
//         return this._cards.length
//     }

//     get sum() { // стоимость всех товаров корзины
//         return this._cards.reduce((sum, item) => sum + item.price * item.quantity, 0)
//     }

//     set cards(cards) {
//         this._cards = cards
//     }
// }

// export default BasketStore