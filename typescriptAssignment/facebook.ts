class Profile {

     workEdu: WorkAndEducation;
     places:PlacesLived;
     contacts:ContactAndBasicInfo;
     familyAndRelationship: FamilyAndRelationship;
     detailsAboutYou:DetailsAboutyou;
     lifeEvents:LifeEvents;
     friends:Friends;
     checkins:Checkins;
     sports:Sports;
     music:Music;
     books:Books;

    constructor() {
        this.workEdu = new WorkAndEducation();
        this.places=new PlacesLived();
        this.contacts=new ContactAndBasicInfo();
        this.familyAndRelationship=new FamilyAndRelationship();
        this.detailsAboutYou=new DetailsAboutyou();
        this.lifeEvents=new LifeEvents();
        this.friends=new Friends();
        this.checkins=new Checkins();
        this.sports=new Sports();
        this.music=new Music();
        this.books=new Books();


    }
}

class WorkAndEducation {
    private work_company: string;
    private work_position: string;
    private work_city: string;
    private work_description: string;
    private work_timePeriodStart: string;
    private work_timePeriodEnd: string;
    private work_currentlyWorkHere: boolean;

    private edu_school: string;
    private edu_timePeriodStart: string;
    private edu_timePeriodEnd: string;
    private edu_currentlyStudyHere: boolean;
    private edu_isGraduated: boolean;


    public setWorkDetails=(work_company: string, work_position: string, work_city: string, work_description: string, work_timePeriodStart: string, work_timePeriodEnd ? : string, work_currentlyWorkHere ? : boolean)=> {
        this.work_company = work_company;
        this.work_position = work_position;
        this.work_city = work_city;
        this.work_description = work_description;
        this.work_timePeriodStart = work_timePeriodStart;
        this.work_timePeriodEnd = work_timePeriodEnd;
        this.work_currentlyWorkHere = work_currentlyWorkHere;
    }

    public getWorkDetails = (): string => {
        let data = `Work Details:\nCompany:${this.work_company}\nPosition:${this.work_position}\tDescription:${this.work_description}\nCity:${this.work_city}\n`+
        `Time Period Start:${this.work_timePeriodStart}\tTime Period End:${this.work_timePeriodEnd}\nCurrently Work Here:${this.work_currentlyWorkHere}`;
        return data;
    }

    public setEducationDetails = (edu_school: string, edu_timePeriodStart: string, edu_timePeriodEnd: string, edu_isGraduated: boolean, edu_currentlyStudyHere?: boolean)=>{
        this.edu_school=edu_school;
        this.edu_timePeriodStart=edu_timePeriodStart;
        this.edu_timePeriodEnd=edu_timePeriodEnd;
        this.edu_isGraduated=edu_isGraduated;
        this.edu_currentlyStudyHere=edu_currentlyStudyHere;

    }

    public getEducationDetails=():string=>{
        let data=`Education:\nSchool:${this.edu_school}\n`+
        `Time Period Start:${this.edu_timePeriodStart}\tTime Period End:${this.edu_timePeriodEnd}\nCurrently Study Here:${this.edu_currentlyStudyHere} `;
        return data;

    }


    public getWork_company(): string {
        return this.work_company;
    }
    public setWork_company(value: string) {
        this.work_company = value;
    }
    public getWork_position(): string {
        return this.work_position;
    }
    public setWork_position(value: string) {
        this.work_position = value;
    }
    public getWork_city(): string {
        return this.work_city;
    }
    public setWork_city(value: string) {
        this.work_city = value;
    }
    public getWork_description(): string {
        return this.work_description;
    }
    public setWork_description(value: string) {
        this.work_description = value;
    }
    public getWork_timePeriodStart(): string {
        return this.work_timePeriodStart;
    }
    public setWork_timePeriodStart(value: string) {
        this.work_timePeriodStart = value;
    }
    public getWork_timePeriodEnd(): string {
        return this.work_timePeriodEnd;
    }
    public setWork_timePeriodEnd(value: string) {
        this.work_timePeriodEnd = value;
    }
    public getWork_currentlyWorkHere(): boolean {
        return this.work_currentlyWorkHere;
    }
    public setWork_currentlyWorkHere(value: boolean) {
        this.work_currentlyWorkHere = value;
    }
    public getEdu_school(): string {
        return this.edu_school;
    }
    public setEdu_school(value: string) {
        this.edu_school = value;
    }
    public getEdu_timePeriodStart(): string {
        return this.edu_timePeriodStart;
    }
    public setEdu_timePeriodStart(value: string) {
        this.edu_timePeriodStart = value;
    }
    public getEdu_timePeriodEnd(): string {
        return this.edu_timePeriodEnd;
    }
    public setEdu_timePeriodEnd(value: string) {
        this.edu_timePeriodEnd = value;
    }
    public getEdu_currentlyStudyHere(): boolean {
        return this.edu_currentlyStudyHere;
    }
    public setEdu_currentlyStudyHere(value: boolean) {
        this.edu_currentlyStudyHere = value;
    }
    public getEdu_isGraduated(): boolean {
        return this.edu_isGraduated;
    }
    public setEdu_isGraduated(value: boolean) {
        this.edu_isGraduated = value;
    }




