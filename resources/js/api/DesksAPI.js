import TaskDTO from "../DTO/TaskDTO";
import DeskDTO from "../DTO/DeskDTO";
import ListDTO from "../DTO/ListDTO";

const ENDPOINT = __baseURL + '/api/V1/';

class DesksAPI
{
    /**
     * @returns {Promise<Array.<DeskDTO>>}
     */
    getAllDesk() {
        return axios
            .get(ENDPOINT + 'desks')
            .then(
                response => [].map.call(response.data.data, item => new DeskDTO(item)),
                error => console.log(error)
            );
    }

    /**
     * @param {Number} deskID
     * @returns {Promise<DeskDTO>}
     */
    getOneDesk(deskID) {
        return axios
            .get(ENDPOINT + 'desks/' + deskID)
            .then(
                response => new DeskDTO(response.data.data),
                error => console.log(error)
            );
    }

    /**
     * @param {DeskDTO} desk
     * @param {Object} [params]
     * @returns {Promise<DeskDTO>}
     */
    createDesk(desk, params) {
        params = params || {};
        return axios
            .post(ENDPOINT + 'desks', Object.assign({}, desk, params))
            .then(
                response => new DeskDTO(response.data.data),
                error => console.log(error)
            );
    }

    /**
     * @param {DeskDTO} desk
     * @param {Object} [params]
     * @returns {Promise<DeskDTO>}
     */
    updateDesk(desk, params) {
        params = params || {};
        return axios
            .post(
                ENDPOINT + 'desks/' + desk.id,
                Object.assign({_method: 'PUT'}, desk, params)
            )
            .then(
                response => new DeskDTO(response.data.data),
                error => console.log(error)
            );
    }

    /**
     * @param {DeskDTO} desk
     * @returns {Promise}
     */
    deleteDesk(desk) {
        return axios
            .post(ENDPOINT + 'desks/' + desk.id, {_method: 'DELETE'})
            .then(null, error => console.log(error));
    }

    /**
     * @param {Number} deskID
     * @returns {Promise<Array.<ListDTO>>}
     */
    getAllList(deskID) {
        return axios
            .get(ENDPOINT + 'lists', {params: {desk_id: deskID}})
            .then(
                response => [].map.call(response.data.data, item => new ListDTO(item)),
                error => console.log(error)
            );
    }

    /**
     * @param {ListDTO} list
     * @param {Object} [params]
     * @returns {Promise<ListDTO>}
     */
    createList(list, params) {
        params = params || {};
        return axios
            .post(ENDPOINT + 'lists', Object.assign({}, list, params))
            .then(
                response => new ListDTO(response.data.data),
                error => console.log(error)
            );
    }

    /**
     * @param {ListDTO} list
     * @param {Object} [params]
     * @returns {Promise<ListDTO>}
     */
    updateList(list, params) {
        params = params || {};
        return axios
            .post(
                ENDPOINT + 'lists/' + list.id,
                Object.assign({_method: 'PUT'}, list, params)
            )
            .then(
                response => new ListDTO(response.data.data),
                error => console.log(error)
            );
    }

    /**
     * @param {ListDTO} list
     * @returns {Promise}
     */
    deleteList(list) {
        return axios
            .post(ENDPOINT + 'lists/' + list.id, {_method: 'DELETE'})
            .then(null, error => console.log(error));
    }

    /**
     * @param {Number} cardID
     * @returns {Promise<Array.<TaskDTO>>}
     */
    getAllTask(cardID) {
        return axios
            .get(ENDPOINT + 'tasks', {params: {card_id: cardID}})
            .then(
                response => [].map.call(response.data.data, item => new TaskDTO(item)),
                error => console.log(error)
            );
    }

    /**
     * @param {TaskDTO} task
     * @param {Object} [params]
     * @returns {Promise<TaskDTO>}
     */
    createTask(task, params) {
        params = params || {};
        return axios
            .post(
                ENDPOINT + 'tasks',
                Object.assign({}, task, params)
            )
            .then(response => new TaskDTO(response.data.data));
    }

    /**
     * @param {TaskDTO} task
     * @param {Object} [params]
     * @returns {Promise<TaskDTO>}
     */
    updateTask(task, params) {
        params = params || {};
        return axios
            .post(
                ENDPOINT + 'tasks/' + task.id,
                Object.assign({_method: 'PUT'}, task, params)
            )
            .then(response => new TaskDTO(response.data.data));
    }

    /**
     * @param {TaskDTO} task
     * @returns {Promise}
     */
    deleteTask(task) {
        return axios
            .post(ENDPOINT + 'tasks/' + task.id, {_method: 'DELETE'})
            .then(null, error => console.log(error));
    }
}

export default new DesksAPI();
