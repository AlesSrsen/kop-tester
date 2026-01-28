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
        "2": 1,
        "3": 1,
        "4": 1,
        "5": 0
    }
});

examQuestions.push({
    "question": "",
    "image": "assets/exam/toky-ve-stromu-2026-01-20.png",
    "answer": `
10/10 odpověď:   

Konfigurační proměnné:
Vektor délky k obsahující toky (celá čísla) pro dané páry uzlů.

Stavový prostor:
Stav je konkrétní ohodnocení konfiguračních proměnných. Jelikož připouštíme i ohodnocení, které není řešením, nějaká relaxace je nutná (např. kombinace celkového přetížení a relativního přetížení na jednotlivých hranách). Kdybychom se chtěli relaxaci vyhnout, mohli bychom vždy po nějaké operaci zkontrolovat, že se jedná o řešení, popřípadě snižovat postupně váhy (např. náhodným tokům), dokud to řešení není.
Operace: zvýšení/snížení hodnoty jednoho toku.
Stavový prostor je silně souvislý, jelikož každý stav je dosažitelný z každého jiného stavu pomocí aplikování operací.

Počáteční řešení:
Jednoduché: vektor samých nul.
Složitější: vektor náhodných čísel, jejichž součet nepřesahuje kapacitu hrany s maximální kapacitou. Pokud nepřipouštíme ohodnocení, které nejsou řešením, museli bychom takovýto vektor ještě opravit snižováním hodnot náhodným tokům.
Díky silné souvislosti stavového prostoru by mělo optimální řešení být dosažitelné bez ohledu na počáteční řešení.
`
});

examQuestions.push({
    "question": "",
    "image": "assets/exam/toky-ve-stromu-2025-02-10.png",
    "answer": `
10/10 odpověď:   

Konfigurační proměnné
Vektor o délce k (počet párů), kde oborem hodnot vektoru jsou celá čísla (reprezentující celočíselné toky přiřazené ke konkrétním párům uzlü).
Platí zde omezení, že součet všech toků (hodnot ve vektoru) nesmí přesáhnout kapacitu žádné hrany na cestě mezi páry s_j a t_j.

Druh simulované evoluce
Pro tento problém bych zvolil genetický algoritmus, z dúvodu, že pracujeme s vektorem s celočíselným oborem a diky tomu ho Ize jednoduše použít.

Reprezentace individua
Individuum je reprezentováno ohodnocením konfiguračních proměnných - ohodnocením vektoru popsáného v bodě 1. Jednoduše získám zdatnost individua - součet toků ve vektoru.

Genetické operátory
Mutace - unární operátor. Realizováno zvýšením/snížením celočíselného toku pro konkrétní pár. Je nutné ověřit, zda po mutaci platí omezení.
Křižení - binární operátor - např. jednobodové. Po křížení je opět nutné ověřit platnost omezení.

Pocáteční generace
Generace několika vektorů, např se samými nulami nebo náhodným ohodnocením. Při náhodném ohodnocení je nutné ověrit platnost omezení.
`
});


