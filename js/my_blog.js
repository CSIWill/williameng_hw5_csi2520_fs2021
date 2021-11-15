let commentButton = document.querySelectorAll('.input');
// console.log(commentButton);
// let mainCommentButton = commentButton[0];
mainCommentButton = document.getElementById('main_btn');
const content = document.querySelector('main');
// console.log(content)
// const myContent = document.getElementById('blog');
let myContent = mainCommentButton.parentNode;
// console.log(myContent);
let currentContent = commentButton[0];


// Add to Main Post
function replyMain() {
    let replies = document.createElement('section');
    let replyWindow = document.createElement('textarea');
    replyWindow.setAttribute('label','Enter Response');
    let postReply = document.createElement('button');
    postReply.innerHTML = "Post";
    
    myContent.append(replies);
    console.log(myContent)
    replies.append(replyWindow);
    replies.append(postReply);
    myContent = mainCommentButton.parentNode;
    postReply.addEventListener('click',reReply);

    console.log(postReply);
    function reReply() {
        let innerReply = document.createElement('div');
        let replyMessage = document.createElement('p');
        replyMessage.innerHTML = replyWindow.value;
        let replyButton = document.createElement('button');
        replyButton.innerHTML = "Reply";
        replies.append(innerReply);
        innerReply.append(replyMessage);
        innerReply.append(replyButton);
        replyWindow.remove();
        postReply.remove();
        replyButton.addEventListener('click',replyMain,true);
        myContent = replyButton.parentNode;
        console.log(replyButton);
        // mainCommentButton.addEventListener('click',replyMain);
    };
    // mainCommentButton.addEventListener('click',replyMain,);
    
    console.log(mainCommentButton);
};

// // document.getElementById('main_btn').addEventListener('click',replyMain);


mainCommentButton.addEventListener('click',replyMain, true);

// Add Input Field
// function addInputField() {
//     let replies = document.createElement('section');
//     replies.setAttribute('class','response')
//     let inputBox = document.createElement('textarea');
//     inputBox.setAttribute('id', 'reply')
//     // inputBox.innerHTML="Enter Text Here";
//     let postButton = document.createElement('button');
//     postButton.innerHTML = "Post Comment";
//     postButton.setAttribute('id', 'post')
//     // console.log(myContent);
//     myContent.appendChild(replies);
//     replies.appendChild(inputBox);
//     replies.appendChild(postButton);
//     let displayButton = document.getElementById('post');
//     // console.log(displayButton);
//     // Listen for the response to the reply
//     displayButton.addEventListener('click', function() {
//         let message = inputBox.value;
//         // let postResponse = document.createElement('section');
//         let postMessage = document.createElement('p');
//         postMessage.innerHTML = message;
//         // console.log(inputBox.parentNode);
//         let replyButton = document.createElement('button');
//         replyButton.innerHTML = "Reply";
//         replyButton.setAttribute('class', 'replies');
//         // replies.parentNode.append(postResponse);
//         // postResponse.append(postMessage);
//         // postResponse.append(replyButton);
//         replies.append(postMessage);
//         replies.append(replyButton);
//         // commentButton = document.querySelectorAll('.replies');
//         // console.log(commentButton);
//         // replies.remove();
//         inputBox.remove();
//         postButton.remove();
//         // replyButton.addEventListener('click', addInputField);
//     });
//     // for(let index = 0; index < commentButton.length; index++) {
//     //     currentContent = commentButton[index];
//     //     commentButton[index].addEventListener('click', addInputField);
//     // }    
// };

// //listen for the response to main
// mainCommentButton.addEventListener('click', addInputField);

// for(let index = 0; index < commentButton.length; index++) {
//     myContent = commentButton[index].parentNode;
//     console.log(myContent);
//     console.log(commentButton);
//     commentButton[index].addEventListener('click', addInputField);
// }    