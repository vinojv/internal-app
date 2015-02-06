// Company Model Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Types = Schema.Types;

exports.schema = new Schema({
    name: { type: String, unique: true, required: true },
    users: [{ type: Types.ObjectId, ref: 'Employee' }] // users belonging to the project
});

exports.model = mongoose.model('Project', exports.schema);
