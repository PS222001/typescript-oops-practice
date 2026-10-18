class Chef{
    constructor(
        public id : number,
        public name: string
    ){}
}

class Waiter {
    orders : Order[]=[];
    constructor(
        public id : number,
        public name: string
    ){}

    //Assign an order to an waiter
    manageOrder(order:Order):void{
        this.orders.push(order);
    }
}

class Order{
    status: "pending" | "preparing" | "served" |
     "cancelled" = "pending";
     constructor(
        public orderId: number,
        public itemName: string,
        public price: number,
        public chef: Chef
    ) {}
    // Change the order status
    updateStatus(newStatus:"pending" | "preparing" | "served" |
         "cancelled"):void{
            this.status=newStatus;
    }

    displayOrder():void{
        console.log(
            `Order ${this.orderId}:${this.itemName},` +
            `Chef: ${this.chef.name}, Status: ${this.status}`
        );
    }
}

class Restaurant{
    chefs: Chef[] = [];
    waiters: Waiter[] = [];
    orders: Order[] = [];

    constructor(public name:string){}
        
    addChef(chef:Chef):void{
            this.chefs.push(chef);
    }

    addWaiter(waiter:Waiter):void{
        this.waiters.push(waiter);
    }

    addOrder(order: Order, waiter: Waiter):void{
        this.orders.push(order);
        waiter.manageOrder(order);
    }

    removeChef(chef:Chef):void{
        this.chefs = this.chefs.filter(c=>c!==chef);
    }

    removeWaiter(waiter: Waiter): void {
        this.waiters = this.waiters.filter(w => w !== waiter);
    }

    // Calculate sales from served orders only
    calculateDailySales():number{
        return this.orders.filter(order=>order.status === "served")
        .reduce((total, order) => total + order.price, 0);
    }

    displayOrders(): void {
        console.log("\n--- Restaurant Orders ---");
        this.orders.forEach(order=>order.displayOrder());
    }
}


// Create the restaurant
const restaurant=new Restaurant("Food Corner");

//Create employees idependently for chef 
const chef1=new Chef(1,"Arun");
const chef2=new Chef(2,"Ram");
//Create employees idependently for waiter
const waiter1 = new Waiter(101,"Priya");
const waiter2 = new Waiter(102,"Ramesh");

// Add employees to the restaurant for chef
restaurant.addChef(chef1);
restaurant.addChef(chef2);
// Add employees to the restaurant for waiter
restaurant.addWaiter(waiter1);
restaurant.addWaiter(waiter2);
//Create order and assign chefs
const order1=new Order(1001,"Piza",300,chef1);
const order2 = new Order(1002, "Burger", 150, chef2);
const order3 = new Order(1003, "Pasta", 250, chef1);
//Assign orders to waiter
restaurant.addOrder(order1,waiter1);
restaurant.addOrder(order2, waiter1);
restaurant.addOrder(order3, waiter2);
//Update order statuses
order1.updateStatus("served");
order2.updateStatus("served");
order3.updateStatus("pending");

//DISPLAY 
// Display all orders
console.log("Restaurant:", restaurant.name);
restaurant.displayOrders();

// Display waiter order counts
console.log("\n--- Waiter Details ---");
console.log(`${waiter1.name} manages ${waiter1.orders.length} orders`);
console.log(`${waiter2.name} manages ${waiter2.orders.length} orders`);

// Calculate daily sales
console.log("\nDaily Sales: ₹" + restaurant.calculateDailySales());

//Aggreation Remove a chef from the restaurant
restaurant.removeChef(chef1);
console.log("\nChefs in restaurant:", restaurant.chefs.length);
console.log("Removed chef still exists:", chef1.name);
// Remove a waiter from the restaurant
restaurant.removeWaiter(waiter1);
console.log("Waiters in restaurant:", restaurant.waiters.length);
console.log("Removed waiter still exists:", waiter1.name);



/*- Create classes `Restaurant`, `Chef`, `Waiter`, and `Order`.
- A restaurant works with independently existing chef and waiter objects.
- Assign chefs to prepare orders.
- Allow waiters to manage multiple orders.
- Track order statuses: pending, preparing, served, and cancelled.
- Calculate daily sales.
- Removing a chef or waiter from a restaurant must not destroy the employee object.*/