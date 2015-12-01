var otazky = [];

otazky.push({
    otazka: "Nechť $f(n) = Θ(n!)$. Pak:",
    odpovedi: {
        1: "$f(n) = O(2^n)$",
        2: "$f(n) = O(1)$",
        3: "$f(n) = Ω(n)$",
        4: "$f(n) = Ω(n^2)$"
    },
    spravne: {1: 0, 2: 0, 3: 1, 4: 1}
});
otazky.push({
    otazka: "Nechť $f(n)=Θ(2^n)$. Pak:",
    odpovedi: {
        1: "$f(n) = O(2^n)$",
        2: "$f(n) = O(1)$",
        3: "$f(n) = Ω(1)$",
        4: "$f(n) = Ω(n^2)$"
    },
    spravne: {1: 1, 2: 0, 3: 1, 4: 1}
});
otazky.push({
    otazka: "Nechť $f(n) = Θ(n^2)$. Pak:",
    odpovedi: {
        1: "$f(n) = Ω(n)$",
        2: "$f(n) = Ω(n^2)$",
        3: "$f(n) = O(2^n)$",
        4: "$f(n) = O(n^3)$"
    },
    spravne: {1: 1, 2: 1, 3: 1, 4: 1}
});
otazky.push({
    otazka: "Nechť $f(n) = Θ(n)$. Pak:",
    odpovedi: {
        1: "$f(n) = O(2^n)$",
        2: "$f(n) = O(1)$",
        3: "$f(n) = Ω(1)$",
        4: "$f(n) = Ω(n^2)$",
        5: "$f(n) = Ω(n)$",
        6: "$f(n) = Ω(n^2)$",
        7: "$f(n) = O(2^n)$",
        8: "$f(n) = O(n)$"
    },
    spravne: {1: 1, 2: 0, 3: 1, 4: 0, 5: 1, 6: 0, 7: 1, 8: 1}
});
otazky.push({
    otazka: "Nechť $f(n) = Θ(n^2)$. Pak:",
    odpovedi: {
        1: "$f(n) = O(n^2)$",
        2: "$f(n) = O(n)$",
        3: "$f(n) = Ω(n)$",
        4: "$f(n) = Θ(n^3)$"
    },
    spravne: {1: 1, 2: 0, 3: 1, 4: 0}
});
otazky.push({
    otazka: "Zaškrtněte správná tvrzení (za předpokladu, že platí $NP \\neq P$):",
    odpovedi: {
        1: "$NP \\subset EXPTIME$",
        2: "$P \\subset NP$",
        3: "$Co-NP \\subset NPC$",
        4: "$P \\cap NPH = \\textrm{Ø}$"
    },
    spravne: {1: 1, 2: 1, 3: 0, 4: 1}
});
otazky.push({
    otazka: "Zaškrtněte správná tvrzení (za předpokladu, že platí $NP \\neq P$)",
    odpovedi: {
        1: "$NPC = NP \\cap NPH$",
        2: "$P \\subset NPC$",
        3: "$NPO \\subset NPH$",
        4: "$Co-NP \\cap NP = \\textrm{Ø}$"
    },
    spravne: {1: 1, 2: 0, 3: 0, 4: 0}
});
otazky.push({
    otazka: "Zaškrtněte správná tvrzení:",
    odpovedi: {
        1: "$NP \\subset P$",
        2: "$NP = P$",
        3: "$NP \\subset NPH$",
        4: "$NPC \\subset NPH$"
    },
    spravne: {1: 0, 2: 0, 3: 0, 4: 1}
});
otazky.push({
    otazka: "Zaškrtněte správná tvrzení:",
    odpovedi: {
        1: "Pro některé NP úplné problémy existuje polynomiální algoritmus (pro det. Turingův stroj)",
        2: "Certifikát NP úplných problémů je možno zkontrolovat v polynomiálním čase (det Turingovým strojem)",
        3: "NP úplné problémy jsou řešitelné v polynomiálním čase nedet. Turingovým strojem"
    },
    spravne: {1: 0, 2: 1, 3: 1}
});
otazky.push({
    otazka: "Zaškrtněte správná tvrzení:",
    odpovedi: {
        1: "NPC problémy jsou ty nejtěžsí rozhodovací kombinatorické problémy",
        2: "Všechny P problémy lze řešit v polynomiálním čase (det. Turingovým strojem)",
        3: "Pro některé NP úplné problémy existuje polynomiální algoritmus (pro deterministický Turingův stroj)"
    },
    note: "NPC problémy NEjsou ty nejtěžsí rozhodovací kombinatorické problémy, to jsou NPH",
    spravne: {1: 0, 2: 1, 3: 0}
});
otazky.push({
    otazka: "Zaškrtněte správná tvrzení. Úplná strategie prohledávání stavového prostoru:",
    odpovedi: {
        1: "Vždy prohledává celý stavový prostor",
        2: "Je např. metoda „pouze nejlepší“ (best-only)",
        3: "Je např. metoda „nejlepší nejdříve“ (best-first)",
        4: "Prohledá celý (případně efektivně ořezaný) stavový prostor, pokud neexistuje řešení",
        5: "Vždy nalezne optimální řešení (pokud existuje)"
    },
    spravne: {1: 0, 2: 0, 3: 1, 4: 1, 5: 1}
});
otazky.push({
    otazka: "Zaškrtněte správná tvrzení. Systematická strategie prohledávání stavového prostoru:",
    odpovedi: {
        1: "Vždy nalezne optimální řešení (pokud existuje)",
        2: "Vždy prohledá celý stavový prostor",
        3: "Prohledá celý stavový prostor, pokud neexistuje řešení",
        4: "Je úplná"
    },
    spravne: {1: 1, 2: 0, 3: 1, 4: 1}
});
otazky.push({
    otazka: "Zaškrtněte správná tvrzení:",
    odpovedi: {
        1: "Některé NP problémy lze řešit v polynomiálním čase",
        2: "Certifikát NP problémů se dá zkontrolovat v polynomiálním čase",
        3: "NP problémy jsou řešitelné v polynomiálním čase nedeterministickým turingovým strojem"
    },
    note: "P patří do NP --> P jsou ty některé problémy které lze řešit v polynomiálním čase",
    spravne: {1: 1, 2: 1, 3: 1}
});
otazky.push({
    otazka: "Zaškrtněte správné tvrzení:",
    odpovedi: {
        1: "Jestliže je daný problém $O(n^2)$, neexistuje algoritmus řešící tento problém v lineárním čase.",
        2: "Jestliže je daný problém $Ω(n^2)$, neexistuje algoritmus řešící tento problém v lineárním čase.",
        3: "Jestliže je daný problém $Θ(n^2)$, neexistuje algoritmus řešící tento problém v lineárním čase.",
        4: "Jestliže existuje algoritmus řešící daný problém v čase $O(n^2)$, je tento problém $Θ(n^2)$."
    },
    spravne: {1: 0, 2: 1, 3: 1, 4: 0}
});
otazky.push({
    otazka: "Zaškrtněte správné tvrzení:",
    odpovedi: {
        1: "Jestliže je daný problém $O(2^n)$, neexistuje algoritmus řešící tento problém v polynomiálním čase.",
        2: "Jestliže je daný problém $Ω(2^n)$, neexistuje algoritmus řešící tento problém v polynomiálním čase.",
        3: "Jestliže je daný problém $Θ(2^n)$, neexistuje algoritmus řešící tento problém v polynomiálním čase.",
        4: "Jestliže existuje algoritmus řešící daný problém v čase $O(2^n)$, je tento problém $Θ(2^n)$."
    },
    spravne: {1: 0, 2: 1, 3: 1, 4: 0}
});
otazky.push({
    otazka: "Zformulujte nějakou NPC rozhodovací verzi problému obchodního cestujícího.",
    odpoved: "Existuje cesta (Hamiltonovská kružnice) splňující omezující podmínky (např. kratší než $x$)?"
});
otazky.push({
    otazka: "Zformulujte nějakou rozhodovací verzi NPC SAT problému.",
    odpoved: "Je daná formule splnitelná?"
});

