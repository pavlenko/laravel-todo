export default class DeskDTO {
    id = null;
    name = null;
    created_at = null;
    updated_at = null;
    constructor(data) {
        if (data) {
            Object.assign(this, data);
        }
    }
};
