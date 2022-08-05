import { Schema } from 'mongoose';
export const AddressSchema = new Schema(
    {
        city: String,
        location: String,
        state: String,
        zipcode: String,
        line1: String,
        line2: String
    },
    { _id: false });
export const ContactSchema = new Schema(
    {
        phone: [String],
        cellphone: [String],
        email: [String],
        fax: [String],
        contactId: String
    },
    { _id: false });
export const CreatedSchema = new Schema(
    {
        createdDate: Date,
        createdBy: String,
        createdByIp: String
    },
    { _id: false });

export const LastModSchema = new Schema({

    lastModDate:  Date,
    lastModBy: String,
    lastModByIp: String
},
    { _id: false });