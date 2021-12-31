var cartModule = (function(){
    _cart = [];
    var _addToCart = (item) => {
        console.log('Item Added')
        _cart.push(item);
    }
    var _totalCount = ()=>{
        return _cart.length;
    }
    var _printBill= ()=>{
        var sum = 0;
        _cart.forEach(item=>{
            console.log(_cart.length);
            console.log(`ItemName: ${item.itemName}`);
            console.log(`Price: ${item.price}`);
            console.log(`brand: ${item.brand}`);
            sum+=item.price;
        });
        console.log("Total price", sum);
    }
    var _showMessage = () => console.log('Cart Details');
    return {
        addToCart: _addToCart,
        itemCount: _totalCount,
        showBill: _printBill,
        message: _showMessage,
        nmessages: 'Happy Shopping'
    }
})();

cartModule.addToCart({itemName: 'pen', price: 800, brand: 'Parker'});
cartModule.addToCart({itemName: 'Botel', price: 1200, brand: 'Tupper Ware'});
console.log(cartModule.itemCount());
cartModule.showBill();
