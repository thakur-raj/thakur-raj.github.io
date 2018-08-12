var Video = /** @class */ (function () {
    function Video(id, title, publishedDate, channelID, duration, captionsAvailable, resolution, description, thumbnailURL, tags) {
        var _this = this;
        this._views = 0;
        this._likes = 0;
        this._dislikes = 0;
        this._comments = [];
        //All Getters for Video Class
        this.getID = function () {
            return _this._ID;
        };
        this.getTitle = function () {
            return _this._title;
        };
        this.getPublishedDate = function () {
            return _this._publishedDate;
        };
        this.getChannelID = function () {
            return _this._channelID;
        };
        this.getDescription = function () {
            return _this._description;
        };
        this.getThumbnailURL = function () {
            return _this._thumbnailURL;
        };
        this.getTags = function () {
            return _this._tags;
        };
        this.getDuration = function () {
            return _this._duration;
        };
        this.getViews = function () {
            return _this._views;
        };
        this.getLikes = function () {
            return _this._likes;
        };
        this.getDislikes = function () {
            return _this._dislikes;
        };
        this.getCaptionsAvailable = function () {
            return _this._captionsAvailable;
        };
        this.getResolution = function () {
            return _this._resolution;
        };
        this.getComments = function () {
            return _this._comments;
        };
        //All Setters for Video Class
        this.setID = function (value) {
            _this._ID = value;
        };
        this.setTitle = function (value) {
            _this._title = value;
        };
        this.setPublishedDate = function (value) {
            _this._publishedDate = value;
        };
        this.setChannelID = function (value) {
            _this._channelID = value;
        };
        this.setDescription = function (value) {
            _this._description = value;
        };
        this.setThumbnailURL = function (value) {
            _this._thumbnailURL = value;
        };
        this.setTags = function (value) {
            _this._tags = value;
        };
        this.setDuration = function (value) {
            _this._duration = value;
        };
        this.setCaptionsAvailable = function (value) {
            _this._captionsAvailable = value;
        };
        this.setResolution = function (value) {
            _this._resolution = value;
        };
        // Other methods of Video Class
        //This method reads all the comment texts from comments array and creates a string array of comments and returns it as a string array
        this.getCommentsAsStringArray = function () {
            var commentArray = _this._comments;
            var allComments = [];
            for (var index = 0; index < commentArray.length; index++) {
                var commentText = " \"" + commentArray[index].getComment() + "\" By " + commentArray[index].getUserID() + " On " + commentArray[index].getDate();
                allComments.push(commentText);
            }
            return allComments;
        };
        //This method reads the "duration" property and creates a string out of it in "HMS" format.And return it
        this.getDurationAsString = function () {
            var hours = "" + _this._duration.getHours();
            var minutes = "" + _this._duration.getMinutes();
            var seconds = "" + _this._duration.getSeconds();
            return hours + "Hrs. " + minutes + "Min. " + seconds + "Secs.";
        };
        //this methods allow as to add any number of views,likes,dislikes to the video
        this.addViews = function (i) {
            _this._views = _this._views + i;
        };
        this.addLikes = function (i) {
            _this._likes = _this._likes + i;
        };
        this.addDislikes = function (i) {
            _this._dislikes = _this._dislikes + i;
        };
        this.addComment = function (comment) {
            _this._comments.push(comment);
        };
        /*Yet to be implemented */
        //This method returns similar videos based on the Tags of current video.
        //It should find some videos whose tags are somewhat same as the current video.
        this.getSimilarVideos = function () {
            console.log("Class Video-Method:getSimilarVideos() \n******* Yet to be Implemented *******");
        };
        //This method returns the overall information about the video
        //This method eventually uses the Getter methods
        this.getVideoDetails = function () {
            var mandatoryDetails = "ID:" + _this.getID() + "\nTitle:" + _this.getTitle() + "\nPublished Date:" + _this.getPublishedDate() + "\nChannel ID:" + _this.getChannelID();
            var optionalDetails = "Description:" + _this.getDescription() + "\nThumbnail URL:" + _this.getThumbnailURL() + "\nTags:" + _this.getTags() + "\nViews:" + _this.getViews() + "\nLikes:" + _this.getLikes() + "\nDislikes:" + _this.getDislikes();
            var comments = "Comments:" + _this.getCommentsAsStringArray();
            var optionalDetails2 = "Duration:" + _this.getDurationAsString() + "\nCaptions Available:" + _this.getCaptionsAvailable() + "\nResolution:" + _this.getResolution();
            var details = mandatoryDetails + "\n" + optionalDetails + "\n" + optionalDetails2 + "\n" + comments;
            return details;
        };
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
    return Video;
}());
//This class is used to hold time(This class is used by duration property of Video Class)
var Time = /** @class */ (function () {
    function Time(hours, minutes, seconds) {
        var _this = this;
        this.getHours = function () {
            return _this._hours;
        };
        this.getMinutes = function () {
            return _this._minutes;
        };
        this.getSeconds = function () {
            return _this._seconds;
        };
        this._hours = hours;
        this._minutes = minutes;
        this._seconds = seconds;
    }
    return Time;
}());
//UserComment class created since a comment itself comprises of 1.user that comments,2.actual comment text and 3.the date of comment done.
var UserComment = /** @class */ (function () {
    function UserComment(userID, comment, date) {
        var _this = this;
        this.getComment = function () {
            return _this._comment;
        };
        this.getUserID = function () {
            return _this._userID;
        };
        this.getDate = function () {
            return _this._date;
        };
        this._userID = userID;
        this._comment = comment;
        this._date = date;
    }
    return UserComment;
}());
var newVideo = new Video("I11599", "Aircraft", "20/03/2018", "ScienceTech", new Time(11, 12, 13), true, [1024, 768], "This is dummy text for description", "image.jpg", ["Aircraft,plane,rocket,SomeRandomTag1,SomeRandomTag2"]);
console.log(newVideo.getVideoDetails());
newVideo.addLikes(5);
newVideo.addDislikes(1);
var newComment1 = new UserComment("Rakesh Joshi", "Very Good video", "12/02/2018");
var newComment2 = new UserComment("Bomkesh Bakshi", "Glad you uploaded it!", "28/06/2018");
newVideo.addComment(newComment1);
newVideo.addComment(newComment2);
var newcomment3 = new UserComment("Ashok Tiwari", "The way you put down things.Its pretty awesome", "16/10/2018");
newVideo.addComment(newcomment3);
newVideo.addViews(35);
console.log(newVideo.getVideoDetails());
newVideo.getSimilarVideos();
