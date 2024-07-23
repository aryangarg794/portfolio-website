export const projectinfos = [
    {
        title: "Face Emotion Detector App",
        description: "A web application designed for users to input a picture and get an emotion back. \
        Two prediction models were implemented from scratch in TensorFlow and trained from the FER 2013 dataset: AlexNet and VGGNet13.",
        skills: ["TensorFlow", "React", "FastAPI", "Python", "Javascript"],
        gitLink: "https://github.com/aryangarg794/FaceEmoApp",
    },
    {
        title: "Reproducing ML Research Papers",
        description: "Reproducing highly cited research papers to deepen knowledge of ML and the implementation of papers. \
        Currently implemented GAN by Goodfellow et al.",
        skills: ["Pytorch", "Python"],
        gitLink: "https://github.com/aryangarg794/reproduction_gan",
    },
    {
        title: "ICU Mortality Prediction",
        description: "Training a model to predict mortality rate based on data from 24 hours after ICU admission. \
        Final model implemented using XGBoost Sklearn API and trained \
        on the MIT GOSSIS dataset",
        skills: ["Scikit-Learn", "XGBoost/LightGBM", "Python"],
        gitLink: "https://github.com/aryangarg794/ICU-Prediction",
    },
    {
        title: "Portfolio website",
        description: "Portfolio website built using Next.js. E2E testing using Cypress and unit testing using JUnit. \
        Deployed using Vercel.",
        skills: ["Next.js", "React", "Tailwind", "Typescript"],
        gitLink: "https://github.com/aryangarg794/portfolio-website",
    },

]

export default function projectInfoIndex(index: number) { return projectinfos[index % projectinfos.length] }