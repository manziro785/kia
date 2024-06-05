// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import'./form-reg-dota.css'
// import axios from 'axios';
// import left from '../../assets/header/left.svg';
// import bgkia from '../../assets/banner/kia-bg.svg'
// import fg from '../../assets/bg-dota.svg'

// export default function Formregdota() {

//     const [formData, setFormData] = useState({
//         team_name: '',
//         phone_number: '',
//         player_1: '',
//         player_2: '',
//         player_3: '',
//         player_4: '',
//         player_5: '',
//       });

//       const [errors, setErrors] = useState({});
//       const navigate = useNavigate();

//       const handleRedirect = () => {
//         navigate('/');
//       };

//       const validate = () => {
//         const errors = {};
//         if (!formData.name) errors.name = 'Введите имя';
//         if (!formData.email) {
//           errors.email = 'Введите электронную почту';
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//           errors.email = 'Неверный формат электронной почты';
//         }
//         if (!formData.section) errors.section = 'Выберите секцию';
//         return errors;
//       };

//       const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//       };

//       const handleSubmit = async (e) => {
//         e.preventDefault();
//         const validationErrors = validate();
//         setErrors(validationErrors);
//         if (Object.keys(validationErrors).length === 0) {
//           try {
//             console.log('Submitting form data:', formData);  // Log the form data
//             const response = await axios.post('http://217.151.230.35:199/api/members/register/', formData);
//             console.log('Registration successful:', response.data);
//             navigate('/next-step');
//           } catch (error) {
//             console.error('Error during registration:', error);
//             if (error.response) {
//               console.error('Server responded with:', error.response.data);
//             }
//           }
//         }
//       };

//   return (
//     <>
//     <div className="wrapp-reg-logo">
//     <div className="header-reg">
// <div className="header-register">

//     <div className="loogo" onClick={handleRedirect}>
//         <img src={left} alt="" />
//         <div>        на главную
// </div>
//     </div>

//     <div className="navbar" onClick={handleRedirect}>

//         <div>cвязаться с нами</div>

//     </div>
//     </div>
// </div>
//     </div>
//     {/* <div className="overlay-reg">
//         <img src={fg} alt="" />
//     </div> */}
//     <div className="container-reg" style={{ backgroundImage: `url(${fg})`}}>
//         <div className="logo-kia">
// <img src={bgkia} alt="" />
//         </div>
//         <div className="reg-box">
//         <div className="title-reg">
//         РЕГИСТРАЦИЯ

//         </div>
//         <div className="main-reg">
//         <form onSubmit={handleSubmit} className="registration-form">
//           <div className="main-wrap-reg">
//             <div className="left-reg">
//                 <div className="inputs-left">
//               <div className="form-group">
//                 <div>              Название команды:
// </div>
//                 <input
//                   type="text"
//                   name="name"
//                   className='input-left'
//                   placeholder="Введите имя"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//                 {errors.name && <span className="error">{errors.name}</span>}
//               </div>
//               <div className="form-group">
//                 <div>Номер телофона капитана команды:</div>
//                 <input
//                   type="email"
//                   name="email"
//                   className='input-left'

//                   placeholder="Введите электронную почту"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 {errors.email && <span className="error">{errors.email}</span>}
//               </div>
//               </div>

//               <div className="subm-reg">
//           <button type="submit" className="submit-button"
// >Участвовать</button>
//           </div>
//             </div>
//             <div className="right-reg">
//             <div className="form-group">
//                 <div>Фамилия и имя участников команды:</div>
//                 <input
//                   type="email"
//                   name="email"
//                   className='input-right'

//                   placeholder="Введите электронную почту"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 {errors.email && <span className="error">{errors.email}</span>}
//               </div>
//               <div className="form-group">

//                 <input
//                   type="email"
//                   className='input-right'

//                   name="email"
//                   placeholder="Введите электронную почту"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 {errors.email && <span className="error">{errors.email}</span>}
//               </div>
//               <div className="form-group">
//                 <input
//                   type="email"
//                   name="email"
//                   className='input-right'

//                   placeholder="Введите электронную почту"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 {errors.email && <span className="error">{errors.email}</span>}
//               </div>
//               <div className="form-group">
//                 <input
//                   type="email"
//                   name="email"
//                   className='input-right'

//                   placeholder="Введите электронную почту"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 {errors.email && <span className="error">{errors.email}</span>}
//               </div>
//               <div className="form-group">
//                 <input
//                   type="email"
//                   name="email"
//                   className='input-right'

//                   placeholder="Введите электронную почту"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 {errors.email && <span className="error">{errors.email}</span>}
//               </div>
//             </div>
//           </div>

//         </form>
//         </div>

//         </div>
//     </div>
//     </>
//   )
// }

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./form-reg-dota.css";
import axios from "axios";
import fg from "../../assets/bg-dota.svg";

import left from "../../assets/header/left.svg";
import bgkia from "../../assets/banner/kia-bg.svg";
import InputMask from "react-input-mask";

