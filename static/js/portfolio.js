
var main = function(){
	"use strict";

	$("#close-work").on("click", function(){
		$(".work-display-wrapper").css("display", "none");
		$(".tech-used").empty();


	});

	$(".project-link").on("click", function(){
		
	});


	$("#booking").on("click", function(){
		$(".work-display-wrapper").css("display", "grid");

		$("#title").text("Booking");
		$("#description").text("A website that allows clients to make bookings, and employees to manage them.");
		$(".tech-used").append('<li>html</li>');
		$(".tech-used").append('<li>css</li>');
		$(".tech-used").append('<li>js</li>');
		$(".tech-used").append('<li>flask</li>');
		$(".tech-used").append('<li>python</li>');
		$(".tech-used").append('<li>postgres</li>');
		$(".tech-used").append('<li>vagrant</li>');
		$(".tech-used").append('<li>docker</li>');
		$(".tech-used").append('<li>git</li>');
		$("#more-details").text("More detailed info about everything, More detailed info about everything, More detailed info about everything, More detailed info about everything, More detailed info about everything, More detailed info about everything");

		$("#demo-btn").css("display", "inline-block");
		$("#demo-btn").attr("href", "http://www.shilvan.com/cuttem");
		

		$("#code-btn").css("display", "inline-block");
		$("#code-btn").attr("href", "https://www.github.com/shilvan/appointment");

	});

	$("#ecommerce").on("click", function(){
		$(".work-display-wrapper").css("display", "grid");

		$("#title").text("E-Commerce");
		$("#description").text("An e-Commerce website.");
		$(".tech-used").append('<li>wordpress</li>');
		$(".tech-used").append('<li>woo-commerce</li>');
		$(".tech-used").append('<li>stripe api</li>');
		
		$("#more-details").text("More detailed info about everything, More detailed info about everything, More detailed info about everything, More detailed info about everything, More detailed info about everything, More detailed info about everything");

		$("#demo-btn").css("display", "inline-block");
		$("#demo-btn").attr("href","https://staging.vaxoo.co.uk");
		

		$("#code-btn").css("display", "none");
		$("#code-btn").attr("href", "https://www.github.com/shilvan");

	});

	$("#calculator").on("click", function(){
		$(".work-display-wrapper").css("display", "grid");
		
		$("#title").text("C# Calculator");
		$("#description").text("An app that uses regex for string manipulation and coded mathematical order and operations to calculate user entries.");
		$(".tech-used").append('<li>c#</li>');
		$(".tech-used").append('<li>regex</li>');
		
		$("#more-details").text("More detailed info about everything, More detailed info about everything, More detailed info about everything, More detailed info about everything, More detailed info about everything, More detailed info about everything");

		$("#demo-btn").css("display", "none");

		$("#code-btn").css("display", "inline-block");
		$("#code-btn").attr("href", "https://www.github.com/shilvan/csharp-calculator");

	});

	$("#portfolio").on("click", function(){
		$(".work-display-wrapper").css("display", "grid");
		
		$("#title").text("My Portfolio");
		$("#description").text("Portfolio website to display my projects.");
		$(".tech-used").append('<li>html</li>');
		$(".tech-used").append('<li>css</li>');
		$(".tech-used").append('<li>js</li>');
		$(".tech-used").append('<li>git</li>');
		
		$("#more-details").text("More detailed info about everything, More detailed info about everything, More detailed info about everything, More detailed info about everything, More detailed info about everything, More detailed info about everything");

		$("#demo-btn").css("display", "inline-block");
		$("#demo-btn").attr("href", "./index.html");
		

		$("#code-btn").css("display", "inline-block");
		$("#code-btn").attr("href", "https://www.github.com/shilvan/my-portfolio");

	});

};

$(document).ready(main);

