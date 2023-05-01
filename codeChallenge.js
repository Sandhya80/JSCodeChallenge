/*Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.*/

const groceries = arr => {
  let itemName = '';
  let arrSize = arr.length;
  for (let i= 0; i < arrSize; i++) {
    if (i != 0 ) {
      if (i == (arrSize-1) ) 
        itemName += ' and ';
      else 
        itemName += ', ';
    } 
    itemName += arr[i].item;
  }
  return itemName;
}

//Testing the code:

console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));
console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));
console.log(groceries( [{item: 'Cheese Balls'}] ));