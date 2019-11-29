import React, {Component} from 'react';
import Item from "./components/Item/Item";
import nanoid from 'nanoid';
import './App.css';

class App extends Component{
  state = {
    item: '',
    price: '',
    items: [],
    totalPrice: 0,
  };

  changeTitle = (e) => {
    this.setState({item: e.target.value});
  };

  changePrice = (e) => {
    let price = e.target.value;


    this.setState({price});
  };

  addItem = () => {
    const items = [...this.state.items];
    const title = this.state.item;
    const price = Number(this.state.price);
    let totalPrice = this.state.totalPrice;
    items.push({
      title: title,
      id: nanoid(),
      price: price
    });
    totalPrice += price;
    this.setState({items, totalPrice});

  };

  removeItem = (id, price) => {
    const items = [...this.state.items];
    const index = items.findIndex(item=> item.id ===id);
    items.splice(index,1);
    let totalPrice = this.state.totalPrice;
    totalPrice -= Number(price);
    this.setState({items, totalPrice});
  };


  render(){
    return (
        <div className="App">
          <label>
            Title:
            <input className='input' type="text" value={this.state.item} onChange={this.changeTitle}/>
          </label>

          <label>
            Price:
            <input className='input' type="text" value={this.state.price} onChange={this.changePrice}/>
          </label>

          <button className='add' onClick={this.addItem}>Add</button>

          {this.state.items.map(item => (
              <Item
                  title={item.title}
                  id={item.id}
                  price={item.price}
                  remove = {() =>this.removeItem(item.id, item.price)}
              />
          ))}
          <p>Total: {this.state.totalPrice}</p>
        </div>
    );
  }

}

export default App;
