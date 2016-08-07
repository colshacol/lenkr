<template>
	<nav-bar></nav-bar>
	<router-view></router-view>
  <foot></foot>
</template>



<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->




<script>
import NavBar from './components/NavBar'
import Foot from './components/Foot'
import Home from './pages/Home'

export default {
  components: {
    NavBar,
    Foot,
    Home
  }
}
</script>



<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->
<!-- -- -- -- -- -- -- -- -- -->




<style lang="stylus">
//
@require('./styles/reset')
//

//
@require('./styles/variables')
//

//
@require('./styles/type')
//

//
@require('./styles/buttons')
//

//
@require('./styles/forms')
//

//
@require('./styles/etc')
//

//
@require('./styles/screens')
//
</style>
