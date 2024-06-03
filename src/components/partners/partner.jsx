import React from 'react';
import './partner.css';
import ala from '../../assets/org/1.svg'
import sanarip from '../../assets/org/2.svg'
import kiaorig from '../../assets/org/3.svg'
import flag from '../../assets/org/4.svg'


const Partners = () => {
    return (
        <div>
            <section className="sponsors" id="sponsors">
                <div className="container">
                    <h1 className="title">Спонсоры</h1>
                    <div className="sponsor-container">
                        <div className="sponsor-item">
                            <img src={ala} className="sponsor-image" alt="Спонсор 1"/>
                        </div>
                        <div className="sponsor-item">
                            <img src={sanarip} className="sponsor-image" alt="Спонсор 2"/>
                        </div>
                        <div className="sponsor-item">
                            <img src={kiaorig} className="sponsor-image" alt="Спонсор 3"/>
                        </div>
                        <div className="sponsor-item">
                            <img src={flag} className="sponsor-image" alt="Спонсор 4"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Partners;