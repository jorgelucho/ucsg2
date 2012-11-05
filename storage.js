// JavaScript Document
function init() {
    //document.addEventListener("deviceready", onDeviceReady, true);
    createDB();
}
/* ******************************************************************************************** */
function createDB() {

	try {
		var shortName = 'UCSG';
		var version = '1.0';
		var displayName = 'UCSG';
		var maxSize = 200000;
		db = window.openDatabase(shortName, version, displayName, maxSize);
		db.transaction(populateDB, errorCB, successCreateCB);
	} catch (e) {
		console.log(e);
	}

}

// api-storage  "Crear DB"
function populateDB(tx) {
	tx.executeSql('DROP TABLE IF EXISTS ucsg_usuarios');
	tx.executeSql('DROP TABLE IF EXISTS ucsg_notas');
	tx.executeSql('DROP TABLE IF EXISTS ucsg_asistencia');
	tx.executeSql('DROP TABLE IF EXISTS ucsg_horarios');
	//localStorage.setItem("userId", "");
	//localStorage.setItem("usuario", "");
	//localStorage.setItem("clave", "");
	
	tx.executeSql('CREATE TABLE IF NOT EXISTS ucsg_usuarios (id_usuario INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, usuario, clave, nombres TEXT, apellidos TEXT)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS ucsg_notas (id_nota INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, id_usuario INTEGER, materia TEXT, paralelo TEXT, parcial_1 TEXT, parcial_2 TEXT, supletorio TEXT)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS ucsg_asistencia (id_asistencia INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, id_usuario INTEGER, materia TEXT, abr INTEGER, asistencia_alumno INTEGER, horas_dictadas INTEGER, total INTEGER)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS ucsg_horarios (id_horario INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, id_usuario INTEGER, malla INTEGER, materia TEXT, profesor TEXT, grupo INTEGER, horario INTEGER)');

	
	/* usuario 1 */
	tx.executeSql('INSERT INTO ucsg_usuarios (id_usuario, usuario, clave, nombres, apellidos) VALUES (1, "irene.serrano", "0923718118", "Irene", "Serrano")');
	tx.executeSql('INSERT INTO ucsg_notas (id_usuario, materia, paralelo, parcial_1, parcial_2, supletorio) VALUES (1, "DESARROLLO METODOLOGICO DE PROYECTOS TECNOLOGICOS", "B", "8.00", "7.00", "7.50")');
	tx.executeSql('INSERT INTO ucsg_notas (id_usuario, materia, paralelo, parcial_1, parcial_2, supletorio) VALUES (1, "MANEJO DE DATOS PARA APLICACIONES MOVILES", "B", "7.50", "9.00", "0.00")');
	tx.executeSql('INSERT INTO ucsg_notas (id_usuario, materia, paralelo, parcial_1, parcial_2, supletorio) VALUES (1, "METODOLOGIA PARA EL DESARR. DE APLICAC. PARA DISPOS. MOVILES", "A", "8.00", "7.00", "0.00")');
	tx.executeSql('INSERT INTO ucsg_notas (id_usuario, materia, paralelo, parcial_1, parcial_2, supletorio) VALUES (1, "TECNOLOGIAS DE DESARROLLO DE APLICACIONES MOVILES", "B", "8.00", "5.00", "6.00")');
	
	tx.executeSql('INSERT INTO ucsg_asistencia (id_usuario, materia, abr, asistencia_alumno, horas_dictadas, total) VALUES (1, "DESARROLLO METO. PROYECTOS", 30, 50, 50, 80)');
	tx.executeSql('INSERT INTO ucsg_asistencia (id_usuario, materia, abr, asistencia_alumno, horas_dictadas, total) VALUES (1, "METODO. PARA EL DESARR. DE APLICAC. PARA DISPOS. MOVILES", 50, 70, 75, 75)');
	tx.executeSql('INSERT INTO ucsg_asistencia (id_usuario, materia, abr, asistencia_alumno, horas_dictadas, total) VALUES (1, "TECNOLOGIAS DE DESARROLLO", 50, 75, 75, 70)');
	tx.executeSql('INSERT INTO ucsg_asistencia (id_usuario, materia, abr, asistencia_alumno, horas_dictadas, total) VALUES (1, "MANEJO DE DATOS", 50, 80, 82, 75)');
	
	tx.executeSql('INSERT INTO ucsg_horarios (id_usuario, malla, materia, profesor, grupo, horario) VALUES (1, 1, "DESARROLLO METO. DE PROYECTOS", "MORENO DIAZ, VICTOR HUGO", 1, "Martes	17:00 - 19:00	FAH-C1 Miercoles	17:00 - 19:00 FAH-C1 Viernes	17:00 - 19:00	FAH-C1 Sabado	07:00 - 09:00	FAH-C1")');
	tx.executeSql('INSERT INTO ucsg_horarios (id_usuario, malla, materia, profesor, grupo, horario) VALUES (1, 1, "MANEJO DE DATOS PARA APLICACIONES MOVILES", "VILLOTA OYARVIDE, WELLINGTON REMIGIO", 1, "Lunes	17:00 - 22:00	LABORATO Jueves	17:00 - 22:00 LABORATO Sabado	11:00 - 14:00	LABORATO")');
	tx.executeSql('INSERT INTO ucsg_horarios (id_usuario, malla, materia, profesor, grupo, horario) VALUES (1, 1, "TECNOLOGIAS DE DESARROLLO DE APLICACIONES MOVILES", "VILLOTA OYARVIDE, WELLINGTON REMIGIO", 1, "Lunes	17:00 - 22:00	LABORATO Jueves	17:00 - 22:00 LABORATO Sabado	11:00 - 15:00	LABORATO")');
	tx.executeSql('INSERT INTO ucsg_horarios (id_usuario, malla, materia, profesor, grupo, horario) VALUES (1, 1, "DESARROLLO METO. DE PROYECTOS", "VILLOTA OYARVIDE, WELLINGTON REMIGIO", 1, "Martes	15:00 - 16:00	LABORATO jueves 15:00 - 16:00 LABORATO")');
	
	/* usuario 2 */
	tx.executeSql('INSERT INTO ucsg_usuarios (id_usuario, usuario, clave, nombres, apellidos) VALUES (2, "michelle.ortega", "0923025613", "Michelle", "Ortega")');
	tx.executeSql('INSERT INTO ucsg_notas (id_usuario, materia, paralelo, parcial_1, parcial_2, supletorio) VALUES (2, "DESARROLLO METODOLOGICO DE PROYECTOS TECNOLOGICOS", "A", "9.50", "7.50", "7.50")');
	tx.executeSql('INSERT INTO ucsg_notas (id_usuario, materia, paralelo, parcial_1, parcial_2, supletorio) VALUES (2, "MANEJO DE DATOS PARA APLICACIONES MOVILES", "B", "6.50", "8.00", "9.00")');
	tx.executeSql('INSERT INTO ucsg_notas (id_usuario, materia, paralelo, parcial_1, parcial_2, supletorio) VALUES (2, "METODOLOGIA PARA EL DESARR. DE APLICAC. PARA DISPOS. MOVILES", "A", "8.00", "7.00", "0.00")');
	tx.executeSql('INSERT INTO ucsg_notas (id_usuario, materia, paralelo, parcial_1, parcial_2, supletorio) VALUES (2, "TECNOLOGIAS DE DESARROLLO DE APLICACIONES MOVILES", "A", "9.00", "5.00", "6.00")');
	
	tx.executeSql('INSERT INTO ucsg_asistencia (id_usuario, materia, abr, asistencia_alumno, horas_dictadas, total) VALUES (2, "DESARROLLO METO. PROYECTOS", 30, 40, 50, 80)');
	tx.executeSql('INSERT INTO ucsg_asistencia (id_usuario, materia, abr, asistencia_alumno, horas_dictadas, total) VALUES (2, "METODO. PARA EL DESARR. DE APLICAC. PARA DISPOS. MOVILES", 40, 70, 75, 75)');
	tx.executeSql('INSERT INTO ucsg_asistencia (id_usuario, materia, abr, asistencia_alumno, horas_dictadas, total) VALUES (2, "TECNOLOGIAS DE DESARROLLO", 50, 80, 75, 70)');
	tx.executeSql('INSERT INTO ucsg_asistencia (id_usuario, materia, abr, asistencia_alumno, horas_dictadas, total) VALUES (2, "MANEJO DE DATOS", 60, 80, 82, 75)');
	
	tx.executeSql('INSERT INTO ucsg_horarios (id_usuario, malla, materia, profesor, grupo, horario) VALUES (2, 1, "DESARROLLO METO. DE PROYECTOS", "MORENO DIAZ, VICTOR HUGO", 1, "Martes	17:00 - 19:00	FAH-C1 Miercoles	17:00 - 19:00 FAH-C1 Viernes	17:00 - 19:00	FAH-C1 Sabado	07:00 - 09:00	FAH-C1")');
	tx.executeSql('INSERT INTO ucsg_horarios (id_usuario, malla, materia, profesor, grupo, horario) VALUES (2, 1, "MANEJO DE DATOS PARA APLICACIONES MOVILES", "VILLOTA OYARVIDE, WELLINGTON REMIGIO", 1, "Lunes	17:00 - 22:00	LABORATO Jueves	17:00 - 22:00 LABORATO Sabado	11:00 - 14:00	LABORATO")');
	tx.executeSql('INSERT INTO ucsg_horarios (id_usuario, malla, materia, profesor, grupo, horario) VALUES (2, 1, "TECNOLOGIAS DE DESARROLLO DE APLICACIONES MOVILES", "VILLOTA OYARVIDE, WELLINGTON REMIGIO", 1, "Lunes	17:00 - 22:00	LABORATO Jueves	17:00 - 22:00 LABORATO Sabado	11:00 - 15:00	LABORATO")');
	tx.executeSql('INSERT INTO ucsg_horarios (id_usuario, malla, materia, profesor, grupo, horario) VALUES (2, 1, "DESARROLLO METO. DE PROYECTOS", "VILLOTA OYARVIDE, WELLINGTON REMIGIO", 1, "Martes	15:00 - 16:00	LABORATO jueves 15:00 - 16:00 LABORATO")');
	
}

