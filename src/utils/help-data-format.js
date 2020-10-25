import moment from "moment";
import 'moment/locale/ru'

export const formatData = (data, format) => {
// format
  // LL - формат 09 сентября 2020 г
  // L - формат 09/09/2020
  // LLL - формат 10 сентября 2020 г., 12:07
  const time = moment(data).locale('ru').format(format)
  return time.toString()
}