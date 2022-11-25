import React from "react";

import Card from "./card";
import bobImg from "../../img/bob.jpg";
import stuartImg from "../../img/stuart.jpg";
import daveImg from "../../img/dave.jpg";
import kevinImg from "../../img/kevin.jpg"

const minions = {
    bob: {
        name: "Bob",
        img: bobImg,
        description: "Bob es bajo y calvo, y tiene heterocromía (un ojo es verde y el otro marrón). Muchas veces puede verse con su osito de peluche llamado Tim.",
        url: "https://minions.fandom.com/es/wiki/Bob"
    },
    stuart: {
        name: "Stuart",
        img: stuartImg,
        description: "Stuart tiene un solo ojo de color café, y siempre tiene su cabello peinado para los lados.",
        url: "https://minions.fandom.com/es/wiki/Stuart"
    },
    dave: {
        name: "Dave",
        img: daveImg,
        description: "Dave es un minion más delgado que los demás, tiene dos ojos, y cabello muy bien peinado.",
        url: "https://minions.fandom.com/es/wiki/Dave"
    },
    kevin: {
        name: "Kevin",
        img: kevinImg,
        description: "Kevin es un minion alto, contextura delgada, con dos ojos color café, cabello (es más un mechón) de color negro y largo peinado hacia arriba.",
        url: "https://minions.fandom.com/es/wiki/Kevin"
    }

}

const CardsContainer = () => {
    return (
        <div className="row row-cols-md-4 d-flex justify-content-between mt-5 mb-5">
            <Card title={minions.bob.name} img={minions.bob.img} description={minions.bob.description} btnUrl={minions.bob.url}/>
            <Card title={minions.stuart.name} img={minions.stuart.img} description={minions.stuart.description} btnUrl={minions.stuart.url}/>
            <Card title={minions.dave.name} img={minions.dave.img} description={minions.dave.description} btnUrl={minions.dave.url}/>
            <Card title={minions.kevin.name} img={minions.kevin.img} description={minions.kevin.description} btnUrl={minions.kevin.url}/>
        </div>
    );
}
 
export default CardsContainer;