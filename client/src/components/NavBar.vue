<template>
<nav>
	<div class="box jc-between">
	  <p id="logo" class="lenkr">lenkr</p>
    	<ul class="box">
    		<li v-for="item in navList">
    			<a v-link="{ path: item.path }">{{ item.id }}</a>
    		</li>
	      <li>
	        <a class="btn btn-default sign blue" href="https://github.com/colshacol">GitHub</a>
	      </li>
	    </ul>
    <img id="compressed-nav-icon" src="/static/more-options.png" hidden/>
	</div>
</nav>
</template>



<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->




<script>
export default {
	data: () => {
		return {
			navList: [
				{ id : 'Home', path : 'home' },
				{ id : 'About', path : 'about' },
				{ id : 'Contact', path : 'contact' }
			]
		};
	},

	created() {
		// Adjust navbar when scroll past header.
		window.addEventListener('scroll', function (event) {
			let pointOfShrink = parseInt(document.getElementById('hire-me').offsetTop);
			let navBar = document.querySelector('nav');
			if (document.body.scrollTop >= pointOfShrink) {
				navBar.classList.add('small-nav');
			} else {
				navBar.classList.remove('small-nav');
			}
		});
	}
};
</script>



<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->




<style lang="stylus">
@require('../styles/variables')

nav {
	height: 84px;
	width: 100%;
	z-index: 10;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	padding: 23px 4rem;
	font-weight: 800;
	font-size: 1.3rem;
	line-height: 16px;
	background: white;
	color: $blue;
	transition: all .75s;
	
	#logo {
		font-size: 3.4rem;
	}
	
	.box {
		margin: 0 auto;
		max-width: 1200px;
		
		ul.box {
			justify-content: flex-end;
			margin: 0;
			
			li a {
				color: $blue;			
				margin-left: 3.5rem;
				letter-spacing: 1px;

			}
		}
		
		#compressed-nav-icon {
			height: 48px;
			transition: all 1s;
			
			&:hover {
				color: $purple;
				transform: rotate(1.5turn);
			}
		}
	}
}

.small-nav {
	height: 64px;
	padding-top: 12px;
	padding-bottom: 10px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	// transition: all 2s;
}
</style>