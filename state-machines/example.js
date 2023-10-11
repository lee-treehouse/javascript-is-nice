// https://www.youtube.com/watch?v=0NkfCi-hKCc

const machine = {
  state: "SOBER",
  drunklevel: 0,
  transitions: {
    SOBER: {
      drink: function (beverage, second) {
        console.log("current state", this.state, this.drunklevel);
        console.log("\tdrinking", beverage.type); //second would be undefined
        if (beverage.type == "alcohol") {
          console.log("\tAdios inhibitions!");
          this.drunklevel += Math.floor(Math.random() * 21) + 10; //10 - 30
          this.setState("DRUNK");
        } else {
          console.log("\tThat quenched my thirst!");
          if (this.drunklevel > 0) {
            this.drunklevel -= Math.floor(this.drunklevel * 0.5);
          }
        }
      },
    },
    DRUNK: {
      drink: function (beverage) {
        console.log("current state", this.state, this.drunklevel);
        console.log("\tdrinking", beverage.type);
        if (beverage.type == "alcohol") {
          this.drunklevel += Math.floor(Math.random() * 21) + 10; //20 - 60
          console.log("\tAdios pants!");
          this.setState("REALLYDRUNK");
        } else {
          this.drunklevel -= Math.floor(this.drunklevel * 0.5);
          console.log("\tI said what?");
          this.setState("SOBER");
        }
      },
    },
    REALLYDRUNK: {
      drink: function (beverage) {
        console.log("current state", this.state, this.drunklevel);
        console.log("\tdrinking ", beverage.type);
        if (beverage.type == "alcohol") {
          //let dice = Math.floor(Math.random() * 2); // 0 or 1
          this.drunklevel += Math.floor(Math.random() * 21) + 10; // 30 - 90
          if (this.drunklevel > 70) {
            this.dispatch("throwup", {});
          } else {
            this.dispatch("passout", {});
          }
        } else {
          this.drunklevel -= Math.floor(this.drunklevel * 0.5);
          this.setState("DRUNK");
        }
      },
      passout: function () {
        console.log("\tPassing out. zzzzzzzzz");
        this.setState("ASLEEP");
      },
      throwup: function () {
        console.log("\tBlaaaaaaaaaaa....When did I eat that?");
        this.dispatch("passout", {});
      },
    },
    ASLEEP: {
      wake: function () {
        this.drunklevel -= Math.floor(this.drunklevel * 0.5);
        console.log("current state", this.state, this.drunklevel);
        console.log("\tWaking up.");
        this.setState("HUNGOVER");
      },
    },
    HUNGOVER: {
      openeyes: function () {
        console.log("current state", this.state, this.drunklevel);
        console.log("\tTurn off the sun please");
      },
      drink: function (beverage, person) {
        console.log("current state", this.state, this.drunklevel);
        console.log("\tdrinking", beverage.type);
        if (beverage.type == "alcohol") {
          console.log("\tIs it never again yet?");
          this.drunklevel += Math.floor(Math.random() * 21) + 10;
          this.setState("DRUNK");
        } else {
          console.log(`\t${person.name} - Never again.`);
          this.drunklevel -= Math.floor(this.drunklevel * 0.5);
          this.setState("SOBER");
        }
      },
    },
  },
  dispatch(actionName, ...payload) {
    const actions = this.transitions[this.state];
    const action = this.transitions[this.state][actionName];

    if (action) {
      action.apply(machine, ...payload);
    } else {
      //action is not valid for current state
    }
  },
  setState(newState) {
    //validate that newState actually exists
    this.state = newState;
  },
};

let Jeff = Object.create(machine, {
  name: {
    writable: false,
    enumerable: true,
    value: "Jeff",
  },
});

Jeff.dispatch("drink", [{ type: "alcohol" }, Jeff]);
Jeff.dispatch("drink", [{ type: "alcohol" }, Jeff]);
Jeff.dispatch("drink", [{ type: "alcohol" }, Jeff]);
Jeff.dispatch("wake");
Jeff.dispatch("openeyes");
Jeff.dispatch("drink", [{ type: "water" }, Jeff]);
Jeff.dispatch("eat");
Jeff.dispatch("drink", [{ type: "water" }, Jeff]);
console.log(Jeff.state, Jeff.drunklevel);
