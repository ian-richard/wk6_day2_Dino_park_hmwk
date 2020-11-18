const Park = function (name, ticket_price) {
    this.name = name;
    this.ticket_price = ticket_price;
    this.collection = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.collection.push(dinosaur);
};

Park.prototype.RemoveDinosaurByName = function (dino) {
    const indexOfDino = this.collection.indexOf(dino);
    this.collection.splice(indexOfDino, 1)
};

Park.prototype.mostVisitors = function () {
    let max = 0;
    let winner = []
    for (dinosaur of this.collection) {
        if (dinosaur.guestsAttractedPerDay > max){
            max = dinosaur.guestsAttractedPerDay;
        }
    }
    for (dinosaur of this.collection) {
        if (dinosaur.guestsAttractedPerDay === max){
            winner.push(dinosaur);
        }
    }
    return winner;
};

Park.prototype.findSpecies = function (dino) {
    let same_species = [];
    for (dinosaur of this.collection) {
        if (dinosaur.species == dino.species) {
            same_species.push(dinosaur)
        }
    }
    return same_species;
}

Park.prototype.totalVisitors = function () {
    let total = 0;
    for (const dino of this.collection) {
        total += dino.guestsAttractedPerDay;
    }
    return total;
}

Park.prototype.visits_per_year = function () {
    let days_in_year = 365;
    let total = 0;
    for (const dino of this.collection) {
        total += dino.guestsAttractedPerDay;
    }
    let visits_yearly = total*days_in_year
    return visits_yearly;
}

Park.prototype.revenue = function () {
    let days_in_year = 365;
    let tickets = this.ticket_price;
    let total = 0;
    for (const dino of this.collection) {
        total += dino.guestsAttractedPerDay;
    }
    let income = (total*days_in_year)*tickets
    return income;
}


module.exports = Park;
