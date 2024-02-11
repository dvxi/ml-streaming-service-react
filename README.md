# Crater Detection System Frontend

Welcome to the frontend repository for the Crater Detection System project, developed as part of the "Machine Learning in Robotics and Edge Devices for Space Exploration" elective course. This project focuses on utilizing a custom object detection machine learning model to efficiently detect craters, minimizing network load for space exploration. The system integrates this model with a custom web application to display real-time, filtered footage of detected craters.

## Learn More

For more detailed information about the project, including its development process, challenges, and achievements, please visit our project page: [https://www.szymongwozdz.com/projects/machine-learning](https://www.szymongwozdz.com/projects/machine-learning).

## Technical Stack

- **Frontend**: React, Tailwind.css, Vite
- **Backend**: Node.js
- **Machine Learning**: Google Colab, PyTorch, Numpy
- **Embedded Development**: TinyML, Pico4ML

## Getting Started

To set up the frontend part of the Crater Detection System, follow these instructions:

1. Clone this repository to your local machine.
2. Ensure that Node.js is installed on your system.
3. Run `npm install` to install all required dependencies.
4. Start the application by running `npm run dev`. The React application runs on port `5137`.

Make sure that the backend service and the machine learning model are correctly set up and running to ensure the frontend application works as intended.

## Important Repositories

- **ML Model**: [RaspberryPico-ML for data transfer & filtering](https://github.com/OmegaCreations/RaspberryPico-ML-for-data-transfer-filtering)
- **Backend**: [StreamingService for Ethernet Data](https://github.com/OmegaCreations/StreamingService-for-Ethernet-Data)
- **Python Script for Image Pulling**: [pico4ml-image-puler](https://github.com/General-Embedded/pico4ml-image-puler)

## Configuration

- **Backend Service**: Ensure that the backend service is running on port `3000`.
- **CORS**: Cross-Origin Resource Sharing (CORS) is enabled to allow the frontend to communicate with the backend service securely.
- **Images Folder**: The images folder must be located in the backend project directory for the system to function correctly. This folder stores the processed images for display in the web application.

## Contributing

We welcome contributions from the community. If you'd like to contribute, please fork the repository and create a pull request with your changes.

## Acknowledgments

This project was made possible thanks to the collaborative efforts of our team, the guidance of our instructors, and the resources provided by the elective course on Machine Learning in Robotics and Edge Devices for Space Exploration.
