const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
};

const displayElement = document.querySelector("#display")
const inputElement = document.querySelector("#input")
const searchButtonElement = document.querySelector("#searchButton")

const renderData = (filterProduct) => {
    const htmls = Object.keys(filterProduct).map((city) => {
        return `
        <div class="cityName">
                <h2>${city}</h2>
            </div>
            <div class="element">
                <p class="icon">${weatherData[city].icon}</p>
                <h3 class="temperature">${weatherData[city].temperature}&deg;C</h3>
                <div class="description">
                    <p class="weather">${weatherData[city].description}</p>
                    <p class="humidity">Độ ẩm: ${weatherData[city].humidity}%</p>
                    <p class="windSpeed">Tốc độ gió: ${weatherData[city].windSpeed} km/h</p>
                </div>
            </div>`
    })
    const convert = htmls.join("")
    displayElement.innerHTML = convert
}
renderData(weatherData)

searchButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    const inputValue = inputElement.value.trim().toLowerCase();
    // lọc ra thành phố cần tìm
    const filteredCities = Object.keys(weatherData).filter(city => 
        city.toLowerCase().includes(inputValue)
    );
    if (filteredCities.length !== 0) {
        // tạo obj mới chứa các dữ liệu của thành phố
        const filteredData = filteredCities.reduce((result, city) => {
            // lấy dữ liệu từ weatherData
            result[city] = weatherData[city];
            return result;
        }, {});

        renderData(filteredData);    
    }
    else{
        // nhập sai thành phố thì thông báo lỗi
        alert("Không tìm thấy thành phố này!")
    }

    
});