var express = require('express');
const sql = require('mssql')
const { Request } = require('tedious');
var database = require('../database/db');
var router = express.Router();
var data = require('../database/sql-server');

const config = {
	user: 'sa',
	password: 'vychuoi',
	server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
	database: 'Shopee',
	port: 1433,
}

sql.connect(config, err => {
	// ... error checks

	// Query
	router.get('/', function (req, res, next) {
		new sql.Request().query('select * from CHINHANH', (err, result) => {
			// ... error checks
			console.log(result)
			res.render('index');
		})

	});
	// new sql.Request().query('select * from CHINHANH', (err, result) => {
	//     // ... error checks

	//     console.log(result)
	// })

	// Stored Procedure

	// new sql.Request()
	// .input('input_parameter', sql.Int, 1)
	// .output('output_parameter', sql.VarChar(50))
	// .execute('procedure_name', (err, result) => {
	//     // ... error checks

	//     console.dir(result)
	// })

	// Using template literal

	//const request = new sql.Request()
	// request.query(request.template`select * from mytable where id = ${value}`, (err, result) => {
	//     // ... error checks
	//     console.dir(result)
	//})
	var obj = "";
	router.get('/channel-sell', function (req, res, next) {
		res.render('channel-sell');
	});

	router.get('/channel-sell-mnbill-all', function (req, res, next) {
		new sql.Request().query("select * from Products", function (err, results, fields) {
			if (err) throw err;
			else {
				console.log(results.recordset);
				res.render('channel-sell-mnbill-all', { data: results.recordset });
			}
		})
	});

	router.get('/add', function (req, res, next) {
		new sql.Request().query(`select TypeProduct_Name from TypeProduct`, function (err, result, fields) {
			if (err) throw err;
			else {
				res.render('add', { type: result.recordset });
			}
		})
	});

	router.get('/delete/:id', function (req, res, next) {
		new sql.Request().query(`delete from Products where Product_ID = ${req.params.id}`, function (err) {
			if (err) throw err;
			else {
				res.redirect('/channel-sell-mnbill-all');
			}
		})
	});

	router.get('/edit/:id', function (req, res, next) {
		new sql.Request().query(`select * from Products where Product_ID = ${req.params.id}`, function (err, results, fields) {
			if (err) throw err;
			else {
				var resu = results.recordset[0];
				data = {
					id: resu.Product_ID,
					name: resu.Product_Name,
					image: resu.Product_Image,
					classify: resu.Product_Classify,
					type: resu.Product_Type,
					price: resu.Product_Price,
					store: resu.Product_Store,
					amount: resu.Product_Amount,
				}
				res.render('edit', { data });
			}
		})
	});

	router.post('/edit', function (req, res, next) {
		new sql.Request().query(`update Products set Product_Name = '${req.body.name}',Product_Classify = '${req.body.classify}',Product_Type = '${req.body.type}',Product_Price = '${req.body.price}',Product_Store = '${req.body.store}',Product_Amount = '${req.body.sold}',Product_Image = '${req.body.image}' where Product_ID = ${req.body.id}`, function (err) {
			if (err) throw err;
			else {
				res.redirect('/channel-sell-mnbill-all');
			}
		})
	});

	router.post('/channel-sell-mnbill-all', function (req, res, next) {
		console.log(`insert into Products values(N'${req.body.name}',N'${req.body.classify}',N'${req.body.type}',N'${req.body.image}',N'${req.body.price}','${req.body.amount}',N'${req.body.store}')`);
		new sql.Request().query(`exec InsertProduct N'${req.body.name}',N'${req.body.classify}',N'${req.body.type}',N'${req.body.image}','${req.body.price}','${req.body.amount}',N'${req.body.store}'`, function (err) {
			if (err) throw err;
			else {
				res.redirect('/channel-sell-mnbill-all');
			}
		})
	});

	router.post('/channel-sell-mnbill-all', function (req, res, next) {
		new sql.Request().query(`select * from Products`, function (err, results, fields) {
			if (err) throw err;
			else {
				res.render('channel-sell-mnbill-all', { data: results.recordset });
			}
		})
	});


})

sql.on('error', err => {
	// ... error handler
})

module.exports = router;