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
    console.log(`You are now unusubscirbed from ${fn.name}`);
  },
  fire: function() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
}

const click = new EventObserver();

// event listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
  click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
  click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
  click.fire();
});

// click handler
const getCurMilliseconds = function() {
  console.log(`Current milliseconds: ${new Date().getMilliseconds()}`)
}

const getCurSeconds = function() {
  console.log(`Current seconds: ${new Date().getSeconds()}`)
}
