// STEP 2: Wrap the entire content of script.js inside an IIFE
(function () {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // STEP 3: Create an object, called 'helloSpeaker' with a method 'speak'
  var helloSpeaker = {
    speak: function (name) {
      console.log("Hello " + name);
    }
  };

  // STEP 4: Create an object, called 'byeSpeaker' with a method 'speak'
  var byeSpeaker = {
    speak: function (name) {
      console.log("Goodbye " + name);
    }
  };

  // STEP 5: Loop over the names array
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    // STEP 6: If the first letter is 'j' or 'J', say "Goodbye"
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

})();
