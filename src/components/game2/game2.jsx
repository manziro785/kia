import React from 'react';
import './game2.css';

const GameSection2 = () => {
    return (
        <div className="game-section">
            <div className="background-layer">
                <div className="gradient-overlay"></div>
                <div className="content-layer">
                    <h2 style={{fontSize: '50px', marginBottom: '70px'}}>Игровые дисциплины</h2>
                    <div className="games">
                        <div className="game-card">
                            <img src="./src/assets/dicipline/csss2 1.svg" alt="Counter Strike 2" />
                            <a href="/register" className="participate-button1">Участвовать</a>
                        </div>
                        <div className="game-card">
                            <img src="./src/assets/dicipline/1.svg" alt="PUBG" />
                            <a href="/register" className="participate-button1">Участвовать</a>
                        </div>
                        <div className="game-card">
                            <img src="./src/assets/dicipline/2.svg" alt="Dota 2" />
                            <a href="/register" className="participate-button1">Участвовать</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameSection2;