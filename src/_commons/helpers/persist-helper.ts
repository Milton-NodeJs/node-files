
const lastMod = async (object?: any, context?: any) => {
    if (object) {
        object.lastMod = {
            lastModDate: Date.now(),
            lastModByIp: (context.ip ? context.ip : '127.0.0.1')
        }
        if (context) { 
            object.lastMod = {
                lastModBy: (context.userId ? context.userId : context.username),
                
            }
        }
    }
}
//let parentId = await (req.body.parentId ? req.body.parentId : 'Root')
const created = async (object?: any, context?: any) => {
    if (object) {
        object.active = true;
        object.deleted = false;
        object.created = {
            createdDate: Date.now(),
        };
        object.lastMod = {
            lastModDate: Date.now(),
        }
        if (context) {
            object.created = {
                createdBy: (context.userId ? context.userId : context.username),
                createdByIp: (context.ip ? context.ip : '127.0.0.1')
            };
            object.lastMod = {
                lastModBy: (context.userId ? context.userId : context.username),
                lastModByIp: (context.ip ? context.ip : '127.0.0.1')
            }
        }
    }
}
export default {
    created, lastMod
}
