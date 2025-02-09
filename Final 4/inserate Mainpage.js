//  Funktion für die minimalistische Buchkarte (Mainpage & Kategorie)
function createCard(title, price, year, condition, level, description, image, subject) {
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

//  Funktion für die detaillierte Buchkarte (Angebotsansicht)
function createCardForDetails(title, price, year, condition, level, description, image, subject) {
    return `
      <div class="col">
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
      </div>
    `;
}

//  Funktion zur Anzeige der Mainpage-Bücher (übersichtliche Karten)
function populateSection(sectionId, books) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    section.innerHTML = "";
    books.forEach((book) => {
        section.innerHTML += createCard(
            book.title, book.price, book.year, book.condition, book.level,
            book.description, book.image, book.subject
        );
    });
}

//  Funktion zur Anzeige der Kategorieseite (nutzt `createCard()`)
function populateCategoryBooks(category) {
    const categories = {
        Mathematik: mathBooks,
        Deutsch: germanBooks,
        Englisch: englishBooks,
        Französisch: frenchBooks,
        Wirtschaft: economicsBooks,
        Geografie: geographyBooks,
        Geschichte: historyBooks,
        Recht: lawBooks
    };

    const categoryBooks = categories[category];
    if (!categoryBooks) {
        document.getElementById("category-section").innerHTML = "Keine Kategorie gefunden";
        return;
    }

    const section = document.getElementById("category-section");
    section.innerHTML = "";
    categoryBooks.forEach((book) => {
        section.innerHTML += createCard(
            book.title, book.price, book.year, book.condition, book.level,
            book.description, book.image, book.subject
        );
    });
}

//  Angebotsansicht (Details aus URL holen & `createCardForDetails()` nutzen)
function loadBookDetails() {
    function getUrlParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.has(name) ? decodeURIComponent(urlParams.get(name)) : "Nicht verfügbar";
    }

    const title = getUrlParameter("title");
    const price = getUrlParameter("price");
    const year = getUrlParameter("year");
    const condition = getUrlParameter("condition");
    const level = getUrlParameter("level");
    const description = getUrlParameter("description");
    const image = getUrlParameter("image");
    const subject = getUrlParameter("subject");

    document.getElementById("book-details").innerHTML = createCardForDetails(
        title, price, year, condition, level, description, image, subject
    );
}

//  ERKENNEN, WELCHE SEITE GELADEN WIRD
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");

    if (window.location.pathname.includes("kategorie.html")) {
        populateCategoryBooks(category);
    } else if (window.location.pathname.includes("Angebotansicht.html")) {
        loadBookDetails();
    } else {
        populateSection("math-section", mathBooks);
        populateSection("german-section", germanBooks);
        populateSection("english-section", englishBooks);
        populateSection("french-section", frenchBooks);
        populateSection("economics-section", economicsBooks);
        populateSection("geography-section", geographyBooks);
        populateSection("history-section", historyBooks);
        populateSection("law-section", lawBooks);
    }
});
// Books data
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

function filterBooks() {
    // 1. Suchparameter erfassen
    const selectedSubject = document.getElementById("subject").value;
    const selectedYear = document.getElementById("year").value;
    const selectedCondition = document.querySelector('input[name="bookCondition"]:checked')?.value || "";
    const selectedLevel = document.getElementById("level").value;
    const selectedPrice = document.getElementById("price").value;

    // 2. Alle Bücher in einer Liste sammeln
    const allBooks = [...mathBooks, ...germanBooks, ...englishBooks, ...frenchBooks];

    // 3. Bücher nach den ausgewählten Kriterien filtern
    const filteredBooks = allBooks.filter(book => {
        return (
            (selectedSubject === "" || book.subject === selectedSubject) &&
            (selectedYear === "" || book.year.toString() === selectedYear) &&
            (selectedCondition === "" || book.condition === selectedCondition) &&
            (selectedLevel === "" || book.level === selectedLevel) &&
            filterPrice(book.price, selectedPrice)
        );
    });

    // 4. Ergebnisse anzeigen
    populateSection("filtered-section", filteredBooks);
}

// Hilfsfunktion zur Preisfilterung
function filterPrice(bookPrice, selectedPrice) {
    if (selectedPrice === "") return true;
    if (selectedPrice === "0-5") return bookPrice < 5;
    if (selectedPrice === "100+") return bookPrice > 100;
    
    const [min, max] = selectedPrice.split("-").map(Number);
    return bookPrice >= min && bookPrice <= max;
}