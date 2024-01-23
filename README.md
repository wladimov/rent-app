RentEase Client Side (JS)
Project Specification

Contents
Introduction 3
Case Study 3
Goals 3
Environments 3
Technologies 3
Entities 4
User 4
Flat 4
Validation 5
User 5
Flat 5
User Interface 6
All Flats Page 6
New Flat Page 6
Header   6
Home Page  6
Login Page  6
Register Page 7
Profile Update Page 7
Summary 8
Development Schedule And Order 8

Introduction
Application Name: “RentEase”

Case Study
A client approached you with a request to build an app to help renters to compare their available options. Future renters must make a hard decision which flat, among an available set, they are
going to occupy for a whole year at least. The main request is to develop an app that would allow
future renters to figure out what are the trade off between flats they consider to be relevant so it
will be easier for them to choose.

The app has a single type of user, which is the one who look for a flat. The user is the one who
manage all flats data (insert, update, delete). The app will allow the user to browse all the flats in a user friendly fasion and he will mark and unmark flats as favourites.

Goals
The project suppose to make the student gain confidence in developing a web application with the following features:
• Multiple Pages
• User Friendly View
• Responsiveness
• Interactive
• Forms With Validation
• Local Store Management

Environments
• Browser
• Responsive: Desktop, Tablets and Smartphones

Technologies
The system has no server side. Only the user interface.
• User Interface: HTML, CSS, JavaScript
• Database: localStorage

Entities

User
Name Data Type
Email String
Password String
First Name String
Last Name String
Birth Date Date

Flat
Name Data Type
City String
Street name String
Street number Number
Area size Number
Has AC Boolean
Year built Number
Rent price Number
Date available Date

Validation

User
• All fields are required.
• Data type check.
• Email must be in email format.
• Both names (first and last) must be at least 2 characters long.
• The derived age must be in the range of 18-120.
• Passwords must be at least 6 characters.
• Password must contain
– Letters
– Numbers
– A character that is neither a letter nor a number.

Flat
• All fields are required.
• Data type check.

User Interface

All Flats Page

All flats page conain a table of all flats that the user inserted so far.
Each row in the table will hold:
• All of the flat properties as specified in the Entities section.
• A toggle button to mark/unmark flat as favourite.
In addition, the table will have filtering and sorting capabilities.
Filter options fields:
1. City
2. Price range
3. Area size range
Sort categories:
1. City
2. Price
3. Area size

New Flat Page
• Inputs for all flat’s properties as specified in the entities section.
• Save button
If all inputs are valid then the data is saved. New flat assigned as favourite flat.

Header
• Hello - User Full Name
• Log out Button
• Company Logo
• A menu for all pages

Home Page
The home page contain a table of all the user’s favourite flats. The table structure will be the same
as the table in All Flats Page, besides one distinction: instead of a toggle button, each row will have a remove button. After pressing it the row will be removed from the table and the appropriate flat won’t be considered to be the user’s favourite.

Login Page
• Email input
• Password input
• Login button

• Register button
The first page that the user face after opening the app. After a successful login, another login
process will be required after 60 minutes. If the user is not registered yet he can click the “Register” button that will redirect him to the registration page.

Register Page
• Inputs for all user’s entity properties as specified in the flat entity section.
• Password confirmation input.
• Register button.

If all inputs are valid then the data will be saved. Successful registration will redirect the user to the home page. If the user forgets the password, he can reset it. But resetting the password will delete all user data.

Profile Update Page
• Same inputs as in the register page.
• Update button.
On this page the user will be able to edit his details. If all inputs are valid then the data is saved. After a successful update, the user will be redirected to the home page.

Summary

Development Schedule And Order

Page Days
All Flats 1
New Flat 1
Home + Header 1
Login 0.5
Register 1
Profile Update 0.5
Total 5
Good Luck!

# **********
# **********
# **********
# **********
# **********
Lado del cliente de RentEase (JS)
Especificación del proyecto

Contenido
Introducción 3
Estudio de caso 3
Metas 3
Ambientes 3
Tecnologías 3
Entidades 4
Usuario 4
Piso 4
Validación 5
Usuario 5
Piso 5
Interfaz de usuario 6
Todos los pisos Página 6
Nuevo Piso Página 6
Encabezado 6
Página de inicio 6
Iniciar sesión Página 6
Registrarse Página 7
Actualización de perfil Página 7
Resumen 8
Calendario de desarrollo y orden 8

Introducción
Nombre de la aplicación: “RentEase”

Caso de estudio
Un cliente se acercó a usted para solicitarle que creara una aplicación para ayudar a los inquilinos a comparar las opciones disponibles. Los futuros inquilinos deberán tomar una difícil decisión sobre qué piso, entre el conjunto disponible, preferirán.
vamos a ocupar durante todo un año al menos. La petición principal es desarrollar una aplicación que permita
futuros inquilinos para determinar cuáles son las compensaciones entre los pisos que consideran relevantes para que
Les resultará más fácil elegir.

