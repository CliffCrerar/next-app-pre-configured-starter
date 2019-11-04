/**
 * DEFAULT HEAD: Style links
 */

 import {Config} from 'config';

 export default ()=>(
     <React.Fragment>
         <link rel="stylesheet" href="static/style.css" />
     {Config['global-styles'].map((css,i)=><link rel="stylesheet" id={`styleLink-${i}`} key={`sl${i}`}/>)}
     </React.Fragment>
 )