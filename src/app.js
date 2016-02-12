export class App {
  configureRouter(config, router) {
    config.title = 'Panorama';
    config.map([
      { route: ['', 'home'],      name: 'home',          moduleId: 'home',          nav: true,  title: 'Home' },
      { route: 'test',          name: 'test',          moduleId: 'test',          nav: true,  title: 'Test' },
      { route: ['orden-salida'],  name: 'orden-salida',  moduleId: 'orden-salida',  nav: false, title: 'Orden de Salida' },
      { route: ['orden-entrada'], name: 'orden-entrada', moduleId: 'orden-entrada', nav: false, title: 'Orden de Entrada' },
      { route: ['items'],         name: 'items',	     moduleId: 'items',      	nav: true,  title: 'Items' },
      { route: ['almacenes'],     name: 'almacenes',	 moduleId: 'almacenes',     nav: true,  title: 'Almacenes' },
      { route: ['proveedores'],   name: 'proveedores',	 moduleId: 'items',      	nav: true,  title: 'Proveedores' },
      { route: ['proyectos'],     name: 'proyectos',	 moduleId: 'proyectos',     nav: true,  title: 'Proyectos' }
    ]);
    this.router = router;
  }
}
