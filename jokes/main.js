const joke = document.getElementById('joke');
const submitBtn = document.getElementById('submit');

let chooser = randomNoRepeats([
    `Deux amis discutent,<br> 
    - C'est lourd un pet ? <br>
    - Bah non, c'est du gaz !<br>
    - Ah merde, j'me suis chié dessus alors !`,
    `
    Que dit un rouleau de papier de toilette à Luke Skywalker ?<br><br>
    J’essuie ton père
    `,
    `
    C’est un panda qui en avait marre de la vie, un jour, il se panda…
    `,
    `
    Comment appelle-t-on un spermatozoide avec 2 valises ? <br><br>
    Un représentant de mes couilles !
    `,
    `
    Qu’est ce qu’un bossu sans bras et sans jambe ?<br><br>
    Une madeleine
    `,
    `
    Qu’est-ce qu’une p*te au régime ?<br><br>
    Une grosse p*te
    `,
    `
    Qu’est-ce qu’un yaourt dans la forêt ?<br><br>
    Un yaourt nature
    `,
    `
    T’as deux poussins, t’en veux qu’un. Tu fais quoi?<br><br>
    T’en pousses un !
    `,
    `
    Quel est le point commun entre un homme au réveil et un élastique ?<br><br>
    Eh bien il s’étire, il s’étire, il s’étire, et il pète !
    `,
    `
    Qu’est-ce qu’un rat avec la queue coupée ?<br><br>
    Un rat-courci.
    `,
    `
    Que fait-on aux voleurs de salades ?<br><br>
    On laitue
    `,
    `
    Que dit une momie en érection ?<br><br>
    Putain, je bande
    `,
    `
    Comment appelle-t-on un roux dans un four ?<br><br>
    Un roux-ti…
    `,
    `
    Quelle est la différence entre l'abominable homme des neiges et l'abominable femme des neiges ? <br><br>
    Une abominable paire de couilles.
    `,
    `
    Quel est l’arabe le plus rapide du monde ?<br><br>
    Ali Express
    `,
    `
    Que fait un donut quand il va à la mer ? <br><br>
    Il va se beignet
    `,
    `
    Quel est le point commun entre un roi et un taureau ?<br><br>
    Tous les deux rentrent dans l’arène
    `,
    `
    Qu’est-ce qu’un oiseau qui se gratte que d’un côté ?<br><br>
    Un oiseau mi-gratteur.
    `,
    `
    Comment appelle-t-on une frite enceinte ?<br><br>
    Une pomme de terre sautée
    `,
    `
    "Chéri, je me sens grosse et laide…S’il te plait, fais-moi un compliment…" <br><br>
    Tu as une bonne vue !
    `,
    `
    Deux œufs discutent : <br><br>
    – Pourquoi t’es tout vert et aussi poilu ?<br>
    – Parce que j’suis un kiwi abruti !
    `,
    `
    Comment appelle-t-on un cochon avec des ailes ?<br><br>
    Un aéro porc
    `,
    `
    L’autre jour, j’ai raconté une blague à mes vêtements.<br><br>
    Ils étaient pliés.
    `,
    `
    Docteur, j’ai mal au dos quand je me lève le matin…<br><br>
    Et bien, levez-vous l’après-midi !
    `,
    `
    Un jour, Dieu ordonna de tuer Zani<br><br>
    Et Panzani !
    `,
    `
    Comment appelle-t-on un chat tout-terrain ?<br><br>
    Un Cat-cat
    `,
    `
    J’ai une blague sur les magasins.<br><br>
    Mais elle va pas supermarché
    `,
    `
    2 put** discutent : T’as demandé quoi au Père Noël toi ?<br><br>
    Bah, 50€, comme les autres…
    `,
    `
    Qu'est-ce qu'une douche sans eau ?<br><br>
    Une duche
    `,
    `
    Que devient un Pépito le soir ?<br><br>
    Un Pépitard
    `,
    `
    Un muet dit à un sourd...
    `,
    `
    Docteur, je crois que j’ai besoin de lunettes.<br><br>
    Oui certainement. Ici c’est une banque.
    `,
    `
    La vitamine C<br><br>
    Mais elle dira rien du tout !
    `,
    `
    La prof : "Y'a des absents ?<br><br>
    Le p'tit comique de la classe : "Non madame, à part Nelson, tout le Mandela !
    `
    

    
]);


function randomNoRepeats(array) {
    let copy = array.slice(0);
    return function() {
        if (copy.length < 1) 
        { 
            copy = array.slice(0); 
        }
      let index = Math.floor(Math.random() * copy.length);
      let item = copy[index];
      copy.splice(index, 1);
      return item;
    };
  }

  submitBtn.addEventListener('click', function() {
    joke.innerHTML = chooser();  
  })
  
  joke.innerHTML = chooser();