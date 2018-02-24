$(document).ready(function(){
  // the instructions require a random number "between 19 - 120"
  // the variable tokenValue gives a number x, such that 20 <= x <= 119,
  // which is equivalent to a number x such that 19 < x < 120.
  var tokenValue = 0;
  var tokenHorses = {
    objType: "token",
    name: "Horses",
    objDescriptor: "Horses's info ... ",
    portalsOpened: 0,
    totalDoors: 0,
    showInfo: function() {
      console.log(this.objDescriptor + this.totalDoors);
    }
  };
  var tokenFish = {
    objType: "token",
    name: "Fish",
    objDescriptor: "Fish's info ... ",
    portalsOpened: 0,
    totalDoors: 0,
    showInfo: function() {
      console.log(this.objDescriptor + this.totalDoors);
    }
  };
  var tokenTree = {
    objType: "token",
    name: "Tree",
    objDescriptor: "Tree's info ... ",
    portalsOpened: 0,
    totalDoors: 0,
    showInfo: function() {
      console.log(this.objDescriptor + this.totalDoors);
    }
  };
  var tokenWolf = {
    objType: "token",
    name: "Wolf",
    objDescriptor: "Wolf's info ... ",
    portalsOpened: 0,
    totalDoors: 0,
    showInfo: function() {
      console.log(this.objDescriptor + this.totalDoors);
    }
  };
  tokenHorses.showInfo();
  tokenFish.showInfo();
  tokenTree.showInfo();
  tokenWolf.showInfo();
  var objectMgrr = {
    objType: "adventurer",
    portalsOpened: 0,
    portalsUnOpened: 0,
    OpenPortal: function() {
      this.portalsOpened += 1;
      $("#winCount").html(this.portalsOpened);
    },
    portalCloses: function(){
      this.portalsUnOpened +=1;
      $("#lossCount").html(this.portalsUnOpened);
    }
  }
    // announcing the next portal (only after the first is finished)
    var portalSetToOpen = function() {
      $("#DoorsToGo").html("The Portal is set to open...");
      $("#clicktoBegin").html("");
      $("#doorsToOpen").html("");
    }
    // the countdown timers
    var countDownThree = function(){
      $("#DoorsToGo").html("<h1>In 3 ...</h1>");
    }
    var countDownTwo = function(){
      $("#DoorsToGo").html("<h1>In 2 ...</h1>");
    }
    var countDownOne = function(){
      $("#DoorsToGo").html("<h1>In 1 ...</h1>");
    }
    // starting the adventure and initializing the variables each token is random and independent of the other
    var openThePortal = function() {
      tokenValue = Math.floor((Math.random()*100))+20;
      tokenHorses.totalDoors = Math.floor((Math.random()*100)%12)+1;
      tokenFish.totalDoors = Math.floor((Math.random()*100)%12)+1;
      tokenTree.totalDoors = Math.floor((Math.random()*100)%12)+1;
      tokenWolf.totalDoors = Math.floor((Math.random()*100)%12)+1;
      tokenHorses.showInfo();
      tokenFish.showInfo();
      tokenTree.showInfo();
      tokenWolf.showInfo();
      $("#clicktoBegin").html("Click on a token to begin the game!");
      $("#totalDoorsToOpen").html("The portal is closing you have " + tokenValue + " doors to go.");
      $("#DoorsToGo").html("Your adventurer has "+ tokenValue + " more doors to open!");
    };

    // setting the countdown for game action
    function portalToOpen() {
      setTimeout(portalSetToOpen, 6000);
      setTimeout(countDownThree, 12000);
      setTimeout(countDownTwo, 13000);
      setTimeout(countDownOne, 14000);
      setTimeout(openThePortal, 15000);
      clearTimeout();
    }
    // start the adventure!
    portalToOpen();
    // token buttons and their handling
    $("button.token").click(function() {
      // what to do if the player clicked on Horses
      if (this.value === "Horses") {
        tokenValue -= tokenHorses.totalDoors;
          // if we keep the portal open,
          if (tokenValue === 0) {
           $("#DoorsToGo").html(tokenHorses.name + " has kept the portal open!");
            objectMgrr.OpenPortal();
            portalToOpen();
          }

          else if (tokenValue < 0) {
           
            $("#DoorsToGo").html("Your adventurer has " + - tokenValue + " valued the door " + tokenHorses.name + " has become lost in the realm");
            objectMgrr.portalCloses();
            portalToOpen();
          }

          else {
            $("#DoorsToGo").html("Your adventurer has "+ tokenValue + " more doors to open!");
          }
      }
      // what to do if the player clicked on Fish
      else if (this.value === "Fish") {
        tokenValue -= tokenFish.totalDoors;
        if (tokenValue === 0) {
        $("#DoorsToGo").html(tokenFish.name + " has kept the portal open!");
          objectMgrr.OpenPortal();
          portalToOpen();
        }

        else if (tokenValue < 0) {
         $("#DoorsToGo").html("Your adventurer has " + - tokenValue + " valued the door and " + tokenFish.name + " has become lost in the realm!");
         objectMgrr.portalCloses();
         portalToOpen();
        }
        else {
          $("#DoorsToGo").html("Your adventurer has "+ tokenValue + " more doors to open!");
        }
      }
      // what to do if the player clicked on Tree
      else if (this.value === "Tree") {
        tokenValue -= tokenTree.totalDoors;
        if (tokenValue === 0) {
        $("#DoorsToGo").html(tokenTree.name + " has kept the portal open!");
         objectMgrr.OpenPortal();
          portalToOpen();
        }
        // if we over valued the door,
        else if (tokenValue < 0) {
         $("#DoorsToGo").html("Your adventurer has " + - tokenValue + " valued the door and " + tokenTree.name + " has become lost in the realm!");
         objectMgrr.portalCloses();
         portalToOpen();
        }
        else {
          $("#DoorsToGo").html("Your adventurer has "+ tokenValue + " more doors to open!");
        }
      }
      // what to do if the player clicked on Wolf
      else if (this.value === "Wolf") {
        tokenValue -= tokenWolf.totalDoors;
        if (tokenValue === 0) {
        $("#DoorsToGo").html(tokenWolf.name + " has opened the portal!");
        objectMgrr.OpenPortal();
        portalToOpen();
        }

        else if (tokenValue < 0) {
         $("#DoorsToGo").html("Your adventurer has " + - tokenValue + " valued the door and " + tokenWolf.name + " has become lost in the realm!");
          objectMgrr.portalCloses();
          portalToOpen();
        }
        else {
          $("#DoorsToGo").html("Your adventurer has "+ tokenValue + " more doors to open!");
        }
      }
    });
  });