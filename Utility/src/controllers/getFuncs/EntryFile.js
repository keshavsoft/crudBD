import { GetFunc as GetFuncRepo } from '../../repos/getFuncs/EntryFile.js';

let GetFunc = (req, res) => {
    let LocalFromRepo = GetFuncRepo({
        inResponse: res,
        callback: (data) => {
            console.log("hhhhhhhh:", data);
        }
    });
};

export {
    GetFunc
};