<template><div>
	<header>
		<div class="box wrap container ai-center">
			<div id="header-box-one" class="box-col">
				<h1>Simple. Short. <em>Links.</em></h1>
				<input type="text" placeholder="paste link here..."/>
				<p class="small">
					<strong>No registration. No loops to jump through.</strong>
					&nbsp;Paste or type a URL, wait a few milliseconds,
					and get your short link. <em>Links are removed
					from our database when they receive less than
					15 views in 60 consecutive days.</em>
				</p>
			</div>
		</div>
	</header>
</div></template>



<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->




<script>
export default {
	data( ) {
		return {
			that: 'that'
		}
	}
}

</script>



<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->




<style lang="stylus">
@require('../styles/variables')

header {
	
	.container {
		height: 100vh;
		text-align: center;
	
		#header-box-one {

			h1 em {
				color: $green;
			}

			h1 {
				width: 100%;
				font-weight: 900;
				font-size: 6rem;
			}
			
			
			.small {
				max-width: 65%;
				margin: 0 auto;
			}
		}
	}

}

input {
	margin-top: 15px;
	width: 450px;
	height: 50px;
	background: #eeeeee;
	padding: 15px 20px 18px;
	border-radius: 5px;
	color: #afafaf;
	// border-bottom: 2px solid black;
	text-align: center;
	font-family: $Quik;
	font-size: 2.4rem;
	margin-bottom: 35px;
	font-weight: 700;
	transition: all .75s;
	
	&::-webkit-input-placeholder {
		font-weight: 300;
		transition: all .75s;
	}
	
	&:focus {
		color: $purple;
		
		&::-webkit-input-placeholder {
			opacity: 0;
		}
	}
}


.passing {
	border: 1px solid $green;
}	
</style>