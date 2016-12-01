var questions = [];

questions.push({
    question: "Nechť $f(n) = Θ(n!)$. Pak:",
    answers: {
        1: "$f(n) = O(2^n)$",
        2: "$f(n) = O(1)$",
        3: "$f(n) = Ω(n)$",
        4: "$f(n) = Ω(n^2)$"
    },
    correct: {1: 0, 2: 0, 3: 1, 4: 1}
});
questions.push({
    question: "Nechť $f(n)=Θ(2^n)$. Pak:",
    answers: {
        1: "$f(n) = O(2^n)$",
        2: "$f(n) = O(1)$",
        3: "$f(n) = Ω(1)$",
        4: "$f(n) = Ω(n^2)$"
    },
    correct: {1: 1, 2: 0, 3: 1, 4: 1}
});
questions.push({
    question: "Nechť $f(n) = Θ(n^2)$. Pak:",
    answers: {
        1: "$f(n) = Ω(n)$",
        2: "$f(n) = Ω(n^2)$",
        3: "$f(n) = O(2^n)$",
        4: "$f(n) = O(n^3)$"
    },
    correct: {1: 1, 2: 1, 3: 1, 4: 1}
});
questions.push({
    question: "Nechť $f(n) = Θ(n)$. Pak:",
    answers: {
        1: "$f(n) = O(2^n)$",
        2: "$f(n) = O(1)$",
        3: "$f(n) = Ω(1)$",
        4: "$f(n) = Ω(n^2)$",
        5: "$f(n) = Ω(n)$",
        6: "$f(n) = Ω(n^2)$",
        7: "$f(n) = O(2^n)$",
        8: "$f(n) = O(n)$"
    },
    correct: {1: 1, 2: 0, 3: 1, 4: 0, 5: 1, 6: 0, 7: 1, 8: 1}
});
questions.push({
    question: "Nechť $f(n) = Θ(n^2)$. Pak:",
    answers: {
        1: "$f(n) = O(n^2)$",
        2: "$f(n) = O(n)$",
        3: "$f(n) = Ω(n)$",
        4: "$f(n) = Θ(n^3)$"
    },
    correct: {1: 1, 2: 0, 3: 1, 4: 0}
});
questions.push({
    question: "Zaškrtněte správná tvrzení (za předpokladu, že platí $NP \\neq P$):",
    answers: {
        1: "$NP \\subset EXPTIME$",
        2: "$P \\subset NP$",
        3: "$Co-NP \\subset NPC$",
        4: "$P \\cap NPH = \\textrm{Ø}$"
    },
    correct: {1: 1, 2: 1, 3: 0, 4: 1}
});
questions.push({
    question: "Zaškrtněte správná tvrzení (za předpokladu, že platí $NP \\neq P$)",
    answers: {
        1: "$NPC = NP \\cap NPH$",
        2: "$P \\subset NPC$",
        3: "$NPO \\subset NPH$",
        4: "$Co-NP \\cap NP = \\textrm{Ø}$"
    },
    correct: {1: 1, 2: 0, 3: 0, 4: 0}
});
questions.push({
    question: "Zaškrtněte správná tvrzení:",
    answers: {
        1: "$NP \\subset P$",
        2: "$NP = P$",
        3: "$NP \\subset NPH$",
        4: "$NPC \\subset NPH$"
    },
    correct: {1: 0, 2: 0, 3: 0, 4: 1}
});
questions.push({
    question: "Zaškrtněte správná tvrzení:",
    answers: {
        1: "Pro některé NPC problémy existuje polynomiální algoritmus (pro det. Turingův stroj)",
        2: "Certifikát NPC problémů je možno zkontrolovat v polynomiálním čase (det Turingovým strojem)",
        3: "NPC problémy jsou řešitelné v polynomiálním čase nedet. Turingovým strojem"
    },
    correct: {1: 0, 2: 1, 3: 1}
});
questions.push({
    question: "Zaškrtněte správná tvrzení:",
    answers: {
        1: "NPC problémy jsou ty nejtěžší rozhodovací kombinatorické problémy",
        2: "Všechny P problémy lze řešit v polynomiálním čase (det. Turingovým strojem)",
        3: "Pro některé NPC problémy existuje polynomiální algoritmus (pro deterministický Turingův stroj)"
    },
    note: "NPC problémy NEjsou ty nejtěžší rozhodovací kombinatorické problémy",
    correct: {1: 0, 2: 1, 3: 0}
});
questions.push({
    question: "Zaškrtněte správná tvrzení. Úplná strategie prohledávání stavového prostoru:",
    answers: {
        1: "Vždy prohledává celý stavový prostor",
        2: "Je např. metoda „pouze nejlepší“ (best-only)",
        3: "Je např. metoda „nejlepší nejdříve“ (best-first)",
        4: "Prohledá celý (případně efektivně ořezaný) stavový prostor, pokud neexistuje řešení",
        5: "Vždy nalezne optimální řešení (pokud existuje)"
    },
    correct: {1: 0, 2: 0, 3: 1, 4: 1, 5: 1}
});
questions.push({
    question: "Zaškrtněte správná tvrzení. Systematická strategie prohledávání stavového prostoru:",
    answers: {
        1: "Vždy nalezne optimální řešení (pokud existuje)",
        2: "Vždy prohledá celý stavový prostor",
        3: "Prohledá celý stavový prostor, pokud neexistuje řešení",
        4: "Je úplná"
    },
    correct: {1: 1, 2: 0, 3: 1, 4: 1}
});
questions.push({
    question: "Zaškrtněte správná tvrzení:",
    answers: {
        1: "Některé NP problémy lze řešit v polynomiálním čase",
        2: "Certifikát NP problémů se dá zkontrolovat v polynomiálním čase",
        3: "NP problémy jsou řešitelné v polynomiálním čase nedeterministickým turingovým strojem"
    },
    correct: {1: 1, 2: 1, 3: 1}
});
questions.push({
    question: "Zaškrtněte správné tvrzení:",
    answers: {
        1: "Jestliže je daný problém $O(n^2)$, neexistuje algoritmus řešící tento problém v lineárním čase.",
        2: "Jestliže je daný problém $Ω(n^2)$, neexistuje algoritmus řešící tento problém v lineárním čase.",
        3: "Jestliže je daný problém $Θ(n^2)$, neexistuje algoritmus řešící tento problém v lineárním čase.",
        4: "Jestliže existuje algoritmus řešící daný problém v čase $O(n^2)$, je tento problém $Θ(n^2)$."
    },
    correct: {1: 0, 2: 1, 3: 1, 4: 0}
});
questions.push({
    question: "Zaškrtněte správné tvrzení:",
    answers: {
        1: "Jestliže je daný problém $O(2^n)$, neexistuje algoritmus řešící tento problém v polynomiálním čase.",
        2: "Jestliže je daný problém $Ω(2^n)$, neexistuje algoritmus řešící tento problém v polynomiálním čase.",
        3: "Jestliže je daný problém $Θ(2^n)$, neexistuje algoritmus řešící tento problém v polynomiálním čase.",
        4: "Jestliže existuje algoritmus řešící daný problém v čase $O(2^n)$, je tento problém $Θ(2^n)$."
    },
    correct: {1: 0, 2: 1, 3: 1, 4: 0}
});
questions.push({
    question: "Zformulujte nějakou NPC rozhodovací verzi problému obchodního cestujícího.",
    answer: "Existuje cesta (Hamiltonovská kružnice) splňující omezující podmínky (např. kratší než $x$)?"
});
questions.push({
    question: "Zformulujte nějakou rozhodovací verzi NPC SAT problému.",
    answer: "Je daná formule splnitelná?"
});

