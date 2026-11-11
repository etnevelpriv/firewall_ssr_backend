Egy tűzfal tiltólistáját vezérlő SSR alkalmazást szeretnénk készíteni.

A tűzfal a mellékelt adatbázisban (csatolt SQL) tárolja az adatokat.
id: adatbázis azanosító
priority: prioritás (a kisebb a magasabb prioritású)
mac: MAC-cím
enabled: a szabály be van-e kapcsolva

Készítsd el az alábbi funkciókat:
Szabályok listázása
táblázatosan
prioritás szerint növekvő
a kikapcsolt szabályok legyenek szürke, dőlt betűszínűek
Új szabály hozzáadása
A prioritás tetszőleges egész szám lehet (negatív is)
Az enabled logikai
A mac kettősponttal elválasztott hex. értékek