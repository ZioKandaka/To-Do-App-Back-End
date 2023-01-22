
class Task {
    constructor(id, task, status = 'incomplete',createdDate = null, completedDate = null, tags = []) {
        this.id = id
        this.task = task
        this.status = status
        this.createdDate = createdDate
        this.completedDate = completedDate
        this.tags = tags
    }
}

module.exports = Task