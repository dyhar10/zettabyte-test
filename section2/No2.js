// No.2

/**
 * Direction
 * Get name of the day of 4 days ago from today
 *
 * Expected result:
 * 1. if date now = monday
 * 2. then result = thursday
 */
function result() {
  let nameDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  let dateNow = new Date().getDay() - 4
  if (dateNow <= 0) dateNow = (nameDay.length - 1) + dateNow
  else dateNow -= 1
  return nameDay[dateNow]
}

console.log(result());
