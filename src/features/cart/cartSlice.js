// TODO => **Payload** => Data, we need to make a change in reducer

export const addItem = (itemToAdd) => {
    return {
      type: 'cart/addItem',
      payload: itemToAdd,
    };
  };
  
  // Create your changeItemQuantity action creator here.

  //TODO => I start by creating changeItemQuantity ACTION CREATOR. I set its type by defining -> (Slice of state that I am changing / Action that I am taking to change that slice) and then including the PAYLOAD with the data needed to make that update. I then handle that case to REDUCER by grabbing the item that I want to update (itemToUpdate), making a copy of that item -> const updatedItem = { ...itemToUpdate, quantity: newQuantity} and updating that copy and then returning a new state with the new state with a new item included -> return { ...cart, [name]: updatedItem};
export const changeItemQuantity = (name, newQuantity) => {
      
  return{ 
    type: 'cart/changeItemQuantity',
    payload: {  
                  name, 
                  newQuantity 
             } 

      // This is exactly same as writing:
      //   payload: {              
      //                name: name,
      //                newQuantity: newQuantity }
}
    }
  
  
  const initialCart = {};
  
  export const cartReducer = (cart = initialCart, action) => {
    switch (action.type) {
      case 'cart/addItem': {
        const { name, price } = action.payload;
  
        // if the item already exists, increase the quantity by 1, otherwise set it to 1
        const quantity = cart[name] ? cart[name].quantity + 1 : 1;
        const newItem = { price, quantity };
  
        // Add the new item to the cart (or replace it if it existed already)

        // TODO=> We are returning a new object, where the content of the cart is copied using spread syntax( ...cart), and then we use a nema of the item to explicitely set new object
        return { 
          ...cart, 
          [name]: newItem 
        };
      }
      
      case 'cart/changeItemQuantity': {
        const { name, newQuantity } = action.payload;
        
        // cart looks like this: cart =[{ name: 'Hello World Hat', price: 23.99, img: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/hello-world-hat.jpg' },{ name: 'Learn From Home Joggers', price: 45.99, img: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/sweatpants.jpg' }]
    
        
        const itemToUpdate = cart[name];

        // so lets say name is: 'Hello World Hat', therefore itemToUpdate will be: { name: 'Hello World Hat', price: 23.99, img: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/hello-world-hat.jpg' }

        // and so I cna update name, price or quantity
        
  
        // Create a copy of itemToUpdate and update the quantity prop.

        // TODO => You can use the spread operator (...) to copy the contents of one object into another. Then, you can specify any properties that you would like to update: OLD into NEW
        // const newObject = { 
        //                       ...oldObject, prop: newValue 
        //                   }
  
        
        // TODO => making a copy of an item I want to change -> and updating the property(in this case quantity) of that copy
        
        const updatedItem = {
                        ...itemToUpdate, 
                        quantity: newQuantity
                      }

        // Return a copy of the cart with the updatedItem included.
        // TODO => returning a new state with the new state and a new item included
        return {
                  ...cart, 
                  [name]: updatedItem
                };
      }
      default: {
        return cart;
      }
    }
  };