La app tiene un único tipo de usuario, que es el que busca piso. El usuario es quien
gestionar todos los datos de los pisos (insertar, actualizar, eliminar). La aplicación permitirá al usuario explorar todos los pisos de una manera fácil de usar y marcará y desmarcará pisos como favoritos.

Objetivos
El proyecto pretende hacer que el estudiante gane confianza en el desarrollo de una aplicación web con las siguientes características:
• Multiples paginas
• Vista fácil de usar
• Capacidad de respuesta
• Interactivo
• Formularios con Validación
• Gestión de tiendas locales

Ambientes
• Navegador
• Responsivo: Computadora de escritorio, tabletas y teléfonos inteligentes

Tecnologías
El sistema no tiene lado servidor. Sólo la interfaz de usuario.
• Interfaz de usuario: HTML, CSS, JavaScript
• Base de datos: almacenamiento local

Entidades

Usuario
Nombre Tipo de datos
Cadena de correo electrónico
Cadena de contraseña
Cadena de nombre
Cadena de apellido
Fecha de nacimiento Fecha

Departamento
Nombre Tipo de datos
Cadena de la ciudad
Nombre de la calle Cadena
Número de calle Número
Tamaño del área Número
Tiene AC booleano
Año de construcción Número
Precio de alquiler Número
Fecha disponible Fecha

Validación

Usuario
• Todos los campos son obligatorios.
• Verificación del tipo de datos.
• El correo electrónico debe estar en formato de correo electrónico.
• Ambos nombres (nombre y apellido) deben tener al menos 2 caracteres.
• La edad derivada debe estar en el rango de 18 a 120 años.
• Las contraseñas deben tener al menos 6 caracteres.
• La contraseña debe contener
– Cartas
– Números
– Un carácter que no es ni una letra ni un número.

Departamento
• Todos los campos son obligatorios.
• Verificación del tipo de datos.

Interfaz de usuario

Página de todos los pisos

La página de todos los pisos contiene una tabla de todos los pisos que el usuario ha insertado hasta el momento.
Cada fila de la tabla contendrá:
• Todas las propiedades planas como se especifica en la sección Entidades.
• Un botón de alternancia para marcar/desmarcar un piso como favorito.
Además, la tabla tendrá capacidades de filtrado y clasificación.
Campos de opciones de filtro:
1. ciudad
2. Rango de precios
3. Rango de tamaño del área
Ordenar categorías:
1. ciudad
2. Precio
3. Tamaño del área

Nueva página plana
• Entradas para todas las propiedades del piso como se especifica en la sección de entidades.
• Botón Guardar
Si todas las entradas son válidas, los datos se guardan. Piso nuevo asignado como piso favorito.

Encabezamiento
• Hola - Nombre completo del usuario
• Botón Cerrar sesión
• Logo de la compañía
• Un menú para todas las páginas.

Página de inicio
La página de inicio contiene una tabla de todos los pisos favoritos del usuario. La estructura de la tabla será la misma.
como la tabla en la página Todos los pisos, además de una distinción: en lugar de un botón de alternancia, cada fila tendrá un botón de eliminación. Después de presionarlo, la fila se eliminará de la tabla y el piso correspondiente no se considerará favorito del usuario.

Página de inicio de sesión
• Entrada de correo electrónico
• Entrada de contraseña
• Botón de inicio de sesión

• Botón de registro
La primera página a la que se enfrenta el usuario después de abrir la aplicación. Después de un inicio de sesión exitoso, otro inicio de sesión
El proceso será necesario después de 60 minutos. Si el usuario aún no está registrado, puede hacer clic en el botón "Registrarse" que lo redireccionará a la página de registro.

Página de registro
• Entradas para todas las propiedades de entidad del usuario como se especifica en la sección de entidad plana.
• Entrada de confirmación de contraseña.
• Botón de registro.

Si todas las entradas son válidas, los datos se guardarán. El registro exitoso redirigirá al usuario a la página de inicio. Si el usuario olvida la contraseña, puede restablecerla. Pero restablecer la contraseña eliminará todos los datos del usuario.

Página de actualización de perfil
• Mismas entradas que en la página de registro.
• Botón Actualizar.
En esta página el usuario podrá editar sus datos. Si todas las entradas son válidas, los datos se guardan. Después de una actualización exitosa, el usuario será redirigido a la página de inicio.

Resumen

Calendario y orden de desarrollo

Días de página
Todos los pisos 1
Nuevo Piso 1
Inicio + Encabezado 1
Iniciar sesión 0.5
Registrarse 1
Actualización de perfil 0.5
Total 5
¡Buena suerte!