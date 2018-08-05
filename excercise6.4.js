Compare.fromString = function(time_string) {
  let MyTime_1 = time_string.split(':'),
      hour = parseInt(parts[0], 10),
      minute = parseInt(parts[1], 10),
      seconds = parseInt(parts[2], 10);

  let MyTime_2 = time_string.split(':'),
      hour = parseInt(parts[0], 10),
      minute = parseInt(parts[1], 10),
      seconds = parseInt(parts[2], 10);

  if (MyTime_2= MyTime_1){
    return "0"
  }else {
    if (MyTime_2 > MyTime_1){
    return "1"
  } else {
    return "-1"
  };
};

  all_my_times.sort(MyTime.compare);
};

compare.fromString(time_string);
