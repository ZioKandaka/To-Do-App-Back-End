class View {
    static help() {
        console.log(`$ node todo.js\n$ node todo.js help\n$ node todo.js list\n$ node todo.js add <task_content>\n$ node todo.js findById <task_id>\n$ node todo.js delete <task_id>\n$ node todo.js complete <task_id>\n$ node todo.js uncomplete <task_id`)
    }

    static list(input) {
        input.forEach(el => {
            let statusBox = '[ ]'
            if (el.status === 'completed') {
                statusBox = '[X]'
            }
            console.log(`${el.id}. ${statusBox} ${el.task}`)
        })
    }

    static add(input) {
        console.log(`${input} has added to your TODO list`)
        // console.log(input)
    }

    static findById(data) {
        let statusBox = '[ ]'
        if (data.status === 'completed') {
            statusBox = '[X]'
        }
        console.log(`${data.id}. ${statusBox} ${data.task}`)
        // console.log(data)
    }

    static delete(task) {
        console.log(`${task} has been deleted from TODO list`)
    }

    static complete(task) {
        console.log(`${task} has been marked completed`)
    }

    static uncomplete(task) {
        console.log(`${task} has been marked uncompleted`)
    }

    static listCreated(data) {
        data.forEach(el => {
            let statusBox = '[ ]'
            if (el.status === 'completed') {
                statusBox = '[X]'
            }
            console.log(`${el.id}. ${statusBox} ${el.task}`)
        })
        // console.log(data)
    }

    static tag(input, data) {
        console.log(`Task with id ${input} has been tagged with ${data}`)
    }

    // static filter(input) {
    //     input.map(el => {
        
    //     })
    // }
}

module.exports = View