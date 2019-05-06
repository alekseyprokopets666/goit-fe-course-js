let body = document.body;

const posts = [
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-1.com'
    },
    {
        img: "https://placeimg.com/400/150/nature",
        title: "Post title 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-2.com'
    },
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-3.com'
    }
];


function createPostCard({
    imgSrc = '', titleText = '', textText = '', linkUrl = '',
}) {
    let container = document.createElement('div');
    let postImg = document.createElement('img');
    postImg.setAttribute('src', imgSrc);
    let postTitle = document.createElement('h2');
    postTitle.textContent = titleText;
    let postText = document.createElement('p');
    postText.textContent = textText;
    let postLink = document.createElement('a');
    postLink.setAttribute('href', linkUrl);

    container.appendChild(postLink);
    postLink.appendChild(postImg);
    postLink.appendChild(postTitle);
    container.appendChild(postText);
    
    return container;
}

let postList = [];

posts.forEach(post => {
    const el = createPostCard({
        imgSrc: post.img,
        titleText: post.title,
        textText: post.text,
        linkUrl: post.link,
    })
    postList.push(el);

});


let wrapper = document.createElement('div');
wrapper.append(...postList);

body.append(wrapper);