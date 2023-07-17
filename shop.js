function createCatalog() {
  return {
    goods: [],
    addGood: function (id, name, description, sizes, price, available) {
      this.goods.push({
        id,
        name,
        description,
        sizes,
        price,
        available,
      });
    },
    getGood: function (id) {
      for (let good of this.goods) {
        if (good.id === id) {
          return good;
        }
      }
      return null;
    },
  };
};

function createCart() {
  return {
    orders: [],
    addGood: function (goodId, amount) {
      const good = catalog.getGood(goodId);
      if (good) {
        this.orders.push({ good, amount });
        console.log(`Товар "${good.name}" добавлен в корзину.`);
      } else {
        console.log(`Товар с ID ${goodId} не найден в каталоге.`);
      }
    },
    removeGood: function (goodId) {
      let removedOrder = null;
      for (let i = 0; i < this.orders.length; i++) {
        if (this.orders[i].good.id === goodId) {
          removedOrder = this.orders.splice(i, 1)[0];
          console.log(`Товар "${removedOrder.good.name}" удален из корзины.`);
          break;
        }
      }
      if (!removedOrder) {
        console.log(`Товар с ID ${goodId} не найден в корзине.`);
      }
      return removedOrder;
    },
    clearCart: function () {
      this.orders = [];
      console.log("Корзина очищена.");
    },
    getTotalAmountAndTotalSumm: function () {
      let totalAmount = 0;
      let totalSumm = 0;
      for (let order of this.orders) {
        totalAmount += order.amount;
        totalSumm += order.good.price * order.amount;
      }
      return { totalAmount, totalSumm };
    }
  };
}

// Создаем экземпляры товаров
const catalog = createCatalog();
catalog.addGood(1, 'Товар 1', 'Описание товара 1', ['S', 'M', 'L'], 100, true);
catalog.addGood(2, 'Товар 2', 'Описание товара 2', ['M', 'L', 'XL'], 200, false);
catalog.addGood(3, 'Товар 3', 'Описание товара 3', ['L', 'XL', 'XXL'], 300, true);
catalog.addGood(4, 'Товар 4', 'Описание товара 4', ['S', 'M', 'L'], 150, true);
catalog.addGood(5, 'Товар 5', 'Описание товара 5', ['M', 'L', 'XL'], 250, false);
//console.log(catalog.goods)

const cart = createCart();
cart.addGood(1, 2);
cart.addGood(4, 1);
cart.addGood(3, 3);
console.log(cart.getTotalAmountAndTotalSumm());
//console.log(cart.orders); // Выводим все заказы до удаления

//cart.clearCart();
//console.log(cart.getTotalAmountAndTotalSumm());
//const removedOrder = cart.removeGood(2);
//console.log(removedOrder); // Выводим удаленный заказ

//console.log(cart.orders); // Выводим все заказы после удаления
