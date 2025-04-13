
  const tortenetomb = [
  {
    id: 1,
    resz: "Őskor",
    reszlet: `Ez az időszak a kőeszközök legkorábbi használatához köthető.
    Az emberek vadásztak, gyűjtögettek, és barlangokban vagy ideiglenes menedékekben éltek.
    A legkorábbi leletek a Seokjangni lelőhelyről származnak (közép-Koreából).
    Kézi pattintott eszközöket, például kaparókat és kőbaltákat találtak.
    Megjelenik a földművelés és az állandóbb településforma.
    A kerámia használata is elterjed: leggyakoribb a "yunggimun" típusú (díszített felületű) cserép.
    Halászat, vadászat és földművelés együtt jelenik meg.
    A Han-folyó völgye (a mai Szöul környéke) fontos központ volt ebben az időszakban.
    A fémművesség megjelenése, különösen a bronzeszközöké és fegyvereké.
    A társadalom kezdett hierarchikussá válni.
    Megjelennek a dolmenek (kősírok), amelyek gyakoriak a koreai félszigeten - ezek valószínűleg előkelők sírjai.
    Elkezdődnek az első törzsi szövetségek kialakulásai, amelyek megalapozták a későbbi államalapításokat.
    A vaskohászat elterjedése jelentős technológiai és katonai előrelépést hozott.
    A félszigeten több kisebb politikai egység jött létre, mint például Jin, illetve északon a Gojoseon államalakulat maradványai.
    Ez az időszak vezet el a Három Királyság Korához (Goguryeo, Baekje, Silla - i. sz. 1. századtól).`,
  },
  { id: 2, resz: "Ókor", reszlet: `
    1. Három Királyság Kora (i. e. 1. század - i. sz. 668)
    1. Goguryeo (고구려)
    Északi részen feküdt (a mai Észak-Korea és Mandzsúria területén is).
    Hatalmas területet ellenőrzött, gyakran harcolt Kínával.
    Erős hadsereg, magas szintű kultúra.
    Főváros: Pyongyang (később).
    2. Baekje (백제)
    Délnyugaton helyezkedett el (mai Dél-Korea nyugati része).
    Kiváló tengeri kereskedelem, sok kapcsolat Japánnal.
    Fejlett művészetek, különösen a buddhizmus terén.
    3. Silla (신라)
    Délkeleti részen feküdt (mai Dél-Korea keleti része).
    Kezdetben gyengébb volt, de fokozatosan megerősödött.
    668-ban végül a kínai Tang-dinasztia segítségével egyesítette a félszigetet - ez volt a Silla Egyesítés.

    2. Gaya Szövetség (가야) - kisebb „negyedik” állam
    Nem volt hivatalosan a három nagy királyság egyike, de jelentős volt.
    A Nakdong folyó völgyében virágzott, főként vasfeldolgozása miatt.
    Végül a Silla bekebelezte.
    Buddhizmus térnyerése
    A 4. századtól kezdve mindhárom királyságban elterjedt.
    Kolostorokat, templomokat építettek (pl. Bulguksa).
    Művészetben, építészetben, oktatásban fontos szerepet kapott.
    Művészet és kultúra
    Selyem, kerámia, bronzművesség fejlődött.
    A királyságok mindegyike hozzájárult a koreai kultúra egyedi arculatához.
    Megjelentek a királyi sírhelyek (pl. Cheonmachong sír Sillából).
    ` },
  { id: 3, resz: "Középkor", reszlet: `` },
  { id: 4, resz: "Újkor", reszlet: `` },
  { id: 5, resz: "Modernkor", reszlet: `` },
];

adatokBetoltese(tortenetomb);
function adatokBetoltese(adatok) {
  const select = document.getElementById("kivalaszt");
  adatok.forEach((elem, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = elem.resz;
    select.appendChild(option);
  });
  megjelenites();
}
function megjelenites() {
  const select = document.getElementById("kivalaszt");
  const index = select.value;
  const selectedData = tortenetomb[index];
  const html = `
    <div class="col-lg-12 ml-auto">
      <p>${selectedData.id}</p>
      <p>${selectedData.resz}</p>
      <p>${selectedData.reszlet}</p>
    </div>
  `;
  document.getElementById("tort").innerHTML = html;
}
