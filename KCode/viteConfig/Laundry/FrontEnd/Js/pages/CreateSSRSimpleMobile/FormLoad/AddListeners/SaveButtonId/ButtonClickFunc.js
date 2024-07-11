let StartFunc = () => {
    jFLocalHideSpinner();
    var $table = $('#table');
    $table.bootstrapTable();
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

export { StartFunc }