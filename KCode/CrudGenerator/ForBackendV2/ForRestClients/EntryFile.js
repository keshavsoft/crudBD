import { StartFunc as Show } from './Show/EntryFile.js';
import { StartFunc as Create } from './Create/EntryFile.js';
import { StartFunc as Alter } from './Alter/EntryFile.js';

let StartFunc = ({ inTablesCollection, inTo, inFrom }) => {
    Show({ inTablesCollection, inTo, inFrom });
    Create({ inTablesCollection, inTo, inFrom });
    Alter({ inTablesCollection, inTo, inFrom });
};

export { StartFunc };