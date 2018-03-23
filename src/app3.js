
document.getElementById('button').addEventListener('click',loadData);

function loadData(){
    //Create an XHR Object
    const xhr = new XMLHttpRequest();
    //Open (jedna z metod obiektu xhr)
    xhr.open('GET', 'data.txt', true);

    //tu możemy śledzić progress
    xhr.onprogress = function(){
        console.log('READYSTATE: ', xhr.readyState);
    }

    //obsługa błędów
    xhr.onerror = function(){
        console.log('Error');
    }


    // w tej funkcji robimy wszytko co potrzeba z danymi
    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
            document.getElementById('output').innerHTML = `
            <h1>${this.responseText}</h1>
            `;
        }
    }

    xhr.send();
}
