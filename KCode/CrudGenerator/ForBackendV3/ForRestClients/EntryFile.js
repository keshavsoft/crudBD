import { StartFunc as Show } from './Show/EntryFile.js';
import { StartFunc as Create } from './Create/EntryFile.js';
import { StartFunc as Alter } from './Alter/EntryFile.js';

let StartFunc = ({ inTablesCollection, inTo, inFrom, inConfigJson }) => {
    Show({ inTablesCollection, inTo });
  //  Create({ inTablesCollection, inTo });
    // Alter({ inTablesCollection, inTo, inFrom, inConfigJson });
};

export { StartFunc };