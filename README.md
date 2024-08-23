# Daily Weather (Breeze)

**[Breeze](https://shakilofficial.github.io/breeze-daily-weather)** is a web application that fetches current weather data and displays it in a visually appealing and responsive manner. The application provides detailed weather information, including temperature, humidity, and pressure, and updates the background based on weather conditions.

## Features

- Search for weather data by city name.
- Displays current temperature, weather conditions, humidity, and pressure.
- Dynamic background image changes based on weather conditions and time of day.
- Responsive design for optimal viewing on various devices.

## Technologies Used

- **HTML**: Structure of the web application.
- **CSS**: Styling and layout, including responsive design and background effects.
- **JavaScript**: Fetching weather data and updating the UI dynamically.
- **WeatherAPI**: Provides current weather data.

## API Key

The application uses [WeatherAPI](https://www.weatherapi.com/) to fetch weather data. An API key is required to make requests.

```js
const apiKey = "API KEY";
```

## Project Structure

- `index.html`: The main HTML file that contains the structure of the web application.
- `style.css`: The stylesheet for styling the application, including background effects and responsive design.
- `script.js`: The JavaScript file responsible for fetching weather data and updating the UI.

### Live Link : [Breeze](https://shakilofficial.github.io/breeze-daily-weather)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/daily-weather-breeze.git
   ```

2. Navigate to the project directory:

   ```sh
   cd daily-weather-breeze
   ```

3. Open `index.html` in a web browser to view the application.

## Usage

1. Enter a city name in the search bar and press Enter or click the search button.
2. The weather information for the specified city will be displayed, including temperature, weather conditions, humidity, and pressure.
3. The background image will update based on the current weather conditions and time of day.

## Customization

- **Background Images**: Place your background images in the `assets/images/` directory and update the image URLs in `app.js` for different weather conditions.
- **Styling**: Modify `style.css` to change the appearance and layout of the application.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

©️ This project is licensed under [mrshakilhossain@outlook.com](mrshakilhossain@outlook.com) .
