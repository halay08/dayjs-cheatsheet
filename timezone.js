const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const tz = require('dayjs/plugin/timezone')

dayjs.extend(utc)
dayjs.extend(tz)

const utcDate = '2022-06-04T13:30:00Z';
// const timeZone = dayjs.tz.guess()
const saigonTimezone = 'Asia/Saigon'
const rotheraTimezone = 'Antarctica/Rothera'
const saigonTime = dayjs.utc(utcDate).tz(saigonTimezone).format('YYYY-MM-DD HH:MM:ss');
const rotheraTime = dayjs.utc(utcDate).tz(rotheraTimezone).format('YYYY-MM-DD HH:MM:ss');
console.log(`UTC time: ${utcDate}`)
console.log(`Sai gon time: ${saigonTime}`)
console.log(`Rothera time: ${rotheraTime}`)
