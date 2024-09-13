# Administrador de productos (BACKEND)
Aplicación para registrar productos pudiendo editar o eliminarlo a través de una REST API's. También permite cambiar la disponibilidad.

En este proyecto se introducen las REST API's y el stack PERN (PostgreSQL + Express + React + Node.js), entre otros conceptos. Para organizar mejor el proyecto se ha dividido el backend y el <a href="https://github.com/antii16/rest_api_typescript_frontend" target="_blank">frontend</a> en dos repositorios diferentes. 

<b>Proyecto: <a href="https://rest-api-typescript-frontend-cyan.vercel.app/" target="_blank">Administrador de Productos</a></b>

### Idea del proyecto 
Noveno proyecto realizado durante el curso de <a href="https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/?couponCode=KEEPLEARNING">React y TypeScript</a>.

<a href="https://github.com/antii16/bebidas-react"> Ver proyecto anterior </a> 

### Tecnologías aplicadas en el Backend

<ul>
  <li>TypeScript</li>
  <li>Express</li>
  <li>Sequelize</li>
  <li>Morgan</li>
  <li>Supertest y JEST</li>
  <li>Swagger</li>
  <li>PostgreSQL</li>
</ul>

## ORM
### ¿Qué es un orm?
Simplifica la comunicación entre una base de datos y el codigo de tu app.
En lugar de escribir consultas de SQL escribes funciones que son bastante similares
al código que ya escribes. 

### Ventajas
- Abstracción. Esto significa que puedes interactuar con la base de datos usando
objtos, clases y metodos en lugar de escribir consultas SQL complicadas.
- Portabilidad. Puedes cambiar de un sistema de gestión de bases de datos
a otro sin tener que reescribir todo tu código. 
- Productividad. El ORM se encarga de tareas repetitivas como la generación
de consultas SQL, lo que te permite enfocarte en la lógica de tu app. 

El ORM elegido para este proyecto es `Sequelize`, ya que soporta typescript y diferentes bases de datos (oracle, postgres, mysql, mariadb, sqlite, sql server). También soporta relaciones de información,
lazy loading, eager loading, más. 


## CORS
### ¿Qué es?
CORS (Cross-Origin Resource Sharing, Compartir recursos entre diferentes orígenes), es un mecanismo de seguridad utilizado en los navegadores web para controlar las solicitudes de recursos entre dominios diferentes. En esencia, CORS es una política de seguridad implementada en el lado del servidor que permite o deniega las solicitudes de recursos web de orgen cruzado. 

### Origen cruzado o cross origin
Cuando un recurso (como una fuente, una imagen o una hoja de estilo) se solicita desde un dominio o puerto diferenta al del origen del recurso actual, se considera una solicitud de origen cruzado. Antes de que se implimentara CORS, los navegadores web
modernos restringían automáticamente las solicitudes de origen cruzado para prevenir ataques de seguridad como el secuestro de sesiones y la inyección de scripts maliciosos.

### Ventajas
<ul>
  <li>Seguridad. CORS permite a los servidores tener un control sobre qué dominios pueden acceder a los recursos. Esto reduce la posibilidsd de ataques maliciosos de origen cruzado.</li>
  <li>Acceso controlado a recursos. CORS permite a los sitios web controlar qué recursos están disponibles para ser solicitados por dominios externos y qué recuros están restringidos. Esto brinda mayor control sobre datos y recursos del sitio web.</li>
 <li>Interoperabilidad. CORS facilita el intercambio de datos y recursos entre diferentes dominios. Esto es particularmente útil en situaciones en las que una página web necesita cargar recursos de múltiples dominios para funcionar correctamente, como los casos de uso de API o la carga de fuentes externas.</li>
</ul>

## MORGAN (MIDDLEWARE)
En node.js, el middleware se refiere a un tipo de software intermedio que se utiliza para procesar solicutes HTTP que llegan a una aplicación web 
antes de ser manejadas por la función de enrutamiento principal. 

Los middleware son funciones que se ejecutan en el medio del flujo de solicitud y respuesta de una aplicación web y pueden realizar diversas tareas, como 
autenticación, validación de datos, registro de solicitudes, compresión de respuestas, 
entre otras. 

Son esenciales para la creación de aplicaciones web robustas y flexibles. Cada solicitud HTTP pasa a través de una serie de middleware antes
de llegar a la función de controlador que maneja la solicitud final. Esto permite modularizar y organizar el código de manera efectiva, ya que puedes 
agregar o quitar middleware segúnn las necesidades de tu aplicación. 

## Testing
Escribir testing para nuestras API's no es muy diferente que aplicar testing a aplicaciones en React.
No porque nuestra API esté hecha con TS significa que no vamos a añadir pruebas.
Las pruebas siempre deben estar ahí y en muchos trabajos tu código debe ir acompañado por una serie de tests.
### Tipo de testing en Node.js Y API'S

<ul>
<li>Unit Testing: Verificar que partes individuales en nuestro código funcionen; tales como crear el servidor, visitar una ruta,debemos revisar que cada pieza funcione como esperamos antes de integrarla con otras. </li>
<li>Integration Testing: Una vez que revisamos que algunas piezas de código funcionen
por si solas, es momento de revisar cuando 2 o más se unen, tales como visitar
una ruta y obtener datos, o enviar una petición post, validar, y entonces crear el 
producto. </li>
</ul>

### JEST
Jet es uno de los frameworks para aplicar testing más conocidos hoy en día, funciona con TS, NODE, React, Angular y Vue.
La configuración es muy simple, los test corren aparte y no se mezclan con el código existente. 
### SUPERTEST
Jet nos da una serie de funciones para probar el código, pero con supertest podremos
realizar peticiones hacia nuetra API y revisar que el código funcione como esperamos.
Con supertest podremos realizar pruebas de integración entre las URL's de nuestra API y el ORM.

## Code Coverage
### ¿Qué es?
El code coverage es una métrica utilizada para medir la cantidad de código fuente
que ha sido ejecutado o cubierto por un conjunto de pruebas. 
En otras palabras, mide qué porcentaje del código de un programa ha sido probado.
Cuanto mayor sea la cobertura de código, más exhaustivas son las pruebas, lo que
a menudo se considera un indicador positivo de la calidad de software.

### Métricas

<table>
    <tr>
    <th>< 60%</th>
    <td>No es suficiente</td>
    </tr>
    <tr>
    <th>60% - 80%</th>
    <td>Se puede mejorar</td>
    </tr>
    <tr>
    <th>>= 80 %</th>
    <td>Es suficiente y una buena medida</td>
    </tr>
    <tr>
    <th>100%</th>
    <td>Poco probable</td>
    </tr>
</table>

## Documentar una API
La documentación de una API  es contenido técnico que describe una API a detalle.

Incluye instrucciones sobre cómo utilizar una API de forma correcta como son endpoints soportados, tipos de petición, qué valores soporta y más. 
Una vez que una API es publicada, la documentación se asegura que otras herramientas
(internas o externas) sepan qué se puede hacer y cómo utilizarla.

### ¿Por qué documentar una API?

<ul>
<li>Para que sea utilizada de forma correcta.</li>
<li>Una buena documentación hará que sea claro qué
funcionalidad hay disponible y los usuarios podrán sacar máximo provecho.</li>
<li>Reduce costos de soporte.</li>
</ul>

 