questions.push({
    question: "Zformulujte nějakou rozhodovací verzi TSP problému.",
    answer: "Existuje cesta (Hamiltonovská kužnice) splňující omezující podmínky?"
});

questions.push({
    question: "Zformulujte nějakou enumerativní verzi TSP problému.",
    answer: "Nalezněte všechny možné cesty (Hamiltonovské kružnice) splňující omezující podmínky."
});
questions.push({
    question: "Zformulujte nějakou Co-NP (a nepatřící do P) rozhodovací verzi problému odvozeného od problému obchodního cestujícího.",
    answer: "co-NP úloha nesmí mít krátkého svědka ANO == nelze nalezením jednoho kladného případu ukončit prohledávání. Proto otázka může znít: <b>Jsou všechny hamiltonovy kružnice kratší jak $T$?</b><br>(Musí se tak začít prohledávat cesty delší jak $T$ a zjistit, jestli nějaká z nich je hamiltonova kružnice.) "
});

questions.push({
    question: "A) Dokažte, že rozhodovací verze problému \"minimum bin packing\" patří do NP.<br>" +
    "B) Navrhněte pro tento problém konfigurační proměnné.<br>" +
    "C) Co je zde certifikát? Jak jej ověřím?",
    answer: "Aby byl problém v NP, musí jít v polyn. čase ověřit jeho certifikát. Certifikátem zvolíme pole $A$ velikosti $n$, kde na pozici $A[n]$ je číslo kontejneru, ve kterém se machází daná věc $n$.<br" +
    "Ověření proběhne tak, že projdu pole $A$ a sečtu váhy věci v každém kontejneru. Takhle vzniklé váhy porovnám s kapacitami kontejnerů ze zadání. Složitost je $O(n)$ (sčítání a porovnávání), což je polynomiální. Pole $A$, kde si pro každou věc pamatuju, ve kterém je kontejneru. Certifikát je konkrétní ohodnocení konfiguračních proměnných, ověření proběhne tak, jak je naznačeno v důkazu, že je problém NP.",
    note: "<b>Minimum bin packing problem</b> = Je dána množina $n$ věcí a pro každou věc její velikost. Je možné všechny věci umístit do nejvýše $K$ kontejnerů o kapacitě $B$ každý?"
});
questions.push({
    question: "A) Dokažte, že optimalizační problém obchodního cestujícího (TSP-O) patří do NPO.<br>B) Vyjmenujte jeho konfigurační proměnné<br>C) Co je zde certifikátem?",
    answer: "Optimalizační problém Π patří do třídy NPO, jestliže splňuje následující podmínky:<br><ul>"+
    "<li>velikost výstupu instance je omezena polynomem ve velikosti instance (tj. výstup lze zapsat v polynomiálním čase),</li>"+
    "<li>problém, zda daná konfigurace je řešením, patří do P (tj. omezující podmínky lze vyhodnotit v polynomiálním čase),</li>"+
    "<li>optimalizační kritérium lze vyhodnotit v polynomiálním čase</li></ul><br>"+
	"b) Vyjmenujte jeho konfigurační proměnné - vektor obsahující posloupnost uzlů<br>"+
	"c1) Co je certifikátem optimalizační verze tohoto problému? - Certifikát optimalizační verze, tj. konfiguraci, která dává optimální řešení, jistě nelze ověřit v polynomiálním čase. Musíme totiž zjistit, zda je skutečně optimální, což je problém TSP-O samotný.<br>"+
	"c2) Co jsou omezující podmínky optimalizační verze tohoto problému? - Cesta musí být uzavřená a každý uzel navštívit právě jednou"
});
questions.push({
    question: "A) Dokažte, že optimalizační problém uzlového pokrytí grafu patří do NPO<br>B) Vyjmenujte jeho konfigurační proměnné<br>C) Co je zde certifikátem?",
    answer: "Optimalizační problém Π patří do třídy NPO, jestliže splňuje následující podmínky:<br><ul>"+
    "<li>velikost výstupu instance je omezena polynomem ve velikosti instance (tj. výstup lze zapsat v polynomiálním čase),</li>"+
    "<li>problém, zda daná konfigurace je řešením, patří do P (tj. omezující podmínky lze vyhodnotit v polynomiálním čase),</li>"+
    "<li>optimalizační kritérium lze vyhodnotit v polynomiálním čase</li></ul><br>"+
    "b) Vyjmenujte jeho konfigurační proměnné - vektor obsahující posloupnost vrcholů<br>"+
	"c1) Co je certifikátem optimalizační verze tohoto problému? - Certifikát optimalizační verze, tj. konfiguraci, která dává optimální řešení, jistě nelze ověřit v polynomiálním čase. Musíme totiž zjistit, zda je skutečně optimální, což je problém TSP-O samotný.<br>"+
	"c2) Co jsou omezující podmínky optimalizační verze tohoto problému? - Cesta musí být uzavřená a každý uzel navštívit právě jednou"
});
questions.push({
    question: "A) Dokažte, že problém splnitelnosti booleovské formule (SAT) patří do NP.<BR>B) Vyjmenujte jeho konfigurační proměnné.<BR>C) Co je certifikátem rozhodovací verze tohoto problému?",
    answer: "<ul><li>A) Abychom dokázali, že je problém v NP, musíme certifikát ověřit v polynomiálním čase.</li>" +
    "<li>B) Bitový vektor (ohodnocení $true/false$ jednotlivých proměnných v SATu)</li>" +
    "<li>C) Certifikátem je takové ohodnocení (takový bitový vektor), pro který je daný SAT = 1</li></ul>"
});
questions.push({
    question: "A) Dokažte, že optimalizační problém nalezení max. kliky v grafu patří do NPO.<br>B) Vyjmenujte jeho konfigurační proměnné<br>C) Co jsou zde omezující podmínky?<br>",
    answer: "A) Optimalizační problém $\\varPi$ patří do třídy NPO, jestliže splňuje následující podmínky: <br> I.) Velikost výstupu instance je omezena polynomem ve velikosti instance -- výstup lze zapsat v polynomiálním čase; <br>" +
    "II.) Problém, zda daná konfigurace je řešením, patří do P -- omezující podmínky lze vyhodnotit v polynomiálním čase; <br>" +
    "III.) Hodnotu optimalizačního kritéria pro každé řešení každé instance lze vypočíst v polynomiálním čase -- optimalizační kritérium lze vyhodnotit v polynomiálním čase.<br><br>" +
    "B) Vektor všech uzlů, který nabývá $1$ na $i$-tém místě, pokud je $i$-tý uzel momentálně obsažen v klice, $0$ pokud není obsažen.<br>Vektor $X = {X_1 … X_n}$, kde $N$ je rovno počtu uzlů grafu. Proměná $X_i$ nabývá hodnot $0/1$, podle toho zda daný uzel tvoří součást kliky.<br>" +
    "C) Podgraf musí být úplný<br>",
    note: "Maximální klika = maximální úplný podgraf. Klika je takový podgraf nějakého grafu, který je úplným grafem, tzn. jehož všechny vrcholy jsou spojeny hranou se všemi zbylými."
});
questions.push({
    question: "Pro všechny problémy ve třídě NPH platí (za předpokladu, že $NP \\neq P$)",
    answers: {
        1: "Neexistuje pro ně polynomiální algoritmus pro det. Turingův stroj",
        2: "Jejich optimalizační kritérium se dá vždy vypočítat v polynomiálním čase (det. Turingovým strojem)",
        3: "Jsou řešitelné v polynomiálním čase nedet. tur. stroje"
    },
    correct: {1: 1, 2: 1, 3: 1}
});


