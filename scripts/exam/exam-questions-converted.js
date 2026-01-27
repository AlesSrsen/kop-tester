// Auto-generated from exam-questions.json
// Generated on: 2026-01-27T10:37:32.180Z

var examQuestions = [];

examQuestions.push({
    "question": "",
    "image": "assets/exam/696d296aa49c4f8e0bfa525c_q1.png",
    "answers": {
        "1": "Prohledávací prostor je vždy orientovaným stromem",
        "2": "Prohledávací prostor je acyklický",
        "3": "Heuristika skončí po n krocích",
        "4": "Jestliže jediný operátor je párová záměna na modulech, tj. moduly k a k , 1≤i≤n, 1≤j≤n, i ≠ j si vymění pozice, pak stavový prostor není souvislý.",
        "5": "Jestliže jediný operátor je párová záměna na pozicích, tj. moduly na pozicích p a p , 1≤i≤m, 1≤j≤m, i ≠ j si vymění pozice, pak stavový prostor není souvislý"
    },
    "correct": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 1,
        "5": 0
    }
});

examQuestions.push({
    "question": "",
    "image": "assets/exam/696d29fcb0377ef270e69bde_q2.png",
    "answers": {
        "1": "Asymptotická horní mez velikosti stavového prostoru roste exponenciálně s K",
        "2": "Asymptotická horní mez velikosti stavového prostoru roste kvadraticky s n a m",
        "3": "Pro každý prvek matice, operátory generují okolí velikosti mn",
        "4": "Pro každý prvek matice, operátory generují okolí velikosti K"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 0,
        "4": 1
    }
});

examQuestions.push({
    "question": "Iterativní heuristika řeší problém obchodního cestujícího v rovině. Operátorem je dvojzáměna na úsecích túry (dva úseky jsou nahrazeny jinými dvěma úseky). Momentálně řešená instance má 5 měst.",
    "answers": {
        "1": "Stavový prostor má silně souvislý graf",
        "2": "Stavový prostor má 5^2 = 25 stavů",
        "3": "Okolí každého stavu má velikost 5",
        "4": "Okolí každého stavu má velikost 10"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 1,
        "4": 0
    }
});

examQuestions.push({
    "question": "Vyhodnocení zdatnosti ve Fast Messy GA algoritmu je založeno na:",
    "answers": {
        "1": "reprezentaci individua",
        "2": "výpočtu, který pomocí dalších informací vrátí zdatnost libovolné podmnožiny genů",
        "3": "fenotypu individua",
        "4": "použití referenčního individua"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 0,
        "4": 1
    }
});

examQuestions.push({
    "question": "Ranking v genetickém algoritmu",
    "answers": {
        "1": "nastavuje velikost turnaje",
        "2": "ovlivní pravděpodobnost výběru nejzdatnějšího jedince",
        "3": "v dané generaci, může způsobit zmenšení selekčního tlaku",
        "4": "v dané generaci, může způsobit zvětšení selekčního tlaku"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 1,
        "4": 1
    }
});

examQuestions.push({
    "question": "Genetický algoritmus je aplikován v situaci, kdy některé části stavového prostoru mají výrazně větší hloubku než jiné. Využijeme",
    "answers": {
        "1": "konstantní poměrně vysokou míru mutace, aby se populace snáze dostala do “vlídnějších kočin”",
        "2": "některých vlastností lineárního škálování",
        "3": "některé metody automatického řízení selekčního tlaku"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 1
    }
});

examQuestions.push({
    "question": "Iterativní heuristika používá stavový prostor, jehož graf je silně souvislý. Má tyto vlastnosti:",
    "answers": {
        "1": "Může dát optimální řešení při libovolném počátečním stavu",
        "2": "Zastaví se po konečném počtu kroků bez ohledu na algoritmus heuristiky",
        "3": "Může to být simulované ochlazování, silná souvislost je jednou z podmínek úspěšného nasazení simulovaného ochlazování",
        "4": "Musí používat systematickou strategii pohybu stavovým prostorem"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 1,
        "4": 0
    }
});

examQuestions.push({
    "question": "Algoritmus, který má za běhu upravovat selekční tlak v gen. alg. s výběrem univerzálním stochastickým vzorkováním může přímo nastavovat:",
    "answers": {
        "1": "Pravděpodobnost aplikace operátoru “cut and splice”",
        "2": "Konstanty lineárního škálování",
        "3": "Konstanty rankingu"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 1
    }
});

examQuestions.push({
    "question": "Základní jednotkou reprezentace, se kterou pracuje bayesovská optimalizace je:",
    "answers": {
        "1": "dvojice [identifikace proměnné, hodnota]",
        "2": "pravděpodobnost selekce individua",
        "3": "binární řetěz",
        "4": "statistický model závislostí mezi proměnnými",
        "5": "vektor hodnot (odpověď ze starého testu)"
    },
    "correct": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 1,
        "5": 0
    }
});

