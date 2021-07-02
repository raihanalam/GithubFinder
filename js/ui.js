class UI{
    constructor(){
        this.profile = document.querySelector('#profile');
    }

    showProfile(user){
        this.clearAlert();
        this.profile.innerHTML = `
        <div class = "card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>

                <div class="col-md-9">
                    <h3>${user.name}</h3>
                    <small>${user.bio}</small><br><br>
                    <span class="badge bg-primary" >Public Repos: ${user.public_repos}</span>
                    <span class="badge bg-secondary" >Public Gitsts: ${user.public_gists}</span>
                    <span class="badge bg-success" >Followers: ${user.followers}</span>
                    <span class="badge bg-info" >Following: ${user.following}</span>
                    
                    <br><br>

                    <ul clas="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Account Created: ${user.created_at}</li>
                    </ul>
                </div>
            </div>  
        </div>
        `;
    }

    clearProfile(){
        this.profile.innerHTML = '';
    }

    showAlert(msg,className){
        this.clearProfile();
        this.clearAlert();
        let div = document.createElement('div');

        div.className = className;
        div.appendChild(document.createTextNode(msg));

        let container = document.querySelector('.searchContainer');
        let search = document.querySelector('.serach');

        container.insertBefore(div,search);

    }
    clearAlert(){
        let currentAlert= document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
}