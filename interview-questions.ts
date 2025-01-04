// Question:

// First function block
function printPerson(person = "Ada Lovelace") {
  console.log(`${person}`);
}

printPerson(Date());

// Second function block
function printDate(date: Date) {
  console.log(`${date.toDateString()}`);
}

printDate(new Date());
