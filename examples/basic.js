const Observer = require('../lib/observer.cjs');

// Create a new observer
const observer = new Observer();

// A function that is called when the observer gets a new value
const subscriber = data => console.log('Changed', data);

// Subscribe to the observer, will return a function that will unsubscribe when called.
const unsubscribe = observer.subscribe(subscriber);

// Change state of the observer
observer.set(10);
observer.set(20);
observer.set(30);

// Unsubscribe from the observer
unsubscribe();

// Change state again.
observer.set(40);
