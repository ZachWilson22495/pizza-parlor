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
}