import './css/styles.css'
import sun from './assets/img/portfolio/sun1.png'
import dollas from './assets/img/portfolio/dollas.png'
import safe from './assets/img/portfolio/safe.png'
import book from './assets/img/portfolio/readme.png'
import ticket from './assets/img/portfolio/ticket.png'
import games from './assets/img/portfolio/games.png'
function Main () { 
return (
    <div>
    <section class="page-section portfolio" id="portfolio">
                <div class="container">
                    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <div class="row justify-content-center">
                        <h5>Weather Dashboard</h5>
                        <div class="col-md-6 col-lg-4 mb-5">
                            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src={sun} alt="..." />
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-5">
                            <h5>E-Commerce Backend</h5>
                            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src={dollas} alt="..." />
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-5">
                            <h5>Password Generator</h5>
                            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src={safe} alt="..." />
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-5">
                            <h5>ReadMe Generator</h5>
                            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src={book} alt="..." />
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-5">
                            <h5>Local Event Finder</h5>
                            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src={ticket} alt="..." />
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-5">
                            <h5>GitGud Teammate Finder</h5>
                            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src={games} alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        )
    }
    export default Main;