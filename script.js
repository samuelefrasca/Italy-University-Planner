// Università statali italiane - tutte le 57 università
// Array con oggetti contenenti: nome, città, regione, studenti

const universita = [
    // ABRUZZO
    { nome: "Università degli Studi 'Gabriele d'Annunzio' di Chieti-Pescara", citta: "Chieti - Pescara", regione: "Abruzzo", studenti: 21097 },
    { nome: "Università degli Studi dell'Aquila", citta: "L'Aquila", regione: "Abruzzo", studenti: 16613 },
    { nome: "Università degli Studi di Teramo", citta: "Teramo", regione: "Abruzzo", studenti: 5057 },

    // BASILICATA
    { nome: "Università degli Studi della Basilicata", citta: "Potenza - Matera", regione: "Basilicata", studenti: 6631 },

    // CALABRIA
    { nome: "Università degli Studi Magna Græcia di Catanzaro", citta: "Catanzaro", regione: "Calabria", studenti: 12572 },
    { nome: "Università della Calabria", citta: "Rende", regione: "Calabria", studenti: 23027 },
    { nome: "Università degli Studi 'Mediterranea' di Reggio Calabria", citta: "Reggio Calabria", regione: "Calabria", studenti: 4955 },

    // CAMPANIA
    { nome: "Università degli Studi della Campania Luigi Vanvitelli", citta: "Caserta", regione: "Campania", studenti: 25299 },
    { nome: "Università degli Studi di Napoli 'Federico II'", citta: "Napoli", regione: "Campania", studenti: 71799 },
    { nome: "Università degli Studi di Napoli 'L'Orientale'", citta: "Napoli", regione: "Campania", studenti: 11164 },
    { nome: "Università degli Studi di Napoli 'Parthenope'", citta: "Napoli", regione: "Campania", studenti: 14716 },
    { nome: "Università degli Studi di Salerno", citta: "Fisciano", regione: "Campania", studenti: 33332 },
    { nome: "Università degli Studi del Sannio", citta: "Benevento", regione: "Campania", studenti: 3768 },

    // EMILIA-ROMAGNA
    { nome: "Alma Mater Studiorum - Università di Bologna", citta: "Bologna", regione: "Emilia-Romagna", studenti: 96945 },
    { nome: "Università degli Studi di Ferrara", citta: "Ferrara", regione: "Emilia-Romagna", studenti: 28522 },
    { nome: "Università degli Studi di Modena e Reggio Emilia", citta: "Modena - Reggio Emilia", regione: "Emilia-Romagna", studenti: 25705 },
    { nome: "Università degli Studi di Parma", citta: "Parma", regione: "Emilia-Romagna", studenti: 35377 },

    // FRIULI-VENEZIA GIULIA
    { nome: "Università degli Studi di Trieste", citta: "Trieste", regione: "Friuli-Venezia Giulia", studenti: 15759 },
    { nome: "Università degli Studi di Udine", citta: "Udine", regione: "Friuli-Venezia Giulia", studenti: 15269 },
    
    // LAZIO
    { nome: "Università degli Studi di Cassino e del Lazio Meridionale", citta: "Cassino", regione: "Lazio", studenti: 6983 },
    { nome: "Università degli Studi di Roma 'Foro Italico'", citta: "Roma", regione: "Lazio", studenti: 2377 },
    { nome: "Università degli Studi di Roma 'La Sapienza'", citta: "Roma", regione: "Lazio", studenti: 120000 },
    { nome: "Università degli Studi di Roma Tor Vergata", citta: "Roma", regione: "Lazio", studenti: 35000 },
    { nome: "Università degli Studi Roma Tre", citta: "Roma", regione: "Lazio", studenti: 37051 },
    { nome: "Università degli Studi della Tuscia", citta: "Viterbo", regione: "Lazio", studenti: 7666 },
    
    // LIGURIA
    { nome: "Università degli Studi di Genova", citta: "Genova", regione: "Liguria", studenti: 31860 },
    
    // LOMBARDIA
    { nome: "Università degli Studi di Bergamo", citta: "Bergamo", regione: "Lombardia", studenti: 19947 },
    { nome: "Università degli Studi di Brescia", citta: "Brescia", regione: "Lombardia", studenti: 16800 },
    { nome: "Politecnico di Milano", citta: "Milano", regione: "Lombardia", studenti: 47959 },
    { nome: "Università degli Studi di Milano", citta: "Milano", regione: "Lombardia", studenti: 59177 },
    { nome: "Università degli Studi di Milano-Bicocca", citta: "Milano", regione: "Lombardia", studenti: 36263 },
    { nome: "Università degli Studi di Pavia", citta: "Pavia", regione: "Lombardia", studenti: 25070 },
    { nome: "Università degli Studi dell'Insubria", citta: "Varese - Como", regione: "Lombardia", studenti: 11414 },
    
    // MARCHE
    { nome: "Università Politecnica delle Marche", citta: "Ancona", regione: "Marche", studenti: 15439 },
    { nome: "Università degli Studi di Camerino", citta: "Camerino", regione: "Marche", studenti: 5716 },
    { nome: "Università degli Studi di Macerata", citta: "Macerata", regione: "Marche", studenti: 9259 },
    { nome: "Università degli Studi di Urbino 'Carlo Bo'", citta: "Urbino", regione: "Marche", studenti: 17409 },
    
    // MOLISE
    { nome: "Università degli Studi del Molise", citta: "Campobasso", regione: "Molise", studenti: 7001 },
    
    // PIEMONTE
    { nome: "Università degli Studi del Piemonte Orientale 'Amedeo Avogadro'", citta: "Alessandria - Novara - Vercelli", regione: "Piemonte", studenti: 16802 },
    { nome: "Università degli Studi di Torino", citta: "Torino", regione: "Piemonte", studenti: 83000 },
    { nome: "Politecnico di Torino", citta: "Torino", regione: "Piemonte", studenti: 34721 },
    
    // PUGLIA
    { nome: "Politecnico di Bari", citta: "Bari", regione: "Puglia", studenti: 10072 },
    { nome: "Università degli Studi di Bari Aldo Moro", citta: "Bari", regione: "Puglia", studenti: 40530 },
    { nome: "Università degli Studi di Foggia", citta: "Foggia", regione: "Puglia", studenti: 13560 },
    { nome: "Università del Salento", citta: "Lecce", regione: "Puglia", studenti: 20201 },

    // SARDEGNA
    { nome: "Università degli Studi di Cagliari", citta: "Cagliari", regione: "Sardegna", studenti: 25263 },
    { nome: "Università degli Studi di Sassari", citta: "Sassari", regione: "Sardegna", studenti: 13507 },
    
    // SICILIA
    { nome: "Università degli Studi di Catania", citta: "Catania", regione: "Sicilia", studenti: 40287 },
    { nome: "Università degli Studi di Messina", citta: "Messina", regione: "Sicilia", studenti: 23565 },
    { nome: "Università degli Studi di Palermo", citta: "Palermo", regione: "Sicilia", studenti: 41498 },
    
    // TOSCANA
    { nome: "Università degli Studi di Firenze", citta: "Firenze", regione: "Toscana", studenti: 51529 },
    { nome: "Università di Pisa", citta: "Pisa", regione: "Toscana", studenti: 51279 },
    { nome: "Università degli Studi di Siena", citta: "Siena", regione: "Toscana", studenti: 15589 },
    { nome: "Università per stranieri di Siena", citta: "Siena", regione: "Toscana", studenti: 2242 },
    
    // TRENTINO ALTO-ADIGE
    { nome: "Università degli Studi di Trento", citta: "Trento", regione: "Trentino Alto-Adige", studenti: 16410 },
    
    // UMBRIA
    { nome: "Università degli Studi di Perugia", citta: "Perugia", regione: "Umbria", studenti: 27000 },
    { nome: "Università per stranieri di Perugia", citta: "Perugia", regione: "Umbria", studenti: 956 },
    
    // VENETO
    { nome: "Università degli Studi di Padova", citta: "Padova", regione: "Veneto", studenti: 74500 },
    { nome: "Università Ca' Foscari Venezia", citta: "Venezia", regione: "Veneto", studenti: 20795 },
    { nome: "Università Iuav di Venezia", citta: "Venezia", regione: "Veneto", studenti: 4200 },
    { nome: "Università degli Studi di Verona", citta: "Verona", regione: "Veneto", studenti: 24190 },
];

