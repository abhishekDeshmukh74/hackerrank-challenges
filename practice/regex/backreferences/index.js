// matching-same-text-again-again
var Regex_Pattern = /^([a-z][\w][\s][\W][\d][\D][A-Z][a-zA-Z][aeiouAEIOU][\S])\1$/;

// backreferences-to-failed-groups
var Regex_Pattern = /^\d{2}(-?)\d{2}\1\d{2}\1\d{2}$/;

// JavaScript do not support Branch Reset Groups :(

// branch-reset-groups
$Regex_Pattern = '/^\d\d(?|(-)|(:)|(---)|(\.))\d\d\1\d\d\1\d\d$/';

// forward-references
$Regex_Pattern = '/^tac(tac(tic)?)+$/';
