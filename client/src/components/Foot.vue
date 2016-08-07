<template>
	<footer class="box">
		<div id="footer-social" class="all-6">
			<img class="social-icon" src="/static/github-icon.png"/>
			<img class="social-icon" src="/static/twitter-icon.png"/>
			<img class="social-icon" src="/static/facebook-icon.png"/>
		</div>
		<div id="footer-copyright" class="box-col all-6">
			<p>Copyright © 2016.</p>
			<p>colshacol@gmail.com</p>
		</div>
	</footer>
</template>



<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->




<script>
export default {
	data() {
		return {
			id: 'Foot'
		};
	},
};

</script>



<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->




<style lang="stylus">
@require('../styles/variables')

footer {
	width: 100%;
	padding: 75px 4rem;
	max-width: 1200px;
	font-weight: 400;
	margin: 0 auto;
}

footer .social-icon {
	transition: all .5s;
	
	&:hover {
		transform: scale(1.25);
	}
}

#footer-copyright {
	text-align: right;
}
</style>