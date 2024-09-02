let StartFunc = ({ inBranchData, inBookingPk }) => {
    let LocalinBranchData = inBranchData;
    let LocalBookingPk = inBookingPk;

    let LocalReturnData = { KTF: false };

    let LocalBranchDataFind = LocalinBranchData.find(e => e.pk == LocalBookingPk);
    if (Object.values(LocalBranchDataFind.CheckOutData)[0] === undefined) {
        LocalReturnData.KReason = "No Settlement"
        return LocalReturnData;
    };

    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalBranchDataFind

    return LocalReturnData;
};

export { StartFunc };