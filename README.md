#  Examen Final – Aplicación Móvil Híbrida (Ionic + Angular)

Este proyecto corresponde al Examen Final del curso **Desarrollo de Aplicaciones Móviles** de la **Universidad Da Vinci de Guatemala**.  
La aplicación fue desarrollada utilizando **Ionic + Angular** con componentes **standalone**, cumpliendo con todos los requisitos solicitados por el catedrático.

---

#  Tecnologías utilizadas
- **Ionic 7**
- **Angular 17+ (Standalone Components)**
- **TypeScript**
- **Reactive Forms**
- **AuthGuard con CanActivate**
- **LocalStorage para manejo de sesión**
- **HTTPClient (una sola llamada)**

---

#  Funcionalidades del proyecto

##  1. Pantalla de Login
- Formulario reactivo con:
  - Email
  - Contraseña
- Validaciones y mensajes de error.
- ÚNICA llamada HTTP del proyecto:
- Guarda sesión en **localStorage**.
- Manejo de errores cuando el login falla.

---

##  2. Ruteo protegido con AuthGuard
- La ruta **/home** está protegida.
- Si el usuario **NO** está autenticado → se redirige al **/login**.
- Si el usuario **SÍ** está autenticado → puede acceder.

---

##  3. Sección interna con rutas hijas
### HomePage
- Página de bienvenida.
- Botón para ir al perfil.
- Botón para cerrar sesión.

### Página de Perfil
- Formulario reactivo con:
- Nombre  
- Apellido  
- Email  
- Validaciones completas.
- Al hacer clic en "Enviar":
- **No se envía a backend**.
- Se imprimen los valores en consola.

---

##  4. Cerrar sesión
- Limpia localStorage.
- Redirige al Login.

---

#  Estructura general del proyecto


#  Cómo ejecutar el proyecto

1. Clonar el repositorio:

2. Entrar al proyecto:
cd exam-final-app

3. Instalar dependencias:
npm install

4. Ejecutar en modo desarrollo:

---



---

#  Autor
**[Arnoldo Heynze meza sis]**  
Estudiante – Universidad Da Vinci de Guatemala  

---



