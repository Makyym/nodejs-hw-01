import path from 'node:path';

const mainFolder = path.join(process.cwd());
export const PATH_DB = path.join(mainFolder, 'src', 'db', 'db.json');