examQuestions.push({
    "question": "Nová generace v bayesovské optimalizaci vzniká",
    "answers": {
        "1": "křížením",
        "2": "rozdělením a spojením fragmentů genetické informace",
        "3": "generováním podle stochastického modelu",
        "4": "ruletovým výběrem"
    },
    "correct": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 0
    }
});

examQuestions.push({
    "question": "Stochastický model v bayesovská optimalizaci vzniká:",
    "answers": {
        "1": "tak, aby vystihoval žádané vlastnosti řešení",
        "2": "tak, aby vystihoval vlastnosti aktuální generace",
        "3": "křížením z předchozí generace",
        "4": "stochastickým výběrem"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 0,
        "4": 0
    }
});

examQuestions.push({
    "question": "Stochastický model v bayesovská optimalizaci vzniká:",
    "answers": {
        "1": "podle vlastností aktuální generace",
        "2": "podle žádaných vlastností řešení",
        "3": "křížením z předchozí generace",
        "4": "stochastickým výběrem"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 0,
        "4": 0
    }
});

examQuestions.push({
    "question": "Evoluční programování pracuje nad",
    "answers": {
        "1": "stromovou reprezentací programu",
        "2": "reprezentací automatu",
        "3": "lineární reprezentací strojového kódu",
        "4": "orientovaným acyklickým grafem datových závislostí"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 0,
        "4": 0
    }
});

examQuestions.push({
    "question": "Evoluční strategie pracuje nad reprezentací",
    "answers": {
        "1": "vektoru reálných čísel a odchylek",
        "2": "rozkladového stromu výrazu",
        "3": "binárního řetězu",
        "4": "automatu"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 0,
        "4": 0
    }
});

examQuestions.push({
    "question": "Podle teorie stavebních bloků,",
    "answers": {
        "1": "složitější schémata (vyššího řádu) přežívají lépe",
        "2": "schémata, jejichž proměnné jsou rozptýleny po celém genotypu, přežívají hůře",
        "3": "mutace zhoršuje přežívání všech schémat (i když ne všech stejně)",
        "4": "uvažované jednobodové křížení má za následek závislost přežívání na délce schémat"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 1,
        "4": 1
    }
});

examQuestions.push({
    "question": "V genetickém algoritmu je třeba zpomalit konvergenci. Možností je upravit pravděpodobnost mutace a nebo upravit selekční tlak. Platí:",
    "answers": {
        "1": "přednostně snížíme selekční tlak",
        "2": "přednostně zvýšíme pravděpodobnost mutace",
        "3": "pokud snížíme selekční tlak, může dojít k divergenci a je třeba snížit i pravděpodobnost mutace"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 1
    }
});

examQuestions.push({
    "question": "V genetickém algoritmu je třeba zpomalit konvergenci. Pravděpodobně bude účinné",
    "answers": {
        "1": "upravit koeficienty lineárního škálování, pokud je použito",
        "2": "přejít od výběru ruletou k výběru turnajem při zachování selekčního tlaku",
        "3": "zvětšit velikost turnaje, pokud je použit"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 0
    }
});

examQuestions.push({
    "question": "V genetickém algoritmu je třeba urychlit konvergenci. Možností je upravit pravděpodobnost mutace nebo selekci. Platí",
    "answers": {
        "1": "změna selekčního mechanismu nemá významný vliv, pokud zachováme selekční tlak",
        "2": "přednostně zvýšíme pravděpodobnost mutace",
        "3": "přednostně zvýšíme selekční tlak, pracujeme s minimální potřebnou mutací"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 1
    }
});

examQuestions.push({
    "question": "Genetický algoritmus dobře konverguje až do určité vzdálenosti od předpokládaného globálního minima, pak začne divergovat. Příčina může být:",
    "answers": {
        "1": "povaha stavového prostoru („landscape“) se v okolí globálního minima prudce změní",
        "2": "pracuje s příliš malou pravděpodobností mutace",
        "3": "adaptace selekčního tlaku nepracuje dostatečně dobře"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 1
    }
});

examQuestions.push({
    "question": "Algoritmus, který má za běhu upravovat selekční tlak v genetickém algoritmu s lineárním škálováním, bude přímo nastavovat",
    "answers": {
        "1": "pravděpodobnost mutace",
        "2": "konstanty přepočtu zdatnosti",
        "3": "pravděpodobnost výběru nejlepšího jedince"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 0
    }
});