questions.push({
    question: "Pro všechny problémy ve třídě NPH platí (za předpokladu, že $NP \\neq P$)",
    answers: {
        1: "Jsou to ty nejtěžší existující problémy",
        2: "Neznáme pro ně polynomiální algoritmus pro deterministický Turingův stroj",
        3: "Je možné zkontrolovat omezující podmínky v polynomiálním čase"
    },
    correct: {1: 0, 2: 1, 3: 0}
});

questions.push({
    question: "Jak poznáte, že daný problém nepatří do NP? Popište možnosti.",
    answer: "Jeho certifikát není možné zkontrolovat v polynomiálním čase determin. algoritmem.<br>Daný problém nelze převést na SAT. Každý NP problém totiž na SAT převést lze."
});

questions.push({
    question: "Jak poznáte, že daný problém nepatří do NPC? Popište možnosti.",
    answer: "I.) problém není NP <br> II.) nebo je problém P <br> III.) nebo najdu nějaký problém z NP, který není převoditelný pomocí Karpovy redukce na tento můj problém"
});

questions.push({
    question: "Třída NPH je:",
    answers: {
        1: "Třída problémů, pro které neznáme polynomiální algoritmus (pro deterministický Turingův stroj)",
        2: "Třída problémů, pro které lze zkontrolovat certifikát v polynomiálním čase",
        3: "Třída těch nejtěžších existujících problémů"
    },
    correct: {1: 1, 2: 0, 3: 0}
});

questions.push({
    question: "Třída Co-NP je:",
    answers: {
        1: "Třída všech takových problémů, pro které neznáme polynomiální algoritmus pro det. Turingův stroj",
        2: "Třída některých problémů, pro které nelze ověřit certifikát ANO-instanci v polynomiálním čase (det Turingovým strojem)",
        3: "Třída těžších problémů, než je NP"
    },
    correct: {1: 0, 2: 1, 3: 0}
});

