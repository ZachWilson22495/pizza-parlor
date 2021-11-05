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

$(document).ready(function() {
  $("form#za").submit(function(event) {
    event.preventDefault();
    let pizzaToppings = $("input:checkbox[name=topping]:checked").val();
    let pizzaSize = $("input:radio[name=size]:checked").val();
    $("input:checkbox[name=topping]:checked").val("");
    $("input:radio[name=size]:checked").val("");
    let yourPizza = new Pizza(pizzaToppings, pizzaSize);
    yourPizza.value();
    reveal(yourPizza);
    $("#za").hide();
  });
})
