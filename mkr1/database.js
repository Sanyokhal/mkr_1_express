import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'express_js_lab'
}).promise()

export async function writeResult(result, task_num) {
    let [res] = await pool.query("INSERT INTO modul(result,task_num) VALUES(?,?)", [result, task_num])
    return res.insertId
}
