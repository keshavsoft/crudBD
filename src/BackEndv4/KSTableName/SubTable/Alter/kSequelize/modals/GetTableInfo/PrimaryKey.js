import {
    AllColumns as AllColumnsFromTableColumns,
} from './TableColumns.js';

const getKeyByValue = (object) => Object.keys(object).find(key => object[key].primaryKey);

let StartFunc = async () => {
    let LocalTableName = await AllColumnsFromTableColumns();
    return await getKeyByValue(LocalTableName);
};


export { StartFunc };