
$(function() {
 
	$('#psychic').click(function() {
	
   $.getJSON('pokemon.json', function(data) {
       $.each(data.pokemon, function(a,f) {
	   if (f.type == 'Psychic'){
          var tblRow = "<tr>" + "<td>" + f.num + "</td>" +
           "<td>" + f.name + "</td>" + "<td>" + f.type + "</td>" + "<td>" + f.weaknesses + "</td>" + "</tr>"
           $(tblRow).appendTo("#userdata2 tbody");
     }
	 
	   }); 
	 });

   });
   
   
   	$('#normal').click(function() {
	
   $.getJSON('pokemon.json', function(data) {
       $.each(data.pokemon, function(a,f) {
	   if (f.type == 'Normal'){
          var tblRow = "<tr>" + "<td>" + f.num + "</td>" +
           "<td>" + f.name + "</td>" + "<td>" + f.type + "</td>" + "<td>" + f.weaknesses + "</td>" + "</tr>"
           $(tblRow).appendTo("#userdata3 tbody");
     }
	 
	   }); 
	 });

   });
   
   
     	$('#fire').click(function() {
	
   $.getJSON('pokemon.json', function(data) {
       $.each(data.pokemon, function(a,f) {
	   if (f.type == 'Fire'){
          var tblRow = "<tr>" + "<td>" + f.num + "</td>" +
           "<td>" + f.name + "</td>" + "<td>" + f.type + "</td>" + "<td>" + f.weaknesses + "</td>" + "</tr>"
           $(tblRow).appendTo("#userdata4 tbody");
     }
	 
	   }); 
	 });

   });
   
   
     	$('#water').click(function() {
	
   $.getJSON('pokemon.json', function(data) {
       $.each(data.pokemon, function(a,f) {
	   if (f.type == 'Water'){
          var tblRow = "<tr>" + "<td>" + f.num + "</td>" +
           "<td>" + f.name + "</td>" + "<td>" + f.type + "</td>" + "<td>" + f.weaknesses + "</td>" + "</tr>"
           $(tblRow).appendTo("#userdata5 tbody");
     }
	 
	   }); 
	 });

   });
   
   
     	$('#electric').click(function() {
	
   $.getJSON('pokemon.json', function(data) {
       $.each(data.pokemon, function(a,f) {
	   if (f.type == 'Electric'){
          var tblRow = "<tr>" + "<td>" + f.num + "</td>" +
           "<td>" + f.name + "</td>" + "<td>" + f.type + "</td>" + "<td>" + f.weaknesses + "</td>" + "</tr>"
           $(tblRow).appendTo("#userdata6 tbody");
     }
	 
	   }); 
	 });

   });
   
   
     	$('#grass').click(function() {
	
   $.getJSON('pokemon.json', function(data) {
       $.each(data.pokemon, function(a,f) {
	   if (f.type == 'Grass'){
          var tblRow = "<tr>" + "<td>" + f.num + "</td>" +
           "<td>" + f.name + "</td>" + "<td>" + f.type + "</td>" + "<td>" + f.weaknesses + "</td>" + "</tr>"
           $(tblRow).appendTo("#userdata7 tbody");
     }
	 
	   }); 
	 });

   });
   

   
   
   	$('#fighting').click(function() {
	
   $.getJSON('pokemon.json', function(data) {
       $.each(data.pokemon, function(a,f) {
	   if (f.type == 'Fighting'){
          var tblRow = "<tr>" + "<td>" + f.num + "</td>" +
           "<td>" + f.name + "</td>" + "<td>" + f.type + "</td>" + "<td>" + f.weaknesses + "</td>" + "</tr>"
           $(tblRow).appendTo("#userdata8 tbody");
     }
	 
	   }); 
	 });

   });

   
   	$('#ground').click(function() {
	
   $.getJSON('pokemon.json', function(data) {
       $.each(data.pokemon, function(a,f) {
	   if (f.type == 'Ground'){
          var tblRow = "<tr>" + "<td>" + f.num + "</td>" +
           "<td>" + f.name + "</td>" + "<td>" + f.type + "</td>" + "<td>" + f.weaknesses + "</td>" + "</tr>"
           $(tblRow).appendTo("#userdata9 tbody");
     }
	 
	   }); 
	 });

   });
   
   
    
   	$('#poison').click(function() {
	
   $.getJSON('pokemon.json', function(data) {
       $.each(data.pokemon, function(a,f) {
	   if (f.type == 'Poison'){
          var tblRow = "<tr>" + "<td>" + f.num + "</td>" +
           "<td>" + f.name + "</td>" + "<td>" + f.type + "</td>" + "<td>" + f.weaknesses + "</td>" + "</tr>"
           $(tblRow).appendTo("#userdata10 tbody");
     }
	 
	   }); 
	 });

   });
   
   
    
   	$('#bug').click(function() {
	
   $.getJSON('pokemon.json', function(data) {
       $.each(data.pokemon, function(a,f) {
	   if (f.type == 'Bug'){
          var tblRow = "<tr>" + "<td>" + f.num + "</td>" +
           "<td>" + f.name + "</td>" + "<td>" + f.type + "</td>" + "<td>" + f.weaknesses + "</td>" + "</tr>"
           $(tblRow).appendTo("#userdata11 tbody");
     }
	 
	   }); 
	 });

   });

   
});
