import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import sinless from "../../Assets/Projects/sinless.png";
import movie from "../../Assets/Projects/movie.png";
import weather from '../../Assets/Projects/weather.png'
import extension from "../../Assets/Projects/extension.jpg"
import cart from "../../Assets/Projects/cart.jpg"
import blog from "../../Assets/Projects/blog.png"
import nft from "../../Assets/Projects/nft.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nft}
              isBlog={false}
              title="NFT Gallery"
              description="NFT Gallery dapp made using Next.js and Alchemy api that can be used to retrive all the owned NFTs of the wallet address and also show NFTs by the collection address"
              ghLink="https://github.com/codewizard26/nft-gallery"
              demoLink="https://nft-gallery-iota.vercel.app/"
         
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Cryptowiz NFT marketPlace"
              description="NFT marketplace made using Solidity for smart contract, ReactJs and Web3js for interacting with the smart contract on the frontend. Currently contract is deployed on Sepolia testnet. truffle is used as a framework and unstoppable domains is used for authentication"
              ghLink="https://github.com/codewizard26/cryptowiz-nft-marketplace"
              
         
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="NFT Gallery"
              description="NFT gallery made using Solidity for smart contract, Next.Js and Web3js and Alchemy NFT api is used to fetch nft metadata." 
              ghLink="https://github.com/codewizard26/nft-gallery"
              
         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ERC20 Token"
              description="ERC20 token made using solidity and typescript and hardhat framework. It can be tranferred from one account to another account and currently running on ganache local development server and is compatible for all L1 and L2 chains"
              ghLink="https://github.com/codewizard26/ERC20-TOKEN"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather-Wizard-App"
              description="Weather app made using Reactjs and data is fetched using open-weather api. It has the fuctionality of searching for the location as well as displays the users current location weather. It supports over 200,000 cities and has the feature of enabling dark as well as light mode "
              ghLink="https://github.com/codewizard26/weather-wizard-app"
              demoLink="https://weather-wizapp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie_Info"
              description="Movie info giving app made using movie-db api that fetches data from imdb of all the past as well as upcoming movie. It also gives summary and the ratings of the movie"
              ghLink="https://github.com/codewizard26/movie-db-intern"
              demoLink="https://movieinfo-db-project.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cart}
              isBlog={false}
              title="Ecom App"
              description="Ecommerse app made using Django, Django_rest framework for backend and Reactjs for frontend of the app. It has basic cart functionality along with braintree payment method integration"
              ghLink="https://github.com/codewizard26/Ecom-"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sinless}
              isBlog={false}
              title="Sinless-Landing-Page"
              description="Landing Page Made using ReactJs and advanced custom Css. The project makes use of the property of z-index to render the different splitted images to one unique landing page"
              demoLink="https://sinless-landing-page.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={extension}
              isBlog={false}
              title="Chrome-Extensions"
              description="Various Chrome extension made using html css and javascript for various usecases and personal uses. It includes theme changing extensions, AD blocker extensions and random thoughts and quotes generator"
              ghLink="https://github.com/codewizard26/chrome_extensions"

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Django_rest API"
              description="Rest Api made using Django_rest framework that has the basic CRUD functionality and also supports large no of api request along with proper sanitisation of the user input"
              ghLink="https://github.com/codewizard26/django_rest_api"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
