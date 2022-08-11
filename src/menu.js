export let menu = [];

class Dish {
    constructor(title, price, desc) {
        this.title = title;
        this.price = price;
        this.desc = desc;
    }
}

export function createDish(title, price, desc) {
    let dish = new Dish(title, price, desc);
    menu.push(dish);
}

