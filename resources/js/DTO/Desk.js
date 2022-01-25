export default class Desk {
    id = null;
    name = null;
    created_at = null;
    updated_at = null;
    constructor(data) {
        Object.assign(this, data);
    }
};
