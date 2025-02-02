// Funktion zur Erstellung einer Buchkarte für die Mainpage (ohne Bild & Beschreibung)
function createCard(title, price, year, condition, level) {
    return `
      <div class="col">
        <a href="Angebotansicht.html?title=${encodeURIComponent(title)}
        &price=${encodeURIComponent(price)}
        &year=${encodeURIComponent(year)}
        &condition=${encodeURIComponent(condition)}
        &level=${encodeURIComponent(level)}" 
        class="text-decoration-none">
          <div class="card">
            <div class="card-body">
              <div class="bg-secondary" style="height: 150px;"></div>
              <h5 class="card-title mt-3">${title}</h5>
              <p class="card-text">Preis: ${price} CHF</p>
              <p class="card-text">Erscheinungsjahr: ${year}</p>
              <p class="card-text">Zustand: ${condition}</p>
              <p class="card-text">Niveau: ${level}</p>
            </div>
          </div>
        </a>
      </div>
    `;
}

// Funktion zur Erstellung einer Buchkarte für die Angebotsansicht (mit Bild & Beschreibung)
function createCardForDetails(title, price, year, condition, level, description, image, subject) {
    return `
      <div class="col">
        <a href="Angebotansicht.html?title=${encodeURIComponent(title)}
        &price=${encodeURIComponent(price)}
        &year=${encodeURIComponent(year)}
        &condition=${encodeURIComponent(condition)}
        &level=${encodeURIComponent(level)}
        &description=${encodeURIComponent(description || "Keine Beschreibung verfügbar")}
        &image=${encodeURIComponent(image || "https://via.placeholder.com/250")}
        &subject=${encodeURIComponent(subject || "Schulfach nicht angegeben")}" 
        class="text-decoration-none">
          <div class="card">
            <img src="${image || "https://via.placeholder.com/250"}" class="card-img-top" alt="Buchbild"/>
            <div class="card-body">
              <h5 class="card-title mt-3">${title}</h5>
              <p class="card-text">Preis: ${price} CHF</p>
              <p class="card-text">Erscheinungsjahr: ${year}</p>
              <p class="card-text">Zustand: ${condition}</p>
              <p class="card-text">Niveau: ${level}</p>
              <p class="card-text"><strong>Schulfach:</strong> ${subject || "Schulfach nicht angegeben"}</p>
              <p class="card-text"><strong>Beschreibung:</strong> ${description || "Keine Beschreibung verfügbar"}</p>
            </div>
          </div>
        </a>
      </div>
    `;
}
// Funktion für die Mainpage (nur Basisinfos)
function populateSection(sectionId, books) {
    console.log(`🚀 populateSection() für ${sectionId} gestartet.`);
    const section = document.getElementById(sectionId);
    if (!section) {
        console.error(`⚠️ Fehler: Sektion ${sectionId} nicht gefunden.`);
        return;
    }
    section.innerHTML = "";
    books.forEach((book) => {
        console.log(`✅ Buch geladen: ${book.title}`);
        section.innerHTML += createCard(
            book.title,
            book.price,
            book.year,
            book.condition,
            book.level
        );
    });
}

