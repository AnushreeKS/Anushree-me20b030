import React from 'react'
import Card from './cards.jsx'

var product=[{
    name: "CHAIR",
    src: "https://5.imimg.com/data5/DQ/XK/MY-56039866/wooden-chair-500x500.jpg",
    description: "Offering Wooden Square Armless Chair, Height: 3 to 4 feet in Ulhasnagar, Maharashtra."
},
{
    name:"TABLE",
    src: "https://www.ulcdn.net/images/products/293601/slide/1998x1089/Altura_Coffee_Table_3.jpg?1586266119",
    description: "Its modern aesthetics make it an ideal addition to any living space"
}]

function properties()
{
    return(
        <div id="property">
         <div>
           { product.map(function(i){ return(<Card name={i.name} src={i.src} description={i.description}/>);})}
         </div>
        </div>
    );
}

export default properties;