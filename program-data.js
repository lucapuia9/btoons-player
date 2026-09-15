const SCHEDULE = [
["06:00","VIPO, Câinele zburător",2],["06:10","ȚUP",1],["06:30","Dora Exploratoarea",2],["07:20","SpongeBob Pantaloni Pătrați",2],["08:10","Phineas și Ferb",2],["09:00","Riley și Restul Lumii",2],["09:50","Alex și Trupa",2],["10:40","Jocurile Succesului",2],["11:30","SpongeBob P.P",2],["12:20","Phineas și Ferb",2],["13:10","iCarly",2],["14:00","Victoria în lumina reflectoarelor",2],["14:50","Viața cu Loiue",2],["15:40","Copii de la 402",2],["16:30","Johnny Bravo",2],["16:50","Spioanele",1],["17:20","Phineas și Ferb",2],["18:10","Jocuriile Succesului",2],["19:00","Riley și Restul Lumii",2],["19:50","Rabbids Invasion",1],["20:00","Alex și Trupa",2],["20:50","Henry Pericol",2],["21:40","iCarly",3],["22:55","Victoria în lumina reflectoarelor",2],["23:45","Totul Pentru Dans",2],["00:35","Spioanele",1],["01:00","SpongeBob Pantaloni Pătrați",2],["01:50","Jocurile Succesului",2],["02:40","Riley și Restul Lumii",2],["03:30","Victoria în lumina reflectoarelor",2],["04:20","Spioanele",2],["05:10","SpongeBob P. P.",2]
];

const DATE_OVERRIDES = {
  "2026-09-19": [
    { time: "17:20", name: "Camp Rock 3", episodes: 1, badge: "PREMIERĂ", end: "19:00" }
  ]
};

function getScheduleForDate(date = new Date()) {
  const key = [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-');
  const overrides = DATE_OVERRIDES[key];
  if (!overrides) return SCHEDULE.map(x => ({ time: x[0], name: x[1], episodes: x[2] }));

  const override = overrides[0];
  return SCHEDULE
    .filter(x => x[0] !== '17:20' && x[0] !== '18:10')
    .map(x => ({ time: x[0], name: x[1], episodes: x[2] }))
    .concat({ time: override.time, name: override.name, episodes: override.episodes, badge: override.badge, end: override.end })
    .sort((a, b) => {
      const am = Number(a.time.slice(0, 2)) * 60 + Number(a.time.slice(3));
      const bm = Number(b.time.slice(0, 2)) * 60 + Number(b.time.slice(3));
      return am - bm;
    });
}
