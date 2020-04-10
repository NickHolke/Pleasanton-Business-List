import React from 'react';
import { wrapper, title, icon } from './Business.module.css';
import linkIcon from './linkIcon.svg';
import addressIcon from './address.svg';

const Business = ({info}) => (
  <div className={wrapper}>
    <p className={title}>{info.Name}</p>
    <p><img className={icon} src={addressIcon} alt="link"/>{info.Address}</p>
    <p>Status: {info.Status}</p>
    <p>Phone: {info.Phone}</p>
    <img className={icon} src={linkIcon} alt="link"/><a href={info.Website}>website</a>
    {/* <p>Notes: {info.Notes}</p>
    <p>How can people support your business?: {info.Support}</p> */}
  </div>
)

export default Business;