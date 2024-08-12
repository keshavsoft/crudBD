import { StartFunc as Show } from './Show/EntryFile.js';

let StartFunc = ({ inTablesCollection, inTo, inFrom }) => {
    Show({ inTablesCollection, inTo, inFrom });
};

export { StartFunc };