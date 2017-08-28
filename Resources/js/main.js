function opening(id)
{
        date = new Date;
        var day = date.getDay();
        var hour =date.getHours();
        openTimes = new Array('9', '10', '11', '12', '14', '15', '16');
        var message = "Office is ";
        var note = "Closed";
        var openColor = '#FF4545';
        for (var i = 0; i<7; i++) {
          if (day>0 && day[0] < 6)
          {
            if (hour == openTimes[i])
            {
              openColor = '#3CA619';
              note = "Open";
              break;
            }
            else if (hour == '13' )  {
              openColor = '#FCA7A7';
              note = "Closed for Lunch";
              break;
            }
            else {
            }
          }
        }
        if (note === "Open") {
          document.getElementById('phone').style.display = "flex";
          document.getElementById('email').style.display = "none";
        }
        else {
          document.getElementById('phone').style.display = "none";
          document.getElementById('email').style.display = "flex";
        }
        fullMessage = message + note;
        document.getElementById(id).innerHTML = fullMessage;
        document.getElementById(id).style.color = openColor;
        setTimeout('opening("'+id+'");','1000');
        return true;
}