examQuestions.push({
    "question": "Algoritmus, který má za běhu upravovat selekční tlak v genetickém algoritmu, může být založen na zjištění",
    "answers": {
        "1": "diverzity jedinců",
        "2": "změny průměrné zdatnosti mezi generacemi",
        "3": "poměru zdatnosti např. nejzdatnějšího jedince a jedince v polovině pořadí"
    },
    "correct": {
        "1": 1,
        "2": 1,
        "3": 1
    }
});

examQuestions.push({
    "question": "Algoritmus, který má za běhu upravovat selekční tlak v genetickém algoritmu používajícím lineární škálování a ruletový výběr, bude přímo nastavovat",
    "answers": {
        "1": "pravděpodobnost mutace",
        "2": "výseče rulety",
        "3": "koeficienty lineárního škálování"
    },
    "correct": {
        "1": 0,
        "2": 0,
        "3": 1
    }
});

examQuestions.push({
    "question": "Algoritmus, který má za běhu upravovat selekční tlak v genetickém algoritmu s turnajovym vyberem, bude přímo nastavovat",
    "answers": {
        "1": "pravdepodobnost mutace",
        "2": "velikost turnaje",
        "3": "pravdepodobnost vyberu nejlepsiho jedince"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 0
    }
});

examQuestions.push({
    "question": "Instance problému splnění podmínek má n konfiguračních proměnných, doména každé proměnné má právě d hodnot. Algoritmus má stav odvozený pouze z konfiguračních proměnných.",
    "answers": {
        "1": "Stavový prostor má n^d stavů",
        "2": "Stavový prostor má d^n stavů",
        "3": "Prostor prohledávání má (d+1)^n stavů",
        "4": "Prostor prohledávání má d^(2n) stavů"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 1,
        "4": 0
    }
});

examQuestions.push({
    "question": "Máte vyhodnotit, zda algoritmus, který automaticky udržuje selekční tlak v genetickém algoritmu, pracuje uspokojivě. Provedete následující:",
    "answers": {
        "1": "Budete měřit četnost mutace v závislosti na poměrné zdatnosti.",
        "2": "Budete měřit četnost výběru (selekce) v závislosti na poměrné zdatnosti.",
        "3": "Pro každou velikost instance zvolíte jednu instanci.",
        "4": "Zvolíte jednu velikost instance a použijete instance rozdílné obtížnosti."
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 0,
        "4": 0
    }
});

examQuestions.push({
    "question": "Selekční tlak ve standardním genetickém algoritmu lze řídit",
    "answers": {
        "1": "zhruba ve stejném rozsahu při selekci turnajem i ruletou",
        "2": "ve větším rozsahu při výběru univerzálním stochastickým vzorkováním",
        "3": "parametry lineárního škálování"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 1
    }
});

examQuestions.push({
    "question": "Volba selekčního tlaku v genetických algoritmech",
    "answers": {
        "1": "je omezena hrozbou divergence při malém selekčním tlaku",
        "2": "závisí na obtížnosti instance, obtížnější instance vyžadují pomalejší konvergenci",
        "3": "může vyžadovat odpovídající nastavení pravděpodobnosti mutace"
    },
    "correct": {
        "1": 1,
        "2": 1,
        "3": 1
    }
});

examQuestions.push({
    "question": "Genetické operátory Fast Messy GA algoritmu pracují nad",
    "answers": {
        "1": "reprezentací individua",
        "2": "zdatností individua",
        "3": "množinami hodnot genů",
        "4": "reprezentací individua, kde některé geny nejsou ohodnoceny a některé jsou ohodnoceny víckrát"
    },
    "correct": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 1
    }
});

examQuestions.push({
    "question": "Genetické operátory Fast Messy GA algoritmu pracují s",
    "answers": {
        "1": "reprezentací individua",
        "2": "podmnožinami genů",
        "3": "fenotypem individua",
        "4": "zdatností individua"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 0,
        "4": 0
    }
});

examQuestions.push({
    "question": "Základní metodou vyhodnocení, se kterou pracuje Fast Messy genetický algoritmus, je",
    "answers": {
        "1": "stanovení fenotypu přímo z hodnot genů daného jedince a následný výpočet zdatnosti",
        "2": "výpočet odlišnosti genotypu jedince od referenčního jedince",
        "3": "založena na průměrné délce fragmentu v dané generaci",
        "4": "dosazení hodnot fragmentů do referenčního jedince a výpočet jeho zdatnosti"
    },
    "correct": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 1
    }
});

examQuestions.push({
    "question": "Základní metodou vyhodnocení, se kterou pracuje Fast Messy genetický algoritmus, je",
    "answers": {
        "1": "výpočet optimalizačního kritéria přímo z hodnot genů daného jedince",
        "2": "dosazení daných hodnot do referenčního jedince a výpočet jeho optimalizačního kritéria",
        "3": "výpočet optimalizačního kritéria referenčního jedince",
        "4": "založena na průměrné délce fragmentu v dané generac"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 0,
        "4": 0
    }
});

