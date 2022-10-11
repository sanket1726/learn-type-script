enum DaysOfTheWeek {
  SUN,
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
}

function isItWorkingDay(day) {
  if (day !== DaysOfTheWeek.SUN) {
    console.log("Go to the work buddy!!!")
  }
}

isItWorkingDay(DaysOfTheWeek.MON)
