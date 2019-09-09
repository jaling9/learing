var products = [ 'Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'];

for (var i = 0; i <= products.lenght; i++) { // number 2
// number 3
var myArray = products[i].split(':');
var name = myArray[0];
var price =Number(myArray[1]) ;
var final = 'name' + '——$' + price
total += price;

// 打印这些产品
var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';

var products = ['Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'];

for(var i = 0; i < products.length; i++) {
  var subArray = products[i].split(':');
  var name = subArray[0];
  var price = Number(subArray[1]);
  total += price;
  itemText = name + ' — $' + price;

  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);



// 前5个搜索
var list = document.querySelector('.output ul');
var searchInput = document.querySelector('.output input');
var searchBtn = document.querySelector('.output button');

list.innerHTML = '';

var myHistory= [];

searchBtn.onclick = function() {
  if(searchInput.value !== '') {
    myHistory.unshift(searchInput.value);

    list.innerHTML = '';

    for(var i = 0; i < myHistory.length; i++) {
     var itemText = myHistory[i];
      var listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    if(myHistory.length >= 5) {
      myHistory.pop();
    }

    searchInput.value = '';
    searchInput.focus();
  }
}