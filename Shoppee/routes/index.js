const { render } = require('ejs');
const { query } = require('express');
var express = require('express');
const sql = require('mssql');
var multer = require('multer');
const { diskStorage } = require('multer');
const { Request } = require('tedious');
var router = express.Router();

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './public/upload-image')
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname)
	}
});

var upload = multer({storage:storage});

const config = {
	user: 'sa',
	password: 'vychuoi',
	server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
	database: 'SHOPEE',
	port: 1433,
}

sql.connect(config, err => {
	// ... error check
	// Query
	router.get('/alo', function (req, res) {
		res.render('add');
	})
	router.get('/alo', upload.array('image', 50), function (req, res, next) {
		var test = req.files;
		var count = 293;
		test.forEach(item => {
			var query = `exec InsertImage `;
			query += count.toString() + `, '` + item.originalname + `'`;
			count++;
			console.log(query);
			new sql.Request().query(query, function (err, result) {
				if(err) throw err;
				else{
					console.log('Completed');
				}
			})
		});	
	})

	router.get('/', function (req, res, next) {
		res.render('index');
	});

	router.get('/add', function (req, res, next) {
		res.render('add');
	})

	router.get('index', function (req, res, next) {
		res.render('index');
	})

	router.post('/add', function (req, res, next) {
		new sql.Request().query(`exec ThemMatHang N'${req.body.tensanpham}', N'${req.body.maumathang}', N'${req.body.mota}', ${req.body.gia}, ${req.body.tonkho}, N'${req.body.anh}', N'${req.body.video}'`, function (err, result, fields) {
			if (err) throw err;
			else {
				res.render('add')
			}
		});
	});

	router.get('/nganhhang/:id', function (req, res, next) {
		var page = req.query.page || 1;
		console.log(page)
		var pageIndex = 24;
		var start = (page - 1)*pageIndex;
		var end = page*pageIndex;
		new sql.Request().query(`exec SearchNganhHang ${req.params.id}`, function (err, result, fields) {
			if (err) throw err;
			else {
				res.render('all-product-search-1', { product : result.recordset.slice(start, end) , id : req.params.id});
			}
		})
	});

	router.post('/channel-sell-mnbill-all', function (req, res, next) {
		new sql.Request().query(`select * from MatHang`, function (err, results, fields) {
			if (err) throw err;
			else {
				res.redirect('/channel-sell-mnbill-all');
			}
		})
	});
	
	router.get('/channel-sell', function (req, res, next) {
		res.render('channel-sell');
	})

	router.get('/channel-sell-mnbill-all', function (req, res, next) {
		new sql.Request().query(`select * from MatHang`, function (err, result) {
			if (err) throw err;
			else {
				res.render('/channel-sell-mnbill-all', { data : result });
			}
		})
	});

	router.get('/all-product-search', function (req, res, next) {
		var page = req.query.page || 1;
		var search = req.query.search || '';
		var query;
		var pageIndex = 24;
		var start = (page - 1)*pageIndex;
		var end = page*pageIndex;
		if(search != ''){
			query = `exec SearchProduct N'${search}'`;
		}
		else{
			query = `exec SearchProduct ''`;
		}
		new sql.Request().query(query, function (err, result) {
			res.render('all-product-search', { product : result.recordset.slice(start, end)} );
		})
	})
})

sql.on('error', err => {
	// ... error handler
})

module.exports = router;