const formulaire_recup = document.getElementById("formulaire");

        formulaire_recup.addEventListener("submit", (elements) => {

            elements.preventDefault();


            const mesDonneesDuFormulaires = new FormData(elements.target);


            const DonneesFormulaireObj = Object.fromEntries(mesDonneesDuFormulaires.entries());

            const sortie = document.querySelector(".sortie");

            // sortie.innerText = JSON.stringify(DonneesFormulaireObj, null, 2);
            sortie.innerHTML = JSON.stringify(DonneesFormulaireObj, null, 2);
        });

        