questions.push({
    question: "Třída NPC je:",
    answers: {
        1: "Třída všech problémů, pro které neznáme polynomiální algoritmus",
        2: "Průsečík tříd NP a NPH",
        3: "Třída těch nejtěžších existujících rozhodovacích problémů"
    },
    correct: {1: 0, 2: 1, 3: 0}
});

questions.push({
    question: "Třída NP je třída problémů:",
    answers: {
        1: "Které nejsou řešitelné v polynomiálním čase",
        2: "Jejichž certifikát se dá zkontrolovat v polynomiálním čase",
        3: "Které jsou řešitelé v polynomiálním čase nedeterministickým turingovým strojem"
    },
    correct: {1: 0, 2: 1, 3: 1}
});

questions.push({
    question: "Jakým způsobem lze dokázat, že daný problém patří do NPC?",
    answer: "Dokážeme převést jiné NPC na náš problém.<br>"+
    		"NPC -> $\\varPi$<br>"+
    		"$\\varPi$ náleží NP",
    note: "Všechny NPC problémy na sebe jsou navzájem převoditelné"
});

questions.push({
    question: "Pomocí Karpovy redukce je možné:",
    answers: {
        1: "Převést instanci NP problému na instanci NPC problému v polynomiálním čase",
        2: "Převést instanci NP problému na instanci NPO problému",
        3: "Převést instanci rozhodovacího problému na instanci konstruktivního optimalizačního problému",
        4: "Dokázat, že daný rozhodovací problém patří do NPC",
        5: "Převést NPC problém na jiný NPC problém v polynomiálním čase",
        6: "Převést P problém na jiný P problém v polynomiálním čase"
    },
    correct: {1: 1, 2: 0, 3: 0, 4: 1, 5: 1, 6: 1}
});

questions.push({
    question: "Pomocí Karpovy redukce je možné:",
    answers: {
        1: "Převést instanci NP problému na instanci NPC problému v polynomiálním čase",
        2: "Převést instanci NP problému na instanci NPO problému",
        3: "Převést instanci NPC problému na instanci P problému v exponenciálním čase"
    },
    correct: {1: 1, 2: 0, 3: 0}
});

questions.push({
    question: "Co je to systematická strategie prohledávání stavového prostoru?",
    answer: "Je to úplná strategie, která navštíví každý stav nejvýše jednou."
});

questions.push({
    question: "Co je to úplná strategie prohledávání stavového prostoru?",
    answer: "Úplná strategie znamená navštívit všechny stavy kromě těch, o kterých víme, že nedávají (optimální) řešení."
});

questions.push({
    question: "Co je to kombinatorický problém, čím je charakterizován?",
    answer: "<p>Kombinatorický problém je charakterizován:</p><ul>" +
    "<li>Vstupní proměnné (např.: seznam děr)</li>" +
    "<li>Výstupní proměnné (např.: pořadí děr)</li>" +
    "<li>Konfigurační proměnné (např.: pořadí děr)</li>" +
    "<li>Omezení (např.: uzavřená cesta, každá díra právě jednou)</li>" +
    "<li>Optimalizační kritérium (např.: nejkratší!)</li>" +
    "</ul><br>" +
    "<p>" +
    "Kombinatorický problém může být <ul><li>I.) Rozhodovací</li> <li>II.) Konstruktivní</li> <li>III.) Enumerační</li></ul>" +
    "</p>"
});

questions.push({
    question: "Co je stavový prostor? Čím je specifikován?",
    answer: "Nechť $S={s_i}$ je množina všech stavů algoritmu $A$ řešícího $I$. Nechť $Q={qj}$ je množina operací $S→S$ takových, že $q_j(s_i)≠s_i$ pro všechna $s_i,q_j$. Pak dvojici $(S,Q)$ nazveme stavovým prostorem algoritmu $A$ řešícího $I$.<br>" +
    "Je charakterizován:<br><ul><li>Množinou stavů</li><li>Množinou operací, které reprezentují přechody mezi dvěma stavy</li></ul>"
});

questions.push({
    question: "Co je graf stavového prostoru? Jak je specifikován?",
    answer: "Nechť $(S,Q)$ je stavový prostor algoritmu řešícího instanci problému. Pak orientovaný graf $H=(S, E)$, kde hrana $(e_i,e_j)∈E$ odpovídá tahu $s_j=q(s_i)$ pro $q∈Q$ se nazývá grafem stavového prostoru algoritmu."
});

questions.push({
    question: "Co je počáteční konfigurací konstruktivních algoritmů?",
    answer: "Počáteční stav je nějaká triviální konfigurace (prázdný batoh apod.) a algoritmem se dopracujeme k řešení, které vyhovuje omezením."
});

questions.push({
    question: "Co jsou to co-NP problémy?",
    answer: "co-NP je třída problémů, ﻿﻿u kterých existuje v polynomiálním čase ověřitelný důkaz (tzv. protipříklad), že problém nemá řešení.<br>"+
			"Vysvětlení: u NP vyžadujeme snadno ověřitelný certifikát typu ANO, u co-NP certifikát typu NE. co-NP lze vytvořit negací NP.<br>"+
			"Příklad: Ověření nesplnitelnosti SAT."
});

questions.push({
    question: "Co jsou to iterativní heuristiky? Uveďte příklad.",
    answer: "Iterativní heuristika začne s nějakým řešením a to postupně vylepšuje. Iterativní heuristika se ale tak pohybuje v podgrafu stavového prostoru, ve kterém se nemusí nacházet globální optimum. Např. Simulované ochlazování."
});


