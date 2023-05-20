export function useDates() {
  const nextDates = (data, limit) => {
    const today = new Date();
    const mutableMatches = data.filter((match) => {
      if (today.getDate() < 10 && today.getMonth() + 1 < 10) {
        return (
          match.date >=
          today.getFullYear() +
            '-0' +
            (today.getMonth() + 1) +
            '-0' +
            today.getDate()
        );
      } else if (today.getDate < 10) {
        return (
          match.date >=
          today.getFullYear() +
            '-' +
            (today.getMonth() + 1) +
            '-0' +
            today.getDate()
        );
      } else if (today.getMonth() + 1 < 10) {
        return (
          match.date >=
          today.getFullYear() +
            '-0' +
            (today.getMonth() + 1) +
            '-' +
            today.getDate()
        );
      } else {
        return (
          match.date >=
          today.getFullYear() +
            '-' +
            (today.getMonth() + 1) +
            '-' +
            today.getDate()
        );
      }
    });
    const showMaches = mutableMatches
      .sort((a, b) => {
        if (a.date > b.date) {
          return 1;
        }
        if (a.date < b.date) {
          return -1;
        }
        return 0;
      })
      .slice(0, limit);
    return showMaches;
  };

  return { nextDates };
}
