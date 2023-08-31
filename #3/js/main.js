$(document).ready(function(){
  $('#searchUser').on('keyup', function(e){
    let username = e.target.value;

    // Make request to Github
    $.ajax({
        url:'https://api.github.com/users/'+username,
        data:{
          client_id:'5848f28a7a43119381a3',
          client_secret:'eba2e7f61178f57647d2f4f30dd7d697ce1dff64'
        }

    }).done(function(user){
      $.ajax({
        url:'https://api.github.com/users/'+username+'/repos',
        data:{
          client_id:'5848f28a7a43119381a3',
          client_secret:'eba2e7f61178f57647d2f4f30dd7d697ce1dff64',
          sort: 'created: asc',
          per_page: 5
        }
      }).done(function(repos){
        $.each(repos, function(index, repo){
          $('#repos').append(`
            <div class="card">
              <div class="row">
                <div class="col-md-7">
                  <strong>${repo.name}</strong>: ${repo.description}
                </div>
                <div class="col-md-4">
                  <span class="badge text-bg-primary">Stars: ${repo.stargazers_count}</span>
                  <span class="badge text-bg-secondary">Watchers: ${repo.watchers_count}</span>
                  <span class="badge text-bg-success">Forks: ${repo.forks_count}</span>
                </div>
                <div class="col-md-1">
                  <a href="${repo.html_url}" target="_blank" class="btn btn-info btn-sm">Repo Page</a>
                </div>
              </div>
            </div>
          `);
        });
      });

      $('#profile').html(`
      <div class="card border-primary mb-3" style="max-width: 100rem;">
        <div class="card-header"><h3>${user.name}</h3></div>
        <div class="card-body">
          <div class="row">
          
          <div class="col-md-3">
            <img class="img-thumbnail avatar" src="${user.avatar_url}">
            <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">프로필 보기</a>
          </div>

          <div class="col-md-9">
            <span class="badge text-bg-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge text-bg-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge text-bg-success">Followers: ${user.followers}</span>
            <span class="badge text-bg-info">Following: ${user.following}</span>

            <br><br>
            
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/blog: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>

            </div>
          </div>
        </div>
      </div>
      <br>
      <h3 class="page-header">Latest Repos</h3>
      <br>
      <div id="repos"></div>
      
      `);
    });
  });
});