import { useState } from "react";

import IconSwitch from "../IconSwitch/IconSwitch";
import ListView from "../ListView/ListView";
import CardsView from '../CardsView/CardsView'

import './css/store.css';

export default function Store() {
    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
      }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
      }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];
    
    const icon = 'view_list';

    const [stateIcon, setStateIcon] = useState(icon);

    // const onSwitch = (params) => setStateIcon();

    return (
        <div className="wrapper-store">
            <IconSwitch 
            icon = {stateIcon}
            onSwitch = {(type) => {
                setStateIcon(type)
                console.log('stateIcon', stateIcon)}} />

            {stateIcon === 'view_list' ? <ListView items = {products} /> : <CardsView cards = {products} />}
        </div>
    )
}
