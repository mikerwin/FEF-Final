function loadGit(){
  var xhttp = new XMLHttpRequest();

 xhttp.onreadystatechange = function() {
     if(this.readyState === 4 && this.status === 200) {
       createRepos(JSON.parse(this.responseText))
   }
 }
 xhttp.open('GET', 'https://api.github.com/users/mikerwin/repos', true )
 xhttp.send()


function createRepos(repos) {
    let container = document.getElementById('gitcall');
 let output = []
    repos.forEach(function(repo) {

   output.push(`<p>${repo.name} <a href= "${repo.html_url}"></p>`);
   output.push(`<p>${repo.html_url}<p>`)
   
 })
 container.innerHTML = output.join('');
}
}


  

  $(document).ready(function(){    
    $(".icons").hover(function(){
        $(this).css("font-size", "80px");
    }, function(){
        $(this).css("font-size","60px");
    });


});