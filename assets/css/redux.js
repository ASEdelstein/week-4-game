 $(document).ready(function(){
    // the instructions require a random number "between 19 - 120"
    // the variable milesToRun gives a number x, such that 20 <= x <= 119,
    // which is equivalent to a number x such that 19 < x < 120.
    var milesToRun = 0;
    var objectSilvia = {
      objType: "person",
      name: "Silvia",
      objDescriptor: "Silvia's info ... ",
      legsRan: 0,
      distance: 0,
      showInfo: function() {
        console.log(this.objDescriptor + this.distance);
      }
    };
    var objectRocio = {
      objType: "person",
      name: "Rocio",
      objDescriptor: "Rocio's info ... ",
      legsRan: 0,
      distance: 0,
      showInfo: function() {
        console.log(this.objDescriptor + this.distance);
      }
    };
    var objectLauro = {
      objType: "person",
      name: "Lauro",
      objDescriptor: "Lauro's info ... ",
      legsRan: 0,
      distance: 0,
      showInfo: function() {
        console.log(this.objDescriptor + this.distance);
      }
    };
    var objectRandy = {
      objType: "person",
      name: "Randy",
      objDescriptor: "Randy's info ... ",
      legsRan: 0,
      distance: 0,
      showInfo: function() {
        console.log(this.objDescriptor + this.distance);
      }
    };
    objectSilvia.showInfo();
    objectRocio.showInfo();
    objectLauro.showInfo();
    objectRandy.showInfo();
    var objectMgrr = {
      objType: "team",
      name: "Meet, Greet, Run, Repeat",
      racesFinished: 0,
      racesUnFinished: 0,
      winARace: function() {
        this.racesFinished += 1;
        $("#winCount").html(this.racesFinished);
        var audioWin = new Audio('assets/images/SMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408.mp3');
        audioWin.play();
      },
      loseARace: function(){
        this.racesUnFinished +=1;
        $("#lossCount").html(this.racesUnFinished);
        var audioLose = new Audio('assets/images/336998__corsica-s__awww-01.wav');
        audioLose.play();
      }
    }
      // announcing the next race (only after the first is finished)
      var almostTimeForRace = function() {
        $("#milesToRunWords").html("It's about time for the next relay race...");
        $("#clickToRun").html("");
        $("#milesInRaceWords").html("");
      }
      // the countdown timers
      var countDownThree = function(){
        $("#milesToRunWords").html("<h1>In 3 ...</h1>");
      }
      var countDownTwo = function(){
        $("#milesToRunWords").html("<h1>In 2 ...</h1>");
      }
      var countDownOne = function(){
        $("#milesToRunWords").html("<h1>In 1 ...</h1>");
      }
      // starting the race and initializing the variables
      var startTheRace = function() {
        var audioCannon = new Audio('assets/images/Cannon-SoundBible.com-1661203605.mp3');
        audioCannon.play();
        // miles in the race
        milesToRun = Math.floor((Math.random()*100))+20;
        // distances for runners
        objectSilvia.distance = Math.floor((Math.random()*100)%12)+1;
        objectRocio.distance = Math.floor((Math.random()*100)%12)+1;
        objectLauro.distance = Math.floor((Math.random()*100)%12)+1;
        objectRandy.distance = Math.floor((Math.random()*100)%12)+1;
        // for testing, we can see the actual miles in the console #cheeter
        objectSilvia.showInfo();
        objectRocio.showInfo();
        objectLauro.showInfo();
        objectRandy.showInfo();
        $("#clickToRun").html("Click on a team member to start running!");
        // the words for the miles to run and the miles left
        $("#milesInRaceWords").html("The relay is " + milesToRun + " miles long.");
        $("#milesToRunWords").html("Your team has "+ milesToRun + " more miles to run!");
      };
      function startTheRelay() {
        setTimeout(almostTimeForRace, 6000);
        setTimeout(countDownThree, 12000);
        setTimeout(countDownTwo, 13000);
        setTimeout(countDownOne, 14000);
        setTimeout(startTheRace, 15000);
        clearTimeout();
      }
      // start the race!
      startTheRelay();
      // runner buttons and their handling
      $("button.runner").click(function() {
        // what to do if the player clicked on Silvia
        if (this.value === "Silvia") {
          // reduce the miles by runner's distance
          milesToRun -= objectSilvia.distance;
            // if we crossed the finish line,
            if (milesToRun === 0) {
              // announce the win
              $("#milesToRunWords").html(objectSilvia.name + " crossed the finish line for your team!");
              // flip counter for the wins column
              objectMgrr.winARace();
              // start the race over, but only after giving the warnings
              startTheRelay();
            }
            // if we ran too far,
            else if (milesToRun < 0) {
              // Show the miles we went over
              $("#milesToRunWords").html("Your team ran " + - milesToRun + " too many miles. " + objectSilvia.name + " must have gotten lost!");
              // flip counter for the losses column
              objectMgrr.loseARace();
              // start the race over, but only after giving the warnings
              startTheRelay();
            }
            // continuing if we haven't won or lost
            else {
              $("#milesToRunWords").html("Your team has "+ milesToRun + " more miles to run!");
            }
        }
        // what to do if the player clicked on Rocio
        else if (this.value === "Rocio") {
          // reduce the miles by runner's distance
          milesToRun -= objectRocio.distance;
          // if we crossed the finish line,
          if (milesToRun === 0) {
            // announce the win
            $("#milesToRunWords").html(objectRocio.name + " crossed the finish line for your team!");
            // flip counter for the wins column
            objectMgrr.winARace();
            // start the race over, but only after giving the warnings
            startTheRelay();
          }
          // if we ran too far,
          else if (milesToRun < 0) {
            // Show the miles we went over
            $("#milesToRunWords").html("Your team ran " + - milesToRun + " too many miles. " + objectRocio.name + " must have gotten lost!");
            // flip counter for the losses column
            objectMgrr.loseARace();
            // start the race over, but only after giving the warnings
            startTheRelay();
          }
          // continuing if we haven't won or lost
          else {
            $("#milesToRunWords").html("Your team has "+ milesToRun + " more miles to run!");
          }
        }
        // what to do if the player clicked on Lauro
        else if (this.value === "Lauro") {
          // reduce the miles by runner's distance
          milesToRun -= objectLauro.distance;
          // if we crossed the finish line,
          if (milesToRun === 0) {
            // announce the win
            $("#milesToRunWords").html(objectLauro.name + " crossed the finish line for your team!");
            // flip counter for the wins column
            objectMgrr.winARace();
            // start the race over, but only after giving the warnings
            startTheRelay();
          }
          // if we ran too far,
          else if (milesToRun < 0) {
            // Show the miles we went over
            $("#milesToRunWords").html("Your team ran " + - milesToRun + " too many miles. " + objectLauro.name + " must have gotten lost!");
            // flip counter for the losses column
            objectMgrr.loseARace();
            // start the race over, but only after giving the warnings
            startTheRelay();
          }
          // continuing if we haven't won or lost
          else {
            $("#milesToRunWords").html("Your team has "+ milesToRun + " more miles to run!");
          }
        }
        // what to do if the player clicked on Randy
        else if (this.value === "Randy") {
          // reduce the miles by runner's distance
          milesToRun -= objectRandy.distance;
          // if we crossed the finish line,
          if (milesToRun === 0) {
            // announce the win
            $("#milesToRunWords").html(objectRandy.name + " crossed the finish line for your team!");
            // flip counter for the wins column
            objectMgrr.winARace();
            // start the race over, but only after giving the warnings
            startTheRelay();
          }
          // if we ran too far,
          else if (milesToRun < 0) {
            // Show the miles we went over
            $("#milesToRunWords").html("Your team ran " + - milesToRun + " too many miles. " + objectRandy.name + " must have gotten lost!");
            // flip counter for the losses column
            objectMgrr.loseARace();
            // start the race over, but only after giving the warnings
            startTheRelay();
          }
          // continuing if we haven't won or lost
          else {
            $("#milesToRunWords").html("Your team has "+ milesToRun + " more miles to run!");
          }
        }
      });
    });
</script>