export default function Formregdota() {
  const [formData, setFormData] = useState({
    team_name: "",
    phone_number: "+996 ",
    player_1: "",
    player_2: "",
    player_3: "",
    player_4: "",
    player_5: "",
  });

  const [errors, setErrors] = useState({});
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const navigate = useNavigate();
  const phoneInputRef = useRef(null);

  useEffect(() => {
    if (phoneInputRef.current) {
      phoneInputRef.current.setSelectionRange(5, 5);
    }
  }, []);

  const handleRedirect = () => {
    navigate("/");
  };

  const validate = () => {
    const errors = {};
    if (!formData.team_name) errors.team_name = "Введите название команды";
    if (!formData.phone_number)
      errors.phone_number = "Введите номер телефона капитана";
    if (!formData.player_1)
      errors.player_1 = "Введите имя и фамилию первого игрока";
    if (!formData.player_2)
      errors.player_2 = "Введите имя и фамилию второго игрока";
    if (!formData.player_3)
      errors.player_3 = "Введите имя и фамилию третьего игрока";
    if (!formData.player_4)
      errors.player_4 = "Введите имя и фамилию четвертого игрока";
    if (!formData.player_5)
      errors.player_5 = "Введите имя и фамилию пятого игрока";
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
        console.log("Submitting form data:", formData);
        const response = await axios.post(
          "http://217.151.230.35:200/register/dota/",
          formData
        );
        console.log("Registration successful:", response.data);
        setIsAlertVisible(true);
        setTimeout(() => {
          setIsAlertVisible(false);
          navigate("/");
        }, 3000);
      } catch (error) {
        console.error("Error during registration:", error);
        if (error.response) {
          console.error("Server responded with:", error.response.data);
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
              <div>На главную</div>
            </div>
            <div className="navbar" onClick={handleRedirect}>
              <div>связаться с нами</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-reg" style={{ backgroundImage: `url(${fg})` }}>
        <div className="logo-kia">
          <img src={bgkia} alt="" />
        </div>
        <div className="reg-box">
          <div className="title-reg">РЕГИСТРАЦИЯ</div>
          <div className="main-reg">
            <form onSubmit={handleSubmit} className="registration-form">
              <div className="main-wrap-reg">
                <div className="left-reg">
                  <div className="inputs-left">
                    <div className="form-group">
                      <div>Название команды:</div>
                      <input
                        type="text"
                        name="team_name"
                        className="input-left"
                        placeholder="Введите название команды"
                        value={formData.team_name}
                        onChange={handleChange}
                      />
                      {errors.team_name && (
                        <span className="error">{errors.team_name}</span>
                      )}
                    </div>
                    <div className="form-group">
                      <div>Номер телефона капитана команды:</div>
                      <InputMask
                        mask="+996 (999) 999-999"
                        value={formData.phone_number}
                        onChange={handleChange}
                      >
                        {(inputProps) => (
                          <input
                            {...inputProps}
                            type="text"
                            name="phone_number"
                            className="input-left"
                            placeholder="Введите номер телефона"
                            ref={phoneInputRef}
                          />
                        )}
                      </InputMask>
                      {errors.phone_number && (
                        <span className="error">{errors.phone_number}</span>
                      )}
                    </div>
                  </div>
                  <div className="subm-reg">
                    <button type="submit" className="submit-button">
                      Участвовать
                    </button>
                  </div>
                </div>
                <div className="right-reg">
                  <div className="form-group">
                    <div>Фамилия и имя участников команды:</div>
                    <input
                      type="text"
                      name="player_1"
                      className="input-right"
                      placeholder="Введите имя и фамилию первого игрока"
                      value={formData.player_1}
                      onChange={handleChange}
                    />
                    {errors.player_1 && (
                      <span className="error">{errors.player_1}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="player_2"
                      className="input-right"
                      placeholder="Введите имя и фамилию второго игрока"
                      value={formData.player_2}
                      onChange={handleChange}
                    />
                    {errors.player_2 && (
                      <span className="error">{errors.player_2}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="player_3"
                      className="input-right"
                      placeholder="Введите имя и фамилию третьего игрока"
                      value={formData.player_3}
                      onChange={handleChange}
                    />
                    {errors.player_3 && (
                      <span className="error">{errors.player_3}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="player_4"
                      className="input-right"
                      placeholder="Введите имя и фамилию четвертого игрока"
                      value={formData.player_4}
                      onChange={handleChange}
                    />
                    {errors.player_4 && (
                      <span className="error">{errors.player_4}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="player_5"
                      className="input-right"
                      placeholder="Введите имя и фамилию пятого игрока"
                      value={formData.player_5}
                      onChange={handleChange}
                    />
                    {errors.player_5 && (
                      <span className="error">{errors.player_5}</span>
                    )}
                  </div>
                </div>
              </div>
            </form>
            {isAlertVisible && (
              <div className="alert">Регистрация прошла успешно!</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
