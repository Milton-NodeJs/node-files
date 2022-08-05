import { Schema, model } from 'mongoose';

import { ICreatedBase, ILastModBase } from '../_commons/interfaces/interfaces';
import { LastModSchema, CreatedSchema } from '../_commons/schemas/schemas';
export const FileSchema: Schema = new Schema({
  fieldname: String,
  originalname:  String, 
  encoding:String,
  mimetype:String,  
  destination:String,  
  filename: String,
  path: String,
  size:  Number,
  active: Boolean,
  deleted: Boolean,
  created: CreatedSchema,
  lastMod: LastModSchema
});
export interface IFileBase{

  fieldname?: String,
  originalname?: String,
  encoding?: String,
  mimetype?: String,
  destination?: String,
  filename?: String,
  path?: String,
  size?: Number
  active:  Boolean,
  deleted: Boolean,
  created?: ICreatedBase,
  lastMod?: ILastModBase
};
export const File = model<IFileBase>('File', FileSchema, 'File');
