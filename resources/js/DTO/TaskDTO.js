export default class TaskDTO {
    id = null;
    card_id = null;
    name = null;
    status = 0;
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
