const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({new: true, runValidators: true}) /* Retorna o registro atualizado após o update */

module.exports = Todo