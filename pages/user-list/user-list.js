import { getAllUsers } from "../../services/authService.js";

(() => {
    const users = Object.values(getAllUsers());
    console.log(users);
    users.forEach(user => {
        createUserCard(user)
    });
    

})();

function createUserCard (userdata) {

    const userContainer = document.getElementsByClassName('user-container')[0];

    const article = document.createElement('article');
    article.classList.add('user-card');

    const divImgContainer = document.createElement('div');
    divImgContainer.classList.add('card-img');

    const img = document.createElement('img');
    img.src = "../../images/user-icon.png"
   
    const name = document.createElement('p');
    name.classList.add('card-name');
    name.textContent = `${userdata.firstName} ${userdata.lastName}`

    const email = document.createElement('p');
    email.textContent = userdata.email;

    const dateOfBirth = document.createElement('p');
    dateOfBirth.textContent = `Date of birth: .....`

    const divBtnContainer = document.createElement('div');
    const editBtn = document.createElement('button');
    editBtn.classList.add('btn');
    editBtn.classList.add('edit');
    editBtn.textContent ='Edit';
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn');
    deleteBtn.classList.add('delete');
    deleteBtn.textContent = 'Delete';

    article.appendChild(divImgContainer);
    divImgContainer.appendChild(img);
    article.appendChild(name);
    article.appendChild(email);
    article.appendChild(dateOfBirth);
    article.appendChild(divBtnContainer);
    divBtnContainer.appendChild(editBtn);
    divBtnContainer.appendChild(deleteBtn);

    userContainer.appendChild(article)

}

{/* <article class="user-card">
    <div class="card-img">
        <img src="../../images/user-icon.png">
    </div>
        <p class="card-name">Petya Nikleva</p>
        <p class="card-email">petya@mail.com</p>
        <p class="card-date-of-birth">Date of birth: 06.02</p>
        <div class="btn-container">
            <button class="btn edit">Edit</button>
            <button class="btn delete">Delete</button>
         </div>
</article> */}


