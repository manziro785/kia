import React from 'react';
import './partner.css';

const Partners = () => {
    return (
        <div>
            <section className="sponsors" id="sponsors">
                <div className="container">
                    <h1 className="title">Наши партнеры</h1>
                    <div className="sponsor-container">
                        <div className="sponsor-item">
                            <img src="./src/assets/org/1.svg" className="sponsor-image" alt="Спонсор 1"/>
                        </div>
                        <div className="sponsor-item">
                            <img src="./src/assets/org/2.svg" className="sponsor-image" alt="Спонсор 2"/>
                        </div>
                        <div className="sponsor-item">
                            <img src="./src/assets/org/3.svg" className="sponsor-image" alt="Спонсор 3"/>
                        </div>
                        <div className="sponsor-item">
                            <img src="./src/assets/org/4.svg" className="sponsor-image" alt="Спонсор 4"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Partners;