    printTest = () => {
        console.log("from facebook.ts");

    }
}

class PlacesLived {
    private currentCity: string;
    private homeTown: string;
    private otherPlaces: string[] = [];

   

    public getCurrentCity = (): string => {
        return this.currentCity;
    }


    public setCurrentCity = (value: string) => {
        this.currentCity = value;
    }


    public getHomeTown = (): string => {
        return this.homeTown;
    }


    public setHomeTown = (value: string) => {
        this.homeTown = value;
    }


    public getOtherPlaces = (): string[] => {
        return this.otherPlaces;
    }


    public setOtherPlaces = (value: string[]) => {
        this.otherPlaces = value;
    }

    public addOtherPlaces = (...places: string[]) => {

        this.otherPlaces = this.otherPlaces.concat(places)

    }



}

class ContactAndBasicInfo {
    private mobileNumber: string;
    private address: string;
    private email: string;
    private facebookURL: string;
    private websites: string;
    private dateOfBirth: string;
    private gender: string;
    private intrestedIn: string[];


   
	public getMobileNumber(): string {
		return this.mobileNumber;
	}

   
	public setMobileNumber(value: string) {
		this.mobileNumber = value;
	}

  
	public getAddress(): string {
		return this.address;
	}

   
	public setAddress(value: string) {
		this.address = value;
	}

   
	public getEmail(): string {
		return this.email;
	}

    
	public setEmail(value: string) {
		this.email = value;
	}

 
	public getFacebookURL(): string {
		return this.facebookURL;
	}

   
	public setFacebookURL(value: string) {
		this.facebookURL = value;
	}

    
	public getWebsites(): string {
		return this.websites;
	}

    
	public setWebsites(value: string) {
		this.websites = value;
	}

    
	public getDateOfBirth(): string {
		return this.dateOfBirth;
	}

   
	public setDateOfBirth(value: string) {
		this.dateOfBirth = value;
	}

    
	public getGender(): string {
		return this.gender;
	}

	public setGender(value: string) {
		this.gender = value;
	}

   
	public getintrestedIn(): string[] {
		return this.intrestedIn;
	}

   
	public setintrestedIn(...value:string[]) {
		this.intrestedIn = value;
	}



}

class FamilyAndRelationship {
    private relationShip: string;
    private familyMembers: string[];


	public getRelationShip(): string {
		return this.relationShip;
	}

   	public setRelationShip(value: string) {
		this.relationShip = value;
	}

    	public getFamilyMembers(): string[] {
		return this.familyMembers;
	}

   	public setFamilyMembers(...value: string[]) {
		this.familyMembers = value;
	}






}

class DetailsAboutyou {
    private aboutYou: string;
    private otherNames: string[];
    private favouriteQuotes: string;


	public getAboutYou(): string {
		return this.aboutYou;
	}

   
	public setAboutYou(value: string) {
		this.aboutYou = value;
	}


	public getOtherNames(): string[] {
		return this.otherNames;
	}


	public setOtherNames(...value: string[]) {
		this.otherNames = value;
	}

	public getFavouriteQuotes(): string {
		return this.favouriteQuotes;
	}


	public setFavouriteQuotes(value: string) {
		this.favouriteQuotes = value;
	}



}

class Events {
    private year: string;
    private event: string;


	constructor(year:string,event:string) {
        this.year=year;
        this.event=event;
	}

	public getEventAsString(): string {
		return this.year+" "+this.event;
	}

  


}

class LifeEvents {
    private mylifeEvents: Events[];


   	public getLifeEvents(): Events[] {
		return this.mylifeEvents;
	}

    
	public setLifeEvents(...value: Events[]) {
		this.mylifeEvents = value;
    }
    

    public getLifeEventsAsString():string{
        let allData="";

       for (let index = 0; index < this.mylifeEvents.length; index++) {
           let element = this.mylifeEvents[index];
           allData=allData+`${element.getEventAsString()}\n`;
           
       }

        return allData;
    }

}


