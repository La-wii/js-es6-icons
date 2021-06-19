const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
];

// print(icons);

const coloredIcons = icons.map((element) => {
    let color = 'red';
    if (element.type == 'animal'){
        color = 'blue';
    } else if (element.type == 'vegetable'){
        color = 'green';
    }

    return {
        ...element,
        color
    }
});

print(coloredIcons);
console.log(coloredIcons);

// stampo icone + applico metodo .toUppercase con ciclo forEach (successivamente creata funzione print)

// icons.forEach((element) => {
    
//     const {name,prefix,family} = element;

//     const elementHTML = `
//     <div class="card flex">
//         <i class="${family} ${prefix}${name}"></i>
//         <div>${name.toUpperCase()}</div>
//     </div>
//     `
//     document.getElementById("container-cards").innerHTML += elementHTML;
// });




// ---------------------------- FUNZIONI ----------------------------------------------

function print (array){

    array.forEach((element) => {
    
        const {name,prefix,family,color} = element;
    
        const elementHTML = `
        <div class="card flex">
            <i class="${family} ${prefix}${name}" style="color:${color}"></i>
            <div>${name.toUpperCase()}</div>
        </div>
        `
        document.getElementById("container-cards").innerHTML += elementHTML;
    });

}







