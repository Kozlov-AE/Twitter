class Twitter {
    constructor({listElem}) {
        this.tweets = new Posts(arr);
        this.elements = {
            listElem: document.querySelector(listElem)
        }
    }

    renderPosts(){

    }

    showUserPost(){

    }

    showLikesPost(){

    }

    openModal(){

    }

    showAllPosts(){

    }
}

class Posts {
    constructor({posts = []} = {}) {
        this.posts = posts;
    }
    

    addPost(tweet){
        this.posts.push(new Post(tweet));
    }

    deletePost(id){
        const ind = this.posts.findIndex(i => i.id === id);
        this.posts.splice(ind, 1);
    }   

    likePost(id){
        const pst = this.posts.find(i => i.id === id);
        pst.changeLike;
    }
}
class Post {
    constructor({id, userName, nickname, postDate, text, img, likes = 0}) {
        
        this.id = id || generateGuid();
        this.userName = userName;
        this.nickname = nickName;
        this.postDate = postDate ? new Date(postDate) : new Date();
        this.text = text;
        this.img = img;
        this.likes = likes;
        this.liked = false;
    }

    changeLike() {
        this.liked = !this.liked;
        if(this.liked){
            this.likes++;
        }
        else {
            this.likes--;
        }
    }

    generateGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16); 
        });
    }

    getDate(){
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minutes: '2-digit',
        }
        return this.postDate.toLocaleString('ru-RU', options)
    }
}

const twitter = new Twitter({
    listElem: '.tweet-list'
});

twitter.tweets.deletePost("13");
twitter.tweets.likePost("12");
console.log('twitter', twitter);
//console.log('twitter', twitter);
