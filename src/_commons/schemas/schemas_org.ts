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
        contactId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    { _id: false });
export const CreatedSchema = new Schema(
    {
        createdDate: { type: Date, default: Date.now },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        createdByIp: String
    },
    { _id: false });
export const ScheduleSchema = new Schema({
    hours: {
        type: Number,
        required: true,
        min: 0,
        max: 23
    },
    minutes: {
        type: Number,
        required: true,
        min: 0,
        max: 59
    },
    seconds: {
        type: Number,
        required: true,
        min: 0,
        max: 59
    }
},
    { _id: false });
export const LastModSchema = new Schema({

    lastModDate: { type: Date, default: Date.now },
    lastModBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    lastModByIp: String
},
    { _id: false });
export const RequestSchema = new Schema({
    header: {
        module: String,
        functionality: String,
        role: String,
        user: String,
        clientid: {
            type: Schema.Types.ObjectId,
            ref: 'Client'
        },
        clientCode: String,
        userid: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        modIp: String
    },
    body: {}
});