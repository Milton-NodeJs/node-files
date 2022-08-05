import { Request, Response, NextFunction } from 'express';
import { FileService } from '../_services/file-service';
export class FileController {
    public _fileService:FileService;
    constructor() { 
        this._fileService= new FileService();
    }
    public _findAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const allrecords = await this._fileService._findAll();
            return res.status(200).send(allrecords);
        } catch (err) {
            res.status(500).send(err);
        }
    }
    public _findById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(req.params.id);
            const oneRecord = await this._fileService._findById(req.params.id);
            console.log(oneRecord);
            return res.send(oneRecord);
        } catch (err) {
            res.status(500).send(err);
        }
    }
    public _save = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const createdRecord = await this._fileService._save(req);
            return res.status(200).send(createdRecord);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    public _move = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const movedRecord = await this._fileService._move(req);
            return res.status(200).send(movedRecord);
        } catch (err) {
            res.status(500).send(err);
        }
    }
    public _update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const updatedRecord = await this._fileService._update(req);
            return res.status(201).send(updatedRecord);
        } catch (err) {
            res.status(500).send(err);
        }
    }
    public _delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const deletedRecord = await this._fileService._delete(req.params.id);
            return res.send(deletedRecord);
        } catch (err) {
            res.status(500).send(err);
        }
    }

}