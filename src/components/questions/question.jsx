import React, { useState } from 'react';
import './question.css'; // Убедитесь, что этот файл существует и содержит необходимые стили

const questions = [
    { question: 'Что такое KIA Cyberchamp?', answer: 'KIA Cyberchamp - это киберспортивный турнир, организованный компанией KIA. В нем участвуют команды, соревнующиеся в различных популярных киберспортивных дисциплинах. Этот турнир проводится впервые и собирает команды со всего Бишкека.' },
    { question: 'Где будут проходить матчи?', answer: 'Отборочные этапы турнира будут проводиться на территории торгового центра Asia Mall. Финальные матчи пройдут на мероприятии которое состоится 16-17 августа.' },
    { question: 'Считается ли киберспорт профессией?', answer: 'Да, киберспорт считается полноценной профессией. Профессиональные киберспортсмены тренируются, участвуют в турнирах, получают призовые деньги и спонсорскую поддержку. Киберспорт имеет свою инфраструктуру, включая команды, тренеров, менеджеров и аналитиков.' },
    { question: 'Кто может стать участником?', answer: 'Участвовать могут все желающие команды. Подробности об участниках можно узнать на официальном сайте турнира' },
    { question: 'Где я могу следовать расписанию и узнавать результаты матчей?', answer: 'Участвовать могут все желающие команды. Подробности об участниках можно узнать на официальном сайте турнира' },
    { question: 'Где я могу наблюдать за игрой?', answer: 'Трансляции всех матчей турнира KIA Cyberchamp будут доступны на популярных платформах стриминга, таких как Twitch и YouTube. Так же вы можете вступить в наш Discord канал. Ссылки на трансляции будут опубликованы на официальном сайте и в социальных сетях турнира.' },
    { question: 'Где мне связаться с вами?', answer: 'Вы можете связаться с нами написав нам на почту kiacyberchamp@gmail.com.' },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <div className="background-image"></div>
            <div className="overlay"></div>
            <div className="faq-content">
                <h1 className="faq-title">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h1>
                <div className="faq">
                    {questions.map((item, index) => (
                        <div key={index} className="faq-item">
                            <button onClick={() => toggleAccordion(index)} className="faq-question">
                                {item.question}
                            </button>
                            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>
                <footer className="footer">
                    <img src="/src/assets/org/KIA_back.svg" alt="Footer" className="footer-image" />
                    <div className="social-icons">
                        <img src="/src/assets/org/Link.svg" alt="Facebook" />
                        <img src="/src/assets/org/Link (1).svg" alt="YouTube" />
                        <img src="/src/assets/org/Link (2).svg" alt="Instagram" />
                    </div>
                </footer>
            </div>
            <img src="/src/assets/org/Container.svg" alt="FAQ" className="faq-image" />
        </div>
    );
};

export default FAQ;
