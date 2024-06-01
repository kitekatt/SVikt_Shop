// import React from 'react'

// const AppContext = React.createContext()

// // контекст, который будем передавать
// const context = {
//     user: {
//         email: 'user@mail.ru',
//         isAuth: true,
//         isAdmin: false,
//     },
//     cards: [
//         {id: 1, name: 'Холодильник раз', price: 12345, description: 'asdasd', rating: 0, image: '', categoryId: 1, typeId: 1},
//         {id: 2, name: 'Холодильник два', price: 23456, description: 'asdasd', rating: 0, image: '', categoryId: 1, typeId: 2},
//         {id: 3, name: 'Телевизор раз', price: 34567, description: 'asdasd', rating: 0, image: '', categoryId: 2, typeId: 1},
//         {id: 4, name: 'Телевизор два', price: 45678, description: 'asdasd', rating: 0, image: '', categoryId: 2, typeId: 2},
//         {id: 5, name: 'Смартфон раз', price: 56789, description: 'asdasd', rating: 0, image: '', categoryId: 3, typeId: 3},
//         {id: 6, name: 'Смартфон два', price: 67890, description: 'asdasd', rating: 0, image: '', categoryId: 3, typeId: 4},
//         {id: 7, name: 'Планшет раз', price: 78901, description: 'asdasd', rating: 0, image: '', categoryId: 4, typeId: 3},
//         {id: 8, name: 'Планшет два', price: 89012, description: 'asdasd', rating: 0, image: '', categoryId: 4, typeId: 4},
//     ],
//     categories: [
//         {id: 1, name: 'Холодильники'},
//         {id: 2, name: 'Телевизоры'},
//         {id: 3, name: 'Смартфоны'},
//         {id: 4, name: 'Планшеты'},
//     ],
//     types: [
//         {id: 1, name: 'Samsung'},
//         {id: 2, name: 'Philips'},
//         {id: 3, name: 'Siemens'},
//         {id: 4, name: 'Xiaomi'},
//     ],
// }

// const AppContextProvider = (props) => {
//     return (
//         <AppContext.Provider value={context}>
//             {props.children}
//         </AppContext.Provider>
//     );
// }

// export {AppContext, AppContextProvider}