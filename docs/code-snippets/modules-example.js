/** =============== Repo 1 ======== */
let CartModule = Module('CartModule'/**, ...*/);
/** ============================== */

/** =============== Repo 2 ======== */
let UserModule = Module('UserModule', { ... });
/** ============================== */


let RisModule = Module('RisModule'/*, { ... }*/);


let config = {};
let factory = () => {};
let class1 =  class {};


let PdpModule = PageModule('PdpModule', {
    dependsOn: ['UserModule', ],
    // Client side + Server side
    moduleWillMount: ({ioc, store}) => {

    },
    // Client side only
    moduleDidMount: ({ioc, store}) => {
        ioc.get('service').run();
    },
    resources: {
        config: config,
        class1: ocClass(class1).asSinglton(),
        iocFactory(factory).asSinglton()
    },
    reducers: {
        userInfo: require('./reducer')
    }   
    render: { component: PdpComponent, root: 'selector | element' }
    render: () => {}
});





let clientApp = new ClientApp();

app.module(PdpModule);


app.run = ({
    rawSore,
    rawConfig
}) => {

    for (let module of this.modules) {
        this.ioc.registerAll(module.resources);
        Object.assign(this.reducers, module.reducers);
    }

    this.store = createStore(this.reducers, rawSore, [...]);

    let willMountPromises = [];

    for (let module of this.modules) {
        willMountPromises.push(module.moduleWillMount(this.ioc, this.store) || Promise.resolve(true));
    }

    Promise.all(willMountPromises).then(
        // rendering
    ). then(
        // modules did mount
    )
}

