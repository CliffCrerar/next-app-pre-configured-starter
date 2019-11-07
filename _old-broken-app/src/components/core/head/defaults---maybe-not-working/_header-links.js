/**
 * DEFAULT HEAD: Style links
 */

 import {Config} from 'config';

 function StyleLinkElements (){
     return Config['global-styles'].map((file,i)=>(<link key={`sLink${i}`} rel="stylesheet" href={file}/>));
 }
 
 export default ()=>(
     <React.Fragment>
         <StyleLinkElements/>
     
     </React.Fragment>
 )