let command = process.argv[2]
let input = process.argv.slice(3)
const Controller = require('./Controller/controller')

switch (command) {
    case 'help':
        Controller.help()
        break;
    case 'list':
        Controller.list()
        break;
    case 'add':
        Controller.add(input[0])
        break;
    case 'findById':
        Controller.findById(+input[0])
        break;
    case 'delete':
        Controller.delete(+input[0])
        break;
    case 'complete':
        Controller.complete(+input[0])
        break;
    case 'uncomplete':
        Controller.uncomplete(+input[0])
        break;
    case 'list:created':
        Controller.listCreated(input[0])
        break;
    case 'list:completed':
        Controller.listCompleted(input[0])
        break;
    case 'tag':
        Controller.tag(input)
        break;
    case 'filter':
        Controller.filter(input[0])
        break;
    default:
        break;
}