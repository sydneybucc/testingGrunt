(() => {
  myApp.mainGreeting();

  myApp.module1.saySomething('oh hello');

  function myFunc() {
    var theHeading = document.querySelector('h1').textContent = myApp.mainMessage;
  }

  myFunc();
})();
