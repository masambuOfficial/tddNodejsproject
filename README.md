# tddNodejsproject
## Take a look at the transcript attached and see if you can convert it to working code. 
## Have a go yourself, but here is an outline of the steps I would probably use.

# Setup:
1. Create a new node.js project
2. Install and configure eslint
3. Install mocha as a dev dependency
4. Install chai as a dev dependency
5. Create a test directory
6. Create a test.js inside that test directory
7. Create a multiply.js
5. Update npm script to run tests

# Test First TDD First Cycle
1. Red: Write your first test: assertEqual(multiply(1, 1), 1); in ./test/test.js
2. Red: Run the test.  Did it pass?  No!
3. Get the test to pass, by writing a multiply function, that is just enough to pass the test, i.e. fucntion multiply (a, b) { return 1; } 
4. Run the test?   Does it pass?   Should do!  Now we are green again!
5. Refactor?  Probably not necessary!

# Second Test Cycle
1. Red. Write the second failing test. Run the tests: assertEqual(multiply(2, 2),4)
2. Green: Update multiply() to pass the second test.  Make sure the first test still passes too!
3. Do I need to refactor?  Nope, its pretty simple

# Third Test Cycle
1. Red. Write the second failing test: assertEqual(3, 3), 9)
2. Red:  Does it pass, nope!  Still red!
3. Green: Update multiply() to pass the third test.  Make sure you didnt break test 1 or test 2!  If you did, fix them.
4. Do I need to refactor?  Nope, its pretty simple

# Fourth Test Cycle
1. Red.  assertEqual(4, 4), 16)
2. Oh!  Its green!

# Fifth Test Cycle
1. Red:  assertEqual(23, 45), 23 * 45)
2. Oh! Its till green!