otazky.push({
    otazka: "Zformulujte nějakou rozhodovací verzi TSP problému.",
    odpoved: "Existuje cesta (Hamiltonovská kužnice) splňující omezující podmínky?"
});

otazky.push({
    otazka: "Zformulujte nějakou enumerativní verzi TSP problému.",
    odpoved: "Nalezněte všechny možné cesty (Hamiltonovské kružnice) splňující omezující podmínky."
});
otazky.push({
    otazka: "Zformulujte nějakou Co-NP (a nepatřící do P) rozhodovací verzi problému odvozeného od problému obchodního cestujícího.",
    odpoved: "co-NP úloha nesmí mít krátkého svědka ANO == nelze nalezením jednoho kladného případu ukončit prohledávání. Proto otázka může znít: <b>Jsou všechny hamiltonovy kružnice kratší jak $T$?</b><br>(Musí se tak začít prohledávat cesty delší jak $T$ a zjistit, jestli nějaká z nich je hamiltonova kružnice.) "
});

otazky.push({
    otazka: "A) Dokažte, že rozhodovací verze problému \"minimum bin packing\" patří do NP.<br>" +
    "B) Navrhněte pro tento problém konfigurační proměnné<br>" +
    "C) Co je zde certifikát? Jak jej ověřím?",
    odpoved: "Aby byl problém v NP, musí jít v polyn. čase ověřit jeho certifikát. Certifikátem zvolíme pole $A$ velikosti $n$, kde na pozici $A[n]$ je číslo kontejneru, ve kterém se machází daná věc $n$." +
    "Ověření proběhne tak, že projdu pole $A$ a sečtu váhy věci v každém kontejneru. Takhle vzniklé váhy porovnám s kapacitami kontejnerů ze zadání. Složitost je asi $O(n+n)$ (sčítání a porovnávání), což je polynomiální. Pole $A$, kde si pro každou věc pamatuju, ve kterém je kontejneru. Certifikát je konkrétní ohodnocení konfiguračních proměnných, ověření proběhne tak, jak je naznačeno v důkazu, že je problém NP",
    note: "<b>Minimum bin packing problem</b> = Je dána množina $n$ věcí a pro každou věc její velikost. Je možné všechny věci umístit do nejvýše $K$ kontejnerů o kapacitě $B$ každý?"
});
otazky.push({
    otazka: "A) Dokažte, že optimalizační problém obchodního cestujícího (TSP-O) patří do NPO.<br>B) Vyjmenujte jeho konfigurační proměnné<br>C) Co je zde certifikátem?",
    odpoved: " Problém se odvíjí od obchodního cestujícího, jehož certifikát jsme schopni ověřit v polynomiálním čase a dá se převést na SAT (že SAT je NPC dokazuje COOKova věta), je tedy NP. Dále optimalizujeme na „nejkratší cestu“ a tak dostáváme NPO. <br> b) vektor obsahující posloupnost uzlů <br> c) cert =  posloupnost uzlů splňující omezující podmínku s nejkratší cestou ; omezující podmínky =  cesta musí být uzavřená a každý uzel navštívit právě jednou "
});
otazky.push({
    otazka: "A) Dokažte, že optimalizační problém uzlového pokrytí grafu patří do NPO<br>B) Vyjmenujte jeho konfigurační proměnné<br>C) Co je zde certifikátem?",
    odpoved: "TODO:Neznama odpoved"
});
otazky.push({
    otazka: "A) Dokažte, že problém splnitelnosti booleovské formule (SAT) patří do NP.<BR>B) Vyjmenujte jeho konfigurační proměnné.<BR>C) Co je certifikátem rozhodovací verze tohoto problému?",
    odpoved: "<ul><li>A) Abychom dokázali, že je problém v NP, musíme nalézt certifikát a certifikát ověřit v polynomiálním čase.</li>" +
    "<li>B) Bitový vektor (ohodnocení $true/false$ jednotlivých proměnných v SATu)</li>" +
    "<li>C) Certifikátem je takové ohodnocení (takový bitový vektor), pro který je daný SAT = 1</li></ul>"
});
otazky.push({
    otazka: "A) Dokažte, že optimalizační problém nalezení max. kliky v grafu patří do NPO.<br>B) Vyjmenujte jeho konfigurační proměnné<br>C) Co jsou zde omezující podmínky?<br>",
    odpoved: "A) Lze převést na SAT (NPC) a tudíž je v NP. Protože se jedná o optimalizační problém spadá do NPO (!Dle Fit-Wiki je A) možná špatně.!)<br>" +
    "B) Vektor všech uzlů, který nabývá $1$ na $i$-tém místě, pokud je $i$-tý uzel momentálně obsažen v klice, $0$ pokud není obsažen.<br>Vektor $X = {X_1 … X_n}$, kde $N$ je rovno počtu uzlů grafu. Proměná $X_i$ nabývá hodnot $0/1$, podle toho zda daný uzel tvoří součást kliky.<br>" +
    "C) Podgraf musí být úplný<br>",
    note: "Maximální klika = maximální úplný podgraf. Klika je takový podgraf nějakého grafu, který je úplným grafem, tzn. jehož všechny vrcholy jsou spojeny hranou se všemi zbylými."
});
otazky.push({
    otazka: "Pro všechny problémy ve třídě NPH platí (za předpokladu, že $NP \\neq P$)",
    odpovedi: {
        1: "Neexistuje pro ně polynomiální algoritmus pro det. Turingův stroj",
        2: "Jejich optimalizační kritérium se dá vždy vypočítat v plynomiálním čase (det. Turingovým strojem)",
        3: "Jsou řešitelné v polynomiálním čase nedet. tur. stroje"
    },
    spravne: {1: 1, 2: 1, 3: 1}
});


