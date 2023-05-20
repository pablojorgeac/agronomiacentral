import useStore from '@/store/globalstore';

export function useBarChart() {
  const reservas = useStore((state) => state.reservas);
  const yearMonth = {
    1: 'Enero',
    2: 'Febrero',
    3: 'Marzo',
    4: 'Abril',
    5: 'Mayo',
    6: 'Junio',
    7: 'Julio',
    8: 'Agosto',
    9: 'Septiembre',
    10: 'Octubre',
    11: 'Noviembre',
    12: 'Diciembre',
  };

  let data = [];

  const yearView = () => {
    for (let i = 1; i <= 12; i++) {
      if (i < 10) {
        data = [
          ...data,
          {
            month: yearMonth[i],
            count: reservas
              .filter((reserva) => {
                return reserva.date.slice(5, 7) === '0' + i.toString();
              })
              .reduce((acc, monto) => acc + parseInt(monto.amount), 0),
          },
        ];
      } else {
        data = [
          ...data,
          {
            month: yearMonth[i],
            count: reservas
              .filter((reserva) => {
                return reserva.date.slice(5, 7) === i.toString();
              })
              .reduce((acc, monto) => acc + parseInt(monto.amount), 0),
          },
        ];
      }
    }
    return data;
  };

  const monthView = () => {
    const date = new Date();
    const Month = date.getMonth() + 1;
    const lastDay = new Date(date.getFullYear(), Month, 0).getDate();

    for (let i = 1; i <= lastDay; i++) {
      if (i < 10) {
        data = [
          ...data,
          {
            day: i.toString(),
            count: reservas
              .filter((reserva) => {
                return (
                  reserva.date.slice(8, 10) === '0' + i.toString() &&
                  reserva.date.slice(5, 7) === '0' + Month.toString()
                );
              })
              .reduce((acc, monto) => acc + parseInt(monto.amount), 0),
          },
        ];
      } else {
        data = [
          ...data,
          {
            day: i.toString(),
            count: reservas
              .filter((reserva) => {
                return (
                  reserva.date.slice(8, 10) === i.toString() &&
                  reserva.date.slice(5, 7) === '0' + Month.toString()
                );
              })
              .reduce((acc, monto) => acc + parseInt(monto.amount), 0),
          },
        ];
      }
    }
    return data;
  };

  const weekView = () => {
    const today = new Date();
    const Month = today.getMonth() + 1;
    const dayOfWeek = today.getDay();
    const firstDayOfWeek =
      today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    const firstDay = new Date(today.setDate(firstDayOfWeek));
    const firstDayOfMonth = firstDay.getDate();

    for (let i = firstDayOfMonth; i <= firstDayOfMonth + 6; i++) {
      if (i < 10) {
        data = [
          ...data,
          {
            day: i.toString(),
            count: reservas
              .filter((reserva) => {
                return (
                  reserva.date.slice(8, 10) === '0' + i.toString() &&
                  reserva.date.slice(5, 7) === '0' + Month.toString()
                );
              })
              .reduce((acc, monto) => acc + parseInt(monto.amount), 0),
          },
        ];
      } else {
        data = [
          ...data,
          {
            day: i.toString(),
            count: reservas
              .filter((reserva) => {
                return (
                  reserva.date.slice(8, 10) === i.toString() &&
                  reserva.date.slice(5, 7) === '0' + Month.toString()
                );
              })
              .reduce((acc, monto) => acc + parseInt(monto.amount), 0),
          },
        ];
      }
    }
    return data;
  };

  return { yearView, monthView, weekView };
}
