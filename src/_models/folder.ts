import { Schema, model } from 'mongoose';
import { ICreatedBase, ILastModBase } from '../_commons/interfaces/interfaces';
import { CreatedSchema, LastModSchema } from '../_commons/schemas/schemas';
import { FileSchema, IFileBase } from './file';

const FolderSchema: Schema = new Schema({
  name: String,
  path: String,
  description: String,
  parentId: String,
  files: [FileSchema],

  active: Boolean,
  deleted:Boolean,
  created: CreatedSchema,
  lastMod: LastModSchema
});
export interface IFolderBase extends Document {
  name: String,
  path: String,
  description: String,
  parentId: String,
  files: [IFileBase],

  active:  Boolean,
  deleted: Boolean,
  created?: ICreatedBase,
  lastMod?: ILastModBase
};

export const Folder = model<IFolderBase>('Folder', FolderSchema, 'Folder');