examQuestions.push({
    "question": "Genetický algoritmus s pravděpodobností mutace 40% připomíná",
    "answers": {
        "1": "metodu pouze nejlepší",
        "2": "náhodnou procházku",
        "3": "zaujatou náhodou procházku"
    },
    "correct": {
        "1": 0,
        "2": 0,
        "3": 1
    }
});

examQuestions.push({
    "question": "Stavební bloky ve Fast Messy GA se generují",
    "answers": {
        "1": "jako podmnožiny ohodnocených genů zadané délky",
        "2": "jako reprezentace počáteční populace",
        "3": "jako fenotyp individua",
        "4": "jako podmnožiny genů zadaného referenčního individua"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 0,
        "4": 0
    }
});

examQuestions.push({
    "question": "Stavební blok ve Fast Messy GA je vždy",
    "answers": {
        "1": "reprezentace individua",
        "2": "ohodnocení podmnožiny genů",
        "3": "fenotyp individua",
        "4": "podmnožina genů referenčního individua"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 0,
        "4": 0
    }
});

examQuestions.push({
    "question": "Vnější cyklus fmGA postupně zvyšuje",
    "answers": {
        "1": "složitost referenčního individua",
        "2": "cílovou velikost fragmentů po generování",
        "3": "délku referenčního individua",
        "4": "selekční tlak"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 0,
        "4": 0
    }
});

examQuestions.push({
    "question": "Referenční jedinec v fmGA",
    "answers": {
        "1": "slouží pro vyhodnocení zdatnosti",
        "2": "slouží pro konstrukci stochastického modelu",
        "3": "při použití, jeho proměnné nahrazují proměnné fragmentů genetické informace",
        "4": "při použití, jeho proměnné jsou nahrazovány proměnnými fragmentů genetické informace"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 0,
        "4": 1
    }
});

examQuestions.push({
    "question": "Relaxace v iterativních lokálních heuristikách",
    "answers": {
        "1": "nezávisí na vlastnostech konkrétní konfigurace, vyjadřuje pouze fakt, že řešením není",
        "2": "zhoršuje dosažitelnost ve stavovém prostoru",
        "3": "typicky nahrazuje optimalizační kritérium heuristickou kombinací původního opt. kritéria a odhadu vzdálenosti konfigurace od řešení",
        "4": "spočívá v použití snadných instancí pro závěrečné vyhodnocení",
        "5": "má za úkol vést iterace od konfigurací, které řešením nejsou, k řešením",
        "6": "zlepšuje dosažitelnost ve stavovém prostoru",
        "7": "v případě 3-SAT, spočívá ve snížení počtu klauzulí instance",
        "8": "má za úkol opravit konfiguraci tak, aby byla řešením",
        "9": "přiřazuje všem konfiguracím, které nejsou řešením, hodnotu konstantní pro danou instanci",
        "10": "typicky nahrazuje optimalizační kritérium pouze odhadem vzdálenosti konfigurace od řešení",
        "11": "typicky nahrazuje optimalizační kritérium stanovenou konstantní pokutou",
        "12": "obvykle obsahuje numerický parametr, který je nutno experimentálně nastavit",
        "13": "spočívá v použití malých instancí",
        "14": "Slouží pouze při porovnání konfigurací pro přijetí tahu; neužívá se v případě zhoršujícího tahu",
        "15": "typicky nahrazuje optimalizační kritérium heuristickou kombinací původního opt. kritéria a pokuty za ne-řešení, která je pro danou instanci konstantní"
    },
    "correct": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 0,
        "5": 1,
        "6": 1,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 1,
        "13": 0,
        "14": 0,
        "15": 0
    }
});

examQuestions.push({
    "question": "Máte experimentálně vyhodnotit, zda chování algoritmu, který automaticky nastavuje počáteční teplotu simulovaného ochlazování, odpovídá teorii, kterou jste vymysleli, a která zahrnuje několik parametrů instance. Zajímá vás také, zda tyto parametry stačí k charakterizaci instance z hlediska práce algoritmu.",
    "answers": {
        "1": "Použijete reprezentativní mix praktických instancí.",
        "2": "Výpočet spustíte opakovaně pro každou instanci.",
        "3": "Použijete vygenerované instance se stejnými hodnotami parametrů, o kterých se hovoří ve Vaší teorii, ale různé velikosti.",
        "4": "Použijete vygenerované instance s různými hodnotami parametrů, o kterých se hovoří ve Vaší teorii."
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 1,
        "4": 1
    }
});

