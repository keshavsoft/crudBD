import { StartFunc as Show } from './Show/EntryFile.js';
import { StartFunc as Create } from './Create/EntryFile.js';
import { StartFunc as Alter } from './Alter/EntryFile.js';
import { StartFunc as Delete } from './Delete/EntryFile.js';
import { StartFunc as Upload } from './Upload/EntryFile.js';
import { StartFunc as Images } from './Images/EntryFile.js';
import { StartFunc as Search } from './Search/EntryFile.js';
import { StartFunc as Bulk } from './Bulk/EntryFile.js';
import { StartFunc as ShowWithColumns } from './ShowWithColumns/EntryFile.js';

let StartFunc = ({ inTablesCollection, inTo, inFrom, inConfigJson }) => {
    Show({ inTablesCollection, inTo });
    Create({ inTablesCollection, inTo, inConfigJson });
    Alter({ inTablesCollection, inTo, inConfigJson });
    Delete({ inTablesCollection, inTo });
    Upload({ inTablesCollection, inTo, inConfigJson });
    Images({ inTablesCollection, inTo, inConfigJson });
    Search({ inTablesCollection, inTo });
    Bulk({ inTablesCollection, inTo, inConfigJson });
    ShowWithColumns({ inTablesCollection, inTo });
};

export { StartFunc };