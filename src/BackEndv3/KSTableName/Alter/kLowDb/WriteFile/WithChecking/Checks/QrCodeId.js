const StartFunc = ({ inData, inDataToInsert }) => {
    let LocalInData = inData;
    let LocalQrCodeId = inDataToInsert.QrCodeId
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    let LocalArrayChech = LocalInData.some(element => element.QrCodeId == LocalQrCodeId);

    if (LocalArrayChech) {
        LocalReturnData.KReason = "Already in it"
        return LocalReturnData
    };
    LocalReturnData.KTF = true;
    return LocalReturnData;

};

export { StartFunc };