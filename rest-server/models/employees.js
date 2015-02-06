// Company Model Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Types = Schema.Types;

exports.schema = new Schema({
    name: { type: String, required: true },
    designation: { type: String, required: true },
    exprience: { type: Number },
    photo: { type: String },
    expertice: { type: String }
});

exports.model = mongoose.model('Employees', exports.schema);
