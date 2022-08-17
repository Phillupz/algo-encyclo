function balancingParentheses(string) {
  let openings = 0;
  let closings = 0;

  for (let i = 0; i < string.length; ++i) {
    if (string[i] === '(') {
      ++openings;
      continue
    }

    if (openings > 0) {
      --openings;
    } else {
      ++closings;
    }
  }

  return openings + closings;
}

if (require.main === module) {

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

