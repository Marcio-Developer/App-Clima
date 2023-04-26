// Variáveis

const cityName = document.querySelector('#weatherInput');
const searchBtn = document.querySelector('#searchBtn');
const form = document.getElementById('weatherForm');
const myCity = document.getElementById('city');
const image = document.getElementById('weatherImage');
const weather = document.getElementById('weatherMain');
const temp = document.querySelector('.temp');
const dates = document.querySelector('.todayDates');
const times = document.getElementById('todayTime');
let date = new Date();

// Função funciona quando o usuário insere o nome da cidade
form.addEventListener('submit', function (e) {

    // preventDefault() para parar o recarregamento da página
    e.preventDefault();

    // Atualizando o nome da cidade
    let city = cityName.value;
    const myWeatherContainer = document.querySelector('.weatherContainer');
    const apiID = `931f131dde3f4ae2fcbc3289fc646471`;
    // API URL
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiID}`

    // Buscando dados da API do tempo
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {

        const tempValue = Math.round(data['main']['temp']);
        const weatherMain = data['weather'][0]['main'];
        weather.innerHTML = weatherMain;

        // Atualizando o DOM
        myCity.innerHTML = city;
        temp.innerHTML = `${tempValue}`
        weather.innerHTML = `${weatherMain}`
        temp.innerHTML = `${tempValue}<span><sup>o</sup>C</span.`;

        // Atualizando as imagens de acordo com o clima
        if (weatherMain == 'Clear') {
            image.src = `Img/Claro.PNG`
            myWeatherContainer.style.backgroundColor = '#71d90f'
        }
        if (weatherMain == 'Clouds') {
            image.src = `Img/Núvens.PNG`
            myWeatherContainer.style.backgroundColor = '#4f8ad6'
        }
        if (weatherMain == 'Rain') {
            image.src = `Img/Chuva.PNG`
            myWeatherContainer.style.backgroundColor = '#2c0587'
        }
        if (weatherMain == 'Drizzle') {
            image.src = `Img/Chuvisco.PNG`
            myWeatherContainer.style.backgroundColor = '#76a9ad'
        }
        if (weatherMain == 'Haze') {
            image.src = `Img/Neblina.PNG`
            myWeatherContainer.style.backgroundColor = '#74a9ad'
        }

        // Atualizando a data
        const currentMonth = date.getMonth();
        switch (currentMonth) {
            case 0:
                dates.innerHTML = `${date.getDate()} de Janeiro`
                break;
            case 1:
                dates.innerHTML = `${date.getDate()} de Fevereiro`
                break;
            case 2:
                dates.innerHTML = `${date.getDate()} de Março`
                break;
            case 3:
                dates.innerHTML = `${date.getDate()} de Abril`
                break;
            case 4:
                dates.innerHTML = `${date.getDate()} de Maio`
                break;
            case 5:
                dates.innerHTML = `${date.getDate()} de Junho`
                break;
            case 6:
                dates.innerHTML = `${date.getDate()} de Julho`
                break;
            case 7:
                dates.innerHTML = `${date.getDate()} de Agosto`
                break;
            case 8:
                dates.innerHTML = `${date.getDate()} de Setembro`
                break;
            case 9:
                dates.innerHTML = `${date.getDate()} de Outubro`
                break;
            case 10:
                dates.innerHTML = `${date.getDate()} de Novembro`
                break;
            case 11:
                dates.innerHTML = `${date.getDate()} de Dezembro`
                break;
        }

        // Atualizando a hora      
        function leftInterval() {
            const left = document.getElementById('todayTime')
            let leftDate = new Date();
            let hours = leftDate.getHours();
            let minutes = leftDate.getMinutes();
            let seconds = leftDate.getSeconds();

            if (hours == 0) {
                hours = 12;
            }

            if (hours > 12) {
                hours = hours - 12;
            }
            left.innerHTML = `${hours}h: ${minutes}m: ${seconds}s`
        }
        setInterval(leftInterval, 1000);
    })
})