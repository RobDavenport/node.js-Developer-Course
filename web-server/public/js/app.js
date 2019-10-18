const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const line1 = document.querySelector('#line-1')
const line2 = document.querySelector('#line-2')

var loading = false;

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (loading)
        return;

    updateText('Loading...')
    loading = true;

    const location = search.value;

    fetch(document.URL + 'weather?search=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error)
                updateText(data.error)
            else 
                updateText(data.location, data.forecast)

            loading = false;
        })
    })
})

updateText = (str1 = '', str2 = '') => {
    line1.textContent = str1
    line2.textContent = str2
}