
class Song {
constructor(title, author, isbn) {
this.title = title;
this.author = author;
this.isbn = isbn;

}

}

class UI {

addSongToList(song) {

        const list = document.getElementById('song-list');
        const row = document.createElement('tr');
        row.innerHTML = `

        <td>${song.title}</td>
        <td>${song.author}</td>
        <td>${song.isbn}</td>
        <td><a href="" class="delete">X</a></td>

        `;
list.appendChild(row);


}

showAlert(message, className){

            const div = document.createElement('div');

            //Add className

            div.className = `alert ${className}`;

            div.appendChild(document.createTextNode(message));

            const container = document.querySelector('.container');

            //Get Form

            const form = document.querySelector('#song-form');

            //Insert alert

            container.insertBefore(div, form);

            // Timeout after 3 sec

            setTimeout(function(){

                document.querySelector('.alert').remove();
            }, 3000);


}
deleteSong(target) {

    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();

    }
}

clearFields(){

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

}

}

//Event Listening

document.getElementById('song-form').addEventListener('submit',function(e){

    //Get form values

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    //Instantiate song
    const song = new Song(title, author, isbn);

    //Instantiate UI
    const ui = new UI();

    //Validate
    if(title === '' || author === '' || isbn === '') {

        //Error alert

        ui.showAlert('Lütfen Tüm Boş Alanları Doldurun !', 'error');
    }
    else{

    //Add Song to list

    ui.addSongToList(song);

    //show success

    ui.showAlert('Şarkı Eklendi', 'success');

    // Clear Fields

    ui.clearFields();

    }

    e.preventDefault();
    })

    //Event listening for delete
    document.getElementById('song-list').addEventListener('click', function(e){

    //Instantiate UL
    const ui = new UI();

    // Delete Song
    ui.deleteSong(e.target);

    //Show Message

    ui.showAlert('Şarkı Kaldırıldı!', 'success');


    e.preventDefault();
    });
