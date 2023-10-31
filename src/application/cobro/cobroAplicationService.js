// cobroApplicationService.js

class CobroApplicationService {
    constructor(cobroService, cobroRepository, notificacionService) {
        this.cobroService = cobroService;
        this.cobroRepository = cobroRepository;
        this.notificacionService = notificacionService;
    }

    generarIntentoCobro(cobroDTO) {
        return this.cobroService.generarIntento(cobroDTO.tokenLocal, cobroDTO.codigoProducto, cobroDTO.monto);
    }

    realizarCobro(cobroDTO, numeroTarjeta, cvv, fechaExpiracion, claveSolicitud) {
        const exito = this.cobroService.realizarCobro(numeroTarjeta, cvv, fechaExpiracion, claveSolicitud); //esto puede ser un boolean
        if (exito) {
            this.cobroRepository.guardarTransaccion(numeroTarjeta, cobroDTO.codigoProducto, cobroDTO.monto);
            this.notificacionService.notificarLocalExito("El pago fue realizado exitosamente.");
            this.notificacionService.notificarClienteExito("El pago fue realizado exitosamente.");
        } else {
            this.notificacionService.notificarLocalFallo("El pago no pudo realizarse.");
            this.notificacionService.notificarClienteFallo("El pago no pudo realizarse.");
        }
        return exito;
    }
}

module.exports = CobroApplicationService;
