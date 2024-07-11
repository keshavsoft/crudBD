import UrlJson from './url.json' with {type: 'json'};

let StartFunc = () => {
    if (LocalFuncForSingleTable() === false) {
        LocalFuncForAllTables();
    };
};

const LocalFuncForSingleTable = () => {
    if (window.location.pathname.endsWith(`/${UrlJson.PresentUrl}`)) {
        window.location.href = `${UrlJson.RedirectToUrl}`;
        return true;
    };
    return false;
};

const LocalFuncForAllTables = () => {
    let jVarLocalHref = `${jVarGlobalTableName}${UrlJson.RedirectToUrl}`;
    window.location.href = `${jVarGlobalTableName}${UrlJson.RedirectToUrl}`;
};

export { StartFunc };