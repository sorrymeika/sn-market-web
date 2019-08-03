module.exports = app => {
    const { router, controller } = app;
    router.get('/test', controller.test.info);
    router.post('/template/add', controller.template.add);
    router.post('/template/query', controller.template.query);
};