questions.push({
    question: "Stavový prostor problému $0/1$ batohu lze vyjádřit pro různé algoritmy jako:",
    answers: {
        1: "Acyklický graf",
        2: "Cyklický graf",
        3: "n-rozměrnou hyperkrychli",
        4: "Strom"
    },
    correct: {1: 1, 2: 1, 3: 1, 4: 1}
});

questions.push({
    question: "Popište graf stavového prostoru pro problém nalezení uzlového pokrytí. Co jsou uzly v tomto grafu, co hrany?",
    answer: "Uzly jsou stavy, které reprezentují množinu uzlů, které tvoří uzlové pokrytí.<br>Hrany jsou operace, které reprezentují přidání nebo odebrání uzlu z této množiny"
});

questions.push({
    question: "Jak se vypočítá relativní chyba ($ε$) daného algoritmu? V jakých mezích se pohybuje?",
    answer: "$\\varepsilon = \\frac{C(OPT)-C(APX)}{C(OPT)}$ Relativní chyba se pohybuje v rozmezí $<0, 1>$."
});

questions.push({
    question: "Je dán problém $Π$. $Q(S)$ budiž hodnota optimalizačního kritéria řešení $S$ instance $I$ tohoto problému, dokázat, že algoritmus řešící tento problém je aproximativní. Musíme tedy:",
    answers: {
        1: "Pro každou instanci $I$ algoritmus skončí v polynomiálním počtu kroků",
        2: "Relativní kvalita algoritmu je konečná",
        3: "Relativní kvalita algoritmu $< 1$",
        4: "$Π \\in NP$",
        5: "Relativní chyba algoritmu $< 1$"
    },
    correct: {1: 1, 2: 1, 3: 0, 4: 0, 5: 1}
});

questions.push({
    question: "Nechť daná instance kombinatorického problému nemá řešení. Prohledá metoda „nejlepší nejdříve“ v takovém případě celý stavový prostor?",
    answers: {
        1: "Ano",
        2: "Ne"
    },
    note: "Neuvažujeme části stavového prostoru, které jsou v rozporu s optimalizačními kritérii.",
    correct: {1: 1, 2: 0}
});
questions.push({
    question: "Jaká je pravděpodobnost nalezení řešení rozhodovacího SAT problému pro plně randomizovaný algoritmus, který opakovaně čistě náhodně generuje ohodnocení vstupních proměnných?",
    answer: "$\\left(1-\\frac{1}{2^{k}}\\right)^c$"
});

questions.push({
    question: "Jaký je rozdíl v asymptotické složitosti metod \"backtracking\" (prohledávání s návratem) a \"forward-checking\" (dopředná kontrola)?",
    answer: "Žádný, asymptoticky jsou obě metody stejně obtížné."
});

questions.push({
    question: "Mějme optimalizační problém unátního pokrytí. Je dána binární (obsahující pouze hodnoty \"0\" a \"1\") matice $A$ o rozměrech $(m,n)$. $m$ je počet řádků, které mají být pokryty podmnožinou sloupců (z $n$). Daný řádek ($i$) je pokryt sloupcem $j$, pokud $A[i,j] = 1$. Problém nalezení minimálního pokrytí, tj. nalezení minimální podmnožiny sloupců, které pokrývají všechny řádky, patří do NPH. Zformulujte rozhodovací verzi tohoto problému, která má srovnatelnou složitost.",
    answer: "Je možné pokrýt všechny řádky nejvýše K<=n sloupci?"
});

questions.push({
    question: "Popište graf stavového prostoru pro problém obchodního cestujícího (TSP). Co jsou uzly v tomto grafu, co hrany?",
    answer: "Uzly - volba Hamiltonovy kružnice (obecně podgraf grafu s městy)<br>Hrany - Operace přechodu mezi těmito kružnicemi (dvojitá záměna uzlů…)"
});

questions.push({
    question: "Jak se vypočítá relativní kvalita ($R$) daného algoritmu? V jakých mezích se pohybuje?",
    answer: "$R >= ∀ I:$ $max({C_{APX}(I)/C_{OPT}(I), C_{OPT}(I)/C_{APX}(I)})$ $R ∈ <1,+nekonecno)$"
});

questions.push({
    question: "Nechť daná instance kombinatorického problému nemá řešení. Prohledá metoda \"pouze nejlepší\" v každém takovém případě celý stavový prostor?",
    answers: {
        1: "Ano",
        2: "Ne"
    },
    correct: {1: 0, 2: 1}
});

questions.push({
    question: "Jaká je pravděpodobnost splnění dané klauzule SAT problému o max. $k$ proměnných pro plně randomizovaný algoritmus, který opakovaně čistě náhodně generuje ohodnocení vstupních proměnných? Jaká bude pravděpodobnost splnění celé formule při $n$ klauzulích?",
    answer: "$1-\\frac{1}{2^{k}}$, pokud má být splněna celá formule, tak $(1-\\frac{1}{2^{k}})^n$"
});

questions.push({
    question: "Pro problémy patřící do třídy PTAS (polynomiální aproximační schéma) platí:",
    answers: {
        1: "Existuje algoritmus řešící tyto problémy v polynomiálním čase exaktně",
        2: "Existuje algoritmus řešící tyto problémy v polynomiálním čase s libovolně malou chybou",
        3: "Patří do NPC",
        4: "Jsou prodmnožinou APX",
        5: "Patří do NPH"
    },
    correct: {1: 0, 2: 1, 3: 0, 4: 1, 5: 0}
});

questions.push({
    question: "Jaká je asymptotická složitost metody větví a hranic (B&B)? V nejobecnějším případě.",
    answer: "$O(2^n)$ (= bruteforce)"
});

questions.push({
    question: "Jaké jsou kladeny požadavky na konfigurační proměnné kombinatorického problému?",
    answer: "Proměnných je konečný počet a mají konečné domény."
});

