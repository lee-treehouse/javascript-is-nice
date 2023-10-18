// https://stackoverflow.com/a/20279485
class Cat {
  firstName = "Ernie";

  booify = () => {
    if (!this) {
      console.log("not this");
      return;
    }

    const name = this.firstName;
    const suffix = name.substring(name.length - 4);

    if (suffix !== "-boo") {
      this.firstName = `${this.firstName}-boo`;
    }
  };

  printName() {
    if (this && this.firstName) {
      console.log(this.firstName);
    }
  }

  doMultipleThings() {
    this.booify();
    this.printName();
  }

  doTwoThings = (firstThing, secondThing) => {
    firstThing();
    secondThing();
  };

  doTwoSpecificThings() {
    // this works for the first function because it's an arrow function
    // for the second, we bind this

    this.doTwoThings(this.booify, this.printName.bind(this));
  }
}

cat = new Cat();
//cat.doMultipleThings();
//cat.doMultipleThings();
cat.doTwoSpecificThings();
