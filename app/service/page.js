const { Service } = require("egg");

class PageService extends Service {
    list(params) {
        return this.ctx.rpc.invoke('page.list', [params]);
    }

    getPageByKeyName(keyName) {
        return this.ctx.rpc.invoke('page.getPageByKeyName', [keyName]);
    }

    getPageById(pageId) {
        return this.ctx.rpc.invoke('page.getPageById', [pageId]);
    }

    addPage(type, name, sellerId) {
        return this.ctx.rpc.invoke('page.addPage', [type, name, sellerId]);
    }

    editPage(pageId, sellerId) {
        return this.ctx.rpc.invoke('page.editPage', [pageId, sellerId]);
    }

    editHome() {
        return this.ctx.rpc.invoke('page.editHome');
    }

    editBricks(pageId, historyId) {
        const { ctx } = this;
        return ctx.rpc.invoke('page.editBricks', [pageId, historyId]);
    }

    addBrick(pageId, brick, historyId) {
        const { ctx } = this;
        return ctx.rpc.invoke('page.addBrick', [pageId, brick, historyId]);
    }

    updateBrick(pageId, brick) {
        const { ctx } = this;
        return ctx.rpc.invoke('page.updateBrick', [pageId, brick]);
    }

    deleteBrick(pageId, brickId, brickType) {
        return this.ctx.rpc.invoke('page.deleteBrick', [pageId, brickId, brickType]);
    }

    async savePage(pageId, historyId, pageName, sortings) {
        return this.ctx.rpc.invoke('page.savePage', [pageId, historyId, pageName, sortings]);
    }

    async publishPage(pageId, historyId) {
        return this.ctx.rpc.invoke('page.publishPage', [pageId, historyId]);
    }
}

module.exports = PageService;