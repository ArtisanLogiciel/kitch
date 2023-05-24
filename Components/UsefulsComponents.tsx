'use client';
import * as React from 'react';
import { useSwiper } from 'swiper/react';


function Nombres(nombre: number){
    const kol = nombre.toString()
    const tab = kol.split('')
    const longueur = tab.length
    const reconvertir = tab.map(elmnt => parseFloat(elmnt))
    if (longueur === 4){             
        const convertir = reconvertir.filter((exemple, index) =>   index < 2)
        const un = convertir[0];
        const deux = convertir[1];
        return `${un}.${deux}k`
    }
    else{
        const rien = longueur - 3     
        const convertir = reconvertir.filter((exemple, index) => index < rien)
        const valeur = convertir.toString().replaceAll(',', '')
        return `${valeur}k`
    }
}

function Image(view: string){
    const un = view.replace('{width}', '50')
    const deux = un.replace('{height}', '50')
    return deux
}

const SwiperButtonNext = ({ children }: { children: any }) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slideNext()}>{children}</button>;
  };

  const SwiperButtonPrev = ({ children }: { children: any }) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slidePrev()}>{children}</button>;
  };

  export {Nombres, Image, SwiperButtonNext, SwiperButtonPrev}