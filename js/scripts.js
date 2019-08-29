// Business Logic for AddressBook ---------
// Ticket constructor
function Ticket(movieName, matinee, age, price) {
  this.movieName = movieName,
  this.matinee = matinee,
  this.age = age,
  this.price = price
}

Ticket.prototype.nameDiscount = function() {
  if (this.movieName === "godfather") {
    return -5;
  } else {
    return 0;
  }
}

Ticket.prototype.matineeDiscount = function() {
  if (this.matinee === "morning") {
    return -5;
  } else {
    return 0;
  }
}

Ticket.prototype.ageDiscount = function () {
  if (this.age === "children" || this.age === "senior") {
    return -5;
  } else {
    return 0;
  }
}

Ticket.prototype.calcPrice = function () {
  return this.price + this.nameDiscount() + this.matineeDiscount() + this.ageDiscount();
}

// User Interface Logic
$(document).ready(function() {
  $("form#movies").submit(function(event) {
    event.preventDefault();

    var inputtedMovieName = $("input:checkbox[name=movie]:checked").val();
    var inputtedMatinee = $("input:checkbox[name=matinee]:checked").val();
    var inputtedAge = $("input:checkbox[name=age]:checked").val();

    var newTicket = new Ticket (inputtedMovieName, inputtedMatinee, inputtedAge, 30);
    //console.log(newTicket.calcPrice());

    $("#price").show();
    $("#price").text("Your ticket price is " + newTicket.calcPrice());

    $("input:checkbox").prop("checked", false);
  });
});
