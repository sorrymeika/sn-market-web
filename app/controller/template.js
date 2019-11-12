const { Controller } = require("egg");

class TemplateController extends Controller {
    async query() {
        const { ctx } = this;

        const payloadRule = {
            name: { type: 'string', required: false },
            groupId: { type: 'number', required: false },
            pageType: { type: 'number', required: false },
        };
        ctx.validate(payloadRule);

        const {
            name,
            groupId,
            pageType
        } = ctx.request.body;

        const result = await ctx.service.template.query({
            name,
            groupId,
            pageType
        });
        ctx.body = result;
    }

    async add() {
        const { ctx } = this;
        const payloadRule = {
            name: { type: 'string', required: true },
            description: { type: 'string', required: false },
            type: { type: 'number', required: true },
            supportPageTypes: { type: 'string', required: false },
            image: { type: 'string', required: false },
            preview: { type: 'string', required: false },
            html: { type: 'string', required: false },
            css: { type: 'string', required: false },
            sorting: { type: 'number', required: true },
            groupId: { type: 'number', required: true },
            props: { type: 'string', required: false },
        };
        // 校验参数
        ctx.validate(payloadRule);

        const {
            name,
            description,
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
            description,
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

    async update() {
        const { ctx } = this;
        const payloadRule = {
            id: { type: 'number', required: true },
            name: { type: 'string', required: true },
            description: { type: 'string', required: false },
            type: { type: 'number', required: true },
            supportPageTypes: { type: 'string', required: false },
            image: { type: 'string', required: false },
            preview: { type: 'string', required: false },
            html: { type: 'string', required: false },
            css: { type: 'string', required: false },
            sorting: { type: 'number', required: true },
            groupId: { type: 'number', required: true },
            props: { type: 'string', required: false },
        };
        // 校验参数
        ctx.validate(payloadRule);

        const {
            id,
            name,
            description,
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

        const result = await ctx.service.template.update({
            id,
            name,
            description,
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