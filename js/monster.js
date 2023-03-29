/*Question 1.1*/
var name
var life
var money
var awake = true
var newP


/*Question 1.2*/
function initMonstre(nom, vie, argent) {
    name = nom
    life = vie
    money = argent
}

/*Question 1.3*/
function afficheMonstre() {
    //initMonstre("dfdfd", 100, 0)
    console.log("nom: " + name, "vie: " + life, "argent: " + money + " euro")
    logBoite("nom: " + name + " vie: " + life + " argent: " + money + " euro" + " ;")
}

/*Question 2*/
function main() {
    initMonstre("Monster 1", 20, 10)
    afficheMonstre()
}

/*Question 3*/
function go() {
    initMonstre("Monster 1", 1, 10)
    let show = document.getElementById("show")
    show.addEventListener("click", () => {
        afficheMonstre()
        //updateStatus()
    })

}

/*Question 4*/
window.addEventListener("load", () => {
    go()
    updateStatus() //?
    courir()
    sebattre()
    travailler()
    manger()
    dormir()
    kill()
    Newlife()
   // actionauhasard()
    
})

/* Fin Exercice 1*/
// Exercice 2.1
function logBoite(message) {
    let action_box = document.getElementById("actionbox");
    newP = document.createElement('p');
    newP.textContent = message;
    action_box.prepend(newP);
}

// Question 2.2 
// Regarder la ligne 19

// Question 2.3 
function updateStatus() {
    let statut = document.getElementById('statut');
    let li_life = statut.children[0];
    let newli_life = document.createElement('li');
    newli_life.textContent = 'Vie : ' + life;
    statut.replaceChild(newli_life, li_life);

    let li_money = statut.children[1];
    let newli_money = document.createElement('li');
    newli_money.textContent = 'Argent : ' + money;
    statut.replaceChild(newli_money, li_money);
}
// Fin Exercice 2

// Exercice 3 Question 1
function courir() {
    let run = document.getElementById('run');
    run.addEventListener("click", () => {
        if (life > 0 && awake === true) {
            logBoite('courir : perte de 1 point de vie');
            let li_life = statut.children[0];
            let newli_life = document.createElement('li');
            newli_life.textContent = 'Vie : ' + --life;
            statut.replaceChild(newli_life, li_life);
        }
        else {
            logBoite("Le monstre n'a pas assez le point de vie");
        }

    })
}

// Exercice 3 Question 1
function sebattre() {
    let fight = document.getElementById('fight');
    fight.addEventListener("click", () => {
        if (life > 2 && awake === true) {
            logBoite('se battre : perte de 3 points de vie ;')
            let li_life = statut.children[0]
            let newli_life = document.createElement('li')
            life = life - 3
            newli_life.textContent = 'Vie : ' + life
            statut.replaceChild(newli_life, li_life)
        }
        else {
            logBoite("Le monstre n'a pas assez le point de vie");
        }

    })
}

// Exercice 3 Question 1
function travailler() {
    let work = document.getElementById('work');
    work.addEventListener("click", () => {
        if (life > 0 && awake === true) {
            logBoite('travailler : perte de 1 point de vie et gain de 2 unités d’argent;');
            let li_life = statut.children[0];
            let newli_life = document.createElement('li');
            life = life - 1;
            newli_life.textContent = 'Vie : ' + life;
            statut.replaceChild(newli_life, li_life);

            let li_money = statut.children[1];
            let newli_money = document.createElement('li');
            money = money + 2;
            newli_money.textContent = 'Argent : ' + money;
            statut.replaceChild(newli_money, li_money);
            initMonstre("Monster 1", life, money)
            
        }
        else {
            logBoite("Le monstre n'a pas assez le point de vie");
        }

    })
}

// Exercice 3 Question 1
function manger() {
    let eat = document.getElementById('eat');
    eat.addEventListener("click", () => {
        if (money > 2 && awake === true) {
            logBoite('manger : perte de 3 unités d’argent et gain de 2 points de vie;')
            let li_life = statut.children[0]
            let newli_life = document.createElement('li')
            life = life + 2
            newli_life.textContent = 'Vie : ' + life
            statut.replaceChild(newli_life, li_life)

            let li_money = statut.children[1]
            let newli_money = document.createElement('li')
            money = money - 3
            newli_money.textContent = 'Argent : ' + money
            statut.replaceChild(newli_money, li_money)
        }
        else {
            logBoite("Le monstre manque de l'argent");
        }

    })
}
// ?
function disableAction(){
    awake = false;
    document.querySelectorAll('button').forEach(element => {
      element.disabled = true;
    });
    // ici j'ai decide déactiver tous les buttons pour au lieu désactiver que certain button. 
    // c'est plus logique quand le monstre dort, on ne peut pas appuyer sur d'autres boutons
    // document.getElementById("run").disabled = true
    // document.getElementById("eat").disabled = true
    // document.getElementById("work").disabled = true
    // document.getElementById("fight").disabled = true
   setTimeout(() => {
    document.querySelectorAll('button').forEach(element => {
        element.disabled = false;       
      });
      awake = true;
    // document.getElementById("run").disabled = false
    // document.getElementById("eat").disabled = false
    // document.getElementById("work").disabled = false
    // document.getElementById("fight").disabled = false
    logBoite("Le monstre se réveillé");
    let li_dormir = statut.children[2];
    let newli_dormir = document.createElement('li');
    newli_dormir.textContent = 'Éveillé';
    statut.replaceChild(newli_dormir, li_dormir);

    let li_life = statut.children[0];
    let newli_life = document.createElement('li');
    life = life + 1;
    newli_life.textContent = 'Vie : ' + life;
    statut.replaceChild(newli_life, li_life);
    logBoite("Le monstre gagne 1 point de vie à son réveil");
   }, 5000);
   
}

// Exercice 3 Question 2
function dormir() {
    let dormir = document.getElementById('sleep');  
    sleep.addEventListener("click", ()=>{
        let li_dormir = statut.children[2];
        let newli_dormir = document.createElement('li');
        newli_dormir.textContent = 'Dormir';
        statut.replaceChild(newli_dormir, li_dormir);
        logBoite("Le monstre en train de dormir;");
        disableAction();

    })
    
}

function actionauhasard() {
    let sleep = document.getElementById('sleep');
    let run = document.getElementById('run');
    let fight = document.getElementById('fight');
    let work = document.getElementById('work');
    let eat = document.getElementById('eat');
    let id_button = [sleep,work,fight,run,eat];
    setInterval(() => {
        let random_action = Math.floor(Math.random()*id_button.length);
        id_button[random_action].click();
        console.log(id_button[random_action])

    }, 7000);



}
//actionauhasard()

function kill() {
    let kill = document.getElementById('kill')
    kill.addEventListener("click", ()=>{
        let li_life = statut.children[0]
        let newli_life = document.createElement('li')
        newli_life.textContent = 'Vie : 0'
        statut.replaceChild(newli_life, li_life)

        let li_money = statut.children[1]
        let newli_money = document.createElement('li')
        newli_money.textContent = 'Argent : 0'
        statut.replaceChild(newli_money, li_money)

        let li_dormir = statut.children[2];
        let newli_dormir = document.createElement('li');
        newli_dormir.textContent = '';
        statut.replaceChild(newli_dormir, li_dormir);

        logBoite("Le monstre est mort");
    })
}

function Newlife() {
    let newlife = document.getElementById('new')
    newlife.addEventListener("click", ()=>{
        initMonstre("Monster 1", 20, 10)
        updateStatus()
    })
}
