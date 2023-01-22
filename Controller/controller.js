const Model = require('../Model/model')
const View = require('../View/view')

class Controller {
    static help() {
        View.help()
    }

    static list() {
        // Model.add()
        View.list(Model.getData())
    }

    static add(task) {
        View.add(Model.add(task))
    }

    static findById(id) {
        View.findById(Model.findById(id))
    }

    static delete(id) {
        View.delete(Model.delete(id))
    }

    static complete(id) {
        View.complete(Model.complete(id))
    }

    static uncomplete(id) {
        View.uncomplete(Model.uncomplete(id))
    }

    static listCreated(input) {
        if(input === undefined) {
            input = 'desc'
        }
        View.listCreated(Model.listCreated(input))
    }

    static listCompleted(input) {
        if(input === undefined) {
            input = 'desc'
        }
        View.listCreated(Model.listCompleted(input))
    }

    static tag(input) {
        View.tag(+input[0], Model.tag(input))
    }

    static filter(input) {
        View.list(Model.filter(input))
    }
}

module.exports = Controller