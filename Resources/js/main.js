var day_hour =[];

function open_closed(day_hour)
{
        date = new Date;
        var day_hour = [date.getDay(),date.getHours()];
        openTimes = new Array('9', '10', '11', '12', '14', '15', '16');
        var message = "Office is ";
        var note = "Closed";
        var openColor = '#FF4545';
        for (var i = 0; i<7; i++) {
          if (day_hour[0]>0 && day_hour[0] < 6)
          {
            if (day_hour[1] == openTimes[i])
            {
              openColor = '#3CA619';
              note = "Open";
              break;
            }
            else if (day_hour[1] == '13' )  {
              openColor = '#FCA7A7';
              note = "Closed for Lunch";
              break;
            }
            else {
            }
          }
        }
        fullMessage = message + note;
        document.getElementById('open_closed').innerHTML = fullMessage;
        setTimeout('open_closed("'+day_hour+'");','1000');
        document.getElementById('open_closed').style.color = openColor;
        return true;
}