questions.push({
    question: "Jak je specifikován optimalizační kombinatorický problém ?",
    answer: "Jedná se o kombinatorický problém, pro který je <b>zadáno optimalizační kritérium</b> (cenová funkce)."
});

questions.push({
    question: "Zaškrtněta správná tvrzení (za předpokladu, že platí $NP \\neq P$)",
    answers: {
        1: "$P \\subset NPI$",
        2: "$P \\cap NPC = \\textrm{Ø}$",
        3: "$NP \\cap NPH = \\textrm{Ø}$",
        4: "$P \\subset NP$",
        5: "$NPC \\subset NPH$",
        6: "$NPO \\subset NPH$"
    },
    correct: {1: 0, 2: 1, 3: 0, 4: 1, 5: 1, 6: 0}
});

questions.push({
    question: "Jakým způsobem lze dokázat, že problém náleží do NP?",
    answer: "Nalezním certifikátu, který lze ověřit v polynomiálním čase."
});

questions.push({
    question: "Zaškrtněta správná tvrzení (za předpokladu, že platí $NP \\neq P$)",
    answers: {
        1: "$P \\subset NP$",
        2: "$NPI \\subset NPC$",
        3: "$P \\cap NP = \\textrm{Ø}$",
        4: "$NPH \\subset PSPACE$"
    },
    correct: {1: 1, 2: 0, 3: 0, 4: 1}
});

questions.push({
    question: "Uveďte příklad grafu stavového prostoru pro problém nalezení kliky v grafu (max. úplný podgraf). Co jsou uzly v tomto grafu, co hrany?",
    answer: "Uzly jsou stavy, které reprezentují podgrafy grafu, jehož pokrytí hledáme.<br>Hrany jsou operace, které reprezentují přidání/odebrání uzlu z podgrafů.",
    note: "Maximální klika = maximální úplný podgraf. Klika je takový podgraf nějakého grafu, který je úplným grafem, tzn. jehož všechny vrcholy jsou spojeny hranou se všemi zbylými."
});

questions.push({
    question: "Uveďte příklad grafu stavového prostoru pro problém splnitelnosti booleovské formule (SAT). Co jsou uzly v tomto grafu, co hrany?",
    answer: "A) Uzly jsou jednotlivé konfigurace proměnných<br>B) Hrany jsou operace, při nichž jednu z proměnných nastavím opačně"
});

questions.push({
    question: "Mají pseudopolynomiální algoritmy polynomiální složitost s velikostí instance?",
    answers: {
        1: "Ano",
        2: "Ne"
    },
    correct: {1: 1, 2: 0}
});

questions.push({
    question: "Co jsou to pseudopolynomiální algoritmy? Uveďte příklad.",
    answer: "Algoritmus, jehož počet kroků závisí polynomiálně na velikosti instance, ale závisí dále na parametru, který s velikostí instance nesouvisí, nazýváme pseudopolynomiálním.<br>" +
    "Příklad: Řešení problému batohu dynamickým programováním (ať už s dekompozicí dle váhy nebo ceny). "
});

questions.push({
    question: "Co jsou to greedy algoritmy?",
    answer: "Algoritmus v každém svém kroku vybírá lokální optimum, přičemž existuje šance, že takto nalezne optimum globální. Nevrací se do již navštívených stavů. Příklad: Heuristika cena/váha u problému batohu. "
});


questions.push({
    question: "Dokažte nebo vyvraťte, že konstruktivní optimalizační problém batohu patří do NPO.",
    answer: "Optimalizační problém $\\varPi$ patří do třídy NPO, jestliže splňuje následující podmínky:<br> I.) Velikost výstupu instance je omezena polynomem ve velikosti instance -- výstup lze zapsat v polynomiálním čase; <br>" +
    "II.) Problém, zda daná konfigurace je řešením, patří do P -- omezující podmínky lze vyhodnotit v polynomiálním čase; <br>" +
    "III.) Hodnotu optimalizačního kritéria pro každé řešení každé instance lze vypočíst v polynomiálním čase -- optimalizační kritérium lze vyhodnotit v polynomiálním čase."
});

questions.push({
    question: "Zformulujte nějakou NPC rozhodovací verzi problému nalezení uzlového pokrytí grafu.",
    answer: "Existuje uzlové pokrytí grafu velikost $k\\leq n$?",
    note: "Vrcholové pokrytí grafu taková podmnožina vrcholů, že každá hrana grafu je incidentní aspoň s jedním vrcholem z této množiny."
});


questions.push({
    question: "Jak zjistím, že moje jednoduchá lokální metoda má tendenci rychle uváznout v lokálním minimu?",
    answers: {
        1: "Při náhodných restartech vždy dojdu ke stejnému výsledku",
        2: "Při náhodných restartech dosažený výsledek příliš závisí na počátečním stavu"
    },
    correct: {1: 0, 2: 1}
});

questions.push({
    question: "Zjistím, že moje jednoduchá lokální metoda rychle uvázne v lokálním minimu. Problém řeším tím, že prohledávané okolí",
    answers: {
        1: "Zvětším",
        2: "Zmenším"
    },
    correct: {1: 1, 2: 0}
});

questions.push({
    question: "Je prohledávání do hloubky (DFS) systematická strategie?",
    answers: {
        1: "Ano",
        2: "Ne"
    },
    correct: {1: 1, 2: 0}
});

questions.push({
    question: "Je prohledávání do hloubky (DFS) úplná strategie?",
    answers: {
        1: "Ano",
        2: "Ne"
    },
    correct: {1: 1, 2: 0}
});

questions.push({
    question: "Je prohledávání do šířky (BFS) systematická strategie?",
    answers: {
        1: "Ano",
        2: "Ne"
    },
    correct: {1: 1, 2: 0}
});

