// function importAll(r) {
//     let images = {};
//      r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images
//    }
//  export  const images = importAll(require.context('../Assets/Image', false, /\.(png|jpe?g|svg)$/));

import man from './man.png'
import empty from "./empty.png"
export const Images ={
    man,
    empty
}