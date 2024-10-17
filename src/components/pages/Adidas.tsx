import React from 'react';
import adidasModel1 from './../../assets/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp'
import adidasModel2 from './../../assets/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp'
import adidasModel3
    from './../../assets/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp'
import {Link} from "react-router-dom";
import {v1} from "uuid";

export type AdidasItem = {
    id: number;
    model: string;
    collection: string;
    price: string;
    picture: string;
}
export const adidasArr: AdidasItem[] = [
    {
        id: 0,
        model: 'ADIDAS ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: adidasModel1,

    },
    {
        id: 1,
        model: 'ADIDAS ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: adidasModel2
    },
    {
        id: 2,
        model: 'ADIDAS SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: adidasModel3
    }
]

export const Adidas = () => {

    const listItem = adidasArr.map((sneakers) => {
        return (
            <li key={sneakers.id}>
                <Link to={`/adidas/${sneakers.id}`}>
                    <img
                        style={{width: '300px', height: '300px', cursor: 'pointer'}}
                        src={sneakers.picture}
                        alt={sneakers.model}/>
                </Link>
            </li>
        )
    })
    return (
        <div>
            <h2> ADIDAS</h2>
            <ul style={{display: 'flex', flexWrap: 'wrap', gap: '3rem'}}>
                {listItem}
            </ul>
        </div>
    );
};

