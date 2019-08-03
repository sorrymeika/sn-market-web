const { Controller } = require("egg");

class TemplateController extends Controller {
    async query() {
        const { ctx } = this;

        const payloadRule = {
            name: { type: 'string', required: false },
            groupId: { type: 'number', required: false }
        };
        ctx.validate(payloadRule);

        const {
            name,
            groupId,
        } = ctx.request.body;

        const result = await ctx.service.template.query({
            name,
            groupId,
        });
        ctx.body = result;
    }

    async add() {
        const { ctx } = this;
        const payloadRule = {
            name: { type: 'string', required: true },
            type: { type: 'number', required: true },
            supportPageTypes: { type: 'string', required: false },
            image: { type: 'string', required: false },
            preview: { type: 'string', required: false },
            html: { type: 'string', required: true },
            css: { type: 'string', required: true },
            sorting: { type: 'number', required: true },
            groupId: { type: 'number', required: true },
            props: { type: 'string', required: false },
        };
        // 校验参数
        ctx.validate(payloadRule);

        const {
            name,
            type,
            supportPageTypes,
            image,
            preview,
            html,
            css,
            sorting,
            groupId,
            props
        } = ctx.request.body;

        const result = await ctx.service.template.add({
            name,
            type,
            supportPageTypes,
            image,
            preview,
            html,
            css,
            sorting,
            groupId,
            props
        });

        ctx.body = result;
    }

    async deleteById() {
        const { ctx } = this;
        const payloadRule = {
            id: { type: 'number', required: true }
        };
        // 校验参数
        ctx.validate(payloadRule);
        const { id } = ctx.request.body;

        const result = await ctx.service.template.deleteById(id);

        ctx.body = result;
    }
}

module.exports = TemplateController;