otazky.push({
    otazka: "Pro všechny problémy ve třídě NPH platí (za předpokladu, že $NP \\neq P$)",
    odpovedi: {
        1: "Jsou to ty nejtěžší existující problémy",
        2: "Neznáme pro ně polynomiální algoritmus pro deterministický Turingův stroj",
        3: "Je možné zkontrolovat omezující podmínky v polynomiálním čase"
    },
    spravne: {1: 0, 2: 1, 3: 1}
});

otazky.push({
    otazka: "Jak poznáte, že daný problém nepatří do NP? Popište možnosti.",
    odpoved: "Jeho certifikát není možné zkontrolovat v polynomiálním čase determin. algoritmem.<br>Daný problém nelze převést na SAT. Každý NP problém totiž na SAT převést lze."
});

otazky.push({
    otazka: "Jak poznáte, že daný problém nepatří do NPC? Popište možnosti.",
    odpoved: "I.) problém není NP <br> II.) nebo je problém P <br> III.) nebo najdu nějaký problém z NP, který není převoditelný pomocí Karpovy redukce na tento můj problém"
});

otazky.push({
    otazka: "Třída NPH je:",
    odpovedi: {
        1: "Třída problémů, pro které neznáme polynomiální algoritmus (pro deterministický Turingův stroj)",
        2: "Třída problémů, pro které lze zkontrolovat certifikát v polynomiálním čase",
        3: "Třída těch nejtěžších existujících problémů"
    },
    spravne: {1: 1, 2: 1, 3: 0}
});

