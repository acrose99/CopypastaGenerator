$(function() {
  //Names of classes to update
  var fillNames = [
    'person',
    'graduated',
    'raids',
    'number',
    'trained',
    'top',
    'target',
    'contact',
    'methods',
    'withJust',
    'extensive',
    'but',
    'use',
  ];

  //Get the element for filling in the value
  function getFillElement(name) {
    return $('#fill-' + name);
  }

  //Get the elements that are tied to the value
  function getTiedElements(name) {
    return $('#navySeal .tied-' + name);
  }

  //Register an event handler on update
  function registerUpdateHandler(name, handler) {
    getFillElement(name).keyup(handler);
  }

  //Get the filled text
  function getFillText(name) {
    return getFillElement(name).val();
  }

  //Set the text on the tied elements
  function setTiedText(name, text) {
    getTiedElements(name).text(text);
  }

  //Update "tied" elements on each change of the "fill" input
  function registerFillUpdates() {
    $.each(fillNames, function(i, name) {
      registerUpdateHandler(name, function() {
        setTiedText(name, getFillText(name));
      });
    });
  }
  registerFillUpdates();
});
