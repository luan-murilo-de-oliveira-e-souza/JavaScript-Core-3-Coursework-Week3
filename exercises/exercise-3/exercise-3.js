let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let sumTotal = "";
let total = "";
console.log(`QTY\t ITEM\t\t\t TOTAL`);
for (const { quantity, itemName, unitPrice } of order) {
  if (itemName.length < 14) {
    console.log(
      `${quantity}\t ${itemName}\t\t ${(quantity * unitPrice).toFixed(2)}`
    );
  } else {
    console.log(
      `${quantity}\t ${itemName}\t ${(quantity * unitPrice).toFixed(2)}`
    );
  }
  total = Number(total) + Number(quantity) * Number(unitPrice);
}

console.log(`\nTotal: ${total}`);