otazky.push({
    otazka: "Třída Co-NP je:",
    odpovedi: {
        1: "Třída všech takových problémů, pro které neznáme polynomiální algoritmus pro det. Turingův stroj",
        2: "Třída některých problémů, pro které nelze ověřit certifikát ANO-instanci v polynomiálním čase (det Turingovým strojem)",
        3: "Třída těžších problémů, než je NP"
    },
    spravne: {1: 0, 2: 1, 3: 0}
});

otazky.push({
    otazka: "Třída NPC je:",
    odpovedi: {
        1: "Třída všech problémů, pro které neznáme polynomiální algoritmus",
        2: "Průsečík tříd NP a NPH",
        3: "Třída těch nejtěžších existujících rozhodovacích problémů"
    },
    spravne: {1: 0, 2: 1, 3: 0}
});

otazky.push({
    otazka: "Třída NP je třída problémů:",
    odpovedi: {
        1: "Které nejsou řešitelné v polynomiálním čase",
        2: "Jejichž certifikát se dá zkontrolovat v polynomiálním čase",
        3: "Které jsou řešitelé v polynomiálním čase nedeterministickým turingovým strojem"
    },
    spravne: {1: 0, 2: 1, 3: 1}
});

otazky.push({
    otazka: "Jakým způsobem lze dokázat, že daný problém patří do NPC?",
    odpoved: "Dokážeme že problém je v NP (nalezneme certifikát, který dokážeme ověřit v polynomiálním čase)<br>Dokážeme převést SAT na náš problém"
});

otazky.push({
    otazka: "Pomocí Karpovy redukce je možné:",
    odpovedi: {
        1: "Převést instanci NP problému na instanci NPC problému v polynomiálním čase",
        2: "Převést instanci NP problému na instanci NPO problému",
        3: "Převést instanci rozhodovacího problému na instanci konstruktivního optimalizačního problému",
        4: "Dokázat, že daný rozhodovací problém patří do NPC",
        5: "Převést NPC problém na jiný NPC problém v polynomiálním čase",
        6: "Převést P problém na jiný P problém v polynomiálním čase"
    },
    spravne: {1: 1, 2: 0, 3: 0, 4: 1, 5: 1, 6: 1}
});

otazky.push({
    otazka: "Pomocí Karpovy redukce je možné:",
    odpovedi: {
        1: "Převést instanci NP problému na instanci NPC problému v polynomiálním čase",
        2: "Převést instanci NP problému na instanci NPO problému",
        3: "Převést instanci NPC problému na instanci P problému v exponenciálním čase"
    },
    spravne: {1: 1, 2: 0, 3: 0}
});

otazky.push({
    otazka: "Co je to systematická strategie prohledávání stavového prostoru?",
    odpoved: "Je to úplná strategie, která navštíví každý stav nejvýše jednou."
});

otazky.push({
    otazka: "Co je to úplná strategie prohledávání stavového prostoru?",
    odpoved: "Úplná strategie znamená navštívit všechny stavy kromě těch, o kterých víme, že nedávají (optimální) řešení."
});

otazky.push({
    otazka: "Co je to kombinatorický problém, čím je charakterizován",
    odpoved: "<p>Kombinatorický problém je charakterizován:</p><ul>" +
    "<li>Vstupní proměnné (např.: seznam děr)</li>" +
    "<li>Výstupní proměnné (např.: pořadí děr)</li>" +
    "<li>Konfigurační proměnné (např.: pořadí děr)</li>" +
    "<li>Omezení (např.: uzavřená cesta, každá díra právě jednou)</li>" +
    "<li>Optimalizační kritérium (např.: nejkratší!)</li>" +
    "</ul><br>" +
    "<p>" +
    "Kombinatorický problém může být I.) Rozhodovací; II.) Konstruktivní; III.) Enumerační" +
    "</p>"
});

otazky.push({
    otazka: "Co je stavový prostor? Čím je specifikován?",
    odpoved: "Nechť $S={s_i}$ je množina všech stavů algoritmu $A$ řešícího $I$. Nechť $Q={qj}$ je množina operací $S→S$ takových, že $q_j(s_i)≠s_i$ pro všechna $s_i,q_j$. Pak dvojici $(S,Q)$ nazveme stavovým prostorem algoritmu $A$ řešícího $I$.<br>" +
    "Je charakterizován:<br><ul><li>Množinou stavů</li><li>Množinou operací, které reprezentují přechody mezi dvěma stavy</li></ul>"
});

otazky.push({
    otazka: "Co je graf stavového prostoru? Jak je specifikován?",
    odpoved: "Nechť $(S,Q)$ je stavový prostor algoritmu řešícího instanci problému. Pak orientovaný graf $H=(S, E)$, kde hrana $(e_i,e_j)∈E$ odpovídá tahu $s_j=q(s_i)$ pro $q∈Q$ se nazývá grafem stavového prostoru algoritmu."
});

otazky.push({
    otazka: "Co je počáteční konfigurací konstruktivních algoritmů?",
    odpoved: "Počáteční stav je nějaká triviální konfigurace (prázdný batoh apod.) a algoritmem se dopracujeme k řešení, které vyhovuje omezením."
});

