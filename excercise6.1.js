class MyTime {
  constructor(hour, minute, second) {
    this._value = MyDate._dateToValue(hour, minute, second);
  }

  static _dateToValue(hour, minute, second) {
    hour: function('6'){
      return this._hour;
    }
    minute: function ('45'){
      return this._minute;
    }
    second: function ('26'){
      return this._second;
    }
  }

  static fromString(time_string) {
    let parts = date_string.split(':'),
        hour = parseInt(parts[0], 10),
        minute = parseInt(parts[1], 10),
        second = parseInt(parts[2], 10);

    return new MyTime(hour, minute, second);
  }
}

function MyTime(hour, minute, second) {
  MyTime.call(this, hour, minute, second);
  console.log("The time is: " + Mytime.toString.call(this));
}

MyTime.prototype = Object.create(Mytime.prototype);
Mytime.prototype.constructor = MyTime;

MyTime.prototype.toString = function() {
  return this._hour + ":" + this._minute + ":" + this._second;
};
