module.exports = app => {
    const { router, controller } = app;
    router.get('/test', controller.test.info);
    router.post('/template/add', controller.template.add);
    router.post('/template/query', controller.template.query);
    router.post('/template/update', controller.template.update);
    router.post('/template/deleteById', controller.template.deleteById);

    router.post('/page/list', controller.page.list);
    router.post('/page/getPageByKeyName', controller.page.getPageByKeyName);
    router.post('/page/getPageById', controller.page.getPageById);
    router.post('/page/add', controller.page.addPage);
    router.post('/page/edit', controller.page.editPage);
    router.post('/page/editHome', controller.page.editHome);
    router.post('/page/editBricks', controller.page.editBricks);
    router.post('/page/addBrick', controller.page.addBrick);
    router.post('/page/updateBrick', controller.page.updateBrick);
    router.post('/page/deleteBrick', controller.page.deleteBrick);
    router.post('/page/savePage', controller.page.savePage);
    router.post('/page/publishPage', controller.page.publishPage);
};