otazky.push({
    otazka: "Co jsou to co-NP problémy?",
    odpoved: "Problémy mimo NP. Nemáme pro ně certifikát. Příklad: Ověření nesplnitelnosti SAT."
});

otazky.push({
    otazka: "Co jsou to iterativní heuristiky? Uveďte příklad.",
    odpoved: "Iterativní heuristika začne s nějakým řešením a to postupně vylepšuje. Iterativní heuristika se ale tak pohybuje v podgrafu stavového prostoru, ve kterém se nemusí nacházet globální optimum. Např. Simulované ochlazování."
});


otazky.push({
    otazka: "Stavový prostor problému $0/1$ batohu lze vyjádřit pro různé algoritmy jako:",
    odpovedi: {
        1: "Acyklický graf",
        2: "Cyklický graf",
        3: "n-rozměrnou hyperkrychli",
        4: "Strom"
    },
    spravne: {1: 1, 2: 1, 3: 1, 4: 1}
});

otazky.push({
    otazka: "Popište graf stavového prostoru pro problém nalezení uzlového pokrytí. Co jsou uzly v tomto grafu, co hrany?",
    odpoved: "Uzly jsou stavy, které reprezentují množinu uzlů, které tvoří uzlové pokrytí.<br>Hrany jsou operace, které reprezentují přidání nebo odebrání uzlu z této množiny"
});

otazky.push({
    otazka: "Jak se vypočítá relativní chyba ($ε$) daného algoritmu? V jakých mezích se pohybuje?",
    odpoved: "$\\varepsilon = \\frac{C(OPT)-C(APX)}{C(OPT)}$ Relativní chyba se pohybuje v rozmezí $<0, 1>$."
});

otazky.push({
    otazka: "Jak zjistím, že moje jednoduchá lokální metoda má tendenci rychle uváznout v lokálním minimu",
    odpovedi: {
        1: "Při náhodných restartech vždy dojdu ke stejnému výsledku",
        2: "Při náhodných restartech dosažený výsledek příliš závisí na počátečním stavu"
    },
    spravne: {1: 0, 2: 1}
});

