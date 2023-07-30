//working with set in javascript

let mySet = Object.create(null);
mySet.id = 1;
if(mySet.id){
    console.log('id exit')
}

//map is used for retrieving a vlaue of key-pair
let myMap = Object.create(null); //new object
myMap.firstName = "john";
myMap.lastName = "Nelson"
let first_name = myMap.firstName;
let last_name = myMap.lastName;
console.log(first_name, last_name);


let setMap = new Map();//creating map object
setMap.set('name','john');
setMap.set('age' ,29)
console.log(setMap.get('name'));
console.log(setMap.get('age'))



//iterating through map

let menu = new Map([
    ['home', 'Home'],
    ['about','About'],
    ['contact','Contact'],
    ['skill','skills']
])
 
//retrieving only the key from then map
for(let key of menu.keys()){
    console.log(key);
}

//retrieving only the values of the map
for (let value of menu.values()){
    console.log(value);
}


