const userAPI = {
    getUsers() {
        return axios.get('/users').then(res => res.data)
    },
    deleteUsers(ids) {
        let strIds = ids.join(',')
        return axios.delete('/users/' + ids).then(res => res.data)
    },
    disableUser(id) {
        return axios.delete(`/users/${id}/state`).then(res => res.data)
    },
    enableUser(id) {
        return axios.put(`/users/${id}/state`).then(res => res.data)
    },
    updatePassword(id, password) {
        return axios.put(`/users/${id}/password`, password).then(res => res.data)
    },
    addUser(user) {
        return axios.post('/users', user).then(res => res.data)
    },
    editUser(id, user) {
        return axios.put(`/users/${id}`, user).then(res => res.data)
    }

}
export default userAPI