examQuestions.push({
    "question": "Máte experimentálně vyhodnotit, zda algoritmus, který automaticky nastavuje počáteční teplotu simulovaného ochlazování, pracuje uspokojivě.",
    "answers": {
        "1": "Zvolíte jeden parametr instancí, o kterých se domníváte, že na počáteční teplotu má vliv, a zkonstruujete zkušební instance.",
        "2": "Zvolíte velikost instance, na které budete experiment provádět.",
        "3": "Použijete instance s rozdílnou hloubkou lokálních minim.",
        "4": "Budete sledovat, zda rychlost ochlazování v algoritmu dává přiměřeně rychlou konvergenci pro nastavenou teplotu.",
        "5": "Použijete instance různé velikosti",
        "6": "Výpočet spustíte opakovaně pro každou instanci",
        "7": "Použijete větší počet lehkých instancí k urychlení",
        "8": "Zjistíte z literatury nebo experimentálně, jaké vlastnosti mají vliv na nutnou počáteční teplotu, a pokryjete jejich rozsah vhodnými instancemi"
    },
    "correct": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 1,
        "5": 1,
        "6": 1,
        "7": 0,
        "8": 1
    }
});

examQuestions.push({
    "question": "Pokud je počáteční teplota u SA (simulované ochlazování) malá, o. má algoritmus tendenci padat do lokálního minima",
    "answers": {
        "1": "Áno (True)",
        "2": "Nie (False)"
    },
    "correct": {
        "1": 1,
        "2": 0
    }
});

examQuestions.push({
    "question": "Jaká strategie se používá pro výběr souseda u simulovaného ochlazování?",
    "answers": {
        "1": "pouze nejlepší",
        "2": "prvé zlepšení",
        "3": "prvé zlepšení nebo přípustné zhoršení",
        "4": "nejlepší nejdříve"
    },
    "correct": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 0
    }
});

examQuestions.push({
    "question": "Pokud je u SA nízká hodnota (délka) equilibria a neupdatuje se dynamicky, skončí heuristika rychle v lokálním minimu",
    "answers": {
        "1": "Áno (True)",
        "2": "Nie (False)"
    },
    "correct": {
        "1": 1,
        "2": 0
    }
});

examQuestions.push({
    "question": "Zvýšení počtu iterací při konstantní teplotě u SA (equilibrium), odpovídá:",
    "answers": {
        "1": "zvýšení koeficientu ochlazování",
        "2": "snížení koeficientu ochlazování",
        "3": "vztah nelze vyjádřit"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 0
    }
});

examQuestions.push({
    "question": "Pokud je koeficient ochlazování u SA velmi nízký, skončí heuristika rychle v lokálním minimu?",
    "answers": {
        "1": "Áno (True)",
        "2": "Nie (False)"
    },
    "correct": {
        "1": 1,
        "2": 0
    }
});

examQuestions.push({
    "question": "Je u SA při rychlejším ochlazování vyšší pravděpodobnost, že skončíme v lokálním minimu?",
    "answers": {
        "1": "Áno (True)",
        "2": "Nie (False)"
    },
    "correct": {
        "1": 1,
        "2": 0
    }
});

examQuestions.push({
    "question": "Máte experimentálně vyhodnotit, zda Vámi navržené nastavení simulovaného ochlazování má dostatečnou iterativní sílu.",
    "answers": {
        "1": "Budete měřit závislost času výpočtu na velikost instance.",
        "2": "Budete měřit kvalitu výsledku pro více různých počátečních řešení.",
        "3": "Soubor zkušebních instancí můžete omezit na menší instance.",
        "4": "Výpočet spustíte opakovaně pro každou instanci a počáteční řešení."
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 0,
        "4": 1
    }
});

examQuestions.push({
    "question": "Heuristika, která nastavuje parametry simulovaného ochlazování",
    "answers": {
        "1": "vždy bude brát v úvahu rozsah optimalizačního kritéria nebo jej normovat",
        "2": "pokud zjistí hloubku lokálních minim, dá se tato hodnota využít",
        "3": "efekt, dosažený manipulací s hloubkou ekvilibria, se dá dosáhnout manipulací s koeficientem ochlazování"
    },
    "correct": {
        "1": 1,
        "2": 1,
        "3": 1
    }
});

examQuestions.push({
    "question": "Volba počáteční teploty v simulovaném ochlazování",
    "answers": {
        "1": "pro dosažení nejlepšího výsledku, může vyžadovat odpovídající volbu koeficientu ochlazování",
        "2": "závisí na obtížnosti konkrétní instance",
        "3": "závisí na rozsahu optimalizačního kritéria dané instance"
    },
    "correct": {
        "1": 1,
        "2": 1,
        "3": 1
    }
});