function errorCB(err) {
	console.log("Error SQL: " + err.code);
}

function successCreateCB() {
	console.log("Se ha creado correctamente la base de datos UCSG");
}
/* ******************************************************************************************** */
function authData(usuario, clave) {
	try {
		db.transaction(function(tx) { tx.executeSql('SELECT * FROM ucsg_usuarios WHERE usuario = "' + usuario + '" AND clave = "' + clave + '"', [], authDataHandler, errorHandler); });
	} catch (e) {
		alert(e.message);
		console.log(e.message);
	}
}

function errorHandler(err) {
	console.log("Error SQL: " + err.code);
}

function authDataHandler(tx, results) {

	if(results.rows.length){
		var row = results.rows.item(0);
		var id_usuario = row.id_usuario;
		var usuario = row.usuario;
		var clave = row.clave;
		localStorage.setItem("userId", id_usuario);
		localStorage.setItem("usuario", usuario);
		localStorage.setItem("clave", clave);
		
		db.transaction(function(tx) { tx.executeSql('SELECT * FROM ucsg_notas WHERE id_usuario = "' + id_usuario + '"', [], function (tx, aresults) {
				var row = [];
				var input_1 = "";
				var input_2 = "";
				var input_3 = "";
				var input_4 = "";
				var input_5 = "";
				var len = aresults.rows.length, i;
				
				for (i = 0; i < len; i++){
					row = aresults.rows.item(i);
					j = i + 1;
					input_1 = ".n_" + j + "_1";
					input_2 = ".n_" + j + "_2";
					input_3 = ".n_" + j + "_3";
					input_4 = ".n_" + j + "_4";
					input_5 = ".n_" + j + "_5";
					//alert(j);
					$(input_1).html(row.materia);				
					$(input_2).html(row.paralelo);
					$(input_3).html(row.parcial_1);
					$(input_4).html(row.parcial_2);
					$(input_5).html(row.supletorio);
				}				
			}, null); 
		});
		
		db.transaction(function(tx) { tx.executeSql('SELECT * FROM ucsg_asistencia WHERE id_usuario = "' + id_usuario + '"', [], function (tx, aresults) {
				var row = [];
				var input_1 = "";
				var input_2 = "";
				var input_3 = "";
				var input_4 = "";
				var input_5 = "";
				var len = aresults.rows.length, i;
				
				for (i = 0; i < len; i++){
					row = aresults.rows.item(i);
					j = i + 1;
					input_1 = ".a_" + j + "_1";
					input_2 = ".a_" + j + "_2";
					input_3 = ".a_" + j + "_3";
					input_4 = ".a_" + j + "_4";
					input_5 = ".a_" + j + "_5";
					//alert(j);
					$(input_1).html(row.materia);				
					$(input_2).html(row.abr);
					$(input_3).html(row.asistencia_alumno);
					$(input_4).html(row.horas_dictadas);
					$(input_5).html(row.total);
				}				
			}, null); 
		});
		
		db.transaction(function(tx) { tx.executeSql('SELECT * FROM ucsg_horarios WHERE id_usuario = "' + id_usuario + '"', [], function (tx, aresults) {
				var row = [];
				var input_1 = "";
				var input_2 = "";
				var input_3 = "";
				var input_4 = "";
				var input_5 = "";
				var len = aresults.rows.length, i;
				
				for (i = 0; i < len; i++){
					row = aresults.rows.item(i);
					j = i + 1;
					input_1 = ".h_" + j + "_1";
					input_2 = ".h_" + j + "_2";
					input_3 = ".h_" + j + "_3";
					input_4 = ".h_" + j + "_4";
					input_5 = ".h_" + j + "_5";
					//alert(j);
					if(j==1){
						var profe = '<a href="#prof' + j + '"  data-transition="slidedown">' + row.profesor + '</a>';
					}else{
						var profe = '<a href="#prof2"  data-transition="slidedown">' + row.profesor + '</a>';
					}
					//alert(profe);
					$(input_1).html(row.malla);				
					$(input_2).html(row.materia);
					$(input_3).html(profe);
					$(input_4).html(row.grupo);
					$(input_5).html(row.horario);
				}				
			}, null); 
		});
		
		$.mobile.changePage( "#ini", { transition: "slide" } );
		$.mobile.silentScroll(0);
		//location.href="home.html";
	} else {
		$(".message").html("USUARIO NO REGISTRADO, INTENTELO DE NUEVO.").slideDown("slow");
		$(function() {
			setTimeout(hideMessage, 4000);
		});
		function hideMessage() {
			$('.message').slideUp("slow");
		}
	}
}
/* ******************************************************************************************** */