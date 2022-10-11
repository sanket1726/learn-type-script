var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["SUN"] = 0] = "SUN";
    DaysOfTheWeek[DaysOfTheWeek["MON"] = 1] = "MON";
    DaysOfTheWeek[DaysOfTheWeek["TUE"] = 2] = "TUE";
    DaysOfTheWeek[DaysOfTheWeek["WED"] = 3] = "WED";
    DaysOfTheWeek[DaysOfTheWeek["THU"] = 4] = "THU";
    DaysOfTheWeek[DaysOfTheWeek["FRI"] = 5] = "FRI";
    DaysOfTheWeek[DaysOfTheWeek["SAT"] = 6] = "SAT";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
function isItWorkingDay(day) {
    if (day !== DaysOfTheWeek.SUN) {
        console.log("Go to the work buddy!!!");
    }
}
isItWorkingDay(DaysOfTheWeek.MON);
