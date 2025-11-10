import { Question } from "../types/Question";

// BEGIN paa_test_2020-verze-26-11-16-15 https://fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/mi-paa/paa_test_2020-verze-26-11-16-15
export const paa_test_2020_verze_26_11_16_15: Question[] = [
    {
        question: "Co jsou to výstupní proměnné kombinatorického problému (obecně)? Jak (příp. kdy) se tyto výstupni proměnné liší od konfiguračních?",
        answer: "Výstupní proměnné charakterizují výstup zkoumaného problému. Pokud je problém rozhodovací, pak jsou výstupními proměnnými ANO/NE. V případě, že problém že problém je konstruktivní, pak se shodují s konfiguračními."
    },
    {
        question: `Zformulujte nějakou NPC rozhodovací verzi problému nalezení maximálni kliky v grafu za předpokladu, že jeho konstruktivní optimalizační verze je NPH a patří do NPO.
Formulace konstruktivní optimalizační verze: Nalezněte maximální úplný podgraf.
`,
        answer: `Existuje v grafu taková klika, která se skládá z počtu vrcholů alespoň K?`
    },
    {
        question: "Platí následující tvrzení (za předpokladu, že platí NP != P)? $P \\subset EXPTIME$",
        answers: {
            1: "Platí",
            2: "Neplatí",
        },
        correct: { 1: 1, 2: 0 }
    },
    {
        question: "Platí následující tvrzení (za předpokladu, že platí NP != P)? $PTAS \\subset NPO$",
        answers: {
            1: "Platí",
            2: "Neplatí",
        },
        correct: { 1: 1, 2: 0 }
    },
    {
        question: "Platí následující tvrzení (za předpokladu, že platí NP != P)? $NP \\cap NPI = \\textrm{Ø}$",
        answers: {
            1: "Platí",
            2: "Neplatí",
        },
        correct: { 1: 0, 2: 1 }
    },
    {
        question: "Platí následující tvrzení (za předpokladu, že platí NP != P)? $NP \\cap co-NP = \\textrm{Ø}$",
        answers: {
            1: "Platí",
            2: "Neplatí",
        },
        correct: { 1: 0, 2: 1 }
    },
    {
        question: "Platí následující tvrzení (za předpokladu, že platí NP != P)? Certifikát všech NPH problémů lze zkontrolovat v polynomiálním čase (det. Turingovým strojem).",
        answers: {
            1: "Platí",
            2: "Neplatí",
        },
        correct: { 1: 0, 2: 1 }
    },
    {
        question: "Platí následující tvrzení (za předpokladu, že platí NP != P)? Optimalizační kritéria všech NPO problémů je možno spočítat v polynomiálním čase (det. Turingovým strojem).",
        answers: {
            1: "Platí",
            2: "Neplatí",
        },
        correct: { 1: 1, 2: 0 }
    },
    {
        question: "Platí následující tvrzení (za předpokladu, že platí NP != P)? Certifikát všech NP problémů je možno ověřit v polynomiálním čase (deterministickým Turingovým strojem).",
        answers: {
            1: "Platí",
            2: "Neplatí",
        },
        correct: { 1: 1, 2: 0 }
    },
    {
        question: "Pro vsechny problémy ve tride NPC plati (za předpokladu, ze platí NP = P):",
        answers: {
            1: "Jsou řešitelné v polynomiálním čase nedeterministickým Turingovým strojem.",
            2: "Nejsou řešitelné v polynomiálním čase deterministickým Turingovým strojem.",
            3: "Jejich certifikát se dá zkontrolovat v polynomiálním čase deterministickým Turingovým strojem."
        },
        correct: { 1: 1, 2: 1, 3: 1 }
    },
    {
        question: `Je dána rozhodovací verze problému nalezení maximálni kliky:
„Existuje klika (úplný podgraf) v grafu G(V, E) o velikosti k ≤ IVI?"
a) Navrhněte konfigurační proměnné pro tento problém.
b) Jaká jsou omezeni (constraints) pro tento problém?
c) Dokažte nebo vyvratte, že tento problém patří do třídy NP.`,
        answer: `
a) pole indexů reprezentující vrcholy, které jsou v klice obsaženy
b) nalezený podgraf musi být úplný
c) pro každou instanci tohoto problému jsme schopni ověřit správnost certifikátu v polynomiálním čase. Neboli v polynomiálním čase jsme schopni ověřit správnost řešení. Patří tedy do NP.`
    },
    {
        question: `Pomocí Karpovy redukce je možné: Převést každou instanci libovolného NPC problému na instanci libovolného NPC problému v polynomiálním čase.`,
        answers: {
            1: "Platí",
            2: "Neplatí",
        },
        correct: { 1: 1, 2: 0 }
    },
    {
        question: `Navrhněte souvislý symetrický stavový prostor pro problém „Minimum Multiprocessor Scheduling Problem". Co jsou zde stavy? Navrhněte konfigurační proměnné. Navrhněte operátory pro tento stavový prostor.
Formulace problému: „Dána množina T úloh, m procesorů, doba trváni |(t, i) E Z* pro každou úlohut E Ta procesori E [1..m]. Nalezněte m-procesorový plán pro T, tj. funkci f: T→[1..m]. Minimalizujte čas dokončení plánu, tj. maximum ze sum dob trvání I(t, i) úloh naplánovaných na procesor, přes všechny procesory i E [1..m]."`,
        answer: `konfigurační proměnné: úlohy a k nim namapované procesory, na kterých se bude úloha spouštět stavy: viz konfigurační proměnné operátory: přiřazení procesoru k jiné úloze`
    },
    {
        question: "Platí následující tvrzení? Každá systematická strategie prohledávání stavového prostoru vždy prohledá celý stavový prostor.",
        answers: {
            1: "Platí",
            2: "Neplatí",
        },
        correct: { 1: 0, 2: 1 }
    },
    {
        question: `Platí následující tvrzení? Strategie „nejlepší nejdřive" (best first) je úplná strategie prohledávání stavového prostoru.`,
        answers: {
            1: "Platí",
            2: "Neplatí",
        },
        correct: { 1: 1, 2: 0 }
    },
    {
        question: `Platí následující tvrzení? Strategie prohledáváni do šířky (BFS) je úplná strategie prohledávání stavového prostoru.`,
        answers: {
            1: "Platí",
            2: "Neplatí",
        },
        correct: { 1: 1, 2: 0 }
    },
    {
        question: `Randomizovaná iterativní lokální heuristika při náhodných restartech docházi k výsledkům velice lišící se kvality (ceny). Potom: Lze se domnívat, že funguje dobře.`,
        answers: {
            1: "Platí",
            2: "Neplatí",
        },
        correct: { 1: 0, 2: 1 }
    },
    {
        question: `Pro všechny problémy patřící do třídy PTAS platí: Lze pro ně najít APX redukci na nějaký FPTAS problém.`,
        answers: {
            1: "Platí",
            2: "Neplatí",
        },
        correct: { 1: 0, 2: 1 }
    }
]
// END paa_test_2020-verze-26-11-16-15