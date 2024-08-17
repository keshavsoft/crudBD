let startFunc = () => {
    if ("KS_URL_FORMONGODB" in process.env === false) {
        console.log("KS_URL_FORMONGODB not found in .env file");
        return false;
    };

    const url = process.env.KS_URL_FORMONGODB;
    return url;
};

export {startFunc};