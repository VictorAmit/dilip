import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
<html lang="en">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title> Dilip's Personal Portfolio </title>
	
	<link rel="shortcut icon" href="assets/images/favicon.png" type="image/x-icon" />
	
	<link rel="stylesheet" href="assets/css/animate.css" />
	
	<link rel="stylesheet" href="assets/css/bootstrap.min.css" />
	
	<link rel="stylesheet" href="assets/css/plugin.css" />
	
	<link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
	
	<link rel="stylesheet" href="assets/css/style.css" />
	
	<link rel="stylesheet" href="assets/css/responsive.css" />
</head>
<body>
	
	
	
	<div id="main">
		
		<div className="mainmenu-area">
			<nav className="my-navbar">
				<ul className="navbar-links">
					<li className="mynav-item active">
						<a className="mynav-link active" href="#home">Home</a>
					</li>
					<li className="mynav-item">
						<a className="mynav-link" href="#about">About</a>
					</li>
					<li className="mynav-item">
						<a className="mynav-link" href="#resume">Resume</a>
					</li>
					<li className="mynav-item portfolio">
						<a className="mynav-link portfolio" href="#portfolio">Portfolio</a>
					</li>
					<li className="mynav-item">
						<a className="mynav-link" href="#blog">Blog</a>
					</li>
					<li className="mynav-item">
						<a className="mynav-link" href="#contact">Contact</a>
					</li>
				</ul>
			</nav>
		</div>
		
		<section className="home section-bg active" id="home">
			<div className="h-100vh d-flex align-items-center">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="main-profile-image">
								<img src="assets/images/main.jpg" alt="" />
							</div>
						</div>
						<div className="col-lg-6  align-self-center">
							<div className="hero-box text-left">
								<span className="greeting">HELLO</span>
								<h2 className="name">
									I'm <span>Dilip Kumar</span>
								</h2>

								<h4 className="header_title"> I Do <span id="typed"></span></h4>
								<p className="short-info">
									With over 5+ years of job experience. I am work as a Social Media Hander and later I'm hounrable Member of Bjp Delhi. My skills include A Leader , An Activist , Social Worker & Media Representative.	</p>
								<a id="g-p-f-h" className="pagelink mybtn mybtn-bg" target="_blank" href="https://twitter.com/dilipkumar999/"><span><i
											className="fas fa-twitter"></i>Twitter</span></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
	


	<script src="assets/js/jquery.js"></script>
	<script src="assets/js/bootstrap.min.js"></script>
	<script src="assets/js/magnific-popup.js"></script>
	<script src="assets/js/circel.js"></script>
	<script src="assets/js/typed.min.js"></script>
	<script src="assets/js/mixitup.min.js"></script>
	<script src="assets/js/owl.carousel.min.js"></script>
	<script src="assets/js/main.js"></script>

</body>


</html>
  );
}
