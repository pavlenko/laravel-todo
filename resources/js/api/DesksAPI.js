import TaskDTO from "../DTO/TaskDTO";

const ENDPOINT = __baseURL + '/api/V1/';

class DesksAPI
{
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
     * @param {Object} params
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
     * @param {Object} params
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
        return axios.post(ENDPOINT + 'tasks/' + task.id, {_method: 'DELETE'});
    }
}

export default new DesksAPI();
