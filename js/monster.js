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
    logBoite("nom: " + name + " vie: " + life + " argent: " + money + " euro")
}

/*Question 2*/
function main() {
    initMonstre("Monster 1", 20, 10)
    afficheMonstre()
}

/*Question 3*/
function go() {
    initMonstre("Monster 1", 2, 1)
    let show = document.getElementById("show")
    show.addEventListener("click", () => {
        afficheMonstre()
        updateStatus()
    })

}

/*Question 4*/
window.addEventListener("load", () => {
    go()
    //updateStatus() //?
    courir()
    sebattre()
    travailler()
    manger()
    dormir()
    kill()
    Newlife()
    //actionauhasard()
    
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

    if(awake == false)
      {
        let li_dormir = statut.children[2];
        li_dormir.textContent = 'Dormir';
      }
    else{
        let li_eveille = statut.children[2];
        li_eveille.textContent = 'Éveillé';
    }
}
// Fin Exercice 2

// Exercice 3 Question 1
function courir() {
    let run = document.getElementById('run');
    run.addEventListener("click", () => {
        if (life >= 1 && awake === true) {
            logBoite('courir : perte de 1 point de vie');
            --life;
            updateStatus()

        }
        else {
            /*if(life == 0)
            {
                logBoite("Le monstre est mort")
                let id_button = ["run", "eat", "work", "fight","sleep","kill"]
                id_button.forEach(element => document.getElementById(element).disabled = true)
            }
            else{*/
            logBoite("Le monstre n'a pas assez le point de vie");
            // }
        }
        console.log(life)

    })
    
}

// Exercice 3 Question 1
function sebattre() {
    let fight = document.getElementById('fight');
    fight.addEventListener("click", () => {
        if (life > 2 && awake === true) {
            logBoite('se battre : perte de 3 points de vie ;')
            life=life- 3
            updateStatus()
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
            life = life - 1;
            money = money + 2;
            updateStatus()            
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
            life = life + 2
            money = money - 3
            updateStatus()
        }
        else {
            logBoite("Le monstre manque de l'argent");
        }

    })
}
// ?
/*function disableAction(){
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
   
}*/

// Exercice 3 Question 2
function dormir() {
    let dormir = document.getElementById('sleep');  
    sleep.addEventListener("click", ()=>{
        /*let li_dormir = statut.children[2];
        let newli_dormir = document.createElement('li');
        newli_dormir.textContent = 'Dormir';
        statut.replaceChild(newli_dormir, li_dormir);
        logBoite("Le monstre en train de dormir;");
        disableAction();*/
        awake = false;
        logBoite("Le monstre en train de dormir");
        let id_button = ["run", "eat", "work", "fight"]
        id_button.forEach(element => document.getElementById(element).disabled = true)
        updateStatus()
        setTimeout(() => {
            awake = true
            let id_button = ["run", "eat", "work", "fight"]
            id_button.forEach(element => document.getElementById(element).disabled = false)  
            logBoite("Le monstre est éveillé");
            life++
            updateStatus()
            console.log(awake)
        }, 5000);
        console.log(awake)
    })
    
}

function actionauhasard() {
    let sleep = document.getElementById('sleep');
    let run = document.getElementById('run');
    let fight = document.getElementById('fight');
    let work = document.getElementById('work');
    let eat = document.getElementById('eat');
    let id_button = [sleep,work,fight,run,eat];
    let interval = setInterval(() => {
        let random_action = Math.floor(Math.random()*id_button.length);
        id_button[random_action].click();
        console.log(id_button[random_action])
        if(life == 0 )
        { 
           logBoite("Le monstre est mort")
           clearInterval(interval)
           let id_button = ["run", "eat", "work", "fight", "sleep","kill"]
           id_button.forEach(element => document.getElementById(element).disabled = true)
        }
       
    //   action au hasard, il a (sleep,run, fight, work, eat, newlife and kill) ?

    }, 5000);
}
//actionauhasard()

function kill() {
    let kill = document.getElementById('kill')
    kill.addEventListener("click", ()=>{
        life = 0
        money = 0
        updateStatus()

        let li_dormir = statut.children[2];
        let newli_dormir = document.createElement('li');
        newli_dormir.textContent = 'Mort';
        statut.replaceChild(newli_dormir, li_dormir);
        let id_button = ["run", "eat", "work", "fight", "sleep"]
        id_button.forEach(element => document.getElementById(element).disabled = true)
        logBoite("Le monstre est mort");
    })
}

function Newlife() {
    let newlife = document.getElementById('new')
    newlife.addEventListener("click", ()=>{
        awake = true
        let li_eveille = statut.children[2];
        li_eveille.textContent = 'Éveillé';
        initMonstre("Monster 1", 5, 10)
        let id_button = ["run", "eat", "work", "fight", "sleep","kill"]
        id_button.forEach(element => document.getElementById(element).disabled = false)
        updateStatus()
        logBoite("Le monstre ressuscité");
        //actionauhasard()
        console.log(awake)
    })
}

function disableAction(){
    // ici j'ai decide déactiver tous les buttons pour au lieu désactiver que certain button. 
    // c'est plus logique quand le monstre dort, on ne peut pas appuyer sur d'autres boutons
    if(life == 0){
     let id_button = ["run", "eat", "work", "fight", "sleep","kill"]
     id_button.forEach(element => document.getElementById(element).disabled = true)
    }

}