otazky.push({
    otazka: "Je dán problém $Π$. $Q(S)$ budiž hodnota optimalizačního kritéria řešení $S$ instance $I$ tohoto problému, dokázat, že algoritmus řešící tento problém je aproximativní. Musíme tedy:",
    odpovedi: {
        1: "Pro každou instanci $I$ algoritmus skončí v polynomiálním počtu kroků",
        2: "Relativní kvalita algoritmu je konečná",
        3: "Relativní kvalita algoritmu $< 1$",
        4: "$Π \\in NP$"
    },
    spravne: {1: 1, 2: 1, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Nechť daná instance kombinatorického problému nemá řešení. Prohledá metoda „nejlepší nejdříve“ v takovém případě každý stavový prostor?",
    odpovedi: {
        1: "Ano",
        2: "Ne"
    },
    note: "Neuvažujeme části stavového prostoru, které jsou v rozporu s optimalizačními kritérii.",
    spravne: {1: 1, 2: 0}
});
otazky.push({
    otazka: "Jaká je pravděpodobnost nalezení řešení rozhodovacího SAT problému pro plně randomizovaný algoritmus, který opakovaně čistě náhodně generuje ohodnocení vstupních proměnných?",
    odpoved: "$\\left(1-\\frac{1}{2^{k}}\\right)*c$"
});

otazky.push({
    otazka: "Jaký je rozdíl v asymptotické složitosti metod \"backtracking\" (prohledávání s návratem) a \"forward-checking\" (dopředná kontrola)?",
    odpoved: "Backtracking má horší nebo stejnou asymptotickou složitost než forward checking.<br>" +
    "<b>Správná odpověď je „žádný“</b>, asymptoticky jsou obě metody stejně obtížné."
});

otazky.push({
    otazka: "Mějme optimalizační problém unátního pokrytí. Je dána binární (obsahující pouze hodnoty \"0\" a \"1\") matice $A$ o rozměrech $(m,n)$. $m$ je počet řádků, které mají být pokryty podmnožinou sloupců (z $n$). Daný řádek ($i$) je pokryt sloupcem $j$, pokud $A[i,j] = 1$. Problém nalezení minimálního pokrytí, tj. nalezení minimální podmnožiny sloupců, které pokrývají všechny řádky, patří do NPH. Zformulujte rozhodovací verzi tohoto problému, která má srovnatelnou složitost.",
    odpoved: "TODO:nezadana spravna odpoved"
});

otazky.push({
    otazka: "Jakým způsobem lze dokázat, že daný problém nepatří do NPC?",
    odpoved: "Problém není převoditelný na SAT.",
    note: "Všechny problémy v NPC jsou navzájem ekvivalentní a tedy musejí být převoditelné na SAT."
});

otazky.push({
    otazka: "Popište graf stavového prostoru pro problém obchodního cestujícího (TSP). Co jsou uzly v tomto grafu, co hrany?",
    odpoved: "Uzly - volba Hamiltonovy kružnice (obecně podgraf grafu s městy)<br>Hrany - Operace přechodu mezi těmito kružnicemi (dvojitá záměna uzlů…)"
});

otazky.push({
    otazka: "Jak se vypočítá relativní kvalita ($R$) daného algoritmu? V jakých mezích se pohybuje?",
    odpoved: "$R >= ∀ I:$ $max({C_{APX}(I)/C_{OPT}(I), C_{OPT}(I)/C_{APX}(I)})$ $R ∈ <1,+nekonecno)$"
});

otazky.push({
    otazka: "Nechť daná instance kombinatorického problému nemá řešení. Prohledá metoda \"pouze nejlepší\" v každém takovém případě celý stavový prostor?",
    odpovedi: {
        1: "Ano",
        2: "Ne"
    },
    spravne: {1: 0, 2: 1}
});

otazky.push({
    otazka: "Jaká je pravděpodobnost splnění dané klauzule SAT problému o max. $k$ proměnných pro plně randomizovaný algoritmus, který opakovaně čistě náhodně generuje ohodnocení vstupních proměnných? Jaká bude pravděpodobnost splnění celé formule při $n$ klauzulích?",
    odpoved: "$1-\\frac{1}{2^{k}}$"
});

otazky.push({
    otazka: "Pro problémy patřící do třídy PTAS (polynomiální aproximační schéma) platí:",
    odpovedi: {
        1: "Existuje algoritmus řešící tyto problémy v polynomiálním čase exaktně",
        2: "Existuje algoritmus řešící tyto problémy v polynomiálním čase s libovolně malou chybou",
        3: "Patří do NPC",
        4: "Existuje algoritmus řešící tyto problémy v polynomiálním čase exaktně",
        5: "Existuje algoritmus řešící tyto problémy v polynomiálním čase s libovolně malou chybou",
        6: "Jsou prodmnožinou APX",
        7: "Patří do NPH"
    },
    spravne: {1: 0, 2: 1, 3: 0, 4: 0, 5: 1, 6: 1, 7: 0}
});

otazky.push({
    otazka: "Jaká je asymptotická složitost metody větví a hranic (B&B)? V nejobecnějším případě.",
    odpoved: "$O(2^n)$ (= bruteforce)"
});

otazky.push({
    otazka: "Mějme optimalizační problém unátního pokrytí, je dána binární (obsahující pouze hodnoty „0“ a „1“) matice A o rozměrech (m, n). m je počet řádků, které mají být pokryty podmnožinou sloupců (z n). Daný řádek (i) je pokryt sloupcem j, pokud A[i, j] = 1. Problém nalezení minimálního pokrytí, tj. nalzezení minimální podmnožiny sloupců, které pokrývají všechny řádky, patří do NPH. Zformulujte rozhodovací verzi tohoto problému, která má srovnatelnou složitost.",
    odpoved: "TODO:nezadana odpoved"
});

otazky.push({
    otazka: "Jaké jsou kladeny požadavky na konfigurační proměnné kombinatorického problému?",
    odpoved: "Proměnných je konečný počet a mají konečné domény."
});

otazky.push({
    otazka: "Jak je specifikován optimalizační kombinatorický problém ?",
    odpoved: "Jedná se o kombinatorický problém, pro který je <b>zadáno optimalizační kritérium</b> (cenová funkce)."
});

otazky.push({
    otazka: "Zaškrtněta správná tvrzení (za předpokladu, že platí $NP \\neq P$)",
    odpovedi: {
        1: "$P \\subset NPI$",
        2: "$P \\cap NPC = \\textrm{Ø}$",
        3: "$NP \\cap NPH = \\textrm{Ø}$",
        4: "$P \\subset NP$",
        5: "$NPC \\subset NPH$",
        6: "$NPO \\subset NPH$"
    },
    spravne: {1: 0, 2: 1, 3: 0, 4: 1, 5: 1, 6: 0}
});

otazky.push({
    otazka: "Jakým způsobem lze dokázat, že problém náleží do NP?",
    odpoved: "Nalezním certifikátu, který lze ověřit v polynomiálním čase."
});

otazky.push({
    otazka: "Zaškrtněta správná tvrzení (za předpokladu, že platí $NP \\neq P$)",
    odpovedi: {
        1: "$P \\subset NP$",
        2: "$NPI \\subset NPC$",
        3: "$P \\cap NP = \\textrm{Ø}$",
        4: "$NPH \\subset PSPACE$"
    },
    spravne: {1: 1, 2: 0, 3: 0, 4: 1}
});

otazky.push({
    otazka: "Uveďte příklad grafu stavového prostoru pro problém nalezení kliky v grafu (max. úplný podgraf). Co jsou uzly v tomto grafu, co hrany?",
    odpoved: "Uzly jsou stavy, které reprezentují podgrafy grafu, jehož pokrytí hledáme<br>Hrany jsou operace, které reprezentují přidání/odebrání hrany z podgrafů",
    note: "Maximální klika = maximální úplný podgraf. Klika je takový podgraf nějakého grafu, který je úplným grafem, tzn. jehož všechny vrcholy jsou spojeny hranou se všemi zbylými."
});

otazky.push({
    otazka: "Uveďte příklad grafu stavového prostoru pro problém splnitelnosti booleovské formule (SAT). Co jsou uzly v tomto grafu, co hrany?",
    odpoved: "A) Uzly jsou jednotlivé konfigurace proměnných<br>B) Hrany jsou operace, při nichž jednu z proměnných nastavím opačně"
});

otazky.push({
    otazka: "Mají pseudopolynomiální algoritmy polynomiální složitost s velikostí instance?",
    odpovedi: {
        1: "Ano",
        2: "Ne"
    },
    spravne: {1: 1, 2: 0}
});

otazky.push({
    otazka: "Co jsou to pseudopolynomiální algoritmy? Uveďte příklad.",
    odpoved: "Algoritmus, jehož počet kroků závisí polynomiálně na velikosti instance, ale závisí dále na parametru, který s velikostí instance nesouvisí, nazýváme pseudopolynomiálním.<br>" +
    "Příklad: Složitost je $\\mathcal{O}\\left(n*M\\right)$ a $M$ nesouvisí s velikostí instance. "
});

otazky.push({
    otazka: "Co jsou to greedy algoritmy?",
    odpoved: "Algoritmus v každém svém kroku vybírá lokální optimum, přičemž existuje šance, že takto nalezne optimum globální. Příklad: Heuristika cena/váha u problému batohu. "
});


otazky.push({
    otazka: "Dokažte nebo vyvraťte, že konstruktivní optimalizační problém batohu patří do NPO.",
    odpoved: "Optimalizační problém $\\varPi$ patří do třídy NPO, jestliže splňuje následující podmínky: <br><br> I.) Velikost výstupu instance je omezena polynomem ve velikosti instance -- výstup lze zapsat v polynomiálním čase; <br>" +
    "II.) Problém, zda daná konfigurace je řešením, patří do P -- omezující podmínky lze vyhodnotit v polynomiálním čase; <br>" +
    "III.) Hodnotu optimalizačního kritéria pro každé řešení každé instance lze vypočíst v polynomiálním čase -- optimalizační kritérium lze vyhodnotit v polynomiálním čase."
});

otazky.push({
    otazka: "Zformulujte nějakou NPC rozhodovací verzi problému nalezení uzlového pokrytí grafu.",
    odpoved: "Existuje uzlové pokrytí grafu velikost $k\\leq n$?",
    note: "Vrcholové pokrytí grafu taková podmnožina vrcholů, že každá hrana grafu je incidentní aspoň s jedním vrcholem z této množiny."
});


otazky.push({
    otazka: "Jak zjistím, že moje jednoduchá lokální metoda má tendenci rychle uváznout v lokálním minimu?",
    odpovedi: {
        1: "Při náhodných restartech vždy dojdu ke stejnému výsledku",
        2: "Při náhodných restartech dosažený výdledek příliš závisí na počátečním stavu"
    },
    spravne: {1: 0, 2: 1}
});

otazky.push({
    otazka: "Zjistím, že moje jednoduchá lokální metoda rychle uvázne v lokálním minimu. Problém řeším tím, že prohledávané okolí",
    odpovedi: {
        1: "Zvětším",
        2: "Zmenším"
    },
    spravne: {1: 1, 2: 0}
});

otazky.push({
    otazka: "Je prohledávání do hloubky (DFS) systematická strategie?",
    odpovedi: {
        1: "Ano",
        2: "Ne"
    },
    spravne: {1: 1, 2: 0}
});

otazky.push({
    otazka: "Je prohledávání do hloubky (DFS) úplná strategie?",
    odpovedi: {
        1: "Ano",
        2: "Ne"
    },
    spravne: {1: 1, 2: 0}
});

otazky.push({
    otazka: "Je prohledávání do šířky (BFS) systematická strategie?",
    odpovedi: {
        1: "Ano",
        2: "Ne"
    },
    spravne: {1: 1, 2: 0}
});

otazky.push({
    otazka: "Metoda \"nejlepší nejdříve\" (best-first):",
    odpovedi: {
        1: "Je hladová",
        2: "Je úplná",
        3: "Prohledá celý stavový prostor, pokud neexistuje řešení",
        4: "Používá frontu"
    },
    spravne: {1: 0, 2: 1, 3: 1, 4: 1}
});

otazky.push({
    otazka: "Jak rychle se zvětšuje k-okolí stavu s rostoucím k?",
    odpoved: "Exponenciálně"
});

otazky.push({
    otazka: "Mějme logickou funkci zadanou jako součet součinů (SOP, DNF). Rozhodovací problém určení splnitelnosti pro takto zadanou funkci (funkce může být rovna $1$) patří do:",
    odpovedi: {
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
    spravne: {1: 1, 2: 1, 3: 0, 4: 1}
});

otazky.push({
    otazka: "Mějme logickou funkci zadanou jako součin součtů (POS, CNF). Rozhodovací problém určení kontradikce pro takto zadanou funkci (pro všechna ohodnocení proměnných je funkce rovna $0$) patří do:",
    odpovedi: {
        1: "P",
        2: "NP",
        3: "NPC",
        4: "co-NP"
    },
    spravne: {1: 0, 2: 0, 3: 0, 4: 1}
});

otazky.push({
    otazka: "Mějme logickou funkci zadanou jako součin součtů (POS, CNF). Rozhodovací problém určení splnitelnosti pro takto zadanou funkci (funkce může být rovna $1$) patří do:",
    odpovedi: {
        1: "P",
        2: "NP",
        3: "NPC",
        4: "co-NP"
    },
    spravne: {1: 0, 2: 1, 3: 1, 4: 0}
});

otazky.push({
    otazka: "Co znamená, když relativní kvalita ($R$) daného algoritmu je rovna $1$?",
    odpoved: "Algoritmus je maximálně přesný, vždy dostáváme optimální řešení."
});

otazky.push({
    otazka: "Co znamená pojem \"globální minimum\" u optimalizačních problémů?",
    odpoved: "Konfigurace, která má nejlepší možnou hodnotu optimalizačního kritéria (cenu) pro každou instanci."
});

otazky.push({
    otazka: "Co znamená pojem \"lokální minimum\" u optimalizačních problémů ?",
    odpoved: "Lokální minimum znamená, že všechny sousední stavy mají horší hodnotu optimalizačního kritéria.<br>Konfigurace, která splňuje opt. kritérium i omezení v daném čase řešení problému."
});

otazky.push({
    otazka: "Popište princip Las Vegas randomizovaného algoritmu.",
    odpoved: "Randomizovaný algoritmus: Čas běhu je náhodná proměnná, výsledek je vždy správný. Příklad: Quicksort"
});

otazky.push({
    otazka: "Popište princip Monte Carlo algoritmu.",
    odpoved: "Randomizovaný algoritmus: Dosažený výsledek (optimalizační kritérium) je náhodná proměnná, čas běhu je pro danou instanci pevný."
});

otazky.push({
    otazka: "Jakým způsobem lze dokázat, že daný problém patří do NPH?",
    odpoved: "Má-li patřit do NPH, musí patřit buď do NPC nebo do NPOC. To zjistím tak, že převedu SAT na náš problém, pokud se mi to podaří a za předpokladu, že můj problém patří do NP, vím, že patří do NPC a tedy i do NPH. (Jsem schopný ověřit certifikát v polynomiálním čase)"
});

otazky.push({
    otazka: "Velikost pravidelného k-okolí se s rostoucím k zvětšuje:",
    odpovedi: {
        1: "Lineárně",
        2: "Exponenciálně",
        3: "Vždy jinak"
    },
    spravne: {1: 0, 2: 1, 3: 0}
});

otazky.push({
    otazka: "Od problému nalezení minimální uzlového pokrytí grafu odvoďte rozhodovací problém, který by patřil do třídy P",
    odpoved: "Minimální uzlové pokrytí: nalezněte minimální množinu uzlů grafu, která inciduje se všemi hranami. " +
    "=> Incidují v dané konfiguraci dané uzly se všemi hranami? NEBO Rozhodovací problém vrcholového pokrytí se ptá, zda-li v daném grafu existuje vrcholové pokrytí maximálně o k vrcholech.",
    note: "Vrcholové pokrytí grafu taková podmnožina vrcholů, že každá hrana grafu je incidentní aspoň s jedním vrcholem z této množiny."
});

otazky.push({
    otazka: "Dokažte nebo vyvraťte, že konstruktivní optimalizační problém nalezení minimálního uzlového pokrytí patří do NPO.",
    odpoved: "N/A TODO: odpoved jeste nebyla zadana"
});

otazky.push({
    otazka: "Pomocí Turingovy redukce je možné:",
    odpovedi: {
        1: "Převést instanci jakéhokoliv problému na instance NPH problému",
        2: "Převést instanci (NPH) rozhodovacího problému na instanci (NPC) konstuktivního optimalizačního problému",
        3: "Převést instanci konstruktivního optimalizačního problému na instanci rozhodovacího problému",
        4: "Dokázat, že daný rozhodovací problém patří do NPH",
        5: "Převést NPH problém na jiný NPH problém v polynomiálním čase",
        6: "Převést P problém na jiný P problém v polynomiálním čase"
    },
    spravne: {1: 0, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1}
});

otazky.push({
    otazka: "Pomocí Turingovy redukce je možné:",
    odpovedi: {
        1: "Převést instanci jakéhokoliv problému na instanci NPH problému v polynomiálním čase",
        2: "Převést instanci NPC rozhodovacího problému na instanci NPH konstruktivního optimalizačního problému",
        3: "Převést instanci NPH konstruktivního optimalizačního problému na instanci NPC rozhodovacího problému"
    },
    spravne: {1: 0, 2: 1, 3: 1}
});

otazky.push({
    otazka: "Pomocí Turingovy redukce je možné:",
    odpovedi: {
        1: "Převést P problém na P problém v polynomiálním čase",
        2: "Převést NPC problém na P problém v exponenciálním čase",
        3: "Převést NPH problém na jiný NPH problém v polynomiálním čase"
    },
    spravne: {1: 1, 2: 0, 3: 1}
});
