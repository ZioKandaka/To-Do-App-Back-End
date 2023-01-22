const fs = require('fs')
const Task = require('./class')
const Database = require('../Data/database.json')

class Model {
    static getData() {
        let data = JSON.parse(fs.readFileSync('./Data/database.json', 'utf-8'))
        let classedData = data.map(el => {
            return new Task (el.id, el.task, el.status, el.createdDate, el.completedDate, el.tags)
        })
        return classedData
    }

    static add(newTask) {
        let data = Model.getData()
        let newId = 1
        if(data.length > 0) newId = data[data.length-1].id + 1

        data.push(new Task(newId, newTask, 'incomplete', Date.now()))

        fs.writeFileSync('./Data/database.json', JSON.stringify(data, null, 4))
        return newTask
    }

    static findById(id) {
        let data = Model.getData()
        let idFound = undefined
        data.forEach(el => {
            if(el.id === id) {
                idFound = (el)
            }
        })
        return idFound
    }

    static delete(id) {
        let data = Model.getData()
        let newData = []
        let dataDeleted = undefined
        data.forEach(el => {
            if(el.id !== id) {
                newData.push(el)
            } else {
                dataDeleted = el.task
            }
        })
        fs.writeFileSync('./Data/database.json', JSON.stringify(newData, null, 4))
        return dataDeleted
    }

    static complete(id) {
        let data = Model.getData()
        let newData = []
        let dataDeleted = undefined
        data.forEach(el => {
            if(el.id !== id) {
                newData.push(el)
            } else {
                newData.push(el)
                dataDeleted = el.task
                el.status = 'completed'
                el.completedDate = Date.now()
            }
        })
        fs.writeFileSync('./Data/database.json', JSON.stringify(newData, null, 4))
        return dataDeleted
    }

    static uncomplete(id) {
        let data = Model.getData()
        let newData = []
        let dataDeleted = undefined
        data.forEach(el => {
            if(el.id !== id) {
                newData.push(el)
            } else {
                newData.push(el)
                dataDeleted = el.task
                el.status = 'uncomplete'
            }
        })
        fs.writeFileSync('./Data/database.json', JSON.stringify(newData, null, 4))
        return dataDeleted
    }

    static listCreated(input) {
        let data = this.getData()
        // let x = 1
        // let y = -1
        // if(input === 'asc') {
        //     x = -1
        //     y = 1
        // }
        // let sortedData = data.map(el => {
        //     data.sort((a, b) => (a.createdDate < b.createdDate) ? x : ((b.createdDate < a.createdDate) ? y : 0))
        // })
        if (input === 'asc') {
            data.sort((a, b) => (a.createdDate > b.createdDate) ? 1 : ((b.createdDate > a.createdDate) ? -1 : 0))
        } else if (input === 'desc' || input === undefined) {
            data.sort((a, b) => (a.createdDate < b.createdDate) ? 1 : ((b.createdDate < a.createdDate) ? -1 : 0))
        }
        return data
    }

    static listCompleted(input) {
        let data = this.getData()
        if (input === 'asc') {
            data.sort((a, b) => (a.completedDate > b.completedDate) ? 1 : ((b.completedDate > a.completedDate) ? -1 : 0))
        } else if (input === 'desc' || input === undefined) {
            data.sort((a, b) => (a.completedDate < b.completedDate) ? 1 : ((b.completedDate < a.completedDate) ? -1 : 0))
        }
        return data
    }

    static tag(input) {
        let data = Model.getData()
        let id = +input[0]
        let tags = input.slice(1)
        let newData = data.map(el => {
            if(el.id === id) {
                el.tags = tags
            }
            return el
        })
        
        fs.writeFileSync('./Data/database.json', JSON.stringify(newData, null, 4))
        // fs.writeFileSync('./Data/database.json', JSON.stringify(newData, null, 4))
        return tags
    }

    static filter(input) {
        let data = Model.getData()
        let taskFound = []
        data.map(el => {
            if(el.tags.includes(input)) {
                taskFound.push(el)
            }
        })
        return taskFound
    }
}

module.exports = Model