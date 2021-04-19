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


/* VARIABILI *********************************************/
const iconsContainer = document.querySelector(".icons");
const colors = [
    "#001858",
    "#ffd803",
    "#078080",
];
const coloredIcons = colorIcons(icons, colors);
const filter = document.querySelector("#type");
const types = getType(coloredIcons);

/* FUNCTION CHIAMATE **************************************/
displayIcons(coloredIcons, iconsContainer );           
optionSelect(types, filter);

filter.addEventListener("change", () =>{
    const option = filter.value;
    const filteredIcons = filterIcons(coloredIcons, option)
    displayIcons(filteredIcons, iconsContainer );
});

/* FUNCTIONS **********************************************/
/* funciont display HTML */
function displayIcons(icons, iconsContainer){
    let html = "";

    icons.forEach((icon)=>{
        const {family, prefix, name, color} = icon;

        html +=
        `<div class="icon p20">
            <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
            <h3>${name}</h3>
        </div>`;
    });

    iconsContainer.innerHTML = html;
};

/* colorare le icons */
function colorIcons(icons, colors){
    const types = getType(icons);

    const coloredIcons = icons.map((icon) =>{
        const index = types.indexOf(icon.type);

        return {
            ...icon,
            color: colors[index],
        }
    });

    return coloredIcons;
};

function getType(icons){
    const types = [];

    icons.forEach((icon)=>{
        if( !types.includes(icon.type) ){
            types.push(icon.type);
        }
    });

    return types;
}

function optionSelect(types, filter){
    let options = "";
    types.forEach((type)=>{
        options +=`<option value="${type}">${type}</option>`
    });

    filter.innerHTML += options;
}

function filterIcons (icons, option){
    if( option === "all"){
       return icons;
    }
    const filtered = icons.filter((icon) =>{
        return icon.type === option;
    });

    return filtered;
}