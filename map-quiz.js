// Dane krajów europejskich z współrzędnymi (szerokość, długość)
const countriesMapData = {
    "Polska": { lat: 51.9194, lng: 19.1451, bounds: [[49.0, 14.0], [54.5, 24.5]] },
    "Niemcy": { lat: 51.1657, lng: 10.4515, bounds: [[47.3, 5.9], [55.8, 15.0]] },
    "Włochy": { lat: 41.8719, lng: 12.5674, bounds: [[36.6, 6.6], [47.1, 18.8]] },
    "Hiszpania": { lat: 40.4637, lng: -3.7492, bounds: [[36.0, -9.3], [43.7, 3.3]] },
    "Francja": { lat: 46.2276, lng: 2.2137, bounds: [[42.3, -5.2], [51.1, 7.6]] },
    "Wielka Brytania": { lat: 55.3781, lng: -3.4360, bounds: [[49.8, -8.6], [59.4, 2.0]] },
    "Szwecja": { lat: 60.1282, lng: 18.6435, bounds: [[55.3, 10.9], [69.0, 24.2]] },
    "Norwegia": { lat: 60.4720, lng: 8.4689, bounds: [[57.9, 4.6], [71.2, 31.0]] },
    "Holandia": { lat: 52.1326, lng: 5.2913, bounds: [[50.7, 3.4], [53.5, 7.2]] },
    "Portugalia": { lat: 39.3999, lng: -8.2245, bounds: [[36.7, -10.0], [42.2, -6.0]] },
    "Belgia": { lat: 50.5039, lng: 4.4699, bounds: [[49.5, 2.4], [51.5, 6.4]] },
    "Szwajcaria": { lat: 46.8182, lng: 8.2275, bounds: [[45.8, 5.9], [47.8, 10.5]] },
    "Austria": { lat: 47.5162, lng: 14.5501, bounds: [[46.4, 9.5], [49.0, 17.2]] },
    "Grecja": { lat: 39.0742, lng: 21.8243, bounds: [[34.8, 19.3], [41.7, 28.7]] },
    "Czechy": { lat: 49.8175, lng: 15.4730, bounds: [[48.6, 12.1], [51.0, 18.9]] },
    "Słowacja": { lat: 48.6690, lng: 19.6990, bounds: [[47.7, 16.9], [49.6, 22.6]] },
    "Węgry": { lat: 47.1625, lng: 19.5033, bounds: [[45.7, 16.1], [48.6, 22.9]] },
    "Rumunia": { lat: 45.9432, lng: 24.9668, bounds: [[43.6, 20.3], [48.3, 29.8]] },
    "Bułgaria": { lat: 42.7339, lng: 25.4858, bounds: [[41.2, 22.4], [44.2, 28.7]] },
    "Serbia": { lat: 44.0165, lng: 21.0059, bounds: [[42.2, 18.9], [46.2, 23.0]] },
    "Chorwacja": { lat: 45.1000, lng: 15.2000, bounds: [[42.1, 12.4], [47.0, 19.4]] },
    "Słowenia": { lat: 46.1512, lng: 14.9955, bounds: [[45.4, 13.4], [46.9, 16.6]] },
    "Bośnia i Hercegowina": { lat: 43.9159, lng: 17.6791, bounds: [[42.6, 15.8], [45.3, 19.6]] },
    "Monako": { lat: 43.7384, lng: 7.4246, bounds: [[43.4, 7.4], [43.8, 7.5]] },
    "Liechtenstein": { lat: 47.2664, lng: 9.5322, bounds: [[47.0, 9.5], [47.3, 9.6]] },
    "Luksemburg": { lat: 49.8153, lng: 6.1296, bounds: [[49.4, 5.7], [50.2, 6.5]] },
    "Dania": { lat: 56.2639, lng: 9.5018, bounds: [[54.5, 8.0], [57.8, 15.2]] },
    "Finlandia": { lat: 61.9241, lng: 25.7482, bounds: [[59.8, 19.1], [70.7, 31.6]] },
    "Ukraina": { lat: 48.3794, lng: 31.1656, bounds: [[41.2, 22.1], [52.4, 40.2]] },
    "Białoruś": { lat: 53.7098, lng: 27.9534, bounds: [[51.3, 23.2], [56.2, 32.8]] },
    "Litwa": { lat: 55.1694, lng: 23.8813, bounds: [[53.9, 20.9], [56.5, 26.8]] },
    "Łotwa": { lat: 56.8796, lng: 24.6032, bounds: [[55.6, 20.7], [57.9, 28.3]] },
    "Estonia": { lat: 58.5953, lng: 25.0136, bounds: [[57.5, 23.3], [59.6, 28.2]] },
    "Albania": { lat: 41.1533, lng: 20.1683, bounds: [[39.6, 19.3], [42.7, 21.9]] },
    "Kosowo": { lat: 42.6026, lng: 21.1787, bounds: [[41.9, 20.0], [43.3, 23.0]] },
    "Macedonia": { lat: 41.6086, lng: 21.7453, bounds: [[40.8, 20.5], [42.4, 23.0]] },
    "Cypr": { lat: 34.9250, lng: 33.4280, bounds: [[34.5, 32.3], [35.2, 34.6]] },
    "Malta": { lat: 35.9375, lng: 14.3754, bounds: [[35.8, 14.2], [36.1, 14.6]] },
    "Islandia": { lat: 64.9631, lng: -19.0208, bounds: [[63.4, -24.5], [66.5, -13.5]] },
    "Irlandia": { lat: 53.4129, lng: -8.2439, bounds: [[51.4, -10.5], [55.4, -5.4]] },
};

