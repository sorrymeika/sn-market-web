const { Service } = require("egg");

class TemplateService extends Service {
    query(params) {
        const { ctx } = this;
        return ctx.rpc.invoke('template.getTemplates', [{
            ...params,
            status: 1
        }]);
    }

    add(template) {
        const { ctx } = this;
        return ctx.rpc.invoke('template.addTemplate', [template]);
    }

    deleteById(templateId) {
        const { ctx } = this;
        return ctx.rpc.invoke('template.deleteTemplate', [templateId]);
    }
}

module.exports = TemplateService;