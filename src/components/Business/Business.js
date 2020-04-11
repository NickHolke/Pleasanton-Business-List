import React from 'react';
import { front, title, icon, row, plus, card, back} from './Business.module.css';
import linkIcon from './linkIcon.svg';
import addressIcon from './address.svg';
import phoneIcon from './phone.svg';
import plusIcon from './more.svg';

const Business = ({info}) => {


  
  return (
    <div className={card}>
      <div className={front}>
        <h1 className={title}>{info.Name}</h1>
        <h2>{info.Status}</h2>
        <div className={row}>
          <div>
            <img className={icon} src={addressIcon} alt="address"/>
          </div>
          <p>{info.Address}</p>
        </div>
        <div className={row}>
          <img className={icon} src={phoneIcon} alt="phone"/>
          <p>{info.Phone}</p>
        </div>
        <div className={row}>
          <img className={icon} src={linkIcon} alt="link"/>
          <a href={info.Website}>website</a>
        </div>
        <img className={plus} src={plusIcon} alt="more-info"/>
      </div>
      <div className={back}>

      </div>
    </div>
  )
} 

export default Business;