const superiori = [
    // ABRUZZO
    { nome: "Scuola universitaria superiore “Gran Sasso Science Institute” (GSSI)", citta: "L'Aquila", regione: "Abruzzo", studenti: 160 },
    
    // CAMPANIA
    { nome: "Scuola Superiore Meridionale", citta: "Napoli", regione: "Campania", studenti: 150 },
    
    // FRIULI-VENEZIA GIULIA
    { nome: "Scuola Internazionale Superiore di Studi Avanzati", citta: "Trieste", regione: "Friuli-Venezia Giulia", studenti: 302 },
    
    // LAZIO
    { nome: "Centro Alti Studi per la Difesa", citta: "Roma", regione: "Lazio", studenti: 1000 },
    
    // LOMBARDIA
    { nome: "Istituto Universitario di Studi Superiori", citta: "Pavia", regione: "Lombardia", studenti: 293 },
    
    // TOSCANA
    { nome: "Scuola IMT Alti Studi Lucca", citta: "Lucca", regione: "Toscana", studenti: 254 },
    { nome: "Scuola Normale Superiore", citta: "Pisa", regione: "Toscana", studenti: 576 },
    { nome: "Scuola Superiore Sant'Anna", citta: "Pisa", regione: "Toscana", studenti: 659 },
];

