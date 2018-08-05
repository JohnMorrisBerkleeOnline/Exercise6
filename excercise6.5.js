MyTime_1Class.fromString = function(time_string){
  let parts = time_string.split(':'),
      hour = parseInt(parts[0], 10),
      minute = parseInt(parts[1], 10),
      second = parseInt(parts[2], 10);

  return new MyTime_1Class(hour, minute, second);
};

MyTime_2Class.fromString = function(time_string) {
  let parts = time_string.split(':'),
      hour = parseInt(parts[0], 10),
      minute = parseInt(parts[1], 10),
      second = parseInt(parts[2], 10);

  return new MyTime_2Class(hour, minute, second);
};
