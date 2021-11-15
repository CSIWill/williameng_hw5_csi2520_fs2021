let commentButton = document.querySelectorAll('.input');
mainCommentButton = document.getElementById('main_btn');
const content = document.querySelector('main');
let myContent = mainCommentButton.parentNode;
// console.log(myContent);

// Add to Main Post
function replyMain() {
    let replies = document.createElement('section');
    let replyWindow = document.createElement('textarea');
    replyWindow.setAttribute('label','Enter Response');
    let postReply = document.createElement('button');
    postReply.innerHTML = "Post";
    myContent = mainCommentButton.parentNode;
      
    myContent.append(replies);
    console.log(myContent)
    replies.append(replyWindow);
    replies.append(postReply);

    postReply.addEventListener('click',reReply);
    postReply.setAttribute('class','post');
    console.log(postReply);
    function reReply() {
        let innerReply = document.createElement('div');
        let replyMessage = document.createElement('p');
        replyMessage.innerHTML = replyWindow.value;
        let replyButton = document.createElement('button');
        replyButton.setAttribute('class','reply');
        replyButton.innerHTML = "Reply";
        replies.append(innerReply);
        innerReply.append(replyMessage);
        innerReply.append(replyButton);
        // let rreplies = document.createElement('section');
        //     let rreplyWindow = document.createElement('textarea');
        //     rreplyWindow.setAttribute('label','Enter Response');
        //     let rpostReply = document.createElement('button');
        replyWindow.remove();
        postReply.remove();
        // rreplyWindow.remove();
        // rpostReply.remove();
        replyButton.addEventListener('click',replyMain);
        // replyButton.addEventListener('click',reReplyMain);
        function reReplyMain() {
            // let rreplies = document.createElement('section');
            // let rreplyWindow = document.createElement('textarea');
            // rreplyWindow.setAttribute('label','Enter Response');
            // let rpostReply = document.createElement('button');
            rpostReply.innerHTML = "Post";
            myContent = replyButton.parentNode;
            myContent.append(rreplies);
            console.log(myContent)
            rreplies.append(rreplyWindow);
            rreplies.append(rpostReply);
            rpostReply.addEventListener('click',reReply);
        }
    };
    // mainCommentButton.addEventListener('click',replyMain);
    
    console.log(mainCommentButton);
};
mainCommentButton.addEventListener('click',replyMain);
// commentButton = document.querySelectorAll('.reply');
// commentButton[0].addEventListener('click',replyMain);

// mainCommentButton.addEventListener('click',replyMain,mainCommentButton.parentNode);