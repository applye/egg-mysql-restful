const Service = require('egg').Service;

/**
 * 公共服务
 */
class CommonService extends Service {
    async index(table, query={}, condition ={}) {
        const offset = (parseInt(query.page) - 1) * parseInt(query.pageSize);
        const result = await this.app.mysql.select(table, {
            where: condition,
            orders: [['id','desc']],
            limit: parseInt(query.pageSize),
            offset: offset
        });
        const cStr = "";
        if(JSON.stringify(condition) != '{}') {
            cStr = " where ";
            for(const key in condition) {
                cStr = cStr + key + " = '" + condition[key] + "' and ";
            }
            cStr = cStr.substring(0, cStr.lastIndexOf(" and "));
        } 
        const totalSql = "select count(*) as total from " + table + cStr;
        const resultTotal = await this.app.mysql.query(totalSql);
        return { result, total: resultTotal[0].total }
    }

    async show(table, params) {
        const result = await this.app.mysql.get(table, params);
        return result;
    }

    async create(table, params) {
        const result = await this.app.mysql.insert(table, params);
        return result;
    }

    async update(table, id, params) {
        let upstr = `update ${table} set`;
        let sqlArr = [];
        for(let key of params) {
            if(sqlArr.length != 0) {
                upstr += ", ";
            }
            upstr += `${key} = ?`;
            sqlArr.push(params[key]);
        }
        upstr += ` where id=?`;
        sqlArr.push(id);
        const result = await this.app.mysql.query(upstr, sqlArr);
        return result;
    }

    async destroy(table, params) {
        const result = await this.app.mysql.delete(table, params);
    }

}

module.exports = CommonService;