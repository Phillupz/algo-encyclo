function balancingParentheses(string) {
  // we want to know when we have an opening parenthesis without a pair
  // we also want to know when we have a closing parenthesis without a pair

  // declare variable to represent opening parentheses
  let openings = 0;
  // declare variable to represent closing paranthsis 
  let closings = 0;
  // iterate over the length of the string
  for (let i = 0; i < string.length; ++i) {
    // if there's an opening parenthesis at the current index
    if (string[i] === '(') {
      // increment opening
      ++openings;
      // then move on to the next iteration, skipping remaining code in function
      // this is in order to keep track of all the opening parenthesis without pairs
      continue
    }

    // if we have an opening and encounter a closing parenthesis
    if (openings > 0) {
      // then we can go ahead and decrement openings because we found a pair
      --openings;
    } else {
      // otherwise we found a closing parenthesis without a corresponding opening and need to increment closings
      ++closings;
    }
  }
  // we're accounting for every pair of parenthesis found throughout iteration
  // so, we need to return the sum of the opening and closing parenthesis without pairs 
  return openings + closings;
}

// skipping iteration because of opening parenthesis

// second iteration
  // openings => 1
  // string => )
  // missing => 0

// third iteration
  // openings => 0
  // string => )
  // missing => 1

// fourth iteration
  // openings => 0
  // string => )
  // missing => 2


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
