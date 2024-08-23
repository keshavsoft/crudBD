import {
    AllColumns as AllColumnsFromTableColumns,
    ColumnsForAlter as ColumnsForAlterFromTableColumns
} from './TableColumns.js';

let AllColumns = async () => {
    let LocalTableName = await AllColumnsFromTableColumns();

    LocalFuncRemoveInValues({ inObject: LocalColumnsObject });

    return await LocalTableName;
};

let ColumnsForAlter = async () => {
    let LocalColumnsObject = await ColumnsForAlterFromTableColumns();

    LocalFuncRemoveInValues({ inObject: LocalColumnsObject });

    return await LocalColumnsObject;
};

let LocalFuncRemoveInValues = ({ inObject }) => {
    let LocalColumnsObject = inObject;

    for (const property in LocalColumnsObject) {
        if ("defaultValue" in LocalColumnsObject[property] && LocalColumnsObject[property].defaultValue === undefined === false) {
            LocalColumnsObject[property] = LocalColumnsObject[property].defaultValue;
        } else {
            if (LocalColumnsObject[property].type === "NUMBER") {
                LocalColumnsObject[property] = 0;
            };

            LocalColumnsObject[property] = "";
        };
    };
};

export { AllColumns, ColumnsForAlter };