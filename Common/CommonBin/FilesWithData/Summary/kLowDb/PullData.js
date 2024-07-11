import fs from "fs";
import path from "path";
import dirTree from "directory-tree";
import ConfigJson from '../../../../../bin/Config.json' assert {type: 'json'};

let StartFunc = () => {
    let LocalinFolderName = inFolderName;
    let LocalReturnData = { KTF: false }

    let LocalDataPath = `${ConfigJson.jsonConfig.DataPath}/${ConfigJson.jsonConfig.DataPk}/${LocalinFolderName}`;
    const tree = dirTree(LocalDataPath);

    let LocalJsonData = LocalFuncReadFileData({ inFilesAsArrayData: tree.children });

    if (LocalJsonData.KTF === false) {
        return LocalReturnData;
    };
    let LocalSummaryData = LocalSummaryFunc({ inData: LocalJsonData.JsonData });

    if (LocalSummaryData.KTF === false) {
        return LocalReturnData;
    };
    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalSummaryData.JsonData;
    return LocalReturnData;

};

const LocalFuncReadFileData = ({ inFilesAsArrayData }) => {
    let LocalFilesAsArrayData = inFilesAsArrayData;
    let LocalReturnData = { KTF: false }
    let LocalArray = LocalFilesAsArrayData.map(LoopFile => {
        const data = fs.readFileSync(LoopFile.path, { encoding: 'utf8', flag: 'r' });
        let JsonParseData = JSON.parse(data);

        let LoopInsideObject = {};
        LoopInsideObject.FileName = LoopFile.name;
        LoopInsideObject.FileData = JsonParseData;
        return LoopInsideObject;

    });
    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalArray
    return LocalReturnData;
};

const LocalSummaryFunc = ({ inData }) => {
    let LocalArray = Object.values(inData);
    let LocalReturnData = { KTF: false }

    let LocalDataArray = [];

    LocalArray.forEach(element => {
        let LocalTodayData = LocalDateAndTime({ inData: element.FileData });

        let LocalneedData = {};
        LocalneedData.fileName = path.parse(element.FileName).name;
        LocalneedData.DataCount = element.FileData.length;
        LocalneedData.LastOrdeDateTime = "";
        LocalneedData.firstOrder = "";
        LocalneedData.lastOrder = ""
        LocalneedData.todayFirstOrder = ""
        LocalneedData.todaylastOrder = "";
        LocalneedData.todayTotalCount = 0;

        if (element.FileData.length > 0) {
            let LastOrdeDate = element.FileData[element.FileData.length - 1];
            LocalneedData.firstOrder = element.FileData[0];
            LocalneedData.lastOrder = LastOrdeDate;
        };
        if (LocalTodayData.length > 0) {
            let TodayLastOrdeDate = LocalTodayData[LocalTodayData.length - 1];
            LocalneedData.todayFirstOrder = LocalTodayData[0];
            LocalneedData.todaylastOrder = TodayLastOrdeDate;
            let LocalTodayCount = Object.keys(LocalTodayData).length;
            LocalneedData.todayTotalCount = LocalTodayCount;
        };
        LocalDataArray.push(LocalneedData)

    });

    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalDataArray
    return LocalReturnData;
};

const LocalDateAndTime1 = ({ inDataTime }) => {
    const dateString = inDataTime;

    // Create a new Date object from the string
    const dateObject = new Date(dateString);

    // Get the date components
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1; // Month is zero-based, so add 1
    const day = dateObject.getDate();

    // Get the time components
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const seconds = dateObject.getSeconds();

    let LocalDate = (day + "-" + month + "-" + year);
    let LocalTime = (hours + ":" + minutes + ":" + seconds);
    return { LocalDate, LocalTime }

}

const LocalDateAndTime = ({ inData }) => {
    const Localdate = inData;
    // console.log("vasu::",Localdate);

    const today = new Date(); // Get today's date
    const todayDate = today.toISOString().split('T')[0]; // Extract today's date portion

    return Localdate.filter(obj => {
        const objDate = new Date(obj.DateTime).toISOString().split('T')[0]; // Extract date portion of object's timestamp
        return objDate === todayDate; // Compare with today's date
    });
};
export { StartFunc };