let mapInstance = null;
let userClickedLocation = null;

function initMapQuiz(countryName) {
    // Wyczyść poprzednią mapę jeśli istnieje
    if (mapInstance) {
        mapInstance.remove();
        mapInstance = null;
    }

    const countryData = countriesMapData[countryName];
    if (!countryData) {
        console.error("Brak danych mapy dla kraju:", countryName);
        return;
    }

    // Inicjalizuj mapę
    mapInstance = L.map('map').fitBounds(countryData.bounds);
    
    // Dodaj tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(mapInstance);

    // Reset stanu kliknięcia
    userClickedLocation = null;

    // Listener na klik mapy
    mapInstance.on('click', function(e) {
        handleMapClick(e, countryName, countryData);
    });

    // Instrukcja
    const mapPrompt = document.getElementById('mapPrompt');
    const t = (window.i18n && window.i18n[currentLanguage]) ? window.i18n[currentLanguage] : {};
    mapPrompt.textContent = (t.mapWork && t.mapWork.clickPrompt) ? t.mapWork.clickPrompt : 'Kliknij na mapie, gdzie znajduje się ten kraj';
}

function handleMapClick(e, countryName, countryData) {
    const clickedLat = e.latlng.lat;
    const clickedLng = e.latlng.lng;

    // Sprawdź czy klik jest w przybliżeniu w granicach kraju
    const [minLat, minLng] = countryData.bounds[0];
    const [maxLat, maxLng] = countryData.bounds[1];
    
    const isInBounds = clickedLat >= minLat && clickedLat <= maxLat && 
                       clickedLng >= minLng && clickedLng <= maxLng;

    userClickedLocation = {
        lat: clickedLat,
        lng: clickedLng,
        isCorrect: isInBounds
    };

    // Dodaj marker na mapie gdzie kliknął użytkownik
    const markerColor = isInBounds ? '#2ecc71' : '#e74c3c';
    L.circleMarker([clickedLat, clickedLng], {
        radius: 8,
        fillColor: markerColor,
        color: 'white',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
    }).addTo(mapInstance);

    // Pokaż prawidłową lokalizację jeśli źle
    if (!isInBounds) {
        L.circleMarker([countryData.lat, countryData.lng], {
            radius: 8,
            fillColor: '#2ecc71',
            color: 'white',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.6,
            dashArray: '5, 5'
        }).addTo(mapInstance).bindPopup(`${countryName} (poprawna odpowiedź)`).openPopup();
    }

    // Wyłącz dalsze klikanie
    mapInstance.off('click');

    // Pokaż feedback
    const feedbackElement = document.getElementById('feedback');
    const t = (window.i18n && window.i18n[currentLanguage]) ? window.i18n[currentLanguage] : {};
    
    if (isInBounds) {
        feedbackElement.textContent = (t.feedback && t.feedback.correct) ? t.feedback.correct : 'Poprawna odpowiedź!';
        feedbackElement.className = "feedback correct";
    } else {
        feedbackElement.textContent = (t.feedback && t.feedback.mapIncorrect) ? t.feedback.mapIncorrect : 'Niepoprawna lokalizacja!';
        feedbackElement.className = "feedback incorrect";
    }

    // Po chwili przejdź do następnego pytania
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 1500);
}

function destroyMap() {
    if (mapInstance) {
        mapInstance.remove();
        mapInstance = null;
    }
    userClickedLocation = null;
}
