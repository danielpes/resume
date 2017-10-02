var data = contents;

data.info.age = calculateAge(new Date(1991, 3, 22));
data.fonts = [
    "Montserrat", "Lato", "Open Sans", "Merriweather"
];
data.currentFont = "Montserrat";
data.baseFontSize = 13;


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
        increaseFont: function () {
            this.baseFontSize++;
            $("html").css("font-size", this.baseFontSize);
        },
        decreaseFont: function () {
            this.baseFontSize--;
            $("html").css("font-size", this.baseFontSize);
        },
        updateSkillBar: function(level) {
            console.log(level);
            return {
                'border': '1px solid #757575',
                'padding-left': 'calc('+10*level+'%-1px)',
                'background-color': '#757575'
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