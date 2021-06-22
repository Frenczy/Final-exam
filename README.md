# **User Story - Adminisztrátori szerepkör**


## **Vállalatirányítási rendszer / Számlázási modul - Enterprise Resource Planning / Billing module**
---
---
## _**1. Főoldal**_
---

**1. agilis felhasználói történet:**
> _A főoldal egy üdvözlő képernyő a Vállalatirányítási rendszer bemutatkozásával, rövid leírásával, illetve kártyás elrendezésben bemutatásra kerülnek a főbb aloldalak (vásárlók, számlák, szolgáltatások, rendelések)_

**Elfogadási kritérium:**  

Egy mobiloptimalizált, reszponzív felületen a Vállalatirányítási rendszer főoldalára érkezünk. A főoldalon a vállalatirányítási rendszer számlázási moduljának rövid leírása található, illetve navigációs sáv és dashboard is szerepel az egyes aloldalak elérésének érdekében.

---

**2. agilis felhasználói történet:**
> _Közvetlenül a főoldalon, "dashboard formátumban" (kártyás elrendezésben) bemutatásra kerülnek az egyes aloldalak._

**Elfogadási kritérium:**  
- Az egyes kártyákon összesítő információk láthatóak (például hány darab aktív vásárló, rendelés, számla létezik az adott pillanatban a rendszerben). 
- Az egyes kártyákra kattintva közvetlenül az aloldal listázó oldalára juthatunk.
- A kártyák különböző színárnyalattal, illetve ikonnal rendelkeznek a felhasználói élmény fokozása érdekében.

**Megjegyzések:**

Minden egyes aloldalnak két változata lesz, egy "listázó" és egy "szerkesztő" oldal. A listázó oldalon jellemzően az entitás összes eleme felsorolásra kerül, kereséseket, szűréseket valósíthatunk meg, sorba rendezhetjük az elemeket, kezdeményezhetjük az adott elem szerkesztését / törlését. A szerkesztő oldalon már csak egy kiválasztott elem kerül megjelenítésre, ahol szerkeszthetjük annak tartalmát, vagy új elemet vihetünk fel.
A főoldalon (Dashboard-on) az adott kártyára kattintva az adott entitás listázó oldalára juthatunk. A szerkesztő oldal pedig a listázó oldalon keresztül érhető el, az adott sor szerkesztésével, illetve új elem felvitelével. 

---
---
## _**2. a vállalatirányítási rendszer aloldalainak bemutatása**_
---

**_Vásárlók aloldal_**

---

**1. agilis felhasználói történet:**

> _Új vásárló adatai vehetők fel._

**Elfogadási kritérium:**  
- A vásárló-szerkesztő aloldalon a kötelező adatok megadásával új vásárló adatait lehet felvinni. A módosítás mentés után megjelenik a listázó oldalon, létrejön a vásárló adatlapja.
- A vásárló adatai validációhoz vannak kötve. Amennyiben az adott érték nem felel meg a validációnak, a vásárló mentése nem engedélyezett.
- Az oldalon lehetőség van arra, hogy a listázó aloldalra, vagy a főoldalra navigáljon vissza az alkalmazás.

---

**2. agilis felhasználói történet:**

> _A vásárló adatai szerkeszthetők._

**Elfogadási kritérium:**  
- A vásárló-szerkesztő aloldalon a választott elem adatait lehet szerkeszteni. A módosítás mentés után megjelenik a listázó oldalon és a vásárló adatlapján is.
- A vásárló adatai validációhoz vannak kötve. Amennyiben az adott érték nem felel meg a validációnak, a vásárló mentése nem engedélyezett.
- Az oldalon lehetőség van arra, hogy a listázó aloldalra, vagy a főoldalra navigáljon vissza az alkalmazás.

---

**3. agilis felhasználói történet:**

> _A vásárló törölhető._

**Elfogadási kritérium:**  
- A vásárló-listázó oldalon az adott elem kiválasztásával törölhető a rekord.
- A törlés előtt egy megerősítő üzenet jelenik meg a képernyőn.
- A törlést követően frissül a listaoldal, ahol a már törölt vásárló nem látható.

---

**4. agilis felhasználói történet:**

> _A vásárlók kategóriák szerint kereshetőek._

**Elfogadási kritérium:**  
- A kategória kiválasztásával és a kulcsszónak megfelelően frissül a listaoldal, ahol csak a szűrt adatok láthatók.
- Nem csak teljes egyezőség, hanem rész-egyezőség esetén is frissül a lista. 
- Minden egyes karatker beütése után már a szűkített lista látható.

---

**5. agilis felhasználói történet:**

> _A vásárlók Különbözőképpen sorrendbe rendezhetőek az adott tulajdonságnak megfelelően._

**Elfogadási kritérium:**  
- A szám típusú adatok alapján növekvő és csökkenő sorrendben lehet rendezni a vásárlókat.
- A szöveges adatok alapján abc-szerinti és fordított sorrendben lehet rendezni a vásárlókat.
- Az adott oszlop fejlécére kattintva választható a növekvő vagy csökkenő sorrend.

