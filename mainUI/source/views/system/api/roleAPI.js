/* global axios */
const ruleAPI = {
    getRoles() {
        return axios.get('/roles').then(res => res.data);
    },
    getUsersByRole(rolecode) {
        return axios.get(`/roles/${rolecode}/users`).then(res => res.data);
    },
    getUsersNotRole(rolecode) {
        return axios.get(`/roles/${rolecode}/users`, {
            params: {
                optional: true
            }
        }).then(res => res.data);
    },
    getMenuPermissionsByRole(rolecode) {
        return axios.get(`/roles/${rolecode}/permissions/menu`).then(res => res.data);
    },
    addRole(role) {
        return axios.post('/roles', role).then(res => res.data);
    },
    editRole(id, role) {
        return axios.put(`/roles/${id}`, role).then(res => res.data);
    },
    deleteRole(id) {
        return axios.delete(`/roles/${id}`).then(res => res.data);
    },
    addUsers(ids, rolecode) {
        let usernames = ids.join(',');
        return axios.put(`/roles/${rolecode}/users`, { usernames }).then(res => res.data);
    },
    removeUsers(ids, rolecode) {
        let usernames = ids.join(',');
        return axios.delete(`/roles/${rolecode}/users`, { params: { usernames: usernames } }).then(res => res.data);
    }
};

export default ruleAPI;