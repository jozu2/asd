const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//FOREACH////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//list names of companies //forEach cs5 
// for(let i=0; i < companies.length; i++){
//   console.log(companies[i].name)
// }

//forEach cs6 arrow func 
// companies.forEach(company => console.log(company.name))





//FILTER///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//get ages 21 above
let canDrink = ages.filter(function(age){
  if(age >= 21){
    return true;
  }
})




//filter es6 arrow func 
const canDrinkA = ages.filter(age => age >= 21)



//filter retail companies es5
const retailCompanies = companies.filter(function(company){
  if(company.category === 'Retail'){
    return true
  }
});

//arrow func CS6
const retailCompaniesA = companies.filter(company => company.category === 'Retail')



//get 80's companies
const get80s = companies.filter(company => (company.start >= 1980 && company.start < 1990))



//get companies lasted 10yrs +
const lastedTenYrs = companies.filter(comapny => (comapny.end - comapny.start > 10))



//MAP////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//create array of company names
const companyNames = companies.map(function(company){
        return company.name;
})

//test
const testMap = companies.map(function(company){
  return `${company.name} started in ${company.start} to ${company.end}`;
})
//shorthandway
const testMapArrowF = companies.map(company => `${company.name} started in ${company.start} to ${company.end}`)

//ages square root
const agesSqrt = ages.map(age => Math.sqrt(age))
const agesTimestwo = ages.map(age => age * 2)


const ageManipulate =ages
.map(age => Math.sqrt(age))
.map(age => age * 2)


//SORT////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//sort companies 
// const sortCompanies = companies.sort(function(a, b){
//   if(a.start > b.start){
//     return 1;
//   }
//   else{
//     return -1;
//   }
// })
const sortCompaniesA = companies.sort((a, b) => (a.start > b.start ? 1 : -1))



//sort ages
const sortAge = ages.sort((a,b) => a - b)


//REDUCE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let addAge = 0;
// for(let i = 0; i < ages.length; i++){
//   addAge += ages[i];
// }

// const ageSum = ages.reduce(function(total, age){
//   return total + age;
// }, 0)

const ageSumArrow = ages.reduce((total, age) => total + age, 0)




//years for all companies
// const totalYearsF = companies.reduce(function(total, company){
//   return total + (company.end - company.start)
// }, 0)


const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)




//combie methods

const combine = ages
.map(age => age*2)
.filter(age => age >= 30)
.sort((a,b) => a - b)
.map(age => `${age} yrs. old`)

console.log(combine)