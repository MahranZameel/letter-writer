function updateValues(id, value) {
    var elements = document.getElementsByClassName(id);

    if(id=="sender-island") {
        elements[1].innerHTML = value + "،" + " " + "ދިވެހިރާއްޖެ";
    } else if(id=="receiver-island") {
        elements[1].innerHTML = value + "،" + " " + "ދިވެހިރާއްޖެ";
    } else {
        elements[1].innerHTML = value;
    }
    
    // console.log(span)
}

function updateDates(value) {
    var letterDate = value;

    var letterYear = letterDate.substring(0,4);
    var letterMonth = letterDate.substring(5,7);
    var letterDay = letterDate.substring(8,10);

    fetch('http://api.aladhan.com/v1/gToH?date='+letterDay+'-'+letterMonth+'-'+letterYear)
    .then(response => response.json())
    .then(data => arabicDate(data));

    switch (letterMonth) {
        case '01':
            letterMonth = 'ޖަނަވަރީ';
            break;

        case '02':
            letterMonth = 'ފެބްރުއަރީ';
            break;

        case '03':
            letterMonth = 'މާޗް';
            break;

        case '04':
            letterMonth = 'އޭޕްރިލް';
            break;

        case '05':
            letterMonth = 'މެއި';
            break;

        case '06':
            letterMonth = 'ޖޫން';
            break;

        case '07':
            letterMonth = 'ޖުލައި';
            break;

        case '08':
            letterMonth = 'އޯގަސްޓް';
            break;

        case '09':
            letterMonth = 'ސެޕްޓެމްބަރ';
            break;

        case '10':
            letterMonth = 'އޮކްޓޯބަރ';
            break;

        case '11':
            letterMonth = 'ނޮވެމްބަރ';
            break;

        case '12':
            letterMonth = 'ޑިސެމްބަރ';
            break;
                
    }

    document.getElementsByClassName('letter-year')[0].innerHTML = letterYear;
    document.getElementsByClassName('letter-month')[0].innerHTML = letterMonth;
    document.getElementsByClassName('letter-day')[0].innerHTML = letterDay;

    

    
}

function arabicDate(dateValue) {
    arabicYear = dateValue.data.hijri.year;
    arabicMonth = dateValue.data.hijri.month.number;
    arabicDay = dateValue.data.hijri.day;

    switch (arabicMonth) {
        case 1:
            arabicMonth = 'މުހައްރަމް';
            break;

        case 2:
            arabicMonth = 'ސަފަރް';
            break;

        case 3:
            arabicMonth = 'ރަބިއުލް-އައްވަލް';
            break;

        case 4:
            arabicMonth = 'ރަބިއުލް-އާހިރް';
            break;

        case 5:
            arabicMonth = 'ޖުމާދަލް-އޫލާ';
            break;

        case 6:
            arabicMonth = 'ޖުމާދަލް-އާހިރް';
            break;

        case 7:
            arabicMonth = 'ރަޖަބް';
            break;

        case 8:
            arabicMonth = 'ޝައުބާން';
            break;

        case 9:
            arabicMonth = 'ރަމަޒާން';
            break;

        case 10:
            arabicMonth = 'ޝައްވާލް';
            break;

        case 11:
            arabicMonth = 'ޒުލް-ޤައިދާ';
            break;

        case 12:
            arabicMonth = 'ޒުލް-ހިއްޖަ';
            break;
                
    }

    console.log(arabicMonth);
}