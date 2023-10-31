
const CobroApplicationService = require('./aplicacion/cobroApplicationService');
const CobroServiceImpl = require('./aplicacion/cobroServiceImpl');
const CobroRepositoryImpl = require('./aplicacion/cobroRepositoryImpl');
const NotificacionServiceImpl = require('./aplicacion/notificacionServiceImpl');
const CobroDTO = require('./interfaces/cobroDTO');


const cobroService = new CobroServiceImpl();
const cobroRepository = new CobroRepositoryImpl();
const notificacionService = new NotificacionServiceImpl();

const cobroAppService = new CobroApplicationService(cobroService, cobroRepository, notificacionService);

// Ejemplo de uso de CobroApplicationService
const cobroDTO = new CobroDTO("tokenLocal123", "producto456", 100.0);
const claveSolicitud = cobroAppService.generarIntentoCobro(cobroDTO);

const exito = cobroAppService.realizarCobro(cobroDTO, "1234-5678-9012-3456", "123", "12/25", claveSolicitud);

if (exito) {
    console.log("El cobro se realizó con éxito.");
} else {
    console.log("El cobro no pudo realizarse correctamente.");
}
