
export interface IAddressBase {
    city: String,
    location: String,
    state: String,
    zipcode: String,
    line1: String,
    line2: String
}
export interface IContactBase {
    phone: [String],
    cellphone: [String],
    email: [String],
    fax: [String],
    contactId: String
}
export interface ICreatedBase {
    createdDate: Date ,
    createdBy: String,
    createdByIp: String
}
export interface ILastModBase {

    lastModDate: Date ,
    lastModBy: String,
    lastModByIp: String
}
export interface IScheduleBase {

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
}

export interface IRequest {
    header: {
        module: String,
        functionality: String,
        role: String,
        user: String,
        clientid: String,
        clientCode: String,
        userid: String,
        modIp: String
    },
    body: any
};