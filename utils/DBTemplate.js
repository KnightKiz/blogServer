const mysql = require('mysql');
const pool = require('../config.js');

module.exports = {
	findAll: (state) => {
		return new Promise((resolve, reject) => {
			pool.query(state, (err, results, fields) => {
				if (err) {
					reject(err);
				} else {
					resolve(results);
				}
			})
		});
	},
	findById: (state, values) => {
		return new Promise((resolve, reject) => {
			pool.query(state, values, (err, results, fields) => {
				if (err) {
					reject(err);
				} else {
					resolve(results);
				}
			})
		});
	},
	update: (state, values) => {
		return new Promise((resolve, reject) => {
			pool.query(state, values, (err, results, fields) => {
				if (err) {
					reject(err);
				} else {
					resolve(results);
				}
			});
		});
	},
	insert: (state, values) => {
		return new Promise((resolve, reject) => {
			pool.query(state, values, (err, results, fields) => {
				if (err) {
					reject(err);
				} else {
					resolve(results);
				}
			})
		});
	}
};