import './css/styles.css';

function Header() {
  return (
    <div>
         <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                <h1 class="masthead-heading text-uppercase mb-0">Welcome to my portfolio!</h1>
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <p class="masthead-subheading font-weight-light mb-0">Full Stack Web Developer <br></br> Front/backend JavaScript specialization.</p>
            </div>
        </header>
    </div>
  );
}

export default Header
