const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


/*----------------------------------------*/ 
// 1. Filter the list of inventors for those who were born in the 1500's
console.log('\n--- Ejercicio 1 ---\n');

const inventorsOfXVICentury = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <1600));

inventorsOfXVICentury.forEach(inventor => {
  console.log(`${inventor.first} nació en el año ${inventor.year}`)
});

/*----------------------------------------*/ 
// 2. Give us an array of the inventory first an last names
console.log('\n--- Ejercicio 2 ---\n');

const arrOfInventors = inventors.map(inventor => (inventor.first + ' ' + inventor.last));

console.log(arrOfInventors);

/*----------------------------------------*/ 
// 3. Sort the inventors by birthdate, oldest to youngest
console.log('\n--- Ejercicio 3 ---\n');

const birthOfInventors = inventors.sort((inventorA, inventorB) => (inventorA.year > inventorB.year)? 1:-1);

console.table(birthOfInventors);

/*----------------------------------------*/ 
// 4. How many years did all the inventors live?
console.log('\n--- Ejercicio 4 ---\n');

const yearsLived = inventors.map((inventor) => {
  let obj = {};
  obj = {
    name: inventor.first + ' ' + inventor.last,
    yearsLived: inventor.passed - inventor.year,
  };
  return obj;
});

console.table(yearsLived);

const totalOfYears = yearsLived.reduce((acc, curr) => (acc + curr.yearsLived),0);

console.log(`Our selected inventors have lived an amount of ${totalOfYears} years`);

/*----------------------------------------*/ 
// 5. Sort the inventors by years lived
console.log('\n--- Ejercicio 5 ---\n');

console.table(yearsLived.sort((inventorA, inventorB) => {
  return (inventorA.yearsLived > inventorB.yearsLived)? -1:1;
}));

/*----------------------------------------*/ 
// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the names
console.log('\n--- Ejercicio 6 ---\n');

/* 

const category = document.querySelector('.mw-category');
const links = category.querySelectorAll('a');
const arrLinks = Array.from(links);
const boulevards = arrLinks.map((link, index, arr) => arr[index]['title']);

const boulevardsFiltered = boulevards.filter(boulevard => boulevard.includes('de'));

*/

/*----------------------------------------*/ 
// 7. Sort the people alphabetically by the last name
console.log('\n--- Ejercicio 7 ---\n');

const arrOfPeople = people.map(person => person.split(', ').join(' '))

console.log(arrOfPeople);
/*
const byLastNameFiltered = people.sort((personA, personB) => {
  return (personA > personB)? 1:-1;
});

console.log(byLastNameFiltered);
*/

/*----------------------------------------*/ 
// 8. Sum up the instances of each of these
console.log('\n--- Ejercicio 8 ---\n');

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const dataReduced = data.reduce((obj, curr) => {
 if(!obj[curr]){
   obj[curr] = 0;
 };
 obj[curr]++;
 return obj;
}, {});

console.log(dataReduced);
