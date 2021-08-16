## **1. Az alkalmazás célja**

Az alkalmazás feladata, hogy a Vállalatirányítási rendszer számlázási modulját reprezentálja, annak aloldalait kezelje és nyilvántartsa (ide értve a számlázást, a vevői adatbázist, a rendeléseket és a szolgáltatásokat).

## **2. Az alkalmazás telepítése**

- A célgépre le kell klónozni az adott GitHub repository tartalmát: _Https://github.com/Frenczy/Final-exam_
- Telepíteni kell az alkalmazás függőségeit.
    - Backend: a terminálon be kell lépni a /backend mappába és futtatni az `npm i` parancsot.
    - Frontend: a terminálon be kell lépni a /frontend mappába és futtatni az `npm i` parancsot.  
- Ha még nincsen fenn a célgépen, akkor telepíteni kell az Angular keretrendszert az `npm i -g @angular/cli` paranccsal.

## **3. Az alkalmazás konfigurálása**

A _frontend/src/app/service/config.service.ts_ állományban tudjuk beállítani az API végpont elérési útvonalát:  

- alapbeállításként a _http://localhost:3000_ szerepel

## **4. Az alkalmazás indítása**

A megadott Docker container indítása és inicializálása:

- El kell indítani a Docker Desktop alkalmazást.
- A /backend mappába belépve a terminálban ki kell adni az `npm run dev` parancsot.  
(Ha szükséges, a /frontend mappába belépve a terminálban az `npm start` paranccsal indítható a frontend.)

Megjegyzés:
- A bejelentkezéshez érvényes felhasználó / jelszó páros szükséges, ami ebben az esetben: _admin@gmail.com_, _admin_pw_ (vagy pedig _user@gmail.com_, _user_pw_).

## **5. A végpontok dokumentációja**

Swagger:

- Az alábbi URL-t kell beírni a böngészőbe: _https://localhost:3000/api-docs_


---
---

## **Linkek:**  

- [A User Story (adminisztrátori szerepkör) itt érhető el.](https://github.com/Frenczy/Final-exam#readme)

