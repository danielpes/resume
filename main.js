var data = contents;

data.info.age = calculateAge(new Date(1991, 3, 22));

var app = new Vue({
    el: '#page',
    data: data
});

function calculateAge (dateOfBirth) {
    var now = new Date();
    var age = now.getYear() - dateOfBirth.getYear();

    var monthDiff = now.getMonth() - dateOfBirth.getMonth();
    var dayDiff = now.getDate() < dateOfBirth.getDate();

    if (monthDiff < 1 || (monthDiff === 0 && dayDiff < 1))
        age = age - 1;

    return age;
}