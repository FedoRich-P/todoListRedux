import React from 'react';
import {adidasArr} from "./pages/Adidas";
import {Link, useParams} from "react-router-dom";

export const Model = () => {

    const params = useParams();

    return (
        <div>
            <h2> ADIDAS</h2>
            {params.id &&
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem'}}>
                    <Link to="/adidas">
                        <button>Back to Adidas</button>
                    </Link>
                    <Link to="/">
                        <button>Back Home</button>
                    </Link>
                    <img style={{width: '300px', height: '300px'}} src={adidasArr[+params.id].picture} alt={adidasArr[+params.id].model}/>
                    <h3>{adidasArr[+params.id].model}</h3>
                    <h4>{adidasArr[+params.id].price}</h4>
                    <span>{adidasArr[+params.id].collection}</span>
                </div>
            }
        </div>
    );
};

