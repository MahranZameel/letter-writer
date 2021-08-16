function updateValues(id, value) {
    var elements = document.getElementsByClassName(id);

    if(id=="sender-island") {
        elements[1].innerHTML = value + "،" + "<br>" + "ދިވެހިރާއްޖެ.";
    } else if(id=="receiver-island") {
        elements[1].innerHTML = value + "،" + "<br>" + "ދިވެހިރާއްޖެ.";
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

    fetch('https://api.aladhan.com/v1/gToH?date='+letterDay+'-'+letterMonth+'-'+letterYear)
    .then(response => response.json())
    .then(data => hijriDate(data));

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

function hijriDate(dateValue) {
    hijriYear = dateValue.data.hijri.year;
    hijriMonth = dateValue.data.hijri.month.number;
    hijriDay = dateValue.data.hijri.day;

    switch (hijriMonth) {
        case 1:
            hijriMonth = 'މުޙައްރަމް';
            break;

        case 2:
            hijriMonth = 'ޞަފަރު';
            break;

        case 3:
            hijriMonth = 'ރަބީޢުލްއައްވަލް';
            break;

        case 4:
            hijriMonth = 'ރަބީޢުލްއާޚިރު';
            break;

        case 5:
            hijriMonth = 'ޖުމާދަލްއޫލާ';
            break;

        case 6:
            hijriMonth = 'ޖުމާދަލްއާޚިރާ';
            break;

        case 7:
            hijriMonth = 'ރަޖަބް';
            break;

        case 8:
            hijriMonth = 'ޝަޢުބާން';
            break;

        case 9:
            hijriMonth = 'ރަމަޟާން';
            break;

        case 10:
            hijriMonth = 'ޝައްވާލް';
            break;

        case 11:
            hijriMonth = 'ޛުލްޤަޢިދާ';
            break;

        case 12:
            hijriMonth = 'ޛުލްޙިއްޖާ';
            break;
                
    }

    document.getElementsByClassName('hijri-year')[0].innerHTML = hijriYear;
    document.getElementsByClassName('hijri-month')[0].innerHTML = hijriMonth;
    document.getElementsByClassName('hijri-day')[0].innerHTML = hijriDay;

    // console.log(arabicMonth);
}