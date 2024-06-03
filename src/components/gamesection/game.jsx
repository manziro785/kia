import React from 'react';
import './game.css';
import cs2 from '../../assets/dicipline/csss2 1.svg'
import pubg from '../../assets/dicipline/1.svg'
import dota from '../../assets/dicipline/2.svg'

const GameSection = () => {
    return (
        <div className="game-section">
        <div className="background-layer">
            <div className="gradient-overlay"></div>
            <div className="content-layer">
                <h2>Игровые дисциплины</h2>
                <div className="games">
                    <div className="game-card">
                        <img src={cs2} alt="Counter Strike 2" />
                        <a href="/register" className="participate-button">Участвовать</a>
                    </div>
                    <div className="game-card">
                        <img src={pubg} alt="PUBG" />
                        <a href="/register" className="participate-button">Участвовать</a>
                    </div>
                    <div className="game-card">
                        <img src={dota} alt="Dota 2" />
                        <a href="/register" className="participate-button">Участвовать</a>
                    </div>
                </div>
            </div>
        </div>
    </div>    );
};

export default GameSection;