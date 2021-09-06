// Write your solution here!

const cats = [ 'Milo', 'Otis', 'Garfield' ];
beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });


function destructivelyAppendCat(name){
    cats.push(`${name}`);
}

function destructivelyPrependCat(name){
    cats.unshift(`${name}`);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const allCats = [...cats, `${name}`];
    return(allCats);
}

function prependCat(name){
    const allCats = [`${name}`, ...cats];
    return(allCats);
}

function removeLastCat(){
    const newCats = cats.slice(0, -1);
    return(newCats);
}

function removeFirstCat(){
    const newCats = cats.slice(1);
    return(newCats);
}


beforeEach(destructivelyAppendCat('Ralph'));

beforeEach(destructivelyPrependCat('Bob'));

beforeEach(destructivelyRemoveLastCat);

beforeEach(destructivelyRemoveFirstCat);

beforeEach(appendCat('Broom'));

beforeEach(prependCat('Arnold'));

beforeEach(removeLastCat);

beforeEach(removeFirstCat);