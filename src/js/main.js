var app = new Vue({
    el: '#page',
    data: {
        fonts: ["Montserrat", "Lato", "Open Sans", "Merriweather"],
        currentFont: "Montserrat",
        currentZoom: 1,
        info: {
            name: "Daniel de Paula",
            position: "Big Data Engineer",
            nationality: "Brazilian",
            status: "Married",
            dob: "1991-03-22"
        },
        contact: {
            city: "Paris Area",
            country: "France",
            ph: ["+33", "6", "58", "61", "07", "68"],
            em: {
                l: "contact",
                r: "danielpes.me"
            }
        },
        experiences: [],
        education: [],
        skills: [],
        languages: [],
        hobbies: []
    },
    created: function () {
        var vm = this;
        var contentsURL = "https://gist.githubusercontent.com/danielpes/e1a2ca7ad03b6bc6d0c3763988402beb/raw/";
        $.ajax({
            dataType: "json",
            url: contentsURL,
            cache: false,
            success: function (jsonData) {
                vm.experiences = jsonData.experiences;
                vm.education = jsonData.education;
                vm.skills = jsonData.skills;
                vm.languages = jsonData.languages;
                vm.hobbies = jsonData.hobbies;
            }
        });
    },
    methods: {
        print: window.print,
        getAge: function(dobString) {
            var dobDate = new Date(dobString);

            var now = new Date();
            var age = now.getYear() - dobDate.getYear();

            var monthDiff = now.getMonth() - dobDate.getMonth();
            var dayDiff = now.getDate() < dobDate.getDate();

            if (monthDiff < 1 || (monthDiff === 0 && dayDiff < 1))
                age = age - 1;

            return age;
        },
        getPhoneNumber: function() {
            return this.contact.ph.join(" ");
        },
        getEmail: function() {
            return this.contact.em.l + "@" + this.contact.em.r;
        },
        updateSkillBar: function(level) {
            return {
                'width': 10*level + '%'
            }
        }
    }
});
