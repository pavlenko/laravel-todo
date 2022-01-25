export default class CardDTO {
    id = null;
    list_id = null;
    name = null;
    text = null;
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
