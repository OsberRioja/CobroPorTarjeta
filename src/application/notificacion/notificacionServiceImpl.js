// notificacionServiceImpl.js

class NotificacionServiceImpl {
    notificarLocalExito(mensaje) {
        // Lógica para enviar una notificación al local (por ejemplo, notificación push)
        console.log("LOCAL:",mensaje);
    }

    notificarClienteExito(mensaje) {
        // Lógica para enviar una notificación al cliente (por ejemplo, SMS)
        console.log("SMS CLIENTE:",mensaje);
    }

    notificarLocalFallo(mensaje) {
        // Lógica para notificar un fallo al local
        console.log("LOCAL:",mensaje);
    }

    notificarClienteFallo(mensaje) {
        // Lógica para notificar un fallo al cliente
        console.log("SMS CLIENTE:",mensaje);
    }
}

module.exports = NotificacionServiceImpl;