examQuestions.push({
    "question": "Koncová teplota v simulovaném ochlazování",
    "answers": {
        "1": "je-li dost nízká, určuje, jak velká část stavového prostoru bude prohledávána",
        "2": "je-li příliš vysoká, omezuje prohledávanou část stavového prostoru",
        "3": "vždy musí zůstat konstantní, pokud se mění počáteční teplota",
        "4": "dá se s výhodou určovat za běhu sledováním konvergence"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 0,
        "4": 1
    }
});

examQuestions.push({
    "question": "Máte udělat závěrečné experimentální vyhodnocení, zda algoritmus, který automaticky nastavuje počáteční teplotu simulovaného ochlazování, pracuje uspokojivě pro praktické nasazení.",
    "answers": {
        "1": "Použijete vygenerované instance stejné velikosti.",
        "2": "Použijete praktické instance stejné velikosti.",
        "3": "Použijete reprezentativní mix praktických instancí.",
        "4": "Výpočet spustíte opakovaně pro každou instanci."
    },
    "correct": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 1
    }
});

examQuestions.push({
    "question": "Potřebujete plánovací algoritmus, který chcete nasadit do aplikace řízení údržby. Omezení času výpočtu existuje, ale není podstatné (počítá se přes noc na příští den). Důležitá je kvalita (naježděné kilometry). Máte dva kandidáty, A a B, oba randomizované algoritmy. Potřebujete je experimentálně srovnat.",
    "answers": {
        "1": "Použijete přednostně instance „nachytané“ při předchozím manuálním řízení.",
        "2": "Pro každou instanci srovnáte dosažené optimalizační kritérium jedním během algoritmů A a B.",
        "3": "Pro každou instanci srovnáte průměrnou hodnotu opt. kritéria pro několik desítek až set spuštění.",
        "4": "Pokud zjistíte, že B je třikrát rychlejší než A, z každých třech hodnot opt. kritéria pro B vezmete tu nejlepší.",
        "5": "Použijete náhodně generované instance"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 1,
        "4": 1,
        "5": 0
    }
});

examQuestions.push({
    "question": "Potřebujete plánovací algoritmus, který chcete nasadit do aplikace řízení údržby. Čas je shora omezen, úspora pod tuto mez není zajímavá. Máte dva kandidáty, A a B, oba randomizované algoritmy. Potřebujete experimentálně srovnat jejich kvalitu.",
    "answers": {
        "1": "Použijete přednostně instance „nachytané“ při předchozím manuálním řízení.",
        "2": "Pro každou instanci srovnáte optimalizační kritérium, dosažené jedním během algoritmů A a B.",
        "3": "Pro každou instanci srovnáte průměrnou hodnotu opt. kritéria pro několik desítek až set spuštění.",
        "4": "Jako jedno spuštění algoritmu lze teoreticky uvažovat tolik běhů každého algoritmu, aby byl naplněn časový limit, a výběr nejlepšího řešení z nich."
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 1,
        "4": 1
    }
});

examQuestions.push({
    "question": "Máte experimentálně vyhodnotit, zda doba běhu Las Vegas randomizovaného algoritmu roste nejvýše s kvadrátem velikosti instance. Chcete o tom napsat teoretický článek.",
    "answers": {
        "1": "Použijete instance „nachytané“ z praxe.",
        "2": "Použijete instance vygenerované tak, aby každá instance zadané velikosti byla stejně pravděpodobná.",
        "3": "Použijete instance jedné velikosti.",
        "4": "Výpočet spustíte opakovaně pro každou instanci."
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 0,
        "4": 1
    }
});

examQuestions.push({
    "question": "Máte experimentálně vyhodnotit, zda relativní kvalita Monte Carlo randomizovaného algoritmu neklesá s rostoucí velikostí instance.",
    "answers": {
        "1": "Použijete instance „nachytané“ z praxe.",
        "2": "Budete potřebovat exaktní řešení (nebo to budete muset nějak obejít)",
        "3": "Použijete instance vygenerované tak, aby každá instance zadané velikosti byla stejně pravděpodobná.",
        "4": "Výpočet spustíte jednou pro každou instanci."
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 1,
        "4": 0
    }
});

examQuestions.push({
    "question": "Máte experimentálně vyhodnotit, zda randomizovaný algoritmus, který vyvíjíte, je citlivý na určitou charakteristickou instanci.",
    "answers": {
        "1": "Použijete přednostně instance „nachytané“ při provozu podobného algoritmu v praxi, i když zkoumanou charakteristiku u nich nelze zjistit.",
        "2": "Použijete přednostně instance vygenerované se známými vlastnostmi.",
        "3": "Použijete instance různých vlastností tak, aby bylo možné srovnání podobných instancí, avšak s či bez zkoumané charakteristiky.",
        "4": "Výpočet spustíte opakovaně pro každou instanci."
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 1,
        "4": 1
    }
});

