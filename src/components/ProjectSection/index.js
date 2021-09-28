import React from 'react';
import { ProjectContainer, ProjectWrapper, ProjectH1, ProjectH2, ProjectImage, ProjectLinks, ProjectPage } from './ProjectElements';
import { InfoIndicator } from '../InfoSection/InfoElements';
import { Slide } from 'react-slideshow-image';
import image1 from '../../images/CookingAppIcon.jpg';
import image2 from '../../images/typing.jpg';
import image3 from '../../images/ReactIcon.jpg';
import image4 from '../../images/AlgorithmIcon.jpg';




const ProjectSection = () => {
    const settings = {
        indicators: true,
        autoplay: false,
        indicators: i => (<InfoIndicator></InfoIndicator>),
        transitionDuration: 300
    };


    const slideImages = [
        '../images/CookingAppIcon.jpg',
        '../images/typing.jpg',
        '../images/ReactIcon.jpg',
        '../images/AlgorithmIcon.jpg'
    ];
    return (
        <ProjectContainer id='projects'>
            <ProjectH1>Projects</ProjectH1>
            <Slide {...settings}>
                <ProjectWrapper>
                    {/* Cooking Social Media App */}
                    <ProjectH2>CookFlex App</ProjectH2>
                    <ProjectPage to="/portfolio/project1"><ProjectImage src={image1}></ProjectImage></ProjectPage>
                    

                </ProjectWrapper>
                <ProjectWrapper>
                    {/* Typing test */}
                    <ProjectH2>Typing Test</ProjectH2>
                    <ProjectPage to="/portfolio/project2"><ProjectImage src={image2}></ProjectImage></ProjectPage>   

                </ProjectWrapper>
                <ProjectWrapper>
                    {/* This react website */}
                    <ProjectH2>This website</ProjectH2>
                    <ProjectLinks as="a" href="https://github.com/yj6477/portfolio" target="_blank"><ProjectImage src={image3}></ProjectImage></ProjectLinks>
                    
                </ProjectWrapper>
                <ProjectWrapper>
                    {/* Algorithm lists */}
                    <ProjectH2>Algorithm problems</ProjectH2>
                    <ProjectImage src={image4}></ProjectImage>
                </ProjectWrapper>    
            </Slide>
            
        </ProjectContainer>

    );
};

export default ProjectSection
