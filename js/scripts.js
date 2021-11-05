//Step 1. Build a constructor for Pizza objects. Have it contain toppings and size as properties

//Step 2. Friggin' FOCUS!!!

//Step 3. Decide on Toppings and Sizes below:

Toppings:
Fauna (meat)
Flora (veg)
Fungus (mush)

Sizes:
Digestive Supplement
Authentic Human Experience
Beyond Gastral Capacity



//Step 4. Build form that contains said choices.

//Step 5. Add numeric values to toppings and sizes so that price can fluctuate.

//Step 6. Show price to user upon submitting.

function Pizza(toppings, size) {
  this.toppings = [];
  this.size = size;
  this.price = 15;
}

Pizza.prototype.value = function() {
  if (this.toppings.includes(meat)) {
    this.price += 6;
  } else {
    this.price;
  }
  if (this.toppings.includes(veg)) {
    this.price += 4;
  } else {
    this.price;
  }
  if (this.toppings.includes(mush)) {
    this.price += 3;
  } else {
    this.price;
  }

  if (this.size === small) {
    this.price -= 5;
  } else if (this.size === large) {
    this.price += 5;
  } else {
    this.price;
  }
  return this.price;
};

function reveal(yourPizza) {
  $("#checkout").show();
  $(".toppings").html(yourPizza.toppings);
  $(".size").html(yourPizza.size);
  $(".price").html(yourPizza.price);
}