let products = [{
  title: "Iphone 8",
  company: "Apple"
 },
 {
  title: "Galaxy",
  company: "samsung"
 },
 {
  title: "Iphone 7",
  company: "Apple"
 },
 {
  title: "Iphone Xs",
  company: "Apple"
 },
 {
  title: "HTC Phone",
  company: "htc"
 },
 {
  title: "Appo Phone",
  company: "appo"
 }
]

function getUnique(arr) {
 // let tempArr = arr.map(e => e.company);
 // return [...new Set(tempArr)];
 return [...arr.reduce((acc, curr) => {
  acc.add(curr.company);
  return acc;
 }, new Set())]
}

console.log(getUnique(products));