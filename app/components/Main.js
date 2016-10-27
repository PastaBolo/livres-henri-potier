var React = require('react')
var ReactDOM = require('react-dom')
var Redux = require('redux')


const initialState = [
  {
    "isbn": "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
    "title": "Henri Potier à l'école des sorciers",
    "price": 35,
    "cover": "http://henri-potier.xebia.fr/hp0.jpg",
    "quantity": 0
  },
  {
    "isbn": "a460afed-e5e7-4e39-a39d-c885c05db861",
    "title": "Henri Potier et la Chambre des secrets",
    "price": 30,
    "cover": "http://henri-potier.xebia.fr/hp1.jpg",
    "quantity": 0
  },
  {
    "isbn": "fcd1e6fa-a63f-4f75-9da4-b560020b6acc",
    "title": "Henri Potier et le Prisonnier d'Azkaban",
    "price": 30,
    "cover": "http://henri-potier.xebia.fr/hp2.jpg",
    "quantity": 0
  },
  {
    "isbn": "c30968db-cb1d-442e-ad0f-80e37c077f89",
    "title": "Henri Potier et la Coupe de feu",
    "price": 29,
    "cover": "http://henri-potier.xebia.fr/hp3.jpg",
    "quantity": 0
  },
  {
    "isbn": "78ee5f25-b84f-45f7-bf33-6c7b30f1b502",
    "title": "Henri Potier et l'Ordre du phénix",
    "price": 28,
    "cover": "http://henri-potier.xebia.fr/hp4.jpg",
    "quantity": 0
  },
  {
    "isbn": "cef179f2-7cbc-41d6-94ca-ecd23d9f7fd6",
    "title": "Henri Potier et le Prince de sang-mêlé",
    "price": 30,
    "cover": "http://henri-potier.xebia.fr/hp5.jpg",
    "quantity": 0
  },
  {
    "isbn": "bbcee412-be64-4a0c-bf1e-315977acd924",
    "title": "Henri Potier et les Reliques de la Mort",
    "price": 35,
    "cover": "http://henri-potier.xebia.fr/hp6.jpg",
    "quantity": 0
  }
]

/*Object.assign(initialState, initialState.map((book, index) => {
  Object.assign(book, {"id": index})
}))
console.log(initialState)*/

function books(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TO_CART':
      /*state[action.index].quantity += 1
      return state*/
    case 'REMOVE_FROM_CART':
      /*if(state[action.index].quantity > 0) {
        state[action.index].quantity -= 1
      }
      return state*/
    default:
      return state
  }
}


const store = Redux.createStore(
  Redux.combineReducers({
    books
  })
)


var Main = React.createClass({
  render: function() {
    return(
      <div>
        <Header />
        {store.getState().books.map((book) => (
          <Book
            isbn={book.isbn}
            title={book.title}
            cover={book.cover}
            price={book.price}
            quantity={book.quantity}
          />
        ))}
      </div>
    )
  }
})


var Header = React.createClass({
  render: function() {
    return(
      <div>
        Nombre de livres dans le panier :
        Consulter le panier
      </div>
    )
  }
})


var Book = React.createClass({
  render: function() {
    return(
      <div>
        <h3>{this.props.title}</h3>
        <img src={this.props.cover} width="210" height="297" />
        <p>Prix : {this.props.price} €</p>
        <Quantity
          isbn={this.props.isbn}
          quantity={this.props.quantity}
        />
      </div>
    )
  }
})


var Quantity = React.createClass({
  render: function() {
    return(
      <div>
        <ButtonDecrease
          isbn={this.props.isbn}
        />
        {this.props.quantity}
        <ButtonAdd
          isbn={this.props.isbn}
        />
      </div>
    )
  }
})


var ButtonAdd = React.createClass({
  render: function() {
    return(
      <button onClick={() => store.dispatch({
        type: 'ADD_TO_CART',
        index: this.props.isbn
      })}>Add</button>
    )
  }
})


var ButtonDecrease = React.createClass({
  render: function() {
    return(
      <button onClick={() => store.dispatch({
        type: 'REMOVE_FROM_CART',
        index: this.props.isbn
      })}>Remove</button>
    )
  }
})


ReactDOM.render(<Main />, document.getElementById('app'))