questions.push({
    question: "Metoda \"nejlepší nejdříve\" (best-first):",
    answers: {
        1: "Je hladová",
        2: "Je úplná",
        3: "Prohledá celý stavový prostor, pokud neexistuje řešení",
        4: "Používá frontu"
    },
    correct: {1: 0, 2: 1, 3: 1, 4: 0}
});

questions.push({
    question: "Jak rychle se zvětšuje k-okolí stavu s rostoucím k?",
    answer: "Exponenciálně"
});

questions.push({
    question: "Mějme logickou funkci zadanou jako součet součinů (SOP, DNF). Rozhodovací problém určení splnitelnosti pro takto zadanou funkci (funkce může být rovna $1$) patří do:",
    answers: {
        1: "P",
        2: "NP",
        3: "NPC",
        4: "co-NP"
    },
    note: "<ul>" +
    "<li>P: Stačí splnit jednu klauzuli a máme vyhráno. A protože v disjunktivní normální formě může být proměnná v klauzuli jen jednou, najít takové ohodnocení je snadné.</li>" +
    "<li>NP: Když je to P, musí to být i NP</li>" +
    "<li>co-NP: Když je to P, musí to být i co-NP</li>" +
    "</ul>",
    correct: {1: 1, 2: 1, 3: 0, 4: 1}
});

questions.push({
    question: "Mějme logickou funkci zadanou jako součin součtů (POS, CNF). Rozhodovací problém určení kontradikce pro takto zadanou funkci (pro všechna ohodnocení proměnných je funkce rovna $0$) patří do:",
    answers: {
        1: "P",
        2: "NP",
        3: "NPC",
        4: "co-NP"
    },
    correct: {1: 0, 2: 0, 3: 0, 4: 1}
});

questions.push({
    question: "Mějme logickou funkci zadanou jako součin součtů (POS, CNF). Rozhodovací problém určení splnitelnosti pro takto zadanou funkci (funkce může být rovna $1$) patří do:",
    answers: {
        1: "P",
        2: "NP",
        3: "NPC",
        4: "co-NP"
    },
    correct: {1: 0, 2: 1, 3: 1, 4: 0}
});

questions.push({
    question: "Co znamená, když relativní kvalita ($R$) daného algoritmu je rovna $1$?",
    answer: "Algoritmus je maximálně přesný, vždy dostáváme optimální řešení."
});

questions.push({
    question: "Co znamená pojem \"globální minimum\" u optimalizačních problémů?",
    answer: "Konfigurace, která má nejlepší možnou hodnotu optimalizačního kritéria (cenu) pro každou instanci."
});

questions.push({
    question: "Co znamená pojem \"lokální minimum\" u optimalizačních problémů ?",
    answer: "Lokální minimum znamená, že všechny sousední stavy mají horší hodnotu optimalizačního kritéria.<br>Konfigurace, která splňuje opt. kritérium i omezení v daném čase řešení problému."
});

questions.push({
    question: "Popište princip Las Vegas randomizovaného algoritmu.",
    answer: "Randomizovaný algoritmus: Čas běhu je náhodná proměnná, výsledek je vždy správný. Příklad: Quicksort"
});

questions.push({
    question: "Popište princip Monte Carlo algoritmu.",
    answer: "Randomizovaný algoritmus: Dosažený výsledek (optimalizační kritérium) je náhodná proměnná, čas běhu je pro danou instanci pevný."
});

questions.push({
    question: "Jakým způsobem lze dokázat, že daný problém patří do NPH?",
    answer: "Potřebujeme jen převést SAT na ten náš problém (SAT je NPC → na něj lze převést každý NP)."
});

questions.push({
    question: "Velikost pravidelného k-okolí se s rostoucím k zvětšuje:",
    answers: {
        1: "Lineárně",
        2: "Exponenciálně",
        3: "Vždy jinak"
    },
    correct: {1: 0, 2: 1, 3: 0}
});

questions.push({
    question: "Od problému nalezení minimální uzlového pokrytí grafu odvoďte rozhodovací problém, který by patřil do třídy P",
    answer: "Minimální uzlové pokrytí: nalezněte minimální množinu uzlů grafu, která inciduje se všemi hranami. " +
    "=> Incidují v dané konfiguraci dané uzly se všemi hranami? NEBO Rozhodovací problém vrcholového pokrytí se ptá, zda-li v daném grafu existuje vrcholové pokrytí maximálně o k vrcholech.",
    note: "Vrcholové pokrytí grafu taková podmnožina vrcholů, že každá hrana grafu je incidentní aspoň s jedním vrcholem z této množiny."
});

questions.push({
    question: "Dokažte nebo vyvraťte, že konstruktivní optimalizační problém nalezení minimálního uzlového pokrytí patří do NPO.",
    answer: "Optimalizační problém Π patří do třídy NPO, jestliže splňuje následující podmínky:<br><ul>"+
    "<li>velikost výstupu instance je omezena polynomem ve velikosti instance (tj. výstup lze zapsat v polynomiálním čase),</li>"+
    "<li>problém, zda daná konfigurace je řešením, patří do P (tj. omezující podmínky lze vyhodnotit v polynomiálním čase),</li>"+
    "<li>optimalizační kritérium lze vyhodnotit v polynomiálním čase</li></ul>"
});

questions.push({
    question: "Pomocí Turingovy redukce je možné:",
    answers: {
        1: "Převést instanci jakéhokoliv problému na instance NPH problému",
        2: "Převést instanci (NPH) rozhodovacího problému na instanci (NPC) konstuktivního optimalizačního problému",
        3: "Převést instanci konstruktivního optimalizačního problému na instanci rozhodovacího problému",
        4: "Dokázat, že daný rozhodovací problém patří do NPH",
        5: "Převést NPH problém na jiný NPH problém v polynomiálním čase",
        6: "Převést P problém na jiný P problém v polynomiálním čase"
    },
    correct: {1: 0, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1}
});

