
import { Folder } from '../_models/folder';
import { File, FileSchema } from '../_models/file';
import persist from '../_commons/helpers/persist-helper';

import MongoDb from 'mongodb';


export class FileService {
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
            let fileId = new MongoDb.ObjectId(id)
            console.log(id);
            let fileObj = await Folder.findOne(
                { "files._id": fileId }
            );
            return fileObj?.files[0];
        } catch (err) {
            return err;
        }
    }
    public _findOneByName = async (req: any) => {
        return await File.findOne(req);
    };

    public _save = async (req: any) => {
        try {

            let fileToAdd = req.files;
            fileToAdd.forEach(async (element: any) => {
                await persist.created(element, req.header);
            });
            const addedFiles = await Folder.findByIdAndUpdate(req.body.id, { $push: fileToAdd });
            return addedFiles;
        } catch (err) {
            return err;
        }
    }
    public _move = async (req: any) => {
        try {

   
            let fileToAdd = this._findById(req.body.id);
            this._pull(req.body.fromfolderid,req.body.id );
            const addedFiles = await Folder.findByIdAndUpdate(req.body.tofolderid, { $push: fileToAdd });
            console.log(addedFiles);
            return addedFiles;
        } catch (err) {
            return err;
        }
    }

    public _pull = async (fromfolderid:any ,id: any) => {
        try {
            console.info("fromfolderid {}", id);
            let folderId = new MongoDb.ObjectId(fromfolderid);
            let dataUpdated = await Folder.findOneAndUpdate({}, { $pull: {files: { _id: id }} });
        

            console.info("data pullet {}", dataUpdated);
            return dataUpdated;
        } catch (err) {
            return { success: false, error: err };
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