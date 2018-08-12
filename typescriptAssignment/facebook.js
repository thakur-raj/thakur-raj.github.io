var Profile = /** @class */ (function () {
    function Profile() {
        this.workEdu = new WorkAndEducation();
        this.places = new PlacesLived();
        this.contacts = new ContactAndBasicInfo();
        this.familyAndRelationship = new FamilyAndRelationship();
        this.detailsAboutYou = new DetailsAboutyou();
        this.lifeEvents = new LifeEvents();
        this.friends = new Friends();
        this.checkins = new Checkins();
        this.sports = new Sports();
        this.music = new Music();
        this.books = new Books();
    }
    return Profile;
}());
var WorkAndEducation = /** @class */ (function () {
    function WorkAndEducation() {
        var _this = this;
        this.setWorkDetails = function (work_company, work_position, work_city, work_description, work_timePeriodStart, work_timePeriodEnd, work_currentlyWorkHere) {
            _this.work_company = work_company;
            _this.work_position = work_position;
            _this.work_city = work_city;
            _this.work_description = work_description;
            _this.work_timePeriodStart = work_timePeriodStart;
            _this.work_timePeriodEnd = work_timePeriodEnd;
            _this.work_currentlyWorkHere = work_currentlyWorkHere;
        };
        this.getWorkDetails = function () {
            var data = "Work Details:\nCompany:" + _this.work_company + "\nPosition:" + _this.work_position + "\tDescription:" + _this.work_description + "\nCity:" + _this.work_city + "\n" +
                ("Time Period Start:" + _this.work_timePeriodStart + "\tTime Period End:" + _this.work_timePeriodEnd + "\nCurrently Work Here:" + _this.work_currentlyWorkHere);
            return data;
        };
        this.setEducationDetails = function (edu_school, edu_timePeriodStart, edu_timePeriodEnd, edu_isGraduated, edu_currentlyStudyHere) {
            _this.edu_school = edu_school;
            _this.edu_timePeriodStart = edu_timePeriodStart;
            _this.edu_timePeriodEnd = edu_timePeriodEnd;
            _this.edu_isGraduated = edu_isGraduated;
            _this.edu_currentlyStudyHere = edu_currentlyStudyHere;
        };
        this.getEducationDetails = function () {
            var data = "Education:\nSchool:" + _this.edu_school + "\n" +
                ("Time Period Start:" + _this.edu_timePeriodStart + "\tTime Period End:" + _this.edu_timePeriodEnd + "\nCurrently Study Here:" + _this.edu_currentlyStudyHere + " ");
            return data;
        };
        this.printTest = function () {
            console.log("from facebook.ts");
        };
    }
    WorkAndEducation.prototype.getWork_company = function () {
        return this.work_company;
    };
    WorkAndEducation.prototype.setWork_company = function (value) {
        this.work_company = value;
    };
    WorkAndEducation.prototype.getWork_position = function () {
        return this.work_position;
    };
    WorkAndEducation.prototype.setWork_position = function (value) {
        this.work_position = value;
    };
    WorkAndEducation.prototype.getWork_city = function () {
        return this.work_city;
    };
    WorkAndEducation.prototype.setWork_city = function (value) {
        this.work_city = value;
    };
    WorkAndEducation.prototype.getWork_description = function () {
        return this.work_description;
    };
    WorkAndEducation.prototype.setWork_description = function (value) {
        this.work_description = value;
    };
    WorkAndEducation.prototype.getWork_timePeriodStart = function () {
        return this.work_timePeriodStart;
    };
    WorkAndEducation.prototype.setWork_timePeriodStart = function (value) {
        this.work_timePeriodStart = value;
    };
    WorkAndEducation.prototype.getWork_timePeriodEnd = function () {
        return this.work_timePeriodEnd;
    };
    WorkAndEducation.prototype.setWork_timePeriodEnd = function (value) {
        this.work_timePeriodEnd = value;
    };
    WorkAndEducation.prototype.getWork_currentlyWorkHere = function () {
        return this.work_currentlyWorkHere;
    };
    WorkAndEducation.prototype.setWork_currentlyWorkHere = function (value) {
        this.work_currentlyWorkHere = value;
    };
    WorkAndEducation.prototype.getEdu_school = function () {
        return this.edu_school;
    };
    WorkAndEducation.prototype.setEdu_school = function (value) {
        this.edu_school = value;
    };
    WorkAndEducation.prototype.getEdu_timePeriodStart = function () {
        return this.edu_timePeriodStart;
    };
    WorkAndEducation.prototype.setEdu_timePeriodStart = function (value) {
        this.edu_timePeriodStart = value;
    };
    WorkAndEducation.prototype.getEdu_timePeriodEnd = function () {
        return this.edu_timePeriodEnd;
    };
    WorkAndEducation.prototype.setEdu_timePeriodEnd = function (value) {
        this.edu_timePeriodEnd = value;
    };
    WorkAndEducation.prototype.getEdu_currentlyStudyHere = function () {
        return this.edu_currentlyStudyHere;
    };
    WorkAndEducation.prototype.setEdu_currentlyStudyHere = function (value) {
        this.edu_currentlyStudyHere = value;
    };
    WorkAndEducation.prototype.getEdu_isGraduated = function () {
        return this.edu_isGraduated;
    };
    WorkAndEducation.prototype.setEdu_isGraduated = function (value) {
        this.edu_isGraduated = value;
    };
    return WorkAndEducation;
}());
var PlacesLived = /** @class */ (function () {
    function PlacesLived() {
        var _this = this;
        this.otherPlaces = [];
        this.getCurrentCity = function () {
            return _this.currentCity;
        };
        this.setCurrentCity = function (value) {
            _this.currentCity = value;
        };
        this.getHomeTown = function () {
            return _this.homeTown;
        };
        this.setHomeTown = function (value) {
            _this.homeTown = value;
        };
        this.getOtherPlaces = function () {
            return _this.otherPlaces;
        };
        this.setOtherPlaces = function (value) {
            _this.otherPlaces = value;
        };
        this.addOtherPlaces = function () {
            var places = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                places[_i] = arguments[_i];
            }
            _this.otherPlaces = _this.otherPlaces.concat(places);
        };
    }
    return PlacesLived;
}());
var ContactAndBasicInfo = /** @class */ (function () {
    function ContactAndBasicInfo() {
    }
    ContactAndBasicInfo.prototype.getMobileNumber = function () {
        return this.mobileNumber;
    };
    ContactAndBasicInfo.prototype.setMobileNumber = function (value) {
        this.mobileNumber = value;
    };
    ContactAndBasicInfo.prototype.getAddress = function () {
        return this.address;
    };
    ContactAndBasicInfo.prototype.setAddress = function (value) {
        this.address = value;
    };
    ContactAndBasicInfo.prototype.getEmail = function () {
        return this.email;
    };
    ContactAndBasicInfo.prototype.setEmail = function (value) {
        this.email = value;
    };
    ContactAndBasicInfo.prototype.getFacebookURL = function () {
        return this.facebookURL;
    };
    ContactAndBasicInfo.prototype.setFacebookURL = function (value) {
        this.facebookURL = value;
    };
    ContactAndBasicInfo.prototype.getWebsites = function () {
        return this.websites;
    };
    ContactAndBasicInfo.prototype.setWebsites = function (value) {
        this.websites = value;
    };
    ContactAndBasicInfo.prototype.getDateOfBirth = function () {
        return this.dateOfBirth;
    };
    ContactAndBasicInfo.prototype.setDateOfBirth = function (value) {
        this.dateOfBirth = value;
    };
    ContactAndBasicInfo.prototype.getGender = function () {
        return this.gender;
    };
    ContactAndBasicInfo.prototype.setGender = function (value) {
        this.gender = value;
    };
    ContactAndBasicInfo.prototype.getintrestedIn = function () {
        return this.intrestedIn;
    };
    ContactAndBasicInfo.prototype.setintrestedIn = function () {
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i] = arguments[_i];
        }
        this.intrestedIn = value;
    };
    return ContactAndBasicInfo;
}());
var FamilyAndRelationship = /** @class */ (function () {
    function FamilyAndRelationship() {
    }
    FamilyAndRelationship.prototype.getRelationShip = function () {
        return this.relationShip;
    };
    FamilyAndRelationship.prototype.setRelationShip = function (value) {
        this.relationShip = value;
    };
    FamilyAndRelationship.prototype.getFamilyMembers = function () {
        return this.familyMembers;
    };
    FamilyAndRelationship.prototype.setFamilyMembers = function () {
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i] = arguments[_i];
        }
        this.familyMembers = value;
    };
    return FamilyAndRelationship;
}());
var DetailsAboutyou = /** @class */ (function () {
    function DetailsAboutyou() {
    }
    DetailsAboutyou.prototype.getAboutYou = function () {
        return this.aboutYou;
    };
    DetailsAboutyou.prototype.setAboutYou = function (value) {
        this.aboutYou = value;
    };
    DetailsAboutyou.prototype.getOtherNames = function () {
        return this.otherNames;
    };
    DetailsAboutyou.prototype.setOtherNames = function () {
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i] = arguments[_i];
        }
        this.otherNames = value;
    };
    DetailsAboutyou.prototype.getFavouriteQuotes = function () {
        return this.favouriteQuotes;
    };
    DetailsAboutyou.prototype.setFavouriteQuotes = function (value) {
        this.favouriteQuotes = value;
    };
    return DetailsAboutyou;
}());
var Events = /** @class */ (function () {
    function Events(year, event) {
        this.year = year;
        this.event = event;
    }
    Events.prototype.getEventAsString = function () {
        return this.year + " " + this.event;
    };
    return Events;
}());
var LifeEvents = /** @class */ (function () {
    function LifeEvents() {
    }
    LifeEvents.prototype.getLifeEvents = function () {
        return this.mylifeEvents;
    };
    LifeEvents.prototype.setLifeEvents = function () {
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i] = arguments[_i];
        }
        this.mylifeEvents = value;
    };
    LifeEvents.prototype.getLifeEventsAsString = function () {
        var allData = "";
        for (var index = 0; index < this.mylifeEvents.length; index++) {
            var element = this.mylifeEvents[index];
            allData = allData + (element.getEventAsString() + "\n");
        }
        return allData;
    };
    return LifeEvents;
}());
var Friends = /** @class */ (function () {
    function Friends() {
    }
    Friends.prototype.getFriends = function () {
        return this.friends;
    };
    Friends.prototype.setFriends = function () {
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i] = arguments[_i];
        }
        this.friends = value;
    };
    return Friends;
}());
var Checkins = /** @class */ (function () {
    function Checkins() {
    }
    Checkins.prototype.getPlaces = function () {
        return this.places;
    };
    Checkins.prototype.setPlaces = function () {
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i] = arguments[_i];
        }
        this.places = value;
    };
    return Checkins;
}());
var Sports = /** @class */ (function () {
    function Sports() {
    }
    Sports.prototype.getSportsTeams = function () {
        return this.sportsTeams;
    };
    Sports.prototype.setSportsTeams = function () {
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i] = arguments[_i];
        }
        this.sportsTeams = value;
    };
    return Sports;
}());
var Music = /** @class */ (function () {
    function Music() {
    }
    Music.prototype.getMusic = function () {
        return this.music;
    };
    Music.prototype.setMusic = function () {
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i] = arguments[_i];
        }
        this.music = value;
    };
    return Music;
}());
var Books = /** @class */ (function () {
    function Books() {
    }
    Books.prototype.getBooks = function () {
        return this.books;
    };
    Books.prototype.setBooks = function () {
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i] = arguments[_i];
        }
        this.books = value;
    };
    return Books;
}());
var user = new Profile();
//Work and Education Details
user.workEdu.setWorkDetails("Bristlecone", "Associate Consultant", "Pune", "Java Developer", "28/07/2017", "28/08/2018", true);
user.workEdu.setEducationDetails("St.Josephs Holy Convent,Amravati", "12/12/2015", "12/05/2025", true, false);
//Places Lived
user.places.setCurrentCity("Pune");
user.places.setHomeTown("Amravati");
//Contact and Basic Info
user.contacts.setAddress("Ashok Vihar, Viman Nagar, Pune");
user.contacts.setDateOfBirth("20/03/1994");
user.contacts.setEmail("rajthakur2003@gmail.com");
user.contacts.setFacebookURL("www.facebook.com/rajothakur");
user.contacts.setGender("Male");
user.contacts.setintrestedIn("Male", "Female");
//Family And Relationship
user.familyAndRelationship.setRelationShip("Single");
user.familyAndRelationship.setFamilyMembers("Devesh Thakur,Arunima Thakur");
//Details about you
user.detailsAboutYou.setAboutYou("A young dynamic Programmer with experience in a variety of Programming Languages");
user.detailsAboutYou.setFavouriteQuotes("Hard work beats talent when talent doesnt work hard");
user.detailsAboutYou.setOtherNames("Krishna");
//Events and Life Events
var graduationEvent = new Events("2014", "Graduated");
var postGraduation = new Events("2016", "Post Graduated");
user.lifeEvents.setLifeEvents(graduationEvent, postGraduation);
console.log("Asdasd");
//friends
user.friends.setFriends("Ashok Samrat,Amendra Bahubai");
//checking
user.checkins.setPlaces("Hotel Grand Hyaat,Pune");
//sports
user.sports.setSportsTeams("India,RCB,Manchester United");
//music
user.music.setMusic("Classical Indian,Reggae,Wester Jazz");
//books
user.books.setBooks("The Monk who sold his ferrari !", "Think and grow rich");
//Printing the profile Data
//Using a method that prints alldata one together
console.log(user.workEdu.getWorkDetails());
console.log(user.workEdu.getEducationDetails());
//Using getter methods to print individual data
console.log("Places Lived:\nCurrent City:" + user.places.getCurrentCity() + " Hometown:" + user.places.getHomeTown());
//Contacts and basic info
var contactsAndBAsicInfo = "Contact and Basic Info:\n" +
    ("Address:" + user.contacts.getAddress() + " DOB:" + user.contacts.getDateOfBirth() + "\n") +
    ("Email:" + user.contacts.getEmail() + " FB URL:" + user.contacts.getFacebookURL() + "\n") +
    ("Gender:" + user.contacts.getGender() + " Intrested in:" + user.contacts.getintrestedIn());
console.log(contactsAndBAsicInfo);
//Details about you
var aboutMe = "Details About Me:\nAbout me:" + user.detailsAboutYou.getAboutYou() + " Other name:" + user.detailsAboutYou.getOtherNames() + "\n" +
    ("Favourite quote:" + user.detailsAboutYou.getFavouriteQuotes());
console.log(aboutMe);
//Life Events
var lifeEvents = "Life Events:\n" + user.lifeEvents.getLifeEventsAsString();
console.log(lifeEvents);
//Friends
console.log("Friends: " + user.friends.getFriends());
//Checkins
console.log("Checkins:" + user.checkins.getPlaces());
//Music
console.log("Music:" + user.music.getMusic());
//Sports
console.log("Sports:" + user.sports.getSportsTeams());
//Books
console.log("Books:" + user.books.getBooks());
