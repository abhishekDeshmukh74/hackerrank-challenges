// positive-lookahead
var Regex_Pattern = /o(?=oo)/g;

// negative-lookahead
var Regex_Pattern = /([a-z$#])(?!\1)/g;

// JavaScript do not support lookbehind :(

// positive-lookbehind
Regex_Test tester = new Regex_Test();
tester.checker("(?<=[13579])[\\d]");

// negative-lookbehind
Regex_Test tester = new Regex_Test();
tester.checker("(?<![aeiouAEIOU])(\\S|\\s)");
