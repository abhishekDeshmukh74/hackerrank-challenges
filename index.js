// function twoStrings(s1, s2) {
//   const s1Set = new Set(s1);
//   const s2Set = new Set(s2);

//   for (const [key, value] of s2Set.entries()) {
//     if (s1Set.has(value)) {
//       return 'YES';
//     }
//   }
//   return 'NO';
// }

// console.log(twoStrings('aaads', 'bbbb'));

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

// function insertNodeAtPosition(head, data, position) {
//   if (!head || position === 0) {
//     head = new SinglyLinkedListNode(data, null);
//     return head;
//   }

//   let current = head;
//   let index = 1;
//   while (current) {
//     if (index === position) {
//       // add new node here
//       const updatedNode = new SinglyLinkedListNode(data, null);
//       updatedNode.next = current.next;
//       current.next = updatedNode;
//       return head;
//     }
//     current = current.next;
//     index++;
//   }
// }

// console.log(
//   insertNodeAtPosition(
//     {
//       data: 16,
//       next: {
//         data: 13,
//         next: {
//           data: 7,
//           next: null,
//         },
//       },
//     },
//     1,
//     2
//   )
// );

// function abbreviation(a, b) {
//   if (!a.length || !b.length) return 'NO';

//   for (let i = 0; i < a.length; i++) {
//     if (b.toUpperCase().includes(a[i].toUpperCase())) {
//       if (b[0].toUpperCase() === a[0].toUpperCase()) {
//         const inner = abbreviation(a.slice(1), b.slice(1));
//         console.log('inner:', inner);
//       }
//     } else {
//       // See if deleting all of the remaining lowercase letters in a works
//       const afterDelete = a.replace(/[a-z]/g, '');

//       return 'NO';
//     }
//   }
// }

// console.log(abbreviation('AbcDe', 'ABDE'));

// function timeConversion(s) {
//   let hours = s.substr(0, 2);
//   let minutes = s.substr(3, 2);
//   let seconds = s.substr(-4, 2);
//   let modifier = s.substr(-2, 2);
//   if (hours === '12') {
//     hours = '00';
//   }
//   if (modifier === 'PM') {
//     hours = parseInt(hours, 10) + 12;
//   }
//   let time = `${hours}:${minutes}:${seconds}`;
//   return time;
// }

// console.log(timeConversion('07:05:45PM'));

// console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));

// second smallest
const lol = (arr) => {
  let first = Infinity;
  let second = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < first) {
      second = first;
      first = arr[i];
    } else if (arr[i] < second) {
      second = arr[i];
    }
  }
  return second;
};
console.log('lol:', lol([1, 2, 6, 8, 9, 10]));


function lonelyinteger(a) {
  const s = new Set();
  a.forEach((x) => (s.has(x) ? s.delete(x) : s.add(x)));
  return Array.from(s)[0];
}
