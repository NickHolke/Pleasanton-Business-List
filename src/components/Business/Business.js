import React, { useState } from 'react';
import { front, title, icon, row, plus, card, back, flip, bold, minus, minusWrapper,} from './Business.module.css';
import linkIcon from './linkIcon.svg';
import addressIcon from './address.svg';
import phoneIcon from './phone.svg';
import plusIcon from './more.svg';
import classNames from 'classnames';
import minusIcon from './minus.svg';

const Business = ({info}) => {
  const [onFront, setOnFront] = useState(true);

  const clickHandler = () => {
    setOnFront(!onFront);
  }

  return (
    <div className={classNames(card, {[flip]: !onFront})}>
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
            <img onClick={clickHandler} className={plus} src={plusIcon} alt="more-info"/>
      </div>
      <div className={back}>
          <p><span className={bold}>Notes:</span> {info.Notes}</p>
          <p><span className={bold}>How else can we help?</span> {info.Support}</p>
          <div className={minusWrapper}>
            <img onClick={clickHandler} className={minus} src={minusIcon} alt="less-info"/>
          </div>
      </div>
    </div>
  )
} 

export default Business;