'use strict';

const BaseController = require('../base');

class HomeController extends BaseController {
    // 系统应用列表
    async systemlist() {
        // const { ctx } = this;
        await this.ctx.render('home', {
            data: {
                page: 'home',
                title: '应用列表'
            }
        });
    }

    // 新增系统选择应用类型
    async selectype() {
        // const { ctx } = this;
        await this.ctx.render('selectype', {
            data: {
                title: '选择应用类型'
            }
        });
    }

    // 账号登录
    async login() {
        const { ctx } = this;
        await ctx.render('login', {
            data: {
                name: this.app.config.name,
                title: '登录系统',
                gh_client_id: this.app.config.github.client_id,
                gh_scope: this.app.config.github.scope,
                wb_client_id: this.app.config.weibo.client_id,
                wb_scope: this.app.config.weibo.scope,
                wx_client_id: this.app.config.wechat.client_id
            }
        });
    }

    // 应用系统列表
    async apps() {
        const { ctx } = this;
        await ctx.render('apps', {
            data: {
                title: '应用管理'
            }
        });
    }

    // 账号管理
    async accounts() {
        const { ctx } = this;
        await ctx.render('accounts', {
            data: {
                title: '账号管理'
            }
        });
    }

    // 系统重启信息
    async errors() {
        const { ctx } = this;
        await ctx.render('errors', {
            data: {
                title: '系统重启信息'
            }
        });
    }

    // 联系人管理
    async emails() {
        const { ctx } = this;
        await ctx.render('emails', {
            data: {
                title: '联系人管理'
            }
        });
    }
}

module.exports = HomeController;
