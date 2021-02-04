/* menu */
    const navicon = document.querySelector('.navIcon'); //select the hamburger icon
    const navlinks = document.querySelector('.navLinks');  //select the menu item links 
    navicon.addEventListener('click', function(){
        let value = navlinks.classList.contains('navCollapse'); 
        if (value){
            navlinks.classList.remove('navCollapse');
            navlinks.classList.add('navLinks');

        } else {
            navlinks.classList.add('navCollapse');
            navlinks.classList.remove('navLinks');
  
        }
    })
