const Controller = require('egg').Controller;

/**
 * 公共同用controller
 * 
 * @class CommonController
 * @extends {Controller}
 */
class CommonController extends Controller {
    constructor(ctx) {
        super(ctx);
        this.init && this.init();
    }

    success(result, code = '0') {
        this.ctx.body = {
            code,
            success: true,
            result
        }
    }

    fail(message = undefined, status = 200) {
        this.ctx.status = status;
        this.ctx.body = {
            code: '-1',
            success: false,
            message
        }
    }

    /**
     * 查询列表 method get
     */
    async index() {
        const ctx = this.ctx;
        let res = ctx.query;
        const result = await this.service.common.index(this.table, res);
        this.success(result);
    }

    // 根据id 获取信息url/:id method get
    async show() {
        const ctx = this.ctx;
        let id = ctx.params.id;
        const result = await this.service.common.show(this.table, { id });
        if (result) {
            this.success(result);
        } else {
            this.fail('获取信息失败');
        }
    }

    // 添加 method post
    async create() {
        const ctx = this.ctx;
        const params = ctx.request.body;
        // 添加时间
        params['gmt_create'] = this.app.mysql.literals.now;
        params['gmt_modified'] = this.app.mysql.literals.now;
        const result = await this.service.common.create(this.table, params);
        if (result.affectedRows === 1) {
            this.success();
        } else {
            this.fail('添加信息失败');
        }
    }

    // 更新信息 method put
    async update() {
        const ctx = this.ctx;
        let id = ctx.params.id;
        const params = ctx.request.body;
        // 更新时间
        params['gmt_modified'] = this.app.mysql.literals.now;
        const result = await this.service.common.update(this.table, id, params);
        if (result.affectedRows === 1) {
            this.success();
        } else {
            this.fail('更新信息失败');
        }
    }

    // 删除信息 method delete
    async destroy() {
        const ctx = this.ctx;
        let id = ctx.params.id;
        const result = await this.service.common.destroy(this.table, {id});
        if (result.affectedRows === 1) {
            this.success();
        } else {
            this.fail('删除信息失败');
        }
    }

}

module.exports = CommonController;