const nonstatali = [
    // CALABRIA
    { nome: 'Università per Stranieri "Dante Alighieri"', citta: "Reggio Calabria", regione: "Calabria", studenti: 444 },
    
    // CAMPANIA
    { nome: 'Università degli Studi “Suor Orsola Benincasa”', citta: "Napoli", regione: "Campania", studenti: 8800 },
    
    // LAZIO
    { nome: "Link Campus University", citta: "Roma", regione: "Lazio", studenti: 1200 },
    { nome: 'LUISS - Libera Università Internazionale Studi Sociali "Guido Carli"', citta: "Roma", regione: "Lazio", studenti: 12000 },
    { nome: 'LUMSA - Libera Università Maria Santissima Assunta', citta: "Roma", regione: "Lazio", studenti: 9900 },
    { nome: 'Saint Camillus International University of Health and Medical Sciences', citta: "Roma", regione: "Lazio", studenti: 2500 },
    { nome: 'Università "Campus Bio-medico”', citta: "Roma", regione: "Lazio", studenti: 4000 },
    { nome: 'Università degli Studi Europea', citta: "Roma", regione: "Lazio", studenti: 3300 },
    { nome: 'Università degli Studi Internazionali di Roma', citta: "Roma", regione: "Lazio", studenti: 1354 },
    
    // LOMBARDIA
    { nome: 'Humanitas University', citta: "Rozzano (MI)", regione: "Lombardia", studenti: 2700 },
    { nome: 'IULM - Libera università di lingue e comunicazione', citta: "Milano", regione: "Lombardia", studenti: 5000 },
    { nome: 'LIUC - Università Cattaneo', citta: "Castellanza (VA)", regione: "Lombardia", studenti: 2800 },
    { nome: 'Università Cattolica del Sacro Cuore', citta: "Milano", regione: "Lombardia", studenti: 40837 },
    { nome: 'Università commerciale "Luigi Bocconi"', citta: "Milano", regione: "Lombardia", studenti: 15200 },
    { nome: 'Università Vita-Salute “San Raffaele”', citta: "Milano", regione: "Lombardia", studenti: 5158 },
    
    // PIEMONTE
    { nome: 'Università degli Studi di Scienze Gastronomiche', citta: "Pollenzo (CN)", regione: "Piemonte", studenti: 1000 },
    
    // PUGLIA
    { nome: 'LUM - Libera Università Mediterranea “Giuseppe Degennaro”', citta: "Casamassima (BA)", regione: "Puglia", studenti: 3000 },
    
    // SICILIA
    { nome: 'Università degli Studi “Kore”', citta: "Enna", regione: "Sicilia", studenti: 7411 },
    
    // TRENTINO ALTO-ADIGE
    { nome: 'Libera Università di Bolzano', citta: "Bolzano", regione: "Trentino Alto-Adige", studenti: 4500 },
    
    // VALLE D'AOSTA
    { nome: 'Università della Valle d’Aosta', citta: "Aosta", regione: "Valle d’Aosta", studenti: 1032 },
];

const corpoTabella = document.getElementById("tabellauni");

function renderizzaTabella(lista){
    corpoTabella.innerHTML = "";
    let n = 1;
    for (let uni of lista) {
        let riga = `<tr>
            <td>${n}</td>
            <td>${uni.nome}</td>
            <td>${uni.citta}</td>
            <td>${uni.regione}</td>
            <td>${uni.studenti}</td>
        </tr>`;
        corpoTabella.innerHTML += riga;
        n++;
    }
}

function ordinaPerRegione() {
    renderizzaTabella(universita);
}

function ordinaPerRegioneSuperiori() {
    renderizzaTabella(superiori);
}

function ordinaPerRegionePrivate() {
    renderizzaTabella(nonstatali);
}

function ordinaPerStudenti() {
    let copiauniversita = [...universita]
    copiauniversita.sort((a, b) => b.studenti - a.studenti);
    renderizzaTabella(copiauniversita);
}

function ordinaPerStudentiSuperiori() {
    let copiauniversita = [...superiori]
    copiauniversita.sort((a, b) => b.studenti - a.studenti);
    renderizzaTabella(copiauniversita);
}

function ordinaPerStudentiPrivate() {
    let copiauniversita = [...nonstatali]
    copiauniversita.sort((a, b) => b.studenti - a.studenti);
    renderizzaTabella(copiauniversita);
}