function Guid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16); 
      });
    }

const arr = [
    {
        "id": "1",
        "userName": "Олег Васильевич",
        "nickname": "vasil",
        "text": "Где детонатор?",
		"postDate": "02.14.2012, 05:00"
    },
    {
        "id": "12",
        "userName": "Brock",
        "nickname": "brock",
        "text": "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.",
        "postDate": "02.05.2012, 13:27",
        "img": "https://fish-text.ru/images/logo.png",
        "liked": "true",
        "likes": 50
    },
    {
        "id": "13",
        "userName": "Raamin",
        "nickname": "raamin",
        "text": "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.",
        "postDate": "03.11.2012, 10:30",
        "likes": 999
    },
    {
        "id": "14",
        "userName": "Дональд",
        "nickname": "trampampam",
        "text": "Зарегался на вк, хороший сервис и не банят",
        "postDate": "02.05.2012, 13:27",
        "img": "https://i2.wp.com/media.globalnews.ca/videostatic/news/vamt80qbaq-94ovmaxjqg/trumptwitterupdate.jpg?w=500&quality=70&strip=all",
        "likes": 50
        
    }
    ,
    {
        "id": "15",
        "userName": "Олег Васильевич",
        "nickname": "vasil",
        "text": "Где детонатор?",
        "postDate": "02.14.2012, 05:00",
        "img": "https://www.meme-arsenal.com/memes/27606cb09d10f670389750cffb4d900d.jpg",
        "likes": 666
    },
    {
        "id": "123",
        "userName": "Raamin",
        "nickname": "raamin",
        "text": "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.",
        "postDate": "03.11.2012, 10:30",
        "likes": 999
    }
];

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
    constructor({posts = arr} = {}) {
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
    constructor(params) {
        this.id = params.id !== undefined ? params.id : Guid();
        this.userName = params.userName;
        this.nickname = params.nickName;
        this.postDate = params.postDate;
        this.text = params.text;
        this.img = params.img;
        this.likes = params.likes;
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
}

const twitter = new Twitter({
    listElem: '.tweet-list'
});

twitter.tweets.deletePost("13");
twitter.tweets.likePost("12");
console.log('twitter', twitter);
//console.log('twitter', twitter);
