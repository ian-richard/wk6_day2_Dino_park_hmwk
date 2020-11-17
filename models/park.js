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
    for (dinosaur of this.collection) {
        if (dinosaur.guestsAttractedPerDay > max){
            max = dinosaur.guestsAttractedPerDay;
        }
    
    }
    return max;
};



    // let max = 0;
    // let popularDinosaur = Dinosaur2;
    // this.collection.forEach(dinosaur => {
    //     if (dinosaur.guestsAttractedPerDay > max){
    //         max = dinosaur.guestsAttractedPerDay;
    //     }
    // })
    // // for (dinosaur of this.collection){
    // //     if (dinosaur.guestsAttractedPerDay === max){
    // //         popularDinosaur = dinosaur;
    // //     }
    // // }
    // return popularDinosaur;


    // let max = 0;
    // let dino_list = [];
    // this.collection.forEach(dino => {
    //     if (dino.guestsAttractedPerDay > max) {
    //         max = dino.guestsAttractedPerDay;
    //     }
    //     this.collection.forEach(dino => {
    //         if (dino.guestsAttractedPerDay === max) {
    //             dino_list.push(dino);
    //         }
    //     }
    //     }
    // }
    // return dino_list[0];
    // );
// // ................................................
//     let arr = Object.values(this.collection);
//     let max = Math.max(...arr);
//     return max;
// //..................................................
//     return Math.max.apply(null, this.collection);


module.exports = Park;