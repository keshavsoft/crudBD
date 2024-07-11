let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");
    let jVarLocalRequiredElements = jVarLocalForm.querySelectorAll("[required]");
    let jVarLocalReturnTF = true;

    jVarLocalRequiredElements.forEach(LoopItem => {
        if (LoopItem.value.trim().length === 0) {
            LoopItem.classList.add("is-invalid");
            jVarLocalReturnTF = false;
            return;
        };
    });
    
    return jVarLocalReturnTF;
};

const jFBranchName = () => {
    let jVarLocalBranchName = document.getElementById('Mobile');

    if (jVarLocalBranchName.value === "") {
        jVarLocalBranchName.classList.add("is-invalid");
        jVarLocalBranchName.focus();
        return false;
    };
    if ((jVarLocalBranchName.value.length === 10) === false) {
        document.getElementById("MobileClass").innerHTML = "must be 10"
        jVarLocalBranchName.classList.add("is-invalid");
        jVarLocalBranchName.focus();
        return false;
    };
    if ((jVarLocalBranchName.value === "") === false && (jVarLocalBranchName.value.length === 10) === false) {
        jVarLocalBranchName.classList.remove("is-invalid");
        return true;
    };
    return true;
};

export { StartFunc }