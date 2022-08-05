import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();

import { uploadFiles } from '../_commons/helpers/file-helper';

import { FileController } from '../_controllers/file-controller';
const _fileController = new FileController();
router.get('/:id', _fileController._findById);
router.get('/', _fileController._findAll);
router.post('/move',  _fileController._move);
router.post('/', uploadFiles, _fileController._save);
router.put('/', _fileController._update);
router.delete('/:id', _fileController._delete);

export default router;