
// Imports test1.js
ghostify("../../src/js/test1.js");
// Imports test2.js
ghostify("../../src/js/test2.js");
// Imports test3.js
ghostify("../../src/js/test3.js");


// Now I can use anything from those imported files:
test1(); // Test 1
test2(); // Test 2
const ghost1 = new Spawner("Ghost1");
print(ghost1.spawn()); // test 3

// Profiler in progress
// haunt();