---

**6. agilis felhasználói történet:**

> _A vásárlókat listázó oldalon lapozó komponens segítségével fog megtörténni az oldalváltás._

**Elfogadási kritérium:**  
- Egyszerre meghatározott számú vásárló jelenik meg a listázó oldalon.
- Az oldal tetején, illetve alján elhelyezett lapozó komponens segítségével érhetjük el a többi oldalt.

--- 

**_Rendelések aloldal_**

---

**1. agilis felhasználói történet:**

> _Új rendelés adatai vehetők fel._

**Elfogadási kritérium:**  
- A rendelés-szerkesztő aloldalon a kötelező adatok megadásával új rendelés adatait lehet felvinni. A módosítás mentés után megjelenik a listázó oldalon, létrejön a rendelés adatlapja.
- A rendelés adatai validációhoz vannak kötve. Amennyiben az adott érték nem felel meg a validációnak, a rendelés mentése nem engedélyezett.
- Az oldalon lehetőség van arra, hogy a listázó aloldalra, vagy a főoldalra navigáljon vissza az alkalmazás.

---

**2. agilis felhasználói történet:**

> _A rendelés adatai szerkeszthetők._

**Elfogadási kritérium:**  
- A rendelés-szerkesztő aloldalon a választott elem adatait lehet szerkeszteni. A módosítás mentés után megjelenik a listázó oldalon és a rendelés adatlapján is.
- A rendelés adatai validációhoz vannak kötve. Amennyiben az adott érték nem felel meg a validációnak, a rendelés mentése nem engedélyezett.
- Az oldalon lehetőség van arra, hogy a listázó aloldalra, vagy a főoldalra navigáljon vissza az alkalmazás.

---

**3. agilis felhasználói történet:**

> _A rendelés törölhető._

**Elfogadási kritérium:**  
- A rendelés-listázó oldalon az adott elem kiválasztásával törölhető a rekord.
- A törlés előtt egy megerősítő üzenet jelenik meg a képernyőn.
- A törlést követően frissül a listaoldal, ahol a törölt elem már nem látható.

---

**4. agilis felhasználói történet:**

> _A rendelések kategóriák szerint kereshetőek._

**Elfogadási kritérium:**  
- A kategória kiválasztásával és a kulcsszónak megfelelően frissül a listaoldal, ahol csak a szűrt adatok láthatók.
- Nem csak teljes egyezőség, hanem rész-egyezőség esetén is frissül a lista. 
- Minden egyes karatker beütése után már a szűkített lista látható.

---

**5. agilis felhasználói történet:**

> _A rendelések Különbözőképpen sorrendbe rendezhetőek az adott tulajdonságnak megfelelően._

**Elfogadási kritérium:**  
- A szám típusú adatok alapján növekvő és csökkenő sorrendben lehet rendezni az elemeket.
- A szöveges adatok alapján abc-szerinti és fordított sorrendben lehet rendezni az elemeket.
- Az adott oszlop fejlécére kattintva választható a növekvő vagy csökkenő sorrend.

---

**6. agilis felhasználói történet:**

> _A rendeléseket listázó oldalon lapozó komponens segítségével fog megtörténni az oldalváltás._

**Elfogadási kritérium:**  
- Egyszerre meghatározott számú elem jelenik meg a listázó oldalon.
- Az oldal tetején, illetve alján elhelyezett lapozó komponens segítségével érhetjük el a többi oldalt.

--- 

**_Számlák aloldal_**

---

**1. agilis felhasználói történet:**

> _Új számlák adatai vehetők fel._

**Elfogadási kritérium:**  
- A számla-szerkesztő aloldalon a kötelező adatok megadásával új számla adatait lehet felvinni. A módosítás mentés után megjelenik a listázó oldalon, létrejön a számla adatlapja.
- A rendelés adatai validációhoz vannak kötve. Amennyiben az adott érték nem felel meg a validációnak, a számla mentése nem engedélyezett.
- Az oldalon lehetőség van arra, hogy a listázó aloldalra, vagy a főoldalra navigáljon vissza az alkalmazás.

---

**2. agilis felhasználói történet:**

> _A számla adatai szerkeszthetők._

**Elfogadási kritérium:**  
- A számla-szerkesztő aloldalon a választott elem adatait lehet szerkeszteni. A módosítás mentés után megjelenik a listázó oldalon és a számla adatlapján is.
- A számla adatai validációhoz vannak kötve. Amennyiben az adott érték nem felel meg a validációnak, a számla mentése nem engedélyezett.
- Az oldalon lehetőség van arra, hogy a listázó aloldalra, vagy a főoldalra navigáljon vissza az alkalmazás.

---

**3. agilis felhasználói történet:**

> _A számla törölhető._

**Elfogadási kritérium:**  
- A számla-listázó oldalon az adott elem kiválasztásával törölhető a rekord.
- A törlés előtt egy megerősítő üzenet jelenik meg a képernyőn.
- A törlést követően frissül a listaoldal, ahol a törölt elem már nem látható.

