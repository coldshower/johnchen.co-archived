(function(){
	// Ajax load for all pages 
	$('div.sidebar a').on('click', function(e){
		var href = $(this).attr('href');
		$('div.main_content').load(href + ' div.main_wrapper' );

		e.preventDefault();
	});
	// Just for Home 
	$('a.home_link').on('click', function(e){
		var href = $(this).attr('href');
		$('div.main_content').load(href + ' div.fish_wrapper' );

		e.preventDefault();
	});
	//
	
})();