examQuestions.push({
    "question": "",
    "image": "assets/exam/min-sum-procedure-2025-01-16.png",
    "answer": `
10/10 odpověď:   

Konfigurační proměnné
Potřebujeme reprezentovat posloupnost A, budeme zapisovat do vectoru o délce r. Daný index ve vektoru bude označovat, zda dané číslo v posloupnosti je, nebo není. Tedy pro např. posloupnost (1,2,3,4,7,10,20) by mohl vektor vypadat následovně (1,1,1,1,0,0,1,0,0,1,0..0,1).
Konfigurační proměnná by byla nějaké ohodnocení daného vektoru
Obor hodnot by byla jakákoliv konfigurace/ohodnocení takového vektoru - všechny možnosti

Stavový prostor
Obsahuje nějakou konfigurační proměnnou z minulé sekci
Ohodnocení daného stavu je dané počtem 1 v daném vectoru + zda je daná posloupnost validní
Přesun do nového stavu by bylo dosaženo náhodným zaměněním hodnoty ve vectoru - tedy bud' z 0 na 1 nebo z 1 na 0 (krom prvního indexu, který musí být vždy součástí řešení)
Ohodnocení - cost funkce - daného algoritmu je daná počtem 1 ve vectoru - menší počet jedniček je lepší než větší - optimalizujeme dle délky posloupnosti, čím kratší tím lepší. Vzhledem k tomu, že povolujeme nevalidní ohodnocení, musíme tyto stavy penalizovat dostatečnou vahou, aby nebyl preferované nad validními řešením, ikdyž by řešení mělo delší posloupnost

- povolujeme jistou míru relaxace

Vlastnosti stavového prostoru
Toto řešení povoluje i nevalidní stavy, protože v posloupnosti múže být v nějaké konfiguraci číslo, které nelze vytvořit sečtením předcházejících prvků v posloupnosti - tyto proměnné musíme penalizovat.
Ohodnocení (cost) a přesuny viz předešlá sekce
Dalo by se to obejit asi možností, kde bysme generovali proměnné postupně z nulového vektoru jen kombinacemi proměnných již obsáhnuté daným vektorem, pak by přechody mezi stavy byly vždy validní a nemuselo by se relaxoval

Počáteční řešení
Triviální by byla konfigurace definovaná vectorem plným 0 až na první pozici, kde by byla 1 (dané prvním bodem v řeseni)
Dalsí možnost by byla nahodné ohodnocení daného vektoru, které müze vygenerovat i nevaldiní resení. Nicméné stavový prostor je silné souvislý, takže by nemel mit na resení vliv.
`
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
    },
    "aiNote": "2-opt (dvojzáměna hran) umí převádět túry mezi sebou, takže graf stavů je (za běžné definice) dosažitelný/„silně souvislý“. Počet túr není 25; pro n měst je (n−1)!/2 (pro n=5 je 12). Počet 2-opt sousedů je n(n−3)/2 = 5, ne 10."
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
    },
    "aiNote": "fmGA hodnotí fragmenty (podmnožiny genů) tak, že potřebuje proceduru, která umí ohodnotit i neúplnou informaci, a typicky používá referenční individuum k doplnění nedospecifikovaných genů. Nejde primárně o fenotyp celé kompletní konfigurace."
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
    },
    "aiNote": "Ranking nahrazuje absolutní zdatnost pořadím a mapováním pořadí na pravděpodobnosti výběru → přímo mění selekční tlak (může ho zvýšit i snížit dle parametrů). Nesouvisí s velikostí turnaje (to je parametr turnajové selekce)."
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
    },
    "aiNote": "Když se „landscape“ výrazně mění, je užitečné adaptovat selekční tlak (automaticky) a/nebo přepočítat zdatnosti (lineární škálování), aby tlak nebyl příliš silný/slabý v různých fázích. Trvale vysoká mutace často spíš rozbije konvergenci (šum přebije selekci)."
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
    },
    "aiNote": "Silná souvislost znamená dosažitelnost mezi stavy (důležité pro SA: aby bylo možné uniknout z lokálních minim). Sama o sobě negarantuje, že se libovolný algoritmus zastaví (záleží na pravidlech přijetí a stop kritériu). Není nutná systematická (exaktní) strategie – SA je typicky nesystematické."
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
    },
    "aiNote": "Řízení selekčního tlaku se dělá úpravou mapování zdatnosti→pravděpodobnosti (scaling, ranking), i když sampling je SUS. Pravděpodobnost konkrétního operátoru (cut&splice) řídí diverzifikaci/rekombinaci, ne selekční tlak samotné selekce."
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
    },
    "aiNote": "BOA/„bayesovská optimalizace“ v tomto smyslu stojí na probabilistickém modelu závislostí (typicky bayesovská síť) nad proměnnými reprezentace. Nejde primárně o formát chromozomu (binární řetěz/vektor), ale o model, který z populace odhaduje vazby a pak podle nich generuje nové jedince."
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
    },
    "aiNote": "V BOA se noví jedinci typicky vzorkují (generují) ze stochastického modelu naučeného z vybrané části populace. Křížení/ruleta jsou mechanismy klasických GA; cut&splice patří spíš do (fast) messy GA."
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
    },
    "aiNote": "Model se učí z dat (aktuální/selektované generace): má popsat statistické závislosti pozorované v kvalitních jedincích. Není to „model ideálu“ daný předem, ani výsledek křížení; výběr je jen předkrok (určí, na kom model učit)."
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
    },
    "aiNote": "Stejně jako předchozí otázka: model je odhad (hypotéza) o závislostech mezi proměnnými podle toho, co je v aktuální (typicky selektované) populaci. „Stochastický výběr“ model nevytvoří, jen vybere data."
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
    },
    "aiNote": "Klasické evoluční programování (Fogel) historicky vyvíjí stavové stroje/automaty a používá hlavně unární mutace; stromové programy jsou typičtější pro genetické programování (GP), DAG spíš pro kartézské GP."
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
    },
    "aiNote": "Evoluční strategie typicky optimalizují reálné vektory a nesou i endogenní parametry mutace (např. směrodatné odchylky/kroky). Stromy/automaty patří k GP/EP; binární řetěz je klasický GA."
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
    },
    "aiNote": "„Stavební bloky“ jsou krátká schémata nízkého řádu: přežívají snáz než složitá (ta vyžadují výrazně vyšší zdatnost). Pokud jsou určité geny daleko od sebe (velká délka schématu), jednobodové křížení je snadněji přestřihne → hůř přežívají. Mutace vždy s nějakou pravděpodobností schéma poškodí."
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
    },
    "aiNote": "Zpomalení konvergence se obvykle dělá snížením selekčního tlaku (méně agresivní výběr). Pouhé zvyšování mutace často vede spíš k rozbití informace (šum) než k „zdravému“ zpomalení. Při malém tlaku může mutační šum převážit → divergence, proto může být nutné snížit i mutaci."
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
    },
    "aiNote": "Lineární škálování přímo mění mapování zdatnosti→pravděpodobnosti, takže umí snížit tlak a tím zpomalit konvergenci. Změna mechanismu selekce při zachování stejného tlaku sama o sobě trend moc nezmění. Zvětšení turnaje naopak tlak typicky zvýší (rychlejší konvergence), takže není vhodné."
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
    },
    "aiNote": "Rychlost konvergence primárně řídí selekční tlak; při stejném tlaku bývá volba ruleta/turnaj druhotná. Zvyšovat mutaci není typický způsob urychlení (spíš přidává šum). Pro urychlení zvýšíme tlak a mutaci necháme jen na minimální úrovni nutné k udržení variability."
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
    },
    "aiNote": "Divergence po „dobrém“ průběhu může znamenat, že v okolí minima se dramaticky změní landscape (jiné měřítko/gradienty) a stávající nastavení začne být nevhodné. Také může selhávat adaptace selekčního tlaku (např. nechá tlak příliš nízko vůči mutačnímu šumu). Příliš malá mutace typicky vede spíš k předčasné konvergenci, ne k divergenci."
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
    },
    "aiNote": "Lineární škálování má tvar Z = a·z + b, takže řízení selekčního tlaku probíhá přímou úpravou konstant a,b (resp. ekvivalentních parametrů). Mutace je jiný „knoflík“ (diverzifikace). Pravděpodobnost výběru nejlepšího jedince je důsledek škálování + selekce, ne přímý parametr škálování."
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
    },
    "aiNote": "Všechny tři metriky dávají zpětnou vazbu o stavu evoluce: diverzita (ztráta variability), trend průměrné zdatnosti (stagnace/zrychlení) i rozptyl/„gap“ mezi elitou a středem (indikace tlaku). Na jejich základě lze tlak adaptovat."
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
    },
    "aiNote": "U rulety se „výseče“ odvozují ze zdatností po přepočtu; selekční tlak se tedy řídí nejpřímočařeji změnou koeficientů lineárního škálování. Výseče nejsou nezávislý ovládací prvek (jsou výsledkem). Mutace neřídí selekční tlak."
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
    },
    "aiNote": "U turnajové selekce je hlavní „knoflík“ velikost turnaje r: větší r → vyšší selekční tlak (větší šance, že vyhraje nejlepší). Pravděpodobnost výběru nejlepšího je až důsledek zvoleného r; mutace s tlakem přímo nesouvisí."
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
    },
    "aiNote": "Stav je úplné ohodnocení n proměnných → d možností na každou → d^n stavů. Prostor prohledávání často zahrnuje i „nepřiřazeno“ (parciální přiřazení), tedy d+1 možností na proměnnou → (d+1)^n."
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
    },
    "aiNote": "Jestli algoritmus skutečně udržuje selekční tlak, ověřuješ přímo vztah „poměrná zdatnost → četnost výběru do reprodukce“. Mutace není selekce. Volba jen jedné instance/velikosti test spíš zkreslí (tady není považováno za správný postup)."
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
    },
    "aiNote": "Turnaj i ruleta mají ovladatelné „spektrum“ tlaku (turnaj přes r, ruleta přes scaling/ranking), zhruba srovnatelné. SUS hlavně snižuje sampling-šum, ale sám o sobě dramaticky nezvětšuje rozsah tlaku. Lineární škálování přímo nastavuje mapování zdatností → tlak."
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
    },
    "aiNote": "Při příliš malém tlaku může mutační šum převážit informaci ze zdatnosti → divergence. Obtížnější instance často vyžadují delší průzkum (pomalejší konvergenci), tedy nižší tlak. Nastavení tlaku je provázané s mutací (oba ovlivňují diverzifikaci/intenzifikaci)."
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
    },
    "aiNote": "Messy reprezentace je „fragmentová“: individuum může být nedospecifikované i přespecifikované (duplicity). Operátory pracují s množinami (podmnožinami) genových hodnot/pozic, ne přímo se zdatností."
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
    },
    "aiNote": "fmGA explicitně manipuluje fragmenty/schémy = podmnožiny genů (cut/splice, filtrace schémat). Fenotyp a zdatnost se používají k hodnocení, ale operátory samotné kombinují genetické fragmenty."
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
    },
    "aiNote": "fmGA hodnotí fragment tak, že ho „vloží“ do referenčního (kompetitivního) individua, doplní zbytek a spočte fitness výsledné kompletní konfigurace. Nehodnotí jen odlišnost od reference ani průměrnou délku fragmentů."
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
    },
    "aiNote": "Stejný princip: fragment sám o sobě často neurčuje celé řešení, proto se doplňuje referenčním jedincem a vyhodnocuje se komplet. Samotná reference (bez dosazení fragmentu) by nedala informaci o kvalitě fragmentu."
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
    },
    "aiNote": "Při velmi vysoké mutaci se chování blíží náhodné procházce, ale selekce stále dává slabé „zaujetí“ směrem k lepším řešením → zaujatá (biased) náhodná procházka, ne čistě náhodná."
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
    },
    "aiNote": "Stavební blok (schéma/fragment) je podmnožina genů určitého řádu/délky, která se generuje a pak filtruje selekcí. Není to fenotyp ani „celé“ individuum; reference slouží hlavně k hodnocení, ne jako zdroj definice bloků."
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
    },
    "aiNote": "„Blok“ je schéma/fragment, které má přiřazené (vyhodnocené) fitness – tedy ohodnocená podmnožina genů. Není to celé individuum ani fenotyp; reference jen pomáhá blok hodnotit."
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
    },
    "aiNote": "Ve fmGA se vnější smyčka/„éry“ zvyšuje řád k stavebních bloků (cílovou velikost fragmentů), aby se postupně skládaly větší a větší konzistentní části řešení. Délka reference se nemění a selekční tlak není podstata vnější smyčky."
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
    },
    "aiNote": "Referenční jedinec je „šablona“ pro doplnění nedospecifikovaných genů při hodnocení fragmentu: dosazuješ fragment do reference (tedy proměnné reference jsou nahrazovány hodnotami z fragmentu). Nejde o stochastický model (to je BOA)."
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
    },
    "aiNote": "Relaxace typicky nahradí původní kritérium kombinací „kvalita + odhad vzdálenosti/porušení“, aby i neřešení dostala smysluplné vedení směrem k řešení. Tím zlepšuje dosažitelnost (můžeš procházet i přes neřešení místo zahazování). Obvykle má parametr (váha pokuty/odhadu), který se ladí experimentálně; není to oprava konfigurace ani konstanta pro všechna neřešení."
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
    },
    "aiNote": "Pro ověření teorie potřebuješ kontrolu nad parametry → generované instance s řízenými parametry (a také různé velikosti, aby se ukázalo škálování). Kvůli randomizaci SA je nutné opakované spouštění. Praktický mix je spíš pro „black-box“ nasazení, ne pro test teorie parametrů."
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
    },
    "aiNote": "Počáteční teplota souvisí s hloubkami lokálních minim a škálou zhoršení δ, proto testuješ instance různé obtížnosti/hloubky a i různé velikosti. Sleduješ průběh konvergence vs. rozvrh ochlazování a kvůli randomizaci opakuješ běhy. Nestačí fixovat jednu velikost ani zkoušet jen „lehké“ instance."
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
    },
    "aiNote": "Malá T → pravděpodobnost přijetí zhoršení exp(−δ/T) je velmi malá → algoritmus se chová jako strmá lokální heuristika a snadno uvízne v lokálním minimu."
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
    },
    "aiNote": "SA typicky zvolí náhodného souseda; pokud je lepší, přijme ho, a pokud je horší, může ho přijmout s pravděpodobností závislou na δ a T (Metropolis). To odpovídá „zlepšení nebo přípustné zhoršení“, ne výběru nejlepšího."
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
    },
    "aiNote": "Krátké equilibrium znamená málo pokusů při dané teplotě → teplota se snižuje příliš rychle → klesá šance překonat bariéry (hloubky minim) → častější uvíznutí."
});

