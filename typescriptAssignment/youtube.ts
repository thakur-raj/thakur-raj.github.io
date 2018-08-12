class Video {

    private _ID: string;
    private _title: string;
    private _publishedDate: string;
    private _channelID: string;
    private _description: string;
    private _thumbnailURL: string;
    private _tags: string[];
    private _duration: Time;
    private _views: number = 0;
    private _likes: number = 0;
    private _dislikes: number = 0;
    private _comments: UserComment[] = [];
    private _captionsAvailable: boolean;
    private _resolution: [number, number];


    constructor(id: string, title: string, publishedDate: string, channelID: string, duration: Time, captionsAvailable: boolean, resolution ? : [number, number], description ? : string, thumbnailURL ? : string, tags ? : string[]) {
        this._ID = id; //mandatory
        this._title = title; //mandatory
        this._publishedDate = publishedDate; //mandatory
        this._channelID = channelID; //mandatory
        this._duration = duration; //mandatory
        this._captionsAvailable = captionsAvailable; //mandatory
        this._description = description; //optional
        this._thumbnailURL = thumbnailURL; //optional
        this._tags = tags; //optional
        this._resolution = resolution; //optional
    }


    //All Getters for Video Class
    getID = (): string => {
        return this._ID;
    }
    getTitle = (): string => {
        return this._title;
    }
    getPublishedDate = (): string => {
        return this._publishedDate;
    }
    getChannelID = (): string => {
        return this._channelID;
    }
    getDescription = (): string => {
        return this._description;
    }
    getThumbnailURL = (): string => {
        return this._thumbnailURL;
    }
    getTags = (): string[] => {
        return this._tags;
    }
    getDuration = (): Time => {
     return this._duration;
    }
    getViews = (): number => {
        return this._views;
    }
    getLikes = (): number => {
        return this._likes;
    }
    getDislikes = (): number => {
        return this._dislikes;
    }
    getCaptionsAvailable = (): boolean => {
        return this._captionsAvailable;
    }
    getResolution = (): [number, number] => {
        return this._resolution;
    }
    getComments = (): UserComment[] => {
        return this._comments;

    }

    //All Setters for Video Class
    setID = (value: string) => {
        this._ID = value;
    }
    setTitle = (value: string) => {
        this._title = value;
    }
    setPublishedDate = (value: string) => {
        this._publishedDate = value;
    }
    setChannelID = (value: string) => {
        this._channelID = value;
    }
    setDescription = (value: string) => {
        this._description = value;
    }
    setThumbnailURL = (value: string) => {
        this._thumbnailURL = value;
    }
    setTags = (value: string[]) => {
        this._tags = value;
    }
    setDuration = (value: Time) => {
        this._duration = value;
    }
    setCaptionsAvailable = (value: boolean) => {
        this._captionsAvailable = value;
    }
    setResolution = (value: [number, number]) => {
        this._resolution = value;
    }
   

    // Other methods of Video Class

    //This method reads all the comment texts from comments array and creates a string array of comments and returns it as a string array
    getCommentsAsStringArray = (): string[] => {
        let commentArray = this._comments;
        let allComments: string[] = [];

        for (let index = 0; index < commentArray.length; index++) {
            let commentText = " \"" + commentArray[index].getComment() + "\" By " + commentArray[index].getUserID() + " On " + commentArray[index].getDate();
            allComments.push(commentText);
        }
        return allComments;
    }


    //This method reads the "duration" property and creates a string out of it in "HMS" format.And return it
    getDurationAsString=():string=>{
        let hours: string = "" + this._duration.getHours();
        let minutes: string = "" + this._duration.getMinutes();
        let seconds: string = "" + this._duration.getSeconds();
        return `${hours}Hrs. ${minutes}Min. ${seconds}Secs.`;
    }
 

    //this methods allow as to add any number of views,likes,dislikes to the video
    addViews = (i: number) => {
        this._views = this._views + i;
    }
    addLikes = (i: number) => {
        this._likes = this._likes + i;
    }
    addDislikes = (i: number) => {
        this._dislikes = this._dislikes + i;
    }
    addComment = (comment: UserComment) => {
        this._comments.push(comment);
    }

    /*Yet to be implemented */
    //This method returns similar videos based on the Tags of current video.
    //It should find some videos whose tags are somewhat same as the current video.
    getSimilarVideos=()=>{
        console.log("Class Video-Method:getSimilarVideos() \n******* Yet to be Implemented *******");
        
    }





    //This method returns the overall information about the video
    //This method eventually uses the Getter methods
    getVideoDetails = (): string => {
        let mandatoryDetails = `ID:${this.getID()}\nTitle:${this.getTitle()}\nPublished Date:${this.getPublishedDate()}\nChannel ID:${this.getChannelID()}`;
        let optionalDetails = `Description:${this.getDescription()}\nThumbnail URL:${this.getThumbnailURL()}\nTags:${this.getTags()}\nViews:${this.getViews()}\nLikes:${this.getLikes()}\nDislikes:${this.getDislikes()}`;
        let comments = `Comments:${this.getCommentsAsStringArray()}`
        let optionalDetails2 = `Duration:${this.getDurationAsString()}\nCaptions Available:${this.getCaptionsAvailable()}\nResolution:${this.getResolution()}`;
        let details = `${mandatoryDetails}\n${optionalDetails}\n${optionalDetails2}\n${comments}`;
        return details;
    }









}

//This class is used to hold time(This class is used by duration property of Video Class)
class Time {
    private _hours: number;
    private _minutes: number;
    private _seconds: number;

    constructor(hours: number, minutes: number, seconds: number) {
        this._hours = hours;
        this._minutes = minutes;
        this._seconds = seconds;
    }

    getHours = (): number => {
        return this._hours;
    }

    getMinutes = (): number => {
        return this._minutes;
    }

    getSeconds = (): number => {
        return this._seconds;
    }


}


//UserComment class created since a comment itself comprises of 1.user that comments,2.actual comment text and 3.the date of comment done.
class UserComment {
    private _userID: string;
    private _comment: string;
    private _date: string;


    constructor(userID: string, comment: string, date: string) {
        this._userID = userID;
        this._comment = comment;
        this._date = date;
    }

    getComment = (): string => {
        return this._comment;
    }

    getUserID = (): string => {
        return this._userID;
    }

    getDate = (): string => {
        return this._date;
    }


}


let newVideo = new Video("I11599", "Aircraft", "20/03/2018", "ScienceTech", new Time(11, 12, 13), true, [1024, 768], "This is dummy text for description", "image.jpg", ["Aircraft,plane,rocket,SomeRandomTag1,SomeRandomTag2"])
console.log(newVideo.getVideoDetails());

newVideo.addLikes(5);
newVideo.addDislikes(1);

let newComment1 = new UserComment("Rakesh Joshi", "Very Good video", "12/02/2018");
let newComment2 = new UserComment("Bomkesh Bakshi", "Glad you uploaded it!", "28/06/2018");

newVideo.addComment(newComment1);
newVideo.addComment(newComment2);


let newcomment3=new UserComment("Ashok Tiwari","The way you put down things.Its pretty awesome","16/10/2018")
newVideo.addComment(newcomment3);

newVideo.addViews(35);

console.log(newVideo.getVideoDetails());


newVideo.getSimilarVideos();