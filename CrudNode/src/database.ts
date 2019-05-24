import mssql from 'mssql';
import keys from './keys';

const pool = new mssql.ConnectionPool(keys , err => {
    if (err) {
        console.error("Connection failed", err);
    } else {
        console.log("Conectado")
    };
})
export default pool;