class Friends {
    private friends: string[];

  
	public getFriends(): string[] {
		return this.friends;
	}

    	public setFriends(...value: string[]) {
		this.friends = value;
	}


}

class Checkins {
    private places: string[];

   
	public getPlaces(): string[] {
		return this.places;
	}

	public setPlaces(...value: string[]) {
		this.places = value;
	}

}

class Sports {
    private sportsTeams: string[];

	public getSportsTeams(): string[] {
		return this.sportsTeams;
	}

 
	public setSportsTeams(...value: string[]) {
		this.sportsTeams = value;
	}

}

class Music {
    private music: string[];

	public getMusic(): string[] {
		return this.music;
    }

    
	public setMusic(...value: string[]) {
		this.music = value;
	}
    

}

class Books {
    private books: string[];

	public getBooks(): string[] {
		return this.books;
	}

   
	public setBooks(...value: string[]) {
		this.books = value;
	}

}


let user=new Profile();

//Work and Education Details
user.workEdu.setWorkDetails("Bristlecone","Associate Consultant","Pune","Java Developer","28/07/2017","28/08/2018",true);
user.workEdu.setEducationDetails("St.Josephs Holy Convent,Amravati","12/12/2015","12/05/2025",true,false);

//Places Lived
user.places.setCurrentCity("Pune");
user.places.setHomeTown("Amravati");

//Contact and Basic Info
user.contacts.setAddress("Ashok Vihar, Viman Nagar, Pune");
user.contacts.setDateOfBirth("20/03/1994");
user.contacts.setEmail("rajthakur2003@gmail.com");
user.contacts.setFacebookURL("www.facebook.com/rajothakur");
user.contacts.setGender("Male");
user.contacts.setintrestedIn("Male","Female");

//Family And Relationship
user.familyAndRelationship.setRelationShip("Single");
user.familyAndRelationship.setFamilyMembers("Devesh Thakur,Arunima Thakur");

//Details about you
user.detailsAboutYou.setAboutYou("A young dynamic Programmer with experience in a variety of Programming Languages");
user.detailsAboutYou.setFavouriteQuotes("Hard work beats talent when talent doesnt work hard");
user.detailsAboutYou.setOtherNames("Krishna");

//Events and Life Events
let graduationEvent=new Events("2014","Graduated");
let postGraduation = new Events("2016", "Post Graduated");
user.lifeEvents.setLifeEvents(graduationEvent,postGraduation);
console.log("Asdasd");

//friends
user.friends.setFriends("Ashok Samrat,Amendra Bahubai");

//checking
user.checkins.setPlaces("Hotel Grand Hyaat,Pune");

//sports
user.sports.setSportsTeams("India,RCB,Manchester United");

//music
user.music.setMusic("Classical Indian,Reggae,Wester Jazz")

//books
user.books.setBooks("The Monk who sold his ferrari !","Think and grow rich");









//Printing the profile Data

//Using a method that prints alldata one together
console.log(user.workEdu.getWorkDetails());
console.log(user.workEdu.getEducationDetails());

//Using getter methods to print individual data
console.log(`Places Lived:\nCurrent City:${user.places.getCurrentCity()} Hometown:${user.places.getHomeTown()}`);

//Contacts and basic info
let contactsAndBAsicInfo=`Contact and Basic Info:\n`+
    `Address:${ user.contacts.getAddress()} DOB:${user.contacts.getDateOfBirth()}\n`+
    `Email:${user.contacts.getEmail()} FB URL:${user.contacts.getFacebookURL()}\n`+
    `Gender:${user.contacts.getGender()} Intrested in:${user.contacts.getintrestedIn()}`;
console.log(contactsAndBAsicInfo);

//Details about you
let aboutMe=`Details About Me:\nAbout me:${user.detailsAboutYou.getAboutYou()} Other name:${user.detailsAboutYou.getOtherNames()}\n`+
            `Favourite quote:${user.detailsAboutYou.getFavouriteQuotes()}`;
console.log(aboutMe);

//Life Events
let lifeEvents=`Life Events:\n${user.lifeEvents.getLifeEventsAsString()}`;
console.log(lifeEvents);


//Friends
console.log(`Friends: ${user.friends.getFriends()}`);

//Checkins
console.log(`Checkins:${user.checkins.getPlaces()}`);

//Music
console.log(`Music:${user.music.getMusic()}`);

//Sports
console.log(`Sports:${user.sports.getSportsTeams()}`);

//Books
console.log(`Books:${user.books.getBooks()}`);


