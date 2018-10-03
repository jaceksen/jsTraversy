//constructor function
function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
  unsubscribe: function(fn) {
    // Filter out from the list whatever matches the callback
    // function. It there is no match, the callback gets to stay on the list.
    // The filter returns a new list and reassigns the lost of observers.
    this.observers = this.observers.filter(function(item) {
      if(item !== fn) {
        return item;
      }
    });
  }
}