examQuestions.push({
    "question": "Máte experimentálně vyhodnotit, zda randomizovaný plánovací algoritmus, který chcete nasadit do aplikace řízení údržby, pracuje pro toto nasazení uspokojivě. Obtížnost instancí řešených v ostrém nasazení je obtížné odhadnout na základě známých charakteristik.",
    "answers": {
        "1": "Použijete přednostně instance „nachytané“ při předchozím manuálním řízení.",
        "2": "Použijete přednostně instance vygenerované se známými vlastnostmi.",
        "3": "Použijete větší počet lehkých instancí k urychlení.",
        "4": "Výpočet spustíte opakovaně pro každou instanci."
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 0,
        "4": 1
    }
});

examQuestions.push({
    "question": "Srovnáváte dva deterministické algoritmy A a B, za účelem teoretického poznání závislosti počtu kroků na velikosti instance. Pro algoritmus B, různé instance jedné velikosti vykazují velký rozptyl v počtu kroků.",
    "answers": {
        "1": "Počet kroků pro algoritmus B zprůměrujete, protože rozptyl není součástí hodnocení.",
        "2": "Zjistíte statistické rozložení počtu kroků a pokud je symetrické, použijete průměr.",
        "3": "Zjistíte statistické rozložení počtu kroků pro oba algoritmy a vyhodnotíte, zda se překrývají a jak mnoho.",
        "4": "Pokusíte se zjistit, jaká další charakteristika instancí má vliv na počet kroků."
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 1,
        "4": 1
    }
});

examQuestions.push({
    "question": "Zjišťujete vliv parametru randomizované lokální iterativní heuristiky na kvalitu výsledku. Chcete ukázat, že daný parametr na kvalitu výsledku vliv nemá",
    "answers": {
        "1": "stačí jeden běh pro každou hodnotu parametru",
        "2": "program spustíte pro každou instanci mnohokrát, sledujete průměr.",
        "3": "pokud to není domácí úkol, použijete statistické metody, například korelaci, abyste dokázali nezávislost",
        "4": "pokud to není domácí úkol, naplánujete statistické metody tak, abyste prokázali nezávislost na parametru při všech charakteristikách instance"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 1,
        "4": 1
    }
});

examQuestions.push({
    "question": "Jak se pozná, že heuristika neskončí v lokálním minimu?",
    "answers": {
        "1": "po restartech skončí vždy ve stejném řešení",
        "2": "po více náhodných restartech skončí jinde"
    },
    "correct": {
        "1": 1,
        "2": 0
    }
});

examQuestions.push({
    "question": "Vede snížení velikosti turnaje ke zvýšení intenzifikace",
    "answers": {
        "1": "ano",
        "2": "ne"
    },
    "correct": {
        "1": 0,
        "2": 1
    }
});

examQuestions.push({
    "question": "S lineárně rostoucím k roste k-okolí",
    "answers": {
        "1": "lineárně",
        "2": "kvadraticky",
        "3": "exponenciálně"
    },
    "correct": {
        "1": 0,
        "2": 0,
        "3": 1
    }
});

examQuestions.push({
    "question": "Zvýšení selekčního tlaku může způsobit",
    "answers": {
        "1": "degeneraci",
        "2": "zrychlení konvergence",
        "3": "divergenci",
        "4": "ztrátu diverzity"
    },
    "correct": {
        "1": 1,
        "2": 1,
        "3": 0,
        "4": 1
    }
});

examQuestions.push({
    "question": "Zvýšení mutace může způsobit",
    "answers": {
        "1": "degeneraci",
        "2": "zrychlení konvergence",
        "3": "divergenci",
        "4": "ztrátu diverzity"
    },
    "correct": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 0
    }
});

examQuestions.push({
    "question": "Jak se pozná, že heuristika padá do lokálního extrému",
    "answers": {
        "1": "po každém restartu skončí stejně",
        "2": "po restartu to závisí na počátečním stavu"
    },
    "correct": {
        "1": 0,
        "2": 1
    }
});

examQuestions.push({
    "question": "Snížením selekčního tlaku u genetického algoritmu se zvyšuje diverzifikace",
    "answers": {
        "1": "Áno (True)",
        "2": "Nie (False)"
    },
    "correct": {
        "1": 1,
        "2": 0
    }
});

examQuestions.push({
    "question": "Mutace snižuje diverzifikaci",
    "answers": {
        "1": "Áno (True)",
        "2": "Nie (False)"
    },
    "correct": {
        "1": 0,
        "2": 1
    }
});

examQuestions.push({
    "question": "Když zvýšíme selekční tlak, zvýší se intenzifikace",
    "answers": {
        "1": "Áno (True)",
        "2": "Nie (False)"
    },
    "correct": {
        "1": 1,
        "2": 0
    }
});

