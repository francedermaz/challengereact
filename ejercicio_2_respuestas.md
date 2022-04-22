2.1) ¿Cómo implementarías las acciones del frontend utilizando redux? (por
ejemplo autenticación, solicitud de clientes activos para el usuario y
solicitud de casos por cliente)
2.2) Si quisiéramos agregar una ruta nueva a la app, ¿cómo reestructurarías
el index.js?

2.1) Finalmente, implementé Redux para lograr un mejor manejo del estado global de la aplicación, lo que me permite un mayor control sobre el mismo utilizando actions, funciones reducers y un store que almacena el estado de toda la aplicación.
2.2) En éste caso, el cambio debería hacerse en el archivo App.js, simplemente porque renderizamos éste en el index.js. Y el cambio se haría agregando un nuevo componente <Route>, quedando por ejemplo:
<Route path="/ejemplo" element={<Ejemplo/>}/>