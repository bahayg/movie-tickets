// Business Logic for AddressBook ---------

// Price.prototype.calculateTicket = function() {
//   for (var i=0; i<this.tickets.length; i++) {
//     if (this.tickets[i] === ("godfather") {
//         return this.tickets -5
//         return this.tickets[i];
//       }
//     }
//   };
//   return false;
// }

// Business Logic for Tickets ---------
function Ticket(movieName, matinee, age) {
  this.movieName = movieName,
  this.matinee = matinee,
  this.age = age
}
Ticket.prototype.nameDiscount = function() {
  if (this.movieName === "godfather") {
    return this.nameDiscount === -5
  } else {
    return this.nameDiscount === 0
  }
}
Ticket.prototype.matineeDiscount = function() {
  if (this.matinee === "morning") {
    return this.matineeDiscount === -5
  } else {
    return this.matineeDiscount === 0
  }
}
Ticket.prototype.ageDiscount = function () {
  if (this.age === "children" || this.age === "senior") {
    return this.ageDiscount === -5
  } else {
    return this.ageDiscount === 0
  }
}
function ticketPrice () {
  this.currentPrice === 30   
}

Ticket.prototype.ticketPrice = function () {
  return this.currentPrice + this.nameDiscount + this.matineeDiscount + this.ageDiscount
}


// User Interface Logic ---------
$(document).ready(function() {
  //attachContactListeners();
  $(".form-group#new-ticket").submit(function(event) {
    event.preventDefault();
    var inputtedMovieName = $("input#new-movie-name").val();
    var inputtedMatinee = $("input#new-matinee").val();
    var inputtedAge = $("input#new-age").val();

    $("input#new-movie-name").val("");
    $("input#new-matinee").val("");
    $("input#new-age").val("");

    // var newTicket = new Ticket (inputtedMovieNAme, inputtedMatinee, inputtedAge);
    // price.addTicket(newContact);
    // displayContactDetails(addressBook);
  });
});
