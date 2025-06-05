# Sivun luominen
Sivustolle voi luoda julkaisuja Markdown -kirjoittamisella. Opas siihen on tässä alhaalla. Jos kyseessä on uusi blogikirjoitus, luo tiedosto text.md ja lähetä se Ollille. Jos haluat muuttaa vanhaa sivua, voit tehdä sen myös itse osoitteessa [github.com/majaluoma/keravabb ](https://github.com/majaluoma/keravaBB) pyytämällä oikeudet repoon. Muokattavat tekstit löytyvät kansiosta public/siteTexts. 

Blpogikirjoituksen lisääminen
1. Luo uusi kansio numerolla kansioon public/siteTexts/blogEntries 
2. Kirjoita sinne tiedosto text.md
3. Muokkaa tiedostoa src/data/blogData.ts ja lisää sinne oman kirjoituksesi tiedot

```ts
export const blogData = [
  ...
   {
    id:2, //< --laita sama numero kuin kansiolla on
    title: 'Blackbears vie ylivoimaisen voiton Kerava Cupin avausottelusta',
    ingress: 'Ensimmäisen ottelun tiivistelmä',
    date: new Date('2025-06-05'),
    labels: ['ottelut', 'Blackbears', 'Rappion etujoukot'], //< --voit keksiä omat labelit
  },
];

```


**Markdown** on yksinkertainen tapa kirjoittaa muotoiltua tekstiä ilman erillistä tekstinkäsittelyohjelmaa. Se on kuin tavallista tekstiä, mutta pienillä lisämerkeillä voit tehdä esim. **otsikoita**, *kursiivia*, listoja ja linkkejä.

Markdown toimii monissa paikoissa: esim. GitHubissa, nettisivuilla, muistiinpanoissa ja jopa sähköposteissa.

---

# ✍️ Miten käytän Markdownia?

Kirjoita vain tavallista tekstiä ja lisää **yksinkertaisia merkkejä** haluamasi muotoilun ympärille.

---

## 🏷️ Otsikot

Lisää yksi tai useampi risuaita `#` rivin alkuun:
```md
# Tämä on iso otsikko
```
Näyttää tältä:

# Tämä on iso otsikko


## 🔤 Tekstin muotoilu


```md 
**Lihavoitu teksti**  
*Kursivoitu teksti*  
~~Yliviivattu teksti~~
```

Näyttää tältä:

**Lihavoitu teksti**  
*Kursivoitu teksti*  
~~Yliviivattu teksti~~

---

## 📋 Listat

### Numeroimaton lista:
```md 
- Yksi asia  
- Toinen asia
```
- Yksi asia  
- Toinen asia

### Numeroitu lista:
```md 
1. Ensimmäinen  
2. Toinen
```
1. Ensimmäinen  
2. Toinen
---

## 🔗 Linkki
```md 
[Klikkaa tästä](https://www.google.fi)
```
[Klikkaa tästä](https://www.google.fi)
---

## 🖼️ Kuva
```md 
![alt text](https://img00.deviantart.net/3a36/i/2017/123/a/7/bloodbowl_fanart__2017__by_taonavi-db7yot8.png)
```
![alt text](https://img00.deviantart.net/3a36/i/2017/123/a/7/bloodbowl_fanart__2017__by_taonavi-db7yot8.png)

---

## 💬 Lainaus
```md 
> Tämä on lainattu teksti
```
> Tämä on lainattu teksti