export function MatchesTable(props) {
  return (
    <div className="inline-block rounded-lg border shadow-2xl bg-gray-200 dark:bg-[#171717]  dark:border-none mb-4">
      <table className="table-auto text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase  dark:text-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nombre del encuentro
            </th>
            <th scope="col" className="px-6 py-3">
              Fecha
            </th>
            <th scope="col" className="px-6 py-3">
              Equipo Local
            </th>
            <th scope="col" className="px-6 py-3">
              Equipo Visitante
            </th>
            <th scope="col" className="px-6 py-3">
              Disciplina
            </th>
          </tr>
        </thead>
        <tbody>
          {props.matches
            ? props.matches.slice(0, 5).map((m, index) => {
                return (
                  <tr
                    className="text-xs text-gray-700 uppercase  dark:text-gray-100"
                    key={index}
                  >
                    <td className="px-6 py-4 font-medium ">
                      {m.name}
                    </td>
                    <td className="px-6 py-4">{m.date}</td>
                    <td className="px-6 py-4">{m.home_team}</td>
                    <td className="px-6 py-4">{m.away_team}</td>
                    <td className="px-6 py-4">{m.discipline}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}