examQuestions.push({
    "question": "Zvýšení počtu iterací při konstantní teplotě u SA (equilibrium), odpovídá:",
    "answers": {
        "1": "zvýšení koeficientu ochlazování",
        "2": "snížení koeficientu ochlazování",
        "3": "vztah nelze vyjádřit"
    },
    "correct": {
        "1": 1,
        "2": 0,
        "3": 0
    },
    "aiNote": "Když prodloužíme equilibrium (víc kroků na stejné teplotě), teplota se v čase snižuje pomaleji (dáme systému víc času „promíchat“ se na dané T). To je ekvivalentní pomalejšímu ochlazování, tj. většímu koeficientu ochlazování ve smyslu „méně agresivního“ kroku (např. α blíž 1 v T_{k+1}=αT_k). Není to snížení koeficientu (to by zrychlilo ochlazení), a vztah vyjádřit lze."
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
    },
    "aiNote": "„Velmi nízký“ koeficient (typicky α v cool(T)=αT) znamená rychlé ochlazení → rychle klesne ochota přijímat zhoršení → SA se chová jako lokální heuristika a častěji uvízne."
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
    },
    "aiNote": "Ano: rychlé ochlazení brzy snižuje přijímání horších tahů, takže algoritmus ztratí schopnost překonávat bariéry mezi lokálními minimy."
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
    },
    "aiNote": "„Iterativní síla“ se projeví tím, že výsledná kvalita málo závisí na startu: testuješ více počátečních řešení a kvůli randomizaci opakuješ běhy. Samotná závislost času na velikosti není přímý test síly; omezit se jen na malé instance by mohlo zkreslit."
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
    },
    "aiNote": "Teplota T musí být ve stejném měřítku jako zhoršení δ, takže je potřeba normalizace/škálování kritéria. Znalost hloubek lokálních minim pomáhá nastavit T0 a rozvrh. A délka equilibrium (kolik kroků na teplotu) je do značné míry zaměnitelná s koeficientem ochlazování (obojí řídí rychlost ochlazení v čase)."
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
    },
    "aiNote": "T0 musí být konzistentní s tím, jak rychle budeš chladit (α, equilibrium): vysoké T0 bez dost pomalého chlazení jen plýtvá kroky, nízké T0 vyžaduje extrémně pomalé chlazení. Záleží na obtížnosti (hloubky bariér) i na škále kritéria (haléře vs koruny → T se musí škálovat stejně)."
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
    },
    "aiNote": "Koncová teplota, pokud je moc vysoká, ukončí SA ještě v „diverzifikační“ fázi → prohledáš méně do hloubky a skončíš hůř. Nemusí být konstantní při změně T0 (důležitý je celý rozvrh). Často je praktické ukončovat adaptivně podle stagnace/konvergence."
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
    },
    "aiNote": "Pro „black-box“ validaci nasazení použiješ reprezentativní mix reálných (praktických) instancí. Protože SA je randomizované a i nastavení teploty může používat náhodu, běhy je nutné opakovat a hodnotit statisticky."
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
    },
    "aiNote": "Pro nasazení chceš realistiku → používej praktické instance z provozu. U randomizovaných algoritmů je jeden běh nereprezentativní, porovnávej průměr/rozptyl z mnoha běhů. Když čas nevadí a B je rychlejší, férové je využít rychlost k více běhům a brát nejlepší řešení v rámci stejného „rozpočtu“ (např. 3 běhy vs 1)."
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
    },
    "aiNote": "Opět: realistické instance z praxe. Jeden běh je málo (randomizace), porovnávej statistiky z více běhů. Pokud existuje pevný časový limit, je přirozené chápat „jedno spuštění“ jako využití celého limitu (více restartů) a vzít nejlepší dosažené řešení v limitu."
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
    },
    "aiNote": "Pro tvrzení o asymptotice potřebuješ kontrolované rozdělení instancí podle velikosti → generuj uniformně (každá instance dané velikosti stejně pravděpodobná). Las Vegas má náhodnou dobu běhu, proto opakuj a odhaduj očekávaný čas/rozptyl. Jedna velikost nestačí na růstovou hypotézu."
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
    },
    "aiNote": "„Relativní kvalita“ vyžaduje nějaký referenční optimum/best-known → ideálně exaktní řešení (nebo chytrý obchvat). Aby ses bavil o závislosti na velikosti bez zkreslení, generuj instance kontrolovaně (uniformně). Jeden běh typicky nestačí (Monte Carlo má náhodnou kvalitu)."
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
    },
    "aiNote": "Citlivost na charakteristiku testuješ jen tehdy, když ji umíš u instancí kontrolovat/znát → generované instance se známými vlastnostmi. Potřebuješ páry „podobné“ s/bez charakteristiky a opakované běhy kvůli randomizaci."
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
    },
    "aiNote": "Když obtížnost nejde dobře odhadnout z parametrů, nejlepší je vzít reálné instance z praxe (manuální historie) jako proxy budoucího provozu. Randomizovaný algoritmus musíš opakovaně spouštět a hodnotit statisticky; lehké instance by zkreslily očekávání."
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
    },
    "aiNote": "U velkého rozptylu není průměr automaticky vhodný: nejdřív zjisti rozdělení (a teprve při symetrii/praktické vhodnosti použij průměr). Smysluplné je porovnat rozdělení obou algoritmů (překryv, kvantily) a hledat další instanční charakteristiku, která rozptyl vysvětluje."
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
    },
    "aiNote": "U randomizovaných heuristik je nutné mnoho běhů a práce se statistikou (průměr, rozptyl, testy nezávislosti/korelace). Jeden běh nic nedokazuje. Pro silné tvrzení „nemá vliv“ je potřeba plánovat test napříč charakteristikami instancí (aby efekt nebyl skrytý jen v části prostoru)."
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
    },
    "aiNote": "Pokud po mnoha restartech končíš ve stejném řešení, je to známka, že heuristika má dost síly „přetlačit“ start a konverguje do stejného (pravděpodobně velmi dobrého) attractoru. Kdyby padala do různých lokálních minim, výsledky by se výrazně lišily."
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
    },
    "aiNote": "Ne: menší turnaj znamená nižší selekční tlak (větší role náhody) → více diverzifikace, méně intenzifikace. Intenzifikaci zvyšuje naopak zvětšení turnaje."
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
    },
    "aiNote": "U „pravidelného“ k-okolí počet kombinací tahů roste typicky exponenciálně s k (kombinuješ více elementárních změn), proto není růst lineární ani kvadratický."
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
    },
    "aiNote": "Vyšší selekční tlak rychleji rozmnoží elitu → rychlejší konvergence, ale zároveň ztráta diverzity a riziko degenerace (uvíznutí v lokálním optimu). Divergence je typičtější při příliš malém tlaku v kombinaci s velkým mutačním šumem."
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
    },
    "aiNote": "Vysoká mutace přidává šum a může přebít selekci → divergence (algoritmus „nepamatuje“ dobré bloky). Nevede typicky k degeneraci ani k rychlejší konvergenci; naopak diverzitu spíš zvyšuje, ne snižuje."
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
    },
    "aiNote": "Pokud výsledek výrazně závisí na startu (různé restarty končí různě), je to typické pro uvíznutí v různých lokálních extrémech. Kdyby vždy končila stejně, spíš by měla velkou iterativní sílu / dominující attractor."
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
    },
    "aiNote": "Ano: slabší selekční tlak znamená menší preferenci elitních jedinců, takže se lépe udrží rozmanitost populace (větší diverzifikace)."
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
    },
    "aiNote": "Ne: mutace je zdroj nové genetické informace a typicky diverzitu zvyšuje. (Extrémně vysoká mutace ale může vést k „náhodné procházce“ a ztrátě exploatace, ne k nižší diverzitě.)"
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
    },
    "aiNote": "Ano: vyšší selekční tlak znamená agresivnější preferenci nejzdatnějších → více exploatace/intenzifikace kolem aktuálně dobrých oblastí."
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
    },
    "aiNote": "Ne: vyšší počáteční teplota zvyšuje pravděpodobnost přijetí zhoršení, takže algoritmus víc prozkoumává prostor a méně rychle „zamrzá“ v lokálním extrému."
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
    },
    "aiNote": "Ne: vyšší selekční tlak obvykle diverzitu snižuje (rychle převládne několik podobných elitních jedinců). Diverzifikace roste spíš se snížením tlaku nebo zvýšením mutace."
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
    },
    "aiNote": "Ne: mutace je primárně diverzifikační mechanismus (průzkum). Intenzifikaci zvyšuje selekce (vyšší selekční tlak) a elitismus."
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
    },
    "aiNote": "Zvětšení okolí (silnější tahy/bohatší sousedství) zvyšuje šanci překročit bariéry a snížit závislost na startu, protože se heuristika snáz dostane do jiných oblastí prostoru než jen do nejbližšího lokálního optima."
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
    },
    "aiNote": "Pokud z různých náhodných startů končíš pořád ve stejném (nebo velmi podobném) řešení, heuristika pravděpodobně má dost iterativní síly a není „roztříštěná“ do mnoha lokálních minim. Kdyby vždy končila jinde, spíš padá do různých lokálních minim podle startu."
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
    },
    "aiNote": "Lineární programování je třída optimalizačních problémů (LP): lineární objektivní funkce a lineární omezení (rovnosti/nerovnosti). „Metody“ jsou pak např. simplex nebo interior-point, ale to je něco jiného než samotná definice problému."
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
    },
    "aiNote": "Ano: větší populace je víc vzorků prostoru a obvykle lépe udrží genetickou variabilitu (méně driftu, menší riziko ztráty diverzity)."
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
    },
    "aiNote": "Ano: mutace vnáší nové alely/variace, takže diverzita roste. Pozor jen na extrém: příliš vysoká mutace může rozbít konvergenci (divergence)."
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
    },
    "aiNote": "Ano: nižší selekční tlak znamená méně agresivní šíření elit → více různých jedinců přežije a diverzita se udrží / zvýší."
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
    },
    "aiNote": "Ne: zmenšení velikosti turnaje snižuje selekční tlak (víc rozhoduje náhoda), takže klesá intenzifikace a roste diverzifikace. Intenzifikaci naopak zvyšuje větší turnaj, protože častěji vyhrává nejzdatnější jedinec."
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
    },
    "aiNote": "Dostatečná iterativní síla znamená, že iterace „přebijí“ start: z různých počátečních řešení dojdeš ke stejnému výsledku. Pokud končíš různě, start/nahoda má stále velký vliv a síla je slabší."
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
    },
    "aiNote": "Best-first je systematické prohledávání (správa OPEN), a při standardních předpokladech je úplné (najde řešení, pokud existuje) a může dát exaktní řešení (typicky včetně optimálního při vhodné evaluaci). Neposkytuje ale obecnou záruku polynomiální složitosti (může být exponenciální)."
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
    },
    "aiNote": "Popis „stále se zlepšuje, fluktuace klesají, ale ještě se ani nevrátil na start“ vypadá jako běh, který by měl pokračovat (probíhá intenzifikace), jen se ukončí nevhodně/nezachytí konvergenci správně. Problém tedy není nutně v T0/Tk/α, ale ve stop podmínce (nedetekuje, že ještě není hotovo / ukončuje špatně)."
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
    },
    "aiNote": "Turnajová selekce je parametrizovaná (velikost turnaje) → výsledky závisí na selekčním tlaku. Není univerzálně „lepší“ než jiné metody; jde o trade-off (diverzita vs intenzifikace). Při vhodném nastavení tlaku může dávat velmi podobné chování jako ruleta se správně nastaveným škálováním/rankingem."
});

examQuestions.push({
    "question": "Genetický algoritmus tvoři novou generaci stylem µ + λ, tj. ke generaci o µ jedincích se přidá λ nových a z celku se vybere opět µ nejlepších jedinců. Pro µ = λ = 1 je tento algoritmus vlastně:",
    "answers": {
        "1": "metodou nejlepší nejdříve",
        "2": "metodou prvé zlepšení",
        "3": "náhodnou procházkou",
    },
    "correct": {
        "1": 0,
        "2": 1,
        "3": 0
    },
    "aiNote": "Při µ=λ=1 máme v každém kroku právě jednoho „rodiče“ a vytvoří se jeden potomek; z dvojice {rodič, potomek} se ponechá lepší. To je přesně lokální iterativní heuristika typu „prvé zlepšení/přípustné zlepšení“ (ve smyslu: přijmi tah, pokud zlepší). Není to „nejlepší nejdříve“ (to vybírá nejlepší ze širší množiny otevřených stavů) ani náhodná procházka (ta by občas přijímala i horší stav)."
});