examQuestions.push({
    "question": "Když zvýšíme počáteční teplotu, skončí algoritmus rychle v lokálním extrému?",
    "answers": {
        "1": "Áno (True)",
        "2": "Nie (False)"
    },
    "correct": {
        "1": 0,
        "2": 1
    }
});

examQuestions.push({
    "question": "Pokud zvýšíme selekční tlak, zvýší se diverzifikace",
    "answers": {
        "1": "Áno (True)",
        "2": "Nie (False)"
    },
    "correct": {
        "1": 0,
        "2": 1
    }
});

examQuestions.push({
    "question": "Zvyšuje se mutací intenzifikace",
    "answers": {
        "1": "Áno (True)",
        "2": "Nie (False)"
    },
    "correct": {
        "1": 0,
        "2": 1
    }
});

examQuestions.push({
    "question": "Když je lokální heuristika silně závislá na počátečním řešení, pomůže zvětšit nebo zmenšit okolí?",
    "answers": {
        "1": "Zvětšit",
        "2": "Zmenšit"
    },
    "correct": {
        "1": 1,
        "2": 0
    }
});

examQuestions.push({
    "question": "Kdy lokální heuristika NEMÁ tendenci padat do lokálního minima",
    "answers": {
        "1": "z náhodného řešení skončí vždy jinde",
        "2": "z náhodného řešení skončí vždy ve (zhruba) stejném místě"
    },
    "correct": {
        "1": 0,
        "2": 1
    }
});

examQuestions.push({
    "question": "Lineární programování",
    "answers": {
        "1": "je metoda",
        "2": "je problém",
        "3": "může mít omezení v podobě lineární nerovnice",
        "4": "má optimalizační kritéria v podobě lineární rovnice"
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 1,
        "4": 1
    }
});

examQuestions.push({
    "question": "Zvětší se zvětšením populace diverzita",
    "answers": {
        "1": "Áno (True)",
        "2": "Nie (False)"
    },
    "correct": {
        "1": 1,
        "2": 0
    }
});

examQuestions.push({
    "question": "Zvětší se zvětšením mutace diverzita",
    "answers": {
        "1": "Áno (True)",
        "2": "Nie (False)"
    },
    "correct": {
        "1": 1,
        "2": 0
    }
});

examQuestions.push({
    "question": "Zvýší snížení selekčního tlaku diverzitu",
    "answers": {
        "1": "Áno (True)",
        "2": "Nie (False)"
    },
    "correct": {
        "1": 1,
        "2": 0
    }
});

examQuestions.push({
    "question": "GA, vybíráme turnajem. Když turnaj zmenšíme, zvýší se intenzifikace",
    "answers": {
        "1": "Áno (True)",
        "2": "Nie (False)"
    },
    "correct": {
        "1": 0,
        "2": 1
    }
});

examQuestions.push({
    "question": "Jak se pozná, že má lokální heuristika dostatečnou iterativní sílu",
    "answers": {
        "1": "po restartech skončí vždy ve stejném řešení",
        "2": "po více náhodných restartech skončí jinde"
    },
    "correct": {
        "1": 1,
        "2": 0
    }
});

examQuestions.push({
    "question": "Metoda nejlepší nejdříve",
    "answers": {
        "1": "poskytuje exaktní řešení",
        "2": "zaručuje polynomiální složitost",
        "3": "je úplná",
        "4": "je systematická"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 1,
        "4": 1
    }
});

examQuestions.push({
    "question": "Pro praktickou aplikaci kombinatorického optimalizačního problému jste zvolili simulované ochlazování bez adaptačních mechanismů a s pevnou hodnotou koncové teploty. Na většině instancí se optimalizační kritérium nejdříve poněkud zhoršuje a přitom vykazuje náhodné změny, posléze se zlepšuje a náhodné změny se zmenšují. Na převážné části instancí konverguje ke stabilnímu a dobrému řešení. Na zbylých stále zlepšuje opt. kritérium a náhodné změny se zmenšují, ale optimalizační kritérium se nedostane ani ke startovací hodnotě. Na vině je:",
    "answers": {
        "1": "příliš vysoká hodnota počáteční teploty",
        "2": "příliš nízká hodnota koncové teploty",
        "3": "podmínka ukončení, která nedetekuje konvergenci",
        "4": "příliš nízká hodnota koeficientu ochlazování"
    },
    "correct": {
        "1": 0,
        "2": 0,
        "3": 1,
        "4": 0
    }
});

examQuestions.push({
    "question": "Turnajový výber ve standardním genetickém algoritmu:",
    "answers": {
        "1": "dává výsledky, které závisí na selekčním tlaku",
        "2": "dává lepší výsledky než jiné metody selekce",
        "3": "dává výsledky, které při správném nastavení jsou podobné jako při selekci správně nastavenou ruletou",
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 1
    }
});
