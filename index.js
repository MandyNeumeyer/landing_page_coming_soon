
let deadline = 'Jul 25 2021 18:40:18 GMT-0400';
function time_remaining(endtime){
	let t = Date.parse(endtime) - Date.parse(new Date());
	let seconds = Math.floor( (t/1000) % 60 );
	let minutes = Math.floor( (t/1000/60) % 60 );
	let hours = Math.floor( (t/(1000*60*60)) % 24 );
	let days = Math.floor( t/(1000*60*60*24) );
	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}
function run_clock(id,endtime){
	let clock = document.getElementById(id);
	
	// get spans where our clock numbers are held
	let days_span = clock.querySelector('.days');
	let hours_span = clock.querySelector('.hours');
	let minutes_span = clock.querySelector('.minutes');
	let seconds_span = clock.querySelector('.seconds');

	function update_clock(){
		let t = time_remaining(endtime);
		
		// update the numbers in each part of the clock
		days_span.innerHTML = t.days;
		hours_span.innerHTML = ('0' + t.hours).slice(-2);
		minutes_span.innerHTML = ('0' + t.minutes).slice(-2);
		seconds_span.innerHTML = ('0' + t.seconds).slice(-2);
		
		if(t.total<=0){ clearInterval(timeinterval); }
	}
	update_clock();
	let timeinterval = setInterval(update_clock,1000);
}
run_clock('clockdiv',deadline);

