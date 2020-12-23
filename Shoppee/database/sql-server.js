// const sql = require('mssql')

// const config = {
//     user: 'sa',
//     password: 'vychuoi',
//     server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
//     database: 'QLBN1',
//     port: 1433,
// }

// var query = new sql.Request();

// sql.connect(config, err => {
//     // ... error checks

//     // Query
//     console.log("ok");

//     // new sql.Request().query('select * from CHINHANH', (err, result) => {
//     //     // ... error checks

//     //     console.log(result)
//     // })

//     // Stored Procedure

//     // new sql.Request()
//     // .input('input_parameter', sql.Int, 1)
//     // .output('output_parameter', sql.VarChar(50))
//     // .execute('procedure_name', (err, result) => {
//     //     // ... error checks

//     //     console.dir(result)
//     // })

//     // Using template literal

//     //const request = new sql.Request()
//     // request.query(request.template`select * from mytable where id = ${value}`, (err, result) => {
//     //     // ... error checks
//     //     console.dir(result)
//     //})
    
// new sql.Request().query('select * from CHINHANH', (err, result) => {
//         // ... error checks

//         console.log(result)
//     })
// })


// sql.on('error', err => {
//     // ... error handler
// })

// module.exports = sql;