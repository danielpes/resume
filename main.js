var data = contents;

data.info.age = calculateAge(new Date(1991, 3, 22));
data.fonts = [
    "Montserrat", "Lato", "Open Sans", "Merriweather"
];
data.currentFont = "Montserrat";
data.currentZoom = 1;


var app = new Vue({
    el: '#page',
    data: data,
    methods: {
        print: window.print,
        getPhoneNumber: function() {
            return this.contact.ph.join(" ");
        },
        getEmail: function() {
            return this.contact.em.l + "@" + this.contact.em.r;
        },
        zoomIn: function () {
            this.currentZoom+=0.1;
            $("body").css("transform", "scale(" + this.currentZoom + ")");
        },
        zoomOut: function () {
            this.currentZoom=1;
            $("body").css("transform", "scale(" + this.currentZoom + ")");
        },
        updateSkillBar: function(level) {
            console.log(level);
            return {
                'width': 10*level + '%'
            }
        }
    }
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