function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 15;
}

Pizza.prototype.value = function() {
  if (this.toppings.includes("Fauna")) {
    this.price += 6;
  } else {
    this.price;
  }
  if (this.toppings.includes("Flora")) {
    this.price += 4;
  } else {
    this.price;
  }
  if (this.toppings.includes("Fungus")) {
    this.price += 3;
  } else {
    this.price;
  }

  if (this.size === "Digestion Supplement") {
    this.price -= 5;
  } else if (this.size === "Beyond Gastral Capacity") {
    this.price += 5;
  } else {
    this.price;
  }
  return this.price;
};

function reveal(yourPizza) {
  $("#checkout").show();
  $(".toppings").html(yourPizza.toppings.join(", "));
  $(".size").html(yourPizza.size);
  $(".price").html(yourPizza.price);
}

$(document).ready(function() {
  $("#checkout").hide();
  $("form#za").submit(function(event) {
    event.preventDefault();
    let toppingsArray = []
    let pizzaToppings = $("input:checkbox[name=topping]:checked").each(function() {
      toppingsArray.push($(this).val())
    });
    let pizzaSize = $("input:radio[name=size]:checked").val();
    let yourPizza = new Pizza(toppingsArray, pizzaSize);
    yourPizza.value();
    reveal(yourPizza);
    $("#za").hide();
  });
})
