if (confirm('Fia kamu lagi sibuk ngga? Aku punya mainan nih.')) {
    var me = question1();

    question2(me);
    question3(me);
    question4();
    question5();
    question6();
    alert('Kalo gitu ' + me + ' jangan di marahin mulu yaa, soalnya ' + me + ' juga sayang banget sama fia.');
    alert('Yaudah nih aku kasih hadiahnya karna udah sayang sama ' + me + '.');
} else {
    alert('Yaudah nanti aja deh kalo sibuk. Nanti di buka lagi yaa.');
    close();
}

function question1() {
    var param = prompt('Aku mau tanya, kamu sayang sama siapa?', '');

    while (param === null || param === '' || !(param.toLowerCase() === 'muhammad yogi prasetyo' || param
            .toLowerCase() === 'yogi' || param.toLowerCase() === 'tyo')) {
        alert('BOONG, JAWAB YANG BENER!!');

        param = prompt('KAMU SAYANG SAMA SIAPA!!', '');
    }

    return param;
}

function question2(me) {
    var param = confirm('Beneran sayang sama ' + me + '?');

    while (!param) {
        param = confirm('BENERAN!!');
    }

    return param;
}

function question3(me) {
    var param = confirm('Kamu mau ngga serius sama ' + me + '?');

    while (!param) {
        param = confirm('AKU INI TANYA SERIUS, MAU SERIUS GAK!!');
    }

    return param;
}

function question4() {
    var param = confirm('Beneran mau?');

    while (!param) {
        param = confirm('BENERAN LOOH!!');
    }

    return param;
}

function question5() {
    var param = confirm('Boong dosa looh.');

    while (!param) {
        param = confirm('KAN UDAH DI BILANGIN BOONG DOSA!! JANGAN BOONG?');
    }

    return param;
}

function question6() {
    var param = confirm('Serius?');

    while (!param) {
        param = confirm('SERIUS!!');
    }

    return param;
}