// Funktion für die Angebotsansicht (alle Infos)
function populateSectionForDetails(sectionId, books) {
    console.log(`🚀 populateSectionForDetails() für ${sectionId} gestartet.`);
    const section = document.getElementById(sectionId);
    if (!section) {
        console.error(`⚠️ Fehler: Sektion ${sectionId} nicht gefunden.`);
        return;
    }
    section.innerHTML = "";
    books.forEach((book) => {
        console.log(`✅ Buch geladen: ${book.title}`);
        section.innerHTML += createCardForDetails(
            book.title,
            book.price,
            book.year,
            book.condition,
            book.level,
            book.description || "Keine Beschreibung verfügbar",
            book.image || "https://via.placeholder.com/250",
            book.subject || "Unbekanntes Fach"
        );
    });
}
// Books data for all categories
const mathBooks = [
    { title: "Math Book 1", price: 20, year: 2015, condition: "Wie neu", level: "Realschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda", image: "https://via.placeholder.com/250", subject: "Mathematik"  },
    { title: "Math Book 2", price: 25, year: 2018, condition: "Guter Zustand", level: "Sekundarschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda" , image: "https://via.placeholder.com/250", subject: "Mathematik"  },
    { title: "Math Book 3", price: 30, year: 2020, condition: "Akzeptabel", level: "Kantonsschule" , description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda" , image: "https://via.placeholder.com/250", subject: "Mathematik" },
    { title: "Math Book 4", price: 15, year: 2012, condition: "Stark gebraucht", level: "Hochschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda" , image: "https://via.placeholder.com/250", subject: "Mathematik"  },
    { title: "Math Book 5", price: 10, year: 2021, condition: "Wie neu", level: "Universität" , description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda", image: "https://via.placeholder.com/250", subject: "Mathematik" },
];

const germanBooks = [
    { title: "German Book 1", price: 18, year: 2013, condition: "Wie neu", level: "Realschule" , description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda", image: "https://via.placeholder.com/250", subject: "Deutsch" },
    { title: "German Book 2", price: 22, year: 2015, condition: "Guter Zustand", level: "Sekundarschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda", image: "https://via.placeholder.com/250", subject: "Deutsch"  },
    { title: "German Book 3", price: 28, year: 2018, condition: "Akzeptabel", level: "Kantonsschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda" , image: "https://via.placeholder.com/250", subject: "Deutsch" },
    { title: "German Book 4", price: 12, year: 2012, condition: "Stark gebraucht", level: "Hochschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda" , image: "https://via.placeholder.com/250", subject: "Deutsch" },
    { title: "German Book 5", price: 16, year: 2020, condition: "Wie neu", level: "Universität", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda", image: "https://via.placeholder.com/250", subject: "Deutsch"  },
];

const englishBooks = [
    { title: "English Book 1", price: 20, year: 2014, condition: "Guter Zustand", level: "Realschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda" , image: "https://via.placeholder.com/250", subject: "Englisch" },
    { title: "English Book 2", price: 22, year: 2016, condition: "Akzeptabel", level: "Sekundarschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda" , image: "https://via.placeholder.com/250", subject: "Englisch" },
    { title: "English Book 3", price: 18, year: 2017, condition: "Wie neu", level: "Kantonsschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda" , image: "https://via.placeholder.com/250", subject: "Englisch" },
    { title: "English Book 4", price: 30, year: 2021, condition: "Stark gebraucht", level: "Hochschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda" , image: "https://via.placeholder.com/250", subject: "Englisch" },
    { title: "English Book 5", price: 25, year: 2019, condition: "Guter Zustand", level: "Universität", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda", image: "https://via.placeholder.com/250", subject: "Englisch"  },
];

const frenchBooks = [
    { title: "French Book 1", price: 25, year: 2015, condition: "Wie neu", level: "Realschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda" , image: "https://via.placeholder.com/250", subject: "Französisch" },
    { title: "French Book 2", price: 20, year: 2013, condition: "Akzeptabel", level: "Sekundarschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda", image: "https://via.placeholder.com/250", subject: "Französisch"  },
    { title: "French Book 3", price: 22, year: 2019, condition: "Guter Zustand", level: "Kantonsschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda" , image: "https://via.placeholder.com/250", subject: "Französisch" },
    { title: "French Book 4", price: 18, year: 2016, condition: "Stark gebraucht", level: "Hochschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda", image: "https://via.placeholder.com/250", subject: "Französisch"  },
    { title: "French Book 5", price: 15, year: 2018, condition: "Wie neu", level: "Universität", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda" , image: "https://via.placeholder.com/250", subject: "Französisch" },
];

const economicsBooks = [
    { title: "Economics Book 1", price: 30, year: 2017, condition: "Guter Zustand", level: "Realschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda", image: "https://via.placeholder.com/250", subject: "Wirtschaft"  },
    { title: "Economics Book 2", price: 28, year: 2015, condition: "Akzeptabel", level: "Sekundarschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda", image: "https://via.placeholder.com/250", subject: "Wirtschaft"  },
    { title: "Economics Book 3", price: 25, year: 2018, condition: "Wie neu", level: "Kantonsschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda", image: "https://via.placeholder.com/250", subject: "Wirtschaft"  },
    { title: "Economics Book 4", price: 20, year: 2021, condition: "Stark gebraucht", level: "Hochschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda", image: "https://via.placeholder.com/250", subject: "Wirtschaft"  },
    { title: "Economics Book 5", price: 22, year: 2019, condition: "Guter Zustand", level: "Universität", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda", image: "https://via.placeholder.com/250", subject: "Wirtschaft"  },
];

const geographyBooks = [
    { title: "Geography Book 1", price: 18, year: 2013, condition: "Wie neu", level: "Realschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda", image: "https://via.placeholder.com/250", subject: "Geografie"  },
    { title: "Geography Book 2", price: 22, year: 2015, condition: "Guter Zustand", level: "Sekundarschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda", image: "https://via.placeholder.com/250", subject: "Geografie"  },
    { title: "Geography Book 3", price: 30, year: 2017, condition: "Akzeptabel", level: "Kantonsschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda", image: "https://via.placeholder.com/250", subject: "Geografie"  },
    { title: "Geography Book 4", price: 15, year: 2018, condition: "Stark gebraucht", level: "Hochschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda" , image: "https://via.placeholder.com/250", subject: "Geografie" },
    { title: "Geography Book 5", price: 25, year: 2020, condition: "Wie neu", level: "Universität", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda", image: "https://via.placeholder.com/250", subject: "Wirtschaft"  },
];

const historyBooks = [
    { title: "History Book 1", price: 20, year: 2014, condition: "Guter Zustand", level: "Realschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda", image: "https://via.placeholder.com/250", subject: "Geschichte"  },
    { title: "History Book 2", price: 18, year: 2016, condition: "Akzeptabel", level: "Sekundarschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda" , image: "https://via.placeholder.com/250", subject: "Geschichte" },
    { title: "History Book 3", price: 28, year: 2018, condition: "Wie neu", level: "Kantonsschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda" , image: "https://via.placeholder.com/250", subject: "Geschichte" },
    { title: "History Book 4", price: 25, year: 2021, condition: "Stark gebraucht", level: "Hochschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda", image: "https://via.placeholder.com/250", subject: "Geschichte"  },
    { title: "History Book 5", price: 30, year: 2019, condition: "Guter Zustand", level: "Universität", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda" , image: "https://via.placeholder.com/250", subject: "Geschichte" },
];

const lawBooks = [
    { title: "Law Book 1", price: 35, year: 2015, condition: "Wie neu", level: "Realschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda" , image: "https://via.placeholder.com/250", subject: "Recht" },
    { title: "Law Book 2", price: 30, year: 2017, condition: "Guter Zustand", level: "Sekundarschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda" , image: "https://via.placeholder.com/250", subject: "Recht" },
    { title: "Law Book 3", price: 40, year: 2018, condition: "Akzeptabel", level: "Kantonsschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda" , image: "https://via.placeholder.com/250", subject: "Recht" },
    { title: "Law Book 4", price: 25, year: 2021, condition: "Stark gebraucht", level: "Hochschule", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda", image: "https://via.placeholder.com/250", subject: "Recht"  },
    { title: "Law Book 5", price: 18, year: 2019, condition: "Wie neu", level: "Universität", description :"SADDDDASDsSjidhuiajsdiojsadjiooasdjiosadijosadoijsadsaoijkda" , image: "https://via.placeholder.com/250", subject: "Recht"},
];

// Populate sections when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    populateSection("math-section", mathBooks);
    populateSectionForDetails("math-details", mathBooks);
    populateSection("german-section", germanBooks);
    populateSectionForDetails("german-details", germanBooks);
    populateSection("english-section", englishBooks);
    populateSectionForDetails("english-details", englishBooks);
    populateSection("french-section", frenchBooks);
    populateSectionForDetails("french-details", frenchBooks);
    populateSection("economics-section", economicsBooks);
    populateSectionForDetails("economics-details", economicsBooks);
    populateSection("geography-section", geographyBooks);
    populateSectionForDetails("geography-details", geographyBooks);
    populateSection("history-section", historyBooks);
    populateSectionForDetails("history-details", historyBooks);
    populateSection("law-section", lawBooks);
    populateSectionForDetails("law-details", lawBooks);
});

