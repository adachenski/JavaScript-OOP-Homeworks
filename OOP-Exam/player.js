/**
 * Created by Just Nasko on 4/23/2016.
 */

var module = (function () {
    var playlist,
        playable,
        audio,
        video,
        validator,
        CONSTANTS={
            TEXT_MIN_LENGHT :3,
            TEXT_MAX_LENGHT:25,
            IMDB_RATING_MIN:1,
            IMDB_RATING_MAX:5
        };


    validator={
        validateIfUndefined:function(value,name){
            name= name||"Value";
            if(value=== undefined){
                throw  new Error(name+' cannot be undefined!');
            }
        },
        validateIfNumber:function(value,name){
            name = name||"Value";
            if(typeof value!=='number'){
                throw new Error(name+' must be a number');
            }
        },
        validateString:function(value,name){

            name = name||"Value";

            this.validateIfUndefined(value,name);

            if(typeof value !=='string'){
                throw  new Error(name+' must be a string!');
            }
            if(value.length<CONSTANTS.TEXT_MIN_LENGHT||value.length>CONSTANTS.TEXT_MAX_LENGHT){
                throw new Error(name+' must be between '+CONSTANTS.TEXT_MIN_LENGHT+
                " and "+CONSTANTS.TEXT_MAX_LENGHT);
            }
        },
        validatePositiveNumber:function(value,name){
            name = name||"Value";

            this.validateIfUndefined(value,name);

            this.validateIfNumber(value,name);

            if(value <= 0){
                throw new Error(name+' must be a positive number!');
            }
        },
        validateIMDBRating:function(value,name){
            name = name||"Value";
            this.validateIfUndefined(value,name);
            this.validateIfNumber(value,name);
            if(value<CONSTANTS.IMDB_RATING_MIN||value>CONSTANTS.IMDB_RATING_MAX){
                throw new Error(name+' must be a valid number between '+
                CONSTANTS.IMDB_RATING_MIN+" and "+CONSTANTS.IMDB_RATING_MAX);
            }
        },
        validateObject:function(value,name){
            name = name || 'Value';
            if(typeof value !== 'object'){
                throw new Error(name+' must be a valid object');
            }
        },
        validatePlayableId:function(value){

            this.validateIfUndefined(value,'Playable ID');

            if(typeof value !=='number'){
                //ducktyping
                value = value.id;
            }

            this.validateIfUndefined(value,'Playable ID');
            return value;
        },
        validatePageAndSize:function(page,size,maxElements){
            this.validateIfUndefined(page);
            this.validateIfUndefined(size);
            this.validateIfNumber(page);
            this.validateIfNumber(size);
            if(page<0){
                throw new Error('Page must be grater or equal to Zero');
            }
            this.validatePositiveNumber(size,'Size');
            if(page*size>maxElements){

                throw new Error('Page * Size is more than max Elements count');
            }
        }

    };

    playlist=(function(){

        var playlist ={};
        var playListId =0;

        function findIndexInPlaylist(id){
            var i,len;
            for(i = 0, len = this._playables.length;i<len;i+=1){
                var currentPlayable = this._playables[i];
                if(currentPlayable.id==id){
                    return i;
                }
            }
            return -1;
        }

        function SorthByTitleThenById(first,second){
            if(first.title<second.title){

                return -1;
            }
            else if(first.title>second.title){

                return 1;
            }
            if(first.id<second.id){
                return -1;
            }
            else if(first.id>second.id){
                return 1;
            }
            else{
                return 0;
            }
        }


        Object.defineProperty(playlist,'init',{

            value:function(name){
                this.name = name;
                this._id = ++playListId;
                this._playables = [];
                return this;
            }
        });

        Object.defineProperty(playlist,'id',{

            get:function(id){
                return this._id;
            }
        });

        Object.defineProperty(playlist,'name',{
           get:function(){
               return this._name;
           },
            set:function(value){
                validator.validateString(value,'Playlist name');
                this._name=value;
            }
        });

        Object.defineProperty(playlist,'addPlayable',{
           value:function(playable){
               validator.validateIfUndefined(playable,'Playlist addPlayable');
               validator.validateObject(playable,'Playlist addPlayable');
               validator.validateIfUndefined(playable.id,'Playlist ID');
               this._playables.push(playable);
               return this;
           }
        });

        Object.defineProperty(playlist,'getPlayableById',{
            value:function(id){
                var i, len;
                validator.validateIfUndefined(id,"Playlist ID");
                validator.validateIfNumber(id,'Playlist ID');
                var foundIndex = findIndexInPlaylist.call(this,id);
                if(foundIndex<0){
                    return null;
                }
                return this._playables[foundIndex];
            }
        });

        Object.defineProperty(playlist,'removePlayable',{
            value:function(id){
                id = validator.validatePlayableId(id);

                var foundIndex = findIndexInPlaylist.call(this,id);

                if(foundIndex<0){
                    throw  new Error('Playable with id '+id+' was not found in playlist');
                }

                this._playables.splice(foundIndex,1);

                return this;
            }
        });

        Object.defineProperty(playlist,'listPlayables',{
            value:function(page,size){

                validator.validatePageAndSize(page,size,this._playables.length)

                return this
                    ._playables
                    .slice()
                    .sort(SorthByTitleThenById)
                    .splice(page*size,size)
            }
        });

        return playlist;

    }());

    playable=(function(){
        var currentId= 0,
            playable = Object.create({});

        Object.defineProperty(playable,"init",{
           value:function(title,author){

               this.title = title;
               this.author= author;
               this._id= ++currentId;
               return this;
           }
        });

        Object.defineProperty(playable,"id",{
            get:function(){
                return this._id;
            }
        });

        Object.defineProperty(playable,"title",{
            get:function(){
                return this._title;

            },
            set:function(value){
                validator.validateString(value,"Playable Title");
                this._title = value;
            }
        });

        Object.defineProperty(playable,"author",{
            get:function(){
                return this._author;
            },
            set:function(value){
                validator.validateString(value,"Playable Author");
                this._author = value;
            }
        });

        Object.defineProperty(playable,"play",{
            value:function(){
                return this.id+"."+this.title+" - "+this.author;
            }
        });

        return playable;
    }());

    audio = (function(parent){
        var audio = Object.create(parent);

        Object.defineProperty(audio,"init",{
            value:function(title,author,length){
                parent.init.call(this,title,author);
                this.length = length;
                return this;
            }
        });

        Object.defineProperty(audio,"length",{
           get:function(){
                return this._length;
           },
            set:function(value){
                validator.validatePositiveNumber(value,"Audio length");
                 this._length = value;
            }
        });

        Object.defineProperty(audio,"play",{
            value:function(){
                var fromParent = parent.play.call(this);
                return fromParent+" - "+this.length;
            }
        });

        return audio;

    }(playable));

    video = (function(parent){
        var video = Object.create(parent);

        Object.defineProperty(video,"init",{
            value:function(title,author,imdbRating){
                parent.init.call(this,title,author);
                this.imdbRating = imdbRating;
                return this;
            }
        });

        Object.defineProperty(video,"imdbRating",{
            get:function(){
                return this._imdbRating;
            },
            set:function(value){
                validator.validateIMDBRating(value,"IMDB Rating");
                this._imdbRating = value;
            }
        });

        Object.defineProperty(video,'play',{
           value:function(){
               var fromParent = parent.play.call(this);
               return fromParent+' - '+this.imdbRating;
           }
        });

        return video;
    }(playable));

    return {
        getPlayer: function (name) {
            // returns a new player instance with the provided name
        },
        getPlaylist: function (name) {
            return Object.create(playlist).init(name);
        },
        getAudio: function (title, author, length) {
            return Object.create(audio).init(title,author,length);
        },
        getVideo: function (title, author, imdbRating) {
            return Object.create(video).init(title,author,imdbRating);
        }
    };

}());

var playlist = module.getPlaylist('Nasko playlist');

//for(var i = 1; i<10; i+=1) {
//    var currentAudio = module.getAudio("Audio " + i, "Author " + i, i);
//    playlist.addPlayable(currentAudio)
//
//}
//for(var i = 1; i<10; i+=1) {
//    var currentVideo = module.getVideo("Video " + i, "AuthorVideo " + i, 4);
//    playlist.addPlayable(currentVideo);
//
//}
var audio = module.getAudio("Dngerous","Michele Jackson",1);
var seconAudio = module.getAudio("Awost Famos","Qba",2);

playlist.addPlayable(audio).addPlayable(seconAudio);

console.log(playlist.listPlayables(0,2));