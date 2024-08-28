import { PostFunc as ConnectedClients } from "../../../binV2/ConnectedClients/Create/repos/postFuncs/EntryFile.js";

let StartFunc = ({ inIpAddress }) => {
    ConnectedClients({ inIpAddress }).then();
};

export { StartFunc };