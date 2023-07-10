# Weather App

The Weather App is a Node.js and Express-based application that provides weather information for cities using the OpenWeatherMap API. It allows users to retrieve current weather data, including temperature, humidity, wind speed, and more, for any desired city.

![weatherapi](https://github.com/Aakash644/Weather_app/assets/92630714/8f9914b1-1b63-485e-bf75-cad614d10223)


## Prerequisites

To run the Weather App locally, make sure you have the following installed on your system:

- Node.js (version 10 or above)
- NPM (Node Package Manager)

## Getting Started

To set up and run the Weather App on your local machine, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Aakash644/Weather_app.git
```

2. Install the dependencies:

```bash
npm install
```

3. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/).

4. Create a `.env` file in the root directory of the project and add the following:

```
API_KEY=your_openweathermap_api_key
```

Replace `your_openweathermap_api_key` with the API key you obtained in the previous step.

5. Start the application:

```bash
node app.js
```

7. Open your web browser and visit [http://localhost:5000](http://localhost:5000) to access the Weather App.

## Usage

- Enter the name of a city in the search bar and click on the "Search" button.
- The app will fetch weather data for the provided city from the OpenWeatherMap API and display it on the screen.
- The displayed information may include temperature, humidity, wind speed, weather conditions, and more.

## Technologies Used

The Weather App is built using the following technologies:

- Node.js - A JavaScript runtime environment.
- Express - A web application framework for Node.js.
- OpenWeatherMap API - A weather data provider.
- HTML - For building the structure and layout of the app.
- CSS - For styling the app's appearance.
- JavaScript - For client-side interactions and API requests.

## Contributing

Contributions to the Weather App are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes and commit them with descriptive commit messages.

4. Push your changes to your forked repository:

```bash

git push origin feature/your-feature-name
```

5. Create a pull request on the original repository, explaining your changes.

Please ensure that your code follows the existing coding style and conventions.

## License

The Weather App is open source and released under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

Thank you for using the Weather App!
