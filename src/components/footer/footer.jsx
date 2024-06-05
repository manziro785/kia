import React, {useState, useEffect} from 'react'
import './footer.css'
import logofooter from '../../assets/footer/logof.svg'
import icon from '../../assets/footer/icon.svg'
import icon2 from '../../assets/footer/icon2.svg'

import icon3 from '../../assets/footer/icon3.svg'


export default function Footer() {

    const [isCopied, setIsCopied] = useState(false);
    const [Copied, setCopied] = useState(false);
  
    const handleCopyPhoneNumber = () => {
      const phoneNumber = '+996 559 880 208'; 
      navigator.clipboard.writeText(phoneNumber);
      setIsCopied(true); 
      setTimeout(() => setIsCopied(false), 3000); // Через 3 секунды сбрасываем флаг копирования
    };
    const handleCopyGmail = () => {
      const phoneNumber = '+996 708 032 662'; 
      navigator.clipboard.writeText(phoneNumber); // Копируем номер в буфер обмена
      setCopied(true); // Устанавливаем флаг копирования в true
      setTimeout(() => setCopied(false), 3000); // Через 3 секунды сбрасываем флаг копирования
    };

  return (
    <div>

<div className="footer-wrapper" id='footer'>
<div className="footer-wrapp">
    <div className="footer-main">
    <div className="logo-foot">
<img src={logofooter} alt="" />
    </div>
    <div className="contacts">
        <div className="cont">
<div className="tittle-foot">
Для связи по комерческим вопросам
</div>
<div style={{cursor: 'pointer'}} onClick={handleCopyPhoneNumber}>+996 559 880 208</div>
{isCopied && 
            <div className="wrapper-message">
            <div className="copy-messagee">
              {/* <img src="./src/assets/common/icon (3).svg" alt="" style={{marginRight: '10px'}} /> */}
              Номер телефона скопирован!
              </div>
              </div>
            }

<div style={{cursor: 'pointer'}} onClick={handleCopyGmail}>+996 708 032 662</div>
{Copied && 
            <div className="wrapper-message">
            <div className="copy-messagee">
              {/* <img src="./src/assets/common/icon (3).svg" alt="" style={{marginRight: '10px'}} /> */}
              Номер телефона скопирован!
              </div>
              </div>
            }

</div>
<div className="socials-link">
<div><a href="https://www.youtube.com/@kiamotors5613"><img src={icon} alt="" /></a></div>
<div><a href="https://www.facebook.com/kia.bishkek/"><img src={icon2} alt="" /></a></div>
<div><a href="https://www.instagram.com/kiakyrgyzstan/"><img src={icon3} alt="" /></a></div>

</div>
</div>
    </div>
</div>
</div>
    </div>
  )
}
