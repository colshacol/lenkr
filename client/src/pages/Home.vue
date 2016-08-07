<template><div>
		<home-head></home-head>
		<div id="home-page">

			<div id="hire-me" class="box">
	  				<p class="hire-me-string">
	      			<span class="lenkr green-text">lenkr </span>
	      			was built using Node, Hapi, MongoDB,
	      			Vue, ES6, Stylus, and CSS/HTML. 
	      			<a href="#"> Hire me?</a>
	  				</p>
	  				<p class="hire-me-string_small-sub">
	  					Looking for a junior full-stack developer?
	  			 		<a href="#"> Pick me.</a>
	  				</p>
	  			</div>


			<div id="home-container" class="box blue-bg">
				<div id="home-content-one">
					<div class="box-col" x-wide="12 12 10 6 6">
						<h2>Yolo, Frodo.</h2>
						<p class="heading-three">
							Lorem ipsum Laborum voluptate incididunt
							sint Excepteur id qui culpa tempor et ex
							sunt minim dolor amet dolore pariatur in
							adipisicing sed voluptate sunt ut amet ad
							eiusmod ea enim laboris.
						</p>
						<p>
							Lorem ipsum Sed enim eiusmod ut ut dolor
							nisi non veniam dolor minim non elit do
							consequat voluptate sint amet in ex.
						</p>
					</div>


					<div class="box-col" x-wide="12 12 10 6 6">
						<h2>Yolo, Frodo.</h2>
						<p class="heading-three">
							Lorem ipsum Laborum voluptate incididunt
							sint Excepteur id qui culpa tempor et ex
							sunt minim dolor amet dolore pariatur in
							adipisicing sed voluptate sunt ut amet ad
							eiusmod ea enim laboris.
						</p>
						<p>
							Lorem ipsum Sed enim eiusmod ut ut dolor
							nisi non veniam dolor minim non elit do
							consequat voluptate sint amet in ex.
						</p>
					</div>
				</div>
			</div>
		</div>
</div></template>



<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->



<script>
import HomeHead from '../components/HomeHead.vue'

export default {
	data( ) {
		return {
			id: 'Home'
		};
	},

	components: {
		HomeHead
	}
};

</script>



<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->



<style lang="stylus">
@require('../styles/variables')

#home-content-one {
	padding: 100px 50px;
	max-width: 1200px;

	& div p.heading-three {
		margin-bottom: 25px;

		& + p {
			font-weight: 400;
		}
	}

	& div:not(:last-of-type) {
		margin-bottom: 75px;
	}

	& div:nth-of-type(2) {
		text-align: right;
	}
}

#hire-me {
	height: 65px;
	font-weight: 400;
	background: #f0f7fa;

	.lenkr {
		font-size: 2rem;
	}
}

.hire-me-string_small-sub {
	display: hidden;
}

#home-content-one div:nth-of-type(2) {
	margin-left: auto;
	margin-right: 0;
}
</style>
