const { Controller } = require("egg");

class PageController extends Controller {
    async list() {
        const { ctx } = this;

        const payloadRule = {
            id: { type: 'number', required: false },
            name: { type: 'string', required: false },
            status: { type: 'number', required: false },
            type: { type: 'number', required: false },
            sellerId: { type: 'number', required: false },
            pageIndex: { type: 'number', required: true },
            pageSize: { type: 'number', required: true }
        };
        ctx.validate(payloadRule);

        const { id, name, status, type, sellerId, pageIndex, pageSize } = ctx.request.body;

        const result = await ctx.service.page.list({ id, name, status, type, sellerId, pageIndex, pageSize });
        ctx.body = result;
    }

    async getPageByKeyName() {
        const { ctx } = this;
        const payloadRule = {
            keyName: { type: 'string', required: true },
        };
        ctx.validate(payloadRule);

        const { keyName } = ctx.request.body;
        const result = await ctx.service.page.getPageByKeyName(keyName);
        ctx.body = result;
    }

    async getPageById() {
        const { ctx } = this;
        const payloadRule = {
            pageId: { type: 'number', required: true },
        };
        ctx.validate(payloadRule);

        const { pageId } = ctx.request.body;
        const result = await ctx.service.page.getPageById(pageId);
        ctx.body = result;
    }

    async addPage() {
        const { ctx } = this;
        const payloadRule = {
            type: { type: 'number', required: true },
            name: { type: 'string', required: true },
        };
        ctx.validate(payloadRule);

        const { type, name } = ctx.request.body;

        const result = await ctx.service.page.addPage(type, name, 0);
        ctx.body = result;
    }

    async editPage() {
        const { ctx } = this;
        const payloadRule = {
            pageId: { type: 'number', required: true },
        };
        ctx.validate(payloadRule);

        const { pageId } = ctx.request.body;

        const result = await ctx.service.page.editPage(pageId, 0);
        ctx.body = result;
    }

    async editHome() {
        const { ctx } = this;

        const result = await ctx.service.page.editHome();
        ctx.body = result;
    }

    async editBricks() {
        const { ctx } = this;

        const payloadRule = {
            pageId: { type: 'number', required: true },
            historyId: { type: 'number', required: false }
        };
        ctx.validate(payloadRule);

        const { pageId, historyId } = ctx.request.body;
        const result = await ctx.service.page.editBricks(pageId, historyId);
        ctx.body = result;
    }

    async addBrick() {
        const { ctx } = this;

        const payloadRule = {
            pageId: { type: 'number', required: true },
            historyId: { type: 'number', required: false },
            brick: {
                type: 'object',
                required: true,
                rule: {
                    templateId: { type: 'number', required: true },
                    sort: { type: 'number', required: true },
                    data: { type: 'string', required: false },
                    props: { type: 'string', required: false },
                }
            }
        };
        ctx.validate(payloadRule);

        const { pageId, brick, historyId } = ctx.request.body;
        const result = await ctx.service.page.addBrick(pageId, brick, historyId);
        ctx.body = result;
    }

    async updateBrick() {
        const { ctx } = this;

        const payloadRule = {
            pageId: { type: 'number', required: true },
            brick: {
                type: 'object',
                required: true,
                rule: {
                    id: { type: 'number', required: true },
                    type: { type: 'number', required: true },
                    templateId: { type: 'number', required: true },
                    sort: { type: 'number', required: true },
                    data: { type: 'string', required: false },
                    props: { type: 'string', required: false },
                }
            }
        };
        ctx.validate(payloadRule);

        const { pageId, brick } = ctx.request.body;
        const result = await ctx.service.page.updateBrick(pageId, brick);
        ctx.body = result;
    }

    async deleteBrick() {
        const { ctx } = this;

        const payloadRule = {
            pageId: { type: 'number', required: true },
            brickId: { type: 'number', required: true },
            brickType: { type: 'number', required: true },
        };
        ctx.validate(payloadRule);

        const { pageId, brickId, brickType } = ctx.request.body;
        const result = await ctx.service.page.deleteBrick(pageId, brickId, brickType);
        ctx.body = result;
    }

    async savePage() {
        const { ctx } = this;

        const payloadRule = {
            pageId: { type: 'number', required: true },
            historyId: { type: 'number', required: false },
            pageName: { type: 'string', required: false },
            sortings: {
                type: 'array',
                itemType: 'object',
                required: true,
                rule: {
                    id: { type: 'number', required: true },
                    sort: { type: 'number', required: true },
                }
            }
        };
        ctx.validate(payloadRule);

        const { pageId, historyId, pageName, sortings } = ctx.request.body;
        const result = await ctx.service.page.savePage(pageId, historyId, pageName, sortings);
        ctx.body = result;
    }

    async publishPage() {
        const { ctx } = this;

        const payloadRule = {
            pageId: { type: 'number', required: true },
            historyId: { type: 'number', required: false },
        };
        ctx.validate(payloadRule);

        const { pageId, historyId } = ctx.request.body;
        const result = await ctx.service.page.publishPage(pageId, historyId);
        ctx.body = result;
    }
}

module.exports = PageController;