questions.push({
    question: "Pomocí Turingovy redukce je možné:",
    answers: {
        1: "Převést instanci jakéhokoliv problému na instanci NPH problému v polynomiálním čase",
        2: "Převést instanci NPC rozhodovacího problému na instanci NPH konstruktivního optimalizačního problému",
        3: "Převést instanci NPH konstruktivního optimalizačního problému na instanci NPC rozhodovacího problému"
    },
    correct: {1: 0, 2: 1, 3: 1}
});

questions.push({
    question: "Pomocí Turingovy redukce je možné:",
    answers: {
        1: "Převést P problém na P problém v polynomiálním čase",
        2: "Převést NPC problém na P problém v exponenciálním čase",
        3: "Převést NPH problém na jiný NPH problém v polynomiálním čase"
    },
    correct: {1: 1, 2: 0, 3: 1}
});

questions.push({
    question: "Co je APX, FPTAS, PTAS, jaké jsou mezi nimi rozdíly?",
    answer: "<b>Algoritmus APR</b> pro problém N je R-aproximativní (eps-aproximativní), jestliže každou instanci N vyřeší v polynomiálním čase s relativní kvalitou R (relativní chybou eps).<br>"+
    		"<b>PTAS (Polynomial Time Approximation Scheme)</b> - Algoritmus APR, který pro každé 1 > eps > 0 vyřeší každou instanci problému N s relativní chybou nejvýše eps v čase polynomiálním v |I| nazýváme polynomiální aproximační schéma problému N.<br>"+
    		"<b>FPTAS (Fully Polynomial Time Approximation Scheme)</b> - Polynomiální aproximační schéma APR, jeho čas výpočtu závisí polynomiálně na 1/eps, nazýváme plně polynomiální aproximační schéma."
});

questions.push({
    question: "Třída NC1, co to je a jak se díky tomu dělá obvodová složitost?",
    answer: "NC = Nick's class je množina rozhodovacích problémů rozhodnutelných v polylogaritmickém čase na paralelním počítači s polynomiálním počtem procesorů."
});

questions.push({
    question: "Co je třída AC0?",
    answer: "Třída AC0 obsahuje jazyky rozpoznatelné booleovskými obvody s hloubkou O(\log^i n) = O(\log^0 n) = O(1) a polynomiálním počtem AND a OR hradel s neomezeným počtem vstupů (unlimited fan-in hradla). Negace je jen na vstupech, AND a OR se střídají."
});

questions.push({
    question: "Co jsou to konfigurační a výstupní proměnné kombinatorického problému? Jaký je mezi nimi rozdíl?",
    answer: "<ul><li><b>Konfigurační proměnné</b> jsou proměnné, kterými dokážu popsat jeden stav</li>"+
            "<li><b>Výstupní proměnné</b> jsou proměnné, kterými dokážu popsat výstup algoritmu</li></ul>"+
            "Mohou být shodné (konstruktivní problémy), nebo odlišné (rozhodovací problémy - konfigurační proměnné jsou třeba vektor a výstupní proměnná je ano/ne)"
});

questions.push({
    question: "Co všechno je nutné dokázat, abychom mohli daný problém zařadit do třídy PTAS (polynomiální aproximační schéma)?",
    answer: "Musí to být aproximativní algoritmus (APR), který pro každé epsilon vyřeší každou instanci problému s relativní chybou nejvýše epsilon v polynomiálním čase v |I|.<br>"+
            "Jde o podmnožinu třídy APX - u té stačilo řešení s relativní kvalitou R a chybou epsilon, nyní je omezení na polynomiální dobu výpočtu podle velikosti instance."
});

questions.push({
    question: "Co všechno je nutné dokázat, abychom mohli daný problém zařadit do třídy FPTAS (plně polynomiální aproximační schéma)?",
    answer: "Aby byl problém FPTAS, tak musí být PTAS a jeho čas výpočtu musí být polynomiálně závislý na 1/eps."
});

questions.push({
    question: "Co jsou NPI problémy?",
    answer: "Problémy, které nelze vyřešit v polynomiálním čase pomocí det. turingova stroje a zároveň na ně nelze redukovat nějaký NPC problém (např. nelze na ně převést SAT).<br>"+
            "Jinými slovy: Jsou to NP, ale nejsou v P ani v NPC."
});

questions.push({
    question: "Co je APX redukce? Co je APX úplný problém? Co je NPO-úplný problém? Jaký mezi sebou mají vztah?",
    answer: "<ul><li>APX redukce - převod jednoho APX problému na druhý APX problém se zachováním aproximace</li>"+
            "<li>APX úplný problém - problém, který patří do třídy APX a zároveň je APX těžký. (APX těžký je problém, na který jdou APX redukovat všechny ostatní APX problémy)</li>"+
            "<li>NPO-úplný problém - problém, který patří do třídy NPO a zároveň je NPO těžky (analogicky s APX)</li>"+
            "<li>Vztah ? TODO</li></ul>"
});

questions.push({
    question: "Co je báze v obvodové složitosti?",
    answer: "Množina komutativních Booleových funkcí (hradel), ze kterých konstruuji Booleův obvod (ohodnocuji každý vnitřní uzel zvoleným hradlem z báze)."
});

questions.push({
    question: "Co je to komunikační složitost a k čemu je dobrá?",
    answer: "Komunikační složitost se používá při vyhodnocení složitosti distribuovaných/paralelních algoritmů.<br>"+
            "Udává, kolikrát si musí jednotlivé výpočetní jednotky vyměnit informace, než dojde ke konci algoritmu/výpočtu."
});
