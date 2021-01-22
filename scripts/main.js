class FetchData{
    getResource = async url => {
        const res = await fetch(url);
        if (!res.ok){
            throw new Error (`Произошла ошибка: `+ res.status)
        }

        return res.json();
    }

    getPost = () => this.getResource(`./db/dataBase.json`);
}
class Twitter {
    constructor({user, listElem, modalElems, tweetElems}) {
        const fetchData = new FetchData();
        this.user = user;
        this.tweets = new Posts();
        this.elements = {
            listElem: document.querySelector(listElem),
            modal: modalElems,
            tweetElems,
        }
        fetchData.getPost()
                .then(data => {
                    data.forEach(this.tweets.addPost,this.tweets);
                    this.showAllPosts();
                });
        this.elements.modal.forEach(this.handlerModal, this);
        this.elements.tweetElems.forEach(this.addTweet, this);
        
    }

    addTweet({text, imgBtn, submitBtn}){
        const textElem = document.querySelector(text);
        const imgBtnElem = document.querySelector(imgBtn);
        const submitBtnElem = document.querySelector(submitBtn);
        let imgUrl =''

        submitBtnElem.addEventListener('click', () => {
            this.tweets.addPost({
                userName: this.user.name,
                nickname: this.user.nickname,
                text: textElem.innerHTML,
                img: imgUrl,
            })
            this.showAllPosts();
        })

    }

    renderPosts(tweets){
        this.elements.listElem.textContent = '';
        tweets.forEach(({id, userName, nickname, getDate, text, img, likes}) => {
            this.elements.listElem.insertAdjacentHTML(`beforeend`,`
            <li>
            <article class="tweet">
                <div class="row">
                    <img class="avatar" src="images/${nickname}.jpg" alt="Аватар пользователя ${userName}">
                    <div class="tweet__wrapper">
                        <header class="tweet__header">
                            <h3 class="tweet-author">${userName}
                                <span class="tweet-author__add tweet-author__nickname">@${nickname}</span>
                                <time class="tweet-author__add tweet__date">${getDate()}</time>
                            </h3>
                            <button class="tweet__delete-button chest-icon" data-id = "${id}"></button>
                        </header>
                        <div class="tweet-post">
                            <p class="tweet-post__text">${text}</p>
                            ${img ?
                            `<figure class="tweet-post__image">
                                <img src="${img}" alt="Иллюстрация к постам ${nickname}">
                            </figure>` : 
                        ''}
                        </div>
                    </div>
                </div>
                <footer>
                    <button class="tweet__like">
                        ${likes}
                    </button>
                </footer>
            </article>
        </li>
        `)});
    }

    showUserPost(){

    }

    showLikesPost(){

    }

    handlerModal({button, modal, overlay, close}){
        const buttonElem = document.querySelector(button);
        const modalElem = document.querySelector(modal);
        const overlayElem = document.querySelector(overlay);
        const closeElem = document.querySelector(close);

        const showModal = () => {
            modalElem.style.display = 'block'; 
        }

        const closeModal = (elem,event) => {
            const target = event.target;
            if(target === elem){
                modalElem.style.display = 'none';
            }
        }

        buttonElem.addEventListener('click', showModal);
        if(closeElem){
            closeElem.addEventListener('click', closeModal.bind(null,closeElem));
        }

        if(overlayElem){
            overlayElem.addEventListener('click', closeModal.bind(null, overlayElem));
        }
    }

    showAllPosts(){
        this.renderPosts(this.tweets.posts);
    }
}

class Posts {
    constructor({posts = []} = {}) {
        this.posts = posts;
    }
    

    addPost = tweet => {
        this.posts.push(new Post(tweet));
    }

    deletePost(id){
        const ind = this.posts.findIndex(i => i.id === id);
        this.posts.splice(ind, 1);
    }   

    likePost(id){

    }
}
class Post {
    constructor({id, userName, nickname, postDate, text, img, likes = 0}) {
        
        this.id = id || this.generateGuid();
        this.userName = userName;
        this.nickname = nickname;
        this.postDate = postDate ? new Date(postDate) : new Date();
        this.text = text;
        this.img = img;
        this.likes = likes;
        this.liked = false;
    }

    changeLike() {

    }

    generateGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16); 
        });
    }

    getDate = () => {
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }
        return this.postDate.toLocaleString('ru-RU', options)
    }
}

const twitter = new Twitter({
    listElem: '.tweet-list',
    user: {
        name: 'Алексей',
        nickname: 'alessey',
    },
    modalElems: [
        {
            button: '.header__link_tweet',
            modal: '.modal',
            overlay: '.overlay',
            close: '.modal-close__btn',
        }
    ],
    tweetElems: [
        {
            text: '.modal .tweet-form__text',
            imgBtn: '.modal .tweet-img__btn',
            submitBtn: '.modal .tweet-form__btn',
        }
    ]
});

twitter.tweets.deletePost("13");
twitter.tweets.likePost("12");
console.log('twitter', twitter);
//console.log('twitter', twitter);
