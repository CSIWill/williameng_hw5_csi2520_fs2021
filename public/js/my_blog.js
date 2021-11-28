let commentButton = document.querySelectorAll('.input');
mainCommentButton = document.getElementById('main_btn');
const content = document.querySelector('main');
let myContent = mainCommentButton.parentNode;
// console.log(myContent);

// allow user to enter information

function replyMain(e) {
    let replies = document.createElement('section');
    let replyWindow = document.createElement('textarea');
    replyWindow.setAttribute('label','Enter Response');
    let postReply = document.createElement('button');
    postReply.innerHTML = "Post";
    let innerReply = document.createElement('div');
    let replyMessage = document.createElement('p');
    // replyMessage.innerHTML = replyWindow.value;
    let replyButton = document.createElement('button');
    replyButton.setAttribute('class','reply');
    replyButton.innerHTML = "Reply";
    if (e.target.className == 'input') {
        myContent = mainCommentButton.parentNode;
        console.log(myContent);
        console.log("hello");
    }
    // else {
    //     myContent = replyWindow.parentNode;
    // }

    myContent.append(replies);
    console.log(myContent)
    replies.append(replyWindow);
    replies.append(postReply);
    postReply.addEventListener('click',reReply);
    postReply.setAttribute('class','post');
    console.log(postReply);
    console.log(e.target.className);
    
    // save information and display

    function reReply() {
        // let innerReply = document.createElement('div');
        // let replyMessage = document.createElement('p');
        replyMessage.innerHTML = replyWindow.value;
        // let replyButton = document.createElement('button');
        // replyButton.setAttribute('class','reply');
        // replyButton.innerHTML = "Reply";
        replies.append(innerReply);
        innerReply.append(replyMessage);
        innerReply.append(replyButton);
        
        // get rid of entry box and reply button

        replyWindow.remove();
        postReply.remove();

        replyButton.addEventListener('click',replyMain);
        myContent = replyButton.parentNode;

        console.log(e.target.className);

    };
};
mainCommentButton.addEventListener('click',replyMain);
