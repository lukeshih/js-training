
let maxTeaID = 0;

class Tea {
  constructor(name, cal){
    this.id = maxTeaID+1;
    this.name = name;
    this.cal = cal;

    maxTeaID++;
  }

  show(){
    let result = {
      "id": this.id,
      "name": this.name,
      "cal": this.cal
    };

    return result;
  }

}

function Milk(name, color){
  this.name = name;
  this.color = color;
}

Milk.prototype = {
  show() {
    return {
      "name": this.name,
      "color": this.color
    }
  }
}






exports.Tea = Tea;
exports.Milk = Milk;