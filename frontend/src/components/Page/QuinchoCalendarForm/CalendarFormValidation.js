export function validate(data, eventsData, itsAdmin) {
  const date = new Date();
  let day = null;
  if (date.getDate() < 10) day = '0' + date.getDate();
  else day = date.getDate();
  const todayDate =
    date.getFullYear() + '-' + '0' + (date.getMonth() + 1) + '-' + day;
  const errors = {};
  const regexURL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regexNum = /^([0-9])*$/;
  const eventFiltered = eventsData.filter(
    (event) => event.date === data.date && event.beg_time === data.beg_time
  );
  if (!itsAdmin) {
    if (!data.client)
      errors.client = 'Se debe ingresar el Nombre del Solicitante';
    if (data.client && data.client.length < 4)
      errors.client = 'Longitud insuficiente';
    if (!data.email)
      errors.email = 'Se debe ingresar un Correo Electrónico del Solicitante';
    if (data.email && !regexURL.test(data.email))
      errors.email = 'El Correo Electrónico no es valido';
    if (!data.phone)
      errors.phone = 'Se debe ingresar el Numero de Teléfono del Solicitante';
    if (data.phone.length > 1 && data.phone.length < 8)
      errors.phone = 'Longitud insuficiente';
    if (!data.date) errors.date = 'Se debe ingresar una Fecha';
    if (data.date < todayDate)
      errors.date = 'No se pueden realizar solicitudes en Fechas Pasadas';
    if (!data.beg_time)
      errors.beg_time = 'Se debe Ingresar un Horario para la Solicitud';
    if (eventFiltered.length > 0)
      errors.beg_time = 'Ya existe una solicitud para este horario';
    if (!data.description)
      errors.description = 'Se debe ingresar una Descripción del Evento';
  } else {
    if (!regexNum.test(data.amount))
      errors.amount = 'No se pueden ingresar letras en el campo de cantidad';
    if (data.amount && data.amount < 0)
      errors.amount = 'La cantidad debe ser mayor a 0';
  }

  return errors;
}
