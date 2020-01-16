const loader = document.getElementById('loader');
const submit = document.querySelector('.submit-btn');
const formLoader = document.getElementById('formLoader');



function getPosts(e){
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = "<div></div>";
        data.forEach(function(post){
            output += `       
    <div class="row">

    <div class="column">
            <h3 class="column_title">${post.title}</h3>
            <p class="column_body">${post.body}</p>
            </div>


            <div class="column">
            <h3 class="column_title">${post.title}</h3>
            <p class="column_body">${post.body}</p>
            </div>
    
  </div>
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
}

function show(){
    loader.style.display = 'block';
    formLoader.style.display = 'none';
}

 function hide(){
     loader.style.display = 'none';
     formLoader.style.display = 'block';
 }
   

submit.addEventListener('click', function(){

    event.preventDefault();
    show();

    setTimeout(function(){
        hide();
    }, 1000)
});

submit.addEventListener('click', getPosts);
    