---

**4. agilis felhasználói történet:**

> _A számlák kategóriák szerint kereshetőek._

**Elfogadási kritérium:**  
- A kategória kiválasztásával és a kulcsszónak megfelelően frissül a listaoldal, ahol csak a szűrt adatok láthatók.
- Nem csak teljes egyezőség, hanem rész-egyezőség esetén is frissül a lista. 
- Minden egyes karatker beütése után már a szűkített lista látható.

---

**5. agilis felhasználói történet:**

> _A számlák Különbözőképpen sorrendbe rendezhetőek az adott tulajdonságnak megfelelően._

**Elfogadási kritérium:**  
- A szám típusú adatok alapján növekvő és csökkenő sorrendben lehet rendezni az elemeket.
- A szöveges adatok alapján abc-szerinti és fordított sorrendben lehet rendezni az elemeket.
- Az adott oszlop fejlécére kattintva választható a növekvő vagy csökkenő sorrend.

---

**6. agilis felhasználói történet:**

> _A számlákat listázó oldalon lapozó komponens segítségével fog megtörténni az oldalváltás._

**Elfogadási kritérium:**  
- Egyszerre meghatározott számú elem jelenik meg a listázó oldalon.
- Az oldal tetején, illetve alján elhelyezett lapozó komponens segítségével érhetjük el a többi oldalt.

--- 

**_Szolgáltatások aloldal_**

---

**1. agilis felhasználói történet:**

> _Új szolgáltatás adatai vehetők fel._

**Elfogadási kritérium:**  
- A szolgáltatás-szerkesztő aloldalon a kötelező adatok megadásával új szolgáltatás adatait lehet felvinni. A módosítás mentés után megjelenik a listázó oldalon, létrejön a szolgáltatás adatlapja.
- A szolgáltatás adatai validációhoz vannak kötve. Amennyiben az adott érték nem felel meg a validációnak, a szolgáltatás mentése nem engedélyezett.
- Az oldalon lehetőség van arra, hogy a listázó aloldalra, vagy a főoldalra navigáljon vissza az alkalmazás.

---

**2. agilis felhasználói történet:**

> _A szolgáltatás adatai szerkeszthetők._

**Elfogadási kritérium:**  
- A szolgáltatás-szerkesztő aloldalon a választott elem adatait lehet szerkeszteni. A módosítás mentés után megjelenik a listázó oldalon és a szolgáltatás adatlapján is.
- A szolgáltatás adatai validációhoz vannak kötve. Amennyiben az adott érték nem felel meg a validációnak, a szolgáltatás mentése nem engedélyezett.
- Az oldalon lehetőség van arra, hogy a listázó aloldalra, vagy a főoldalra navigáljon vissza az alkalmazás.

---

**3. agilis felhasználói történet:**

> _A szolgáltatás törölhető._

**Elfogadási kritérium:**  
- A szolgáltatás-listázó oldalon az adott elem kiválasztásával törölhető a rekord.
- A törlés előtt egy megerősítő üzenet jelenik meg a képernyőn.
- A törlést követően frissül a listaoldal, ahol a törölt elem már nem látható.

---

**4. agilis felhasználói történet:**

> _A szolgáltatás kategóriák szerint kereshetőek._

**Elfogadási kritérium:**  
- A kategória kiválasztásával és a kulcsszónak megfelelően frissül a listaoldal, ahol csak a szűrt adatok láthatók.
- Nem csak teljes egyezőség, hanem rész-egyezőség esetén is frissül a lista. 
- Minden egyes karatker beütése után már a szűkített lista látható.

---

**5. agilis felhasználói történet:**

> _A szolgáltatás Különbözőképpen sorrendbe rendezhetőek az adott tulajdonságnak megfelelően._

**Elfogadási kritérium:**  
- A szám típusú adatok alapján növekvő és csökkenő sorrendben lehet rendezni az elemeket.
- A szöveges adatok alapján abc-szerinti és fordított sorrendben lehet rendezni az elemeket.
- Az adott oszlop fejlécére kattintva választható a növekvő vagy csökkenő sorrend.

---

**6. agilis felhasználói történet:**

> _A szolgáltatás listázó oldalon lapozó komponens segítségével fog megtörténni az oldalváltás._

**Elfogadási kritérium:**  
- Egyszerre meghatározott számú elem jelenik meg a listázó oldalon.
- Az oldal tetején, illetve alján elhelyezett lapozó komponens segítségével érhetjük el a többi oldalt.

---


## _A projekt egyéb adatai:_

**Prioritás:**  
magas

**Megvalósítás időtartama:**  
10 hét

**További fejlesztési lehetőségek:**  
- A főoldalon dinamikus statisztikák elhelyezése.
- Az egyes aloldalakon statisztikák, kimutatások készítése a legfontosabb adatokból.
- A Vállalatirányítási rendszer kiterjesztése, a következő modulok létrehozása:
   - logisztikai modul
   - beszerzési modul
   - készletgazdálkodási modul
   - tárgyi eszköz modul
   - pénztár modul




