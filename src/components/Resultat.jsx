import React from 'react'
import Card from '../formComponent/Card';
import { imgAti, imgMajeur, imgJuge } from '../img';

const Resultat = ({ mesureHandler }) => {
  const {resultat} = mesureHandler;

  return (
    <div className='menus'>
      <Card imgSrc={imgAti.src} imgAlt={imgAti.alt} label={'ATI'} disabled={resultat.ati} />
      <Card imgSrc={imgJuge.src} imgAlt={imgJuge.alt} label={'Juge'} disabled={resultat.juge} />
      <Card imgSrc={imgMajeur.src} imgAlt={imgMajeur.alt} label={'Majeur'} disabled={resultat.majeur} />
    </div>
  )
}

export default Resultat;
