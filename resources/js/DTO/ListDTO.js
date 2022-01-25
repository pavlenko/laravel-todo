export default class ListDTO {
    id = null;
    desk_id = null;
    name = null;
    prev = 0;
    next = 0;
    created_at = null;
    updated_at = null;
    constructor(data) {
        if (data) {
            Object.assign(this, data);
        }
    }
};
