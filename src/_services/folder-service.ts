
import { Folder } from '../_models/folder';
import persist from '../_commons/helpers/persist-helper';
//import MongoDb from 'mongodb';


export class FolderService {
    constructor() { }
    public _findAll = async () => {
        try {
            return await Folder.find();
        } catch (err) {
            return err;
        }
    }
    public _findById = async (id: string) => {
        try {
            return await Folder.findOne({ _id: id }).then(
                response => {
                    return ({ success: true, data: response });
                });
        } catch (err) {
            return { success: false, error: err };
        }
    }
    public _findOneByName = async (req: any) => {
        return await Folder.findOne(req);
    };

    public _save = async (req: any) => {
        try {
            let parentId = await (req.body.parentId ? req.body.parentId : 'Root')
            let files = req.files;
            files.forEach( async (element: any) => {          
                    await persist.created(element, null);
            });
            let newFolder = new Folder({
                name: req.body.name,
                path: req.body.path,
                description: req.body.description,
                parentId: parentId,
                files: files
            });

            await persist.created(newFolder, req.header);
            let _folderSaved = await newFolder.save();
            return _folderSaved;
        } catch (err) {
            return err;
        }
    }
    public _update = async (req: any) => {
        try {
            let _dataUpdate = {
                name: req.body.name,
                shortName: req.body.shortName,
                standardFolder: req.body.standardFolder
            };
            await persist.lastMod(_dataUpdate, req.header);
            let dataUpdated = await Folder.findByIdAndUpdate(req.body.id, { $set: _dataUpdate });
            return dataUpdated;

        } catch (err) {
            return { success: false, error: err };
        }
    }
    public _delete = async (id: string) => {
        try {
            return await Folder.findByIdAndRemove(id)
                .then(
                    response => {
                        return ({ success: true, message: 'Deleted Successfully!' });
                    });
        } catch (err) {
            return { success: false, error: err };
        }
    }
}