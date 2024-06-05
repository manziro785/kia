import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import'./pubg-reg.css'
import axios from 'axios';
import left from '../../../assets/header/left.svg';
import bgkia from '../../../assets/banner/kia-bg.svg' 
import bgp from '../../../assets/register/bgpubgg.svg' 



export default function Pubgreg() {

    const [formData, setFormData] = useState({
        team_name: '',
        phone_number: '',
        player_1: '',
        player_2: '',
        player_3: '',
        player_4: '',
        player_5: '',
      });
    
      const [errors, setErrors] = useState({});
      const navigate = useNavigate();
    
      const handleRedirect = () => {
        navigate('/');
      };
    
      const validate = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Введите имя';
        if (!formData.email) {
          errors.email = 'Введите электронную почту';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = 'Неверный формат электронной почты';
        }
        if (!formData.section) errors.section = 'Выберите секцию';
        return errors;
      };
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
          try {
            console.log('Submitting form data:', formData);  // Log the form data
            const response = await axios.post('http://217.151.230.35:199/api/members/register/', formData);
            console.log('Registration successful:', response.data);
            navigate('/next-step');
          } catch (error) {
            console.error('Error during registration:', error);
            if (error.response) {
              console.error('Server responded with:', error.response.data);
            }
          }
        }
      };
    


      
  return (
    <>
    <div className="wrapp-reg-logo">
    <div className="header-reg">
<div className="header-register">

    <div className="loogo" onClick={handleRedirect}>
        <img src={left} alt="" />
        <div>        на главную
</div>
    </div>

    <div className="navbar" onClick={handleRedirect}>
       
        <div>cвязаться с нами</div>


    </div>
    </div>
</div>
    </div>
    {/* <div className="overlay-reg">
        <img src={fg} alt="" />
    </div> */}
    <div className="container-reg" style={{ backgroundImage: `url(${bgp})`}}>
        <div className="logo-kia">
<img src={bgkia} alt="" />
        </div>
        <div className="reg-box">
        <div className="title-reg">
        РЕГИСТРАЦИЯ

        </div>
        <div className="main-reg">
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="main-wrap-reg">
            <div className="left-reg">
                <div className="inputs-left">
              <div className="form-group">
                <div>              Название команды:
</div>
                <input
                  type="text"
                  name="name"
                  className='input-left'
                  placeholder="Введите имя"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div className="form-group">
                <div>Номер телофона капитана команды:</div>
                <input
                  type="email"
                  name="email"
                  className='input-left'

                  placeholder="Введите электронную почту"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              </div>

              <div className="subm-reg">
          <button type="submit" className="submit-button"  
>Участвовать</button>
          </div>
            </div>
            <div className="right-reg">
            <div className="form-group">
                <div>Фамилия и имя участников команды:</div>
                <input
                  type="email"
                  name="email"
                  className='input-right'

                  placeholder="Введите электронную почту"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="form-group">
                
                <input
                  type="email"
                  className='input-right'

                  name="email"
                  placeholder="Введите электронную почту"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className='input-right'

                  placeholder="Введите электронную почту"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className='input-right'

                  placeholder="Введите электронную почту"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className='input-right'

                  placeholder="Введите электронную почту"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
            </div>
          </div>
          
        </form>
        </div>
            
        </div>
    </div>
    </>
  )
}
