let startFunc = () => {
    if ("KS_PASSWORD_FORMONGODB" in process.env === false) {
        console.log("KS_PASSWORD_FORMONGODB not found in .env file");
        return false;
    };

    const password = encodeURIComponent(process.env.KS_PASSWORD_FORMONGODB);
    return password;
};

export {startFunc};