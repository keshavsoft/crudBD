let StartFunc = ({ inBranchData, inBookingPk }) => {
    let LocalinBookingPk = inBookingPk;
    let LocalinBranchData = inBranchData;

    let LocalReturnData = { KTF: false };

    let LocalRowNeeded = LocalinBranchData.find(e => e.pk == LocalinBookingPk);

    if (LocalRowNeeded === undefined) {
        LocalReturnData.KReason = "No Orders";
        return LocalReturnData;
    };

    LocalReturnData.KTF = true;

    return LocalReturnData;
};

export { StartFunc };