// import { StartFunc as ApplyFilter } from '../../kLowDb/ReadFromFile/ApplyFilter/getFunc.js';
import HomeJson from './home.json' with {type: 'json'};

let GetFunc = ({ inFactory }) => {
    // let LocalFromLowDb = ApplyFilter({ inFilterObject });
    console.log("inFactory",inFactory);
    
    return HomeJson({ inFactory });
};

export {
    GetFunc
};