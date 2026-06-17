const products = [
  {
    "id": 1,
    "name": "Beyaz Kısa Topuklu Ayakkabı",
    "price": 1180,
    "gender": "woman",
    "category": "Ayakkabı",
    "image": "/images/woman/ayakkabi/beyaz-kisa-topuklu-ayakkabi.jpg",
    "sizes": {
      "36": 4,
      "37": 0,
      "38": 2,
      "39": 4,
      "40": 0
    }
  },
  {
    "id": 2,
    "name": "Bord Topuklu Bot",
    "price": 1260,
    "gender": "woman",
    "category": "Ayakkabı",
    "image": "/images/woman/ayakkabi/bord-topuklu-bot.jpg",
    "sizes": {
      "36": 4,
      "37": 0,
      "38": 2,
      "39": 4,
      "40": 0
    }
  },
  {
    "id": 3,
    "name": "Cicekli Ayakkabı",
    "price": 1340,
    "gender": "woman",
    "category": "Ayakkabı",
    "image": "/images/woman/ayakkabi/cicekli-ayakkabi.jpg",
    "sizes": {
      "36": 4,
      "37": 0,
      "38": 2,
      "39": 4,
      "40": 0
    }
  },
  {
    "id": 4,
    "name": "Desenli Cizme",
    "price": 1420,
    "gender": "woman",
    "category": "Ayakkabı",
    "image": "/images/woman/ayakkabi/desenli-cizme.jpg",
    "sizes": {
      "36": 4,
      "37": 0,
      "38": 2,
      "39": 4,
      "40": 0
    }
  },
  {
    "id": 5,
    "name": "Koyu Kahve Kemer Detaylı Cizme",
    "price": 1100,
    "gender": "woman",
    "category": "Ayakkabı",
    "image": "/images/woman/ayakkabi/koyu-kahve-kemer-detayli-cizme.jpg",
    "sizes": {
      "36": 4,
      "37": 0,
      "38": 2,
      "39": 4,
      "40": 0
    }
  },
  {
    "id": 6,
    "name": "Pembe Baglamali Ayakkabı",
    "price": 1180,
    "gender": "woman",
    "category": "Ayakkabı",
    "image": "/images/woman/ayakkabi/pembe-baglamali-ayakkabi.jpg",
    "sizes": {
      "36": 4,
      "37": 0,
      "38": 2,
      "39": 4,
      "40": 0
    }
  },
  {
    "id": 7,
    "name": "Pembe Tasli Ayakkabı",
    "price": 1260,
    "gender": "woman",
    "category": "Ayakkabı",
    "image": "/images/woman/ayakkabi/pembe-tasli-ayakkabi.jpg",
    "sizes": {
      "36": 4,
      "37": 0,
      "38": 2,
      "39": 4,
      "40": 0
    }
  },
  {
    "id": 8,
    "name": "Platform Topuk Ayakkabı",
    "price": 1340,
    "gender": "woman",
    "category": "Ayakkabı",
    "image": "/images/woman/ayakkabi/platform-topuk-ayakkabi.jpg",
    "sizes": {
      "36": 4,
      "37": 0,
      "38": 2,
      "39": 4,
      "40": 0
    }
  },
  {
    "id": 9,
    "name": "Sarı Ayakkabı",
    "price": 1420,
    "gender": "woman",
    "category": "Ayakkabı",
    "image": "/images/woman/ayakkabi/sari-ayakkabi.jpg",
    "sizes": {
      "36": 4,
      "37": 0,
      "38": 2,
      "39": 4,
      "40": 0
    }
  },
  {
    "id": 10,
    "name": "Siyah Topuklu Ayakkabı",
    "price": 1100,
    "gender": "woman",
    "category": "Ayakkabı",
    "image": "/images/woman/ayakkabi/siyah-topuklu-ayakkabi.jpg",
    "sizes": {
      "36": 4,
      "37": 0,
      "38": 2,
      "39": 4,
      "40": 0
    }
  },
  {
    "id": 11,
    "name": "Yesil Cicekli Topuklu Ayakkabı",
    "price": 1180,
    "gender": "woman",
    "category": "Ayakkabı",
    "image": "/images/woman/ayakkabi/yesil-cicekli-topuklu-ayakkabi.jpg",
    "sizes": {
      "36": 4,
      "37": 0,
      "38": 2,
      "39": 4,
      "40": 0
    }
  },
  {
    "id": 12,
    "name": "Kahverenegi Çanta",
    "price": 730,
    "gender": "woman",
    "category": "Çanta - Aksesuar",
    "image": "/images/woman/canta-aksesuar/kahverenegi-canta.jpg",
    "sizes": {
      "STD": 5
    }
  },
  {
    "id": 13,
    "name": "Kırmızı Çanta",
    "price": 810,
    "gender": "woman",
    "category": "Çanta - Aksesuar",
    "image": "/images/woman/canta-aksesuar/kirmizi-canta.jpg",
    "sizes": {
      "STD": 5
    }
  },
  {
    "id": 14,
    "name": "Kırmızı Orgu Çanta",
    "price": 890,
    "gender": "woman",
    "category": "Çanta - Aksesuar",
    "image": "/images/woman/canta-aksesuar/kirmizi-orgu-canta.jpg",
    "sizes": {
      "STD": 5
    }
  },
  {
    "id": 15,
    "name": "Mavi Deri Çanta",
    "price": 970,
    "gender": "woman",
    "category": "Çanta - Aksesuar",
    "image": "/images/woman/canta-aksesuar/mavi-deri-canta.jpg",
    "sizes": {
      "STD": 5
    }
  },
  {
    "id": 16,
    "name": "Pembe Cicekli Çanta",
    "price": 650,
    "gender": "woman",
    "category": "Çanta - Aksesuar",
    "image": "/images/woman/canta-aksesuar/pembe-cicekli-canta.jpg",
    "sizes": {
      "STD": 5
    }
  },
  {
    "id": 17,
    "name": "Renkli Çanta",
    "price": 730,
    "gender": "woman",
    "category": "Çanta - Aksesuar",
    "image": "/images/woman/canta-aksesuar/renkli-canta.jpg",
    "sizes": {
      "STD": 5
    }
  },
  {
    "id": 18,
    "name": "Yesil Buzgulu Çanta",
    "price": 810,
    "gender": "woman",
    "category": "Çanta - Aksesuar",
    "image": "/images/woman/canta-aksesuar/yesil-buzgulu-canta.jpg",
    "sizes": {
      "STD": 5
    }
  },
  {
    "id": 19,
    "name": "Yesil Çanta Deri",
    "price": 890,
    "gender": "woman",
    "category": "Çanta - Aksesuar",
    "image": "/images/woman/canta-aksesuar/yesil-canta-deri.jpg",
    "sizes": {
      "STD": 5
    }
  },
  {
    "id": 20,
    "name": "Yesil Kumas Çanta",
    "price": 970,
    "gender": "woman",
    "category": "Çanta - Aksesuar",
    "image": "/images/woman/canta-aksesuar/yesil-kumas-canta.jpg",
    "sizes": {
      "STD": 5
    }
  },
  {
    "id": 21,
    "name": "Açık Kahve Ceket",
    "price": 1380,
    "gender": "woman",
    "category": "Ceket ve Trençkot",
    "image": "/images/woman/ceket-trenckot/acik-kahve-ceket.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 22,
    "name": "Baglamali Bej Trenckot",
    "price": 1460,
    "gender": "woman",
    "category": "Ceket ve Trençkot",
    "image": "/images/woman/ceket-trenckot/baglamali-bej-trenckot.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 23,
    "name": "Bordo Deri Ceket",
    "price": 1540,
    "gender": "woman",
    "category": "Ceket ve Trençkot",
    "image": "/images/woman/ceket-trenckot/bordo-deri-ceket.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 24,
    "name": "Bordo Deri Trenckot",
    "price": 1620,
    "gender": "woman",
    "category": "Ceket ve Trençkot",
    "image": "/images/woman/ceket-trenckot/bordo-deri-trenckot.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 25,
    "name": "Kahverengi Kumas Ceket",
    "price": 1300,
    "gender": "woman",
    "category": "Ceket ve Trençkot",
    "image": "/images/woman/ceket-trenckot/kahverengi-kumas-ceket.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 26,
    "name": "Kahverengi Kurk",
    "price": 1380,
    "gender": "woman",
    "category": "Ceket ve Trençkot",
    "image": "/images/woman/ceket-trenckot/kahverengi-kurk.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 27,
    "name": "Kahverengi Treckot",
    "price": 1460,
    "gender": "woman",
    "category": "Ceket ve Trençkot",
    "image": "/images/woman/ceket-trenckot/kahverengi-treckot.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 28,
    "name": "Kırmızı Blazer",
    "price": 1540,
    "gender": "woman",
    "category": "Ceket ve Trençkot",
    "image": "/images/woman/ceket-trenckot/kirmizi-blazer.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 29,
    "name": "Beyaz Kurdelyeli Mavi Elbise",
    "price": 1030,
    "gender": "woman",
    "category": "Elbise ve Tulum",
    "image": "/images/woman/elbise-tulum/beyaz-kurdelyeli-mavi-elbise.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 30,
    "name": "Beyaz Omuz Detaylı Elbise",
    "price": 1110,
    "gender": "woman",
    "category": "Elbise ve Tulum",
    "image": "/images/woman/elbise-tulum/beyaz-omuz-detayli-elbise.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 31,
    "name": "Kol Bombeli Elbise",
    "price": 1190,
    "gender": "woman",
    "category": "Elbise ve Tulum",
    "image": "/images/woman/elbise-tulum/kol-bombeli-elbise.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 32,
    "name": "Kot Elbise",
    "price": 1270,
    "gender": "woman",
    "category": "Elbise ve Tulum",
    "image": "/images/woman/elbise-tulum/kot-elbise.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 33,
    "name": "Pembe Cicekli Dekolteli Elbise",
    "price": 950,
    "gender": "woman",
    "category": "Elbise ve Tulum",
    "image": "/images/woman/elbise-tulum/pembe-cicekli-dekolteli-elbise.avif",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 34,
    "name": "Pembe Kısa Elbise",
    "price": 1030,
    "gender": "woman",
    "category": "Elbise ve Tulum",
    "image": "/images/woman/elbise-tulum/pembe-kisa-elbise.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 35,
    "name": "Puantiyeli Elbise",
    "price": 1110,
    "gender": "woman",
    "category": "Elbise ve Tulum",
    "image": "/images/woman/elbise-tulum/puantiyeli-elbise.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 36,
    "name": "Sarı Dekolteli Elbise",
    "price": 1190,
    "gender": "woman",
    "category": "Elbise ve Tulum",
    "image": "/images/woman/elbise-tulum/sari-dekolteli-elbise.avif",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 37,
    "name": "Sarı Elbise",
    "price": 1270,
    "gender": "woman",
    "category": "Elbise ve Tulum",
    "image": "/images/woman/elbise-tulum/sari-elbise.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 38,
    "name": "Simli Mavi Elbise",
    "price": 950,
    "gender": "woman",
    "category": "Elbise ve Tulum",
    "image": "/images/woman/elbise-tulum/simli-mavi-elbise.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 39,
    "name": "Yesil Dekolteli Elbise",
    "price": 1030,
    "gender": "woman",
    "category": "Elbise ve Tulum",
    "image": "/images/woman/elbise-tulum/yesil-dekolteli-elbise.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 40,
    "name": "Bej Balon Etek",
    "price": 680,
    "gender": "woman",
    "category": "Etek",
    "image": "/images/woman/etek/bej-balon-etek.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 41,
    "name": "Beyaz Ucu Firfirli Etek",
    "price": 760,
    "gender": "woman",
    "category": "Etek",
    "image": "/images/woman/etek/beyaz-ucu-firfirli-etek.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 42,
    "name": "Cepli Mini Etek",
    "price": 840,
    "gender": "woman",
    "category": "Etek",
    "image": "/images/woman/etek/cepli-mini-etek.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 43,
    "name": "Kareli Etek",
    "price": 920,
    "gender": "woman",
    "category": "Etek",
    "image": "/images/woman/etek/kareli-etek.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 44,
    "name": "Kemerli Bej Etek",
    "price": 600,
    "gender": "woman",
    "category": "Etek",
    "image": "/images/woman/etek/kemerli-bej-etek.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 45,
    "name": "Midi Tul Kareli Etek",
    "price": 680,
    "gender": "woman",
    "category": "Etek",
    "image": "/images/woman/etek/midi-tul-kareli-etek.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 46,
    "name": "Pembe Kemer Detali Etek",
    "price": 760,
    "gender": "woman",
    "category": "Etek",
    "image": "/images/woman/etek/pembe-kemer-detali-etek.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 47,
    "name": "Sarı Tenis Etek",
    "price": 840,
    "gender": "woman",
    "category": "Etek",
    "image": "/images/woman/etek/sari-tenis-etek.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 48,
    "name": "Baglamali Oversize Poplin Gömlek",
    "price": 670,
    "gender": "woman",
    "category": "Gömlek - Bluz",
    "image": "/images/woman/gomlek-bluz/baglamali-oversize-poplin-gomlek.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 49,
    "name": "Bej Bluz",
    "price": 750,
    "gender": "woman",
    "category": "Gömlek - Bluz",
    "image": "/images/woman/gomlek-bluz/bej-bluz.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 50,
    "name": "Can Kollu Vucuda Oturan Gömlek",
    "price": 830,
    "gender": "woman",
    "category": "Gömlek - Bluz",
    "image": "/images/woman/gomlek-bluz/can-kollu-vucuda-oturan-gomlek.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 51,
    "name": "Kareli Cizgili Gömlek",
    "price": 910,
    "gender": "woman",
    "category": "Gömlek - Bluz",
    "image": "/images/woman/gomlek-bluz/kareli-cizgili-gomlek.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 52,
    "name": "Kısa Kollu Fermuarlı Gömlek",
    "price": 590,
    "gender": "woman",
    "category": "Gömlek - Bluz",
    "image": "/images/woman/gomlek-bluz/kisa-kollu-fermuarli-gomlek.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 53,
    "name": "Kruvarze Desenli Bluz",
    "price": 670,
    "gender": "woman",
    "category": "Gömlek - Bluz",
    "image": "/images/woman/gomlek-bluz/kruvarze-desenli-bluz.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 54,
    "name": "Uzun Kollu Kruvarze Bluz",
    "price": 750,
    "gender": "woman",
    "category": "Gömlek - Bluz",
    "image": "/images/woman/gomlek-bluz/uzun-kollu-kruvarze-bluz.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 55,
    "name": "Bootcut Duduk Bel Jean",
    "price": 1030,
    "gender": "woman",
    "category": "Jean",
    "image": "/images/woman/jean/bootcut-duduk-bel-jean.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 56,
    "name": "Boyfriend Fit Denim",
    "price": 1110,
    "gender": "woman",
    "category": "Jean",
    "image": "/images/woman/jean/boyfriend-fit-denim.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 57,
    "name": "Distressed Dusuk Bel Jean",
    "price": 1190,
    "gender": "woman",
    "category": "Jean",
    "image": "/images/woman/jean/distressed-dusuk-bel-jean.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 58,
    "name": "Dokulu Duduk Bel Jean",
    "price": 1270,
    "gender": "woman",
    "category": "Jean",
    "image": "/images/woman/jean/dokulu-duduk-bel-jean.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 59,
    "name": "Duduk Bel Kapakli Bootcut Jean",
    "price": 950,
    "gender": "woman",
    "category": "Jean",
    "image": "/images/woman/jean/duduk-bel-kapakli-bootcut-jean.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 60,
    "name": "Duduk Bel Zimbali Baggy Jean",
    "price": 1030,
    "gender": "woman",
    "category": "Jean",
    "image": "/images/woman/jean/duduk-bel-zimbali-baggy-jean.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 61,
    "name": "Dusuk Bel Nakışlı Flare Fit",
    "price": 1110,
    "gender": "woman",
    "category": "Jean",
    "image": "/images/woman/jean/dusuk-bel-nakisli-flare-fit.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 62,
    "name": "Kargo Parasut Jean",
    "price": 1190,
    "gender": "woman",
    "category": "Jean",
    "image": "/images/woman/jean/kargo-parasut-jean.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 63,
    "name": "Puantiye Desenli Genis Paca Jean",
    "price": 1270,
    "gender": "woman",
    "category": "Jean",
    "image": "/images/woman/jean/puantiye-desenli-genis-paca-jean.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 64,
    "name": "Bisiklet Yaka Yelek",
    "price": 930,
    "gender": "woman",
    "category": "Kazak - Hırka",
    "image": "/images/woman/kazak-hirka/bisiklet-yaka-yelek.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 65,
    "name": "Orgu Fermuarlı Hirka",
    "price": 1010,
    "gender": "woman",
    "category": "Kazak - Hırka",
    "image": "/images/woman/kazak-hirka/orgu-fermuarli-hirka.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 66,
    "name": "Orgu Kazak",
    "price": 1090,
    "gender": "woman",
    "category": "Kazak - Hırka",
    "image": "/images/woman/kazak-hirka/orgu-kazak.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 67,
    "name": "Rustik Ajur Ceket",
    "price": 1170,
    "gender": "woman",
    "category": "Kazak - Hırka",
    "image": "/images/woman/kazak-hirka/rustik-ajur-ceket.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 68,
    "name": "Rustik Ajurlu Kazak",
    "price": 850,
    "gender": "woman",
    "category": "Kazak - Hırka",
    "image": "/images/woman/kazak-hirka/rustik-ajurlu-kazak.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 69,
    "name": "Rustik Panco Kazak",
    "price": 930,
    "gender": "woman",
    "category": "Kazak - Hırka",
    "image": "/images/woman/kazak-hirka/rustik-panco-kazak.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 70,
    "name": "Yumusak Dokulu Hirka",
    "price": 1010,
    "gender": "woman",
    "category": "Kazak - Hırka",
    "image": "/images/woman/kazak-hirka/yumusak-dokulu-hirka.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 71,
    "name": "Beyaz Kot",
    "price": 930,
    "gender": "woman",
    "category": "Pantolon",
    "image": "/images/woman/pantolon/beyaz-kot.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 72,
    "name": "Beyaz Kumas Pantolon",
    "price": 1010,
    "gender": "woman",
    "category": "Pantolon",
    "image": "/images/woman/pantolon/beyaz-kumas-pantolon.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 73,
    "name": "Desenli Pantolon",
    "price": 1090,
    "gender": "woman",
    "category": "Pantolon",
    "image": "/images/woman/pantolon/desenli-pantolon.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 74,
    "name": "Dusuk Bel Pantolon",
    "price": 1170,
    "gender": "woman",
    "category": "Pantolon",
    "image": "/images/woman/pantolon/dusuk-bel-pantolon.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 75,
    "name": "Eskimis Goruntulu Pantolon",
    "price": 850,
    "gender": "woman",
    "category": "Pantolon",
    "image": "/images/woman/pantolon/eskimis-goruntulu-pantolon.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 76,
    "name": "Kısa Pantolon",
    "price": 930,
    "gender": "woman",
    "category": "Pantolon",
    "image": "/images/woman/pantolon/kisa-pantolon.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 77,
    "name": "Kot Ispanyol Paca Pantolon",
    "price": 1010,
    "gender": "woman",
    "category": "Pantolon",
    "image": "/images/woman/pantolon/kot-ispanyol-paca-pantolon.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 78,
    "name": "Koyu Kot Pantolon",
    "price": 1090,
    "gender": "woman",
    "category": "Pantolon",
    "image": "/images/woman/pantolon/koyu-kot-pantolon.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 79,
    "name": "Pembe Desenli Ispanyol Paca Pantolon",
    "price": 1170,
    "gender": "woman",
    "category": "Pantolon",
    "image": "/images/woman/pantolon/pembe-desenli-ispanyol-paca-pantolon.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 80,
    "name": "Pembe Desenli Pantolon",
    "price": 850,
    "gender": "woman",
    "category": "Pantolon",
    "image": "/images/woman/pantolon/pembe-desenli-pantolon.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 81,
    "name": "Siyah Kot",
    "price": 930,
    "gender": "woman",
    "category": "Pantolon",
    "image": "/images/woman/pantolon/siyah-kot.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 82,
    "name": "Beyaz Siyah Bikini",
    "price": 780,
    "gender": "woman",
    "category": "Plaj Giyimi",
    "image": "/images/woman/plaj-giyimi/beyaz-siyah-bikini.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 83,
    "name": "Kahverengi Bikini",
    "price": 860,
    "gender": "woman",
    "category": "Plaj Giyimi",
    "image": "/images/woman/plaj-giyimi/kahverengi-bikini.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 84,
    "name": "Mavi Bikini Takimi",
    "price": 940,
    "gender": "woman",
    "category": "Plaj Giyimi",
    "image": "/images/woman/plaj-giyimi/mavi-bikini-takimi.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 85,
    "name": "Mavi Kare Bikini",
    "price": 1020,
    "gender": "woman",
    "category": "Plaj Giyimi",
    "image": "/images/woman/plaj-giyimi/mavi-kare-bikini.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 86,
    "name": "Pembe Cizgili Bikini",
    "price": 700,
    "gender": "woman",
    "category": "Plaj Giyimi",
    "image": "/images/woman/plaj-giyimi/pembe-cizgili-bikini.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 87,
    "name": "Siyah Beyaz Düğmeli Bikini",
    "price": 780,
    "gender": "woman",
    "category": "Plaj Giyimi",
    "image": "/images/woman/plaj-giyimi/siyah-beyaz-dugmeli-bikini.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 88,
    "name": "Siyah Omuz Detaylı Mayo",
    "price": 860,
    "gender": "woman",
    "category": "Plaj Giyimi",
    "image": "/images/woman/plaj-giyimi/siyah-omuz-detayli-mayo.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 89,
    "name": "Bej Kahverengi Kemerli Şort",
    "price": 630,
    "gender": "woman",
    "category": "Şort - Bermuda",
    "image": "/images/woman/sort-bermuda/bej-kahverengi-kemerli-sort.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 90,
    "name": "Beyaz Bermuda",
    "price": 710,
    "gender": "woman",
    "category": "Şort - Bermuda",
    "image": "/images/woman/sort-bermuda/beyaz-bermuda.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 91,
    "name": "Kahverengi Bagcikli Bermuda",
    "price": 790,
    "gender": "woman",
    "category": "Şort - Bermuda",
    "image": "/images/woman/sort-bermuda/kahverengi-bagcikli-bermuda.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 92,
    "name": "Kahverengi Şort",
    "price": 870,
    "gender": "woman",
    "category": "Şort - Bermuda",
    "image": "/images/woman/sort-bermuda/kahverengi-sort.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 93,
    "name": "Kot Bermuda",
    "price": 550,
    "gender": "woman",
    "category": "Şort - Bermuda",
    "image": "/images/woman/sort-bermuda/kot-bermuda.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 94,
    "name": "Mini Kot Şort",
    "price": 630,
    "gender": "woman",
    "category": "Şort - Bermuda",
    "image": "/images/woman/sort-bermuda/mini-kot-sort.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 95,
    "name": "Puantiyeli Şort",
    "price": 710,
    "gender": "woman",
    "category": "Şort - Bermuda",
    "image": "/images/woman/sort-bermuda/puantiyeli-sort.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 96,
    "name": "Siyah Beyaz Cizgili Şort",
    "price": 790,
    "gender": "woman",
    "category": "Şort - Bermuda",
    "image": "/images/woman/sort-bermuda/siyah-beyaz-cizgili-sort.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 97,
    "name": "Siyah Mini Şort",
    "price": 870,
    "gender": "woman",
    "category": "Şort - Bermuda",
    "image": "/images/woman/sort-bermuda/siyah-mini-sort.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 98,
    "name": "Yesil Cizgili Kumas Şort",
    "price": 550,
    "gender": "woman",
    "category": "Şort - Bermuda",
    "image": "/images/woman/sort-bermuda/yesil-cizgili-kumas-sort.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 99,
    "name": "Açık Pembe Fermuarlı Sweatshirt",
    "price": 830,
    "gender": "woman",
    "category": "Sweatshirt",
    "image": "/images/woman/sweatshirt/acik-pembe-fermuarli-sweatshirt.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 100,
    "name": "Bej Sweatshirt",
    "price": 910,
    "gender": "woman",
    "category": "Sweatshirt",
    "image": "/images/woman/sweatshirt/bej-sweatshirt.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 101,
    "name": "Beyaz Crop Kapüşonlu Sweatshirt",
    "price": 990,
    "gender": "woman",
    "category": "Sweatshirt",
    "image": "/images/woman/sweatshirt/beyaz-crop-kapusonlu-sweatshirt.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 102,
    "name": "Beyaz Yazili Sweatshirt",
    "price": 1070,
    "gender": "woman",
    "category": "Sweatshirt",
    "image": "/images/woman/sweatshirt/beyaz-yazili-sweatshirt.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 103,
    "name": "Gri Beyaz Cizgili Sweatshirt",
    "price": 750,
    "gender": "woman",
    "category": "Sweatshirt",
    "image": "/images/woman/sweatshirt/gri-beyaz-cizgili-sweatshirt.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 104,
    "name": "Gri Crop Sweatshirt",
    "price": 830,
    "gender": "woman",
    "category": "Sweatshirt",
    "image": "/images/woman/sweatshirt/gri-crop-sweatshirt.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 105,
    "name": "Koyu Gri Omuz Detaylı Sweatshirt",
    "price": 910,
    "gender": "woman",
    "category": "Sweatshirt",
    "image": "/images/woman/sweatshirt/koyu-gri-omuz-detayli-sweatshirt.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 106,
    "name": "Mavi Kapüşonlu Sweatshirt",
    "price": 990,
    "gender": "woman",
    "category": "Sweatshirt",
    "image": "/images/woman/sweatshirt/mavi-kapusonlu-sweatshirt.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 107,
    "name": "Mavi Sweatshirt",
    "price": 1070,
    "gender": "woman",
    "category": "Sweatshirt",
    "image": "/images/woman/sweatshirt/mavi-sweatshirt.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 108,
    "name": "Pembe Sweatshirt",
    "price": 750,
    "gender": "woman",
    "category": "Sweatshirt",
    "image": "/images/woman/sweatshirt/pembe-sweatshirt.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 109,
    "name": "Yesil Yakali Sweatshirt",
    "price": 830,
    "gender": "woman",
    "category": "Sweatshirt",
    "image": "/images/woman/sweatshirt/yesil-yakali-sweatshirt.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 110,
    "name": "Baskili Sarı T-shirt",
    "price": 470,
    "gender": "woman",
    "category": "Tişört",
    "image": "/images/woman/tisort/baskili-sari-tshirt.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 111,
    "name": "Bej Yazili T-shirt",
    "price": 550,
    "gender": "woman",
    "category": "Tişört",
    "image": "/images/woman/tisort/bej-yazili-tshirt.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 112,
    "name": "Beyaz Düğmeli T-shirt",
    "price": 630,
    "gender": "woman",
    "category": "Tişört",
    "image": "/images/woman/tisort/beyaz-dugmeli-tshirt.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 113,
    "name": "Beyaz Fitted T-shirt",
    "price": 710,
    "gender": "woman",
    "category": "Tişört",
    "image": "/images/woman/tisort/beyaz-fitted-tshirt.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 114,
    "name": "Mavi Kırmızı Yazili T-shirt",
    "price": 390,
    "gender": "woman",
    "category": "Tişört",
    "image": "/images/woman/tisort/mavi-kirmizi-yazili-tshirt.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 115,
    "name": "Omuz Detaylı Sarı T-shirt",
    "price": 470,
    "gender": "woman",
    "category": "Tişört",
    "image": "/images/woman/tisort/omuz-detayli-sari-tshirt.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 116,
    "name": "Oversize Beyaz Yazili T-shirt",
    "price": 550,
    "gender": "woman",
    "category": "Tişört",
    "image": "/images/woman/tisort/oversize-beyaz-yazili-tshirt.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 117,
    "name": "Pembe Britney T-shirt",
    "price": 630,
    "gender": "woman",
    "category": "Tişört",
    "image": "/images/woman/tisort/pembe-britney-tshirt.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 118,
    "name": "Pembe Crop T-shirt",
    "price": 710,
    "gender": "woman",
    "category": "Tişört",
    "image": "/images/woman/tisort/pembe-crop-tshirt.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 119,
    "name": "Sarı T-shirt",
    "price": 390,
    "gender": "woman",
    "category": "Tişört",
    "image": "/images/woman/tisort/sari-tshirt.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 120,
    "name": "Beyaz Dantelli Top",
    "price": 500,
    "gender": "woman",
    "category": "Top ve Body",
    "image": "/images/woman/top-body/beyaz-dantelli-top.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 121,
    "name": "Beyaz Düğmeli Top",
    "price": 580,
    "gender": "woman",
    "category": "Top ve Body",
    "image": "/images/woman/top-body/beyaz-dugmeli-top.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 122,
    "name": "Beyaz Ipli Top",
    "price": 660,
    "gender": "woman",
    "category": "Top ve Body",
    "image": "/images/woman/top-body/beyaz-ipli-top.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 123,
    "name": "Cicekli Halter Top",
    "price": 740,
    "gender": "woman",
    "category": "Top ve Body",
    "image": "/images/woman/top-body/cicekli-halter-top.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 124,
    "name": "Desenli Tul Top",
    "price": 420,
    "gender": "woman",
    "category": "Top ve Body",
    "image": "/images/woman/top-body/desenli-tul-top.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 125,
    "name": "Kot Top",
    "price": 500,
    "gender": "woman",
    "category": "Top ve Body",
    "image": "/images/woman/top-body/kot-top.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 126,
    "name": "Pembe Firfirli Top",
    "price": 580,
    "gender": "woman",
    "category": "Top ve Body",
    "image": "/images/woman/top-body/pembe-firfirli-top.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 127,
    "name": "Pembe Kare Yaka Top",
    "price": 660,
    "gender": "woman",
    "category": "Top ve Body",
    "image": "/images/woman/top-body/pembe-kare-yaka-top.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 128,
    "name": "Puantiyeli Top",
    "price": 740,
    "gender": "woman",
    "category": "Top ve Body",
    "image": "/images/woman/top-body/puantiyeli-top.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 129,
    "name": "Red Corset",
    "price": 420,
    "gender": "woman",
    "category": "Top ve Body",
    "image": "/images/woman/top-body/red-corset.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 130,
    "name": "Sarı Askili Top",
    "price": 500,
    "gender": "woman",
    "category": "Top ve Body",
    "image": "/images/woman/top-body/sari-askili-top.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 131,
    "name": "Staplez Mavi Top",
    "price": 580,
    "gender": "woman",
    "category": "Top ve Body",
    "image": "/images/woman/top-body/staplez-mavi-top.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 132,
    "name": "Asetat Gunes Gozlugu",
    "price": 530,
    "gender": "man",
    "category": "Aksesuar",
    "image": "/images/man/aksesuar/asetat-gunes-gozlugu.jpg",
    "sizes": {
      "STD": 5
    }
  },
  {
    "id": 133,
    "name": "Boxy Kesim Desenli Mayo",
    "price": 610,
    "gender": "man",
    "category": "Aksesuar",
    "image": "/images/man/aksesuar/boxy-kesim-desenli-mayo.jpg",
    "sizes": {
      "STD": 5
    }
  },
  {
    "id": 134,
    "name": "Cizgili Kravat",
    "price": 690,
    "gender": "man",
    "category": "Aksesuar",
    "image": "/images/man/aksesuar/cizgili-kravat.jpg",
    "sizes": {
      "STD": 5
    }
  },
  {
    "id": 135,
    "name": "Desenli Bandana",
    "price": 770,
    "gender": "man",
    "category": "Aksesuar",
    "image": "/images/man/aksesuar/desenli-bandana.jpg",
    "sizes": {
      "STD": 5
    }
  },
  {
    "id": 136,
    "name": "Gunes Gozlugu",
    "price": 450,
    "gender": "man",
    "category": "Aksesuar",
    "image": "/images/man/aksesuar/gunes-gozlugu.jpg",
    "sizes": {
      "STD": 5
    }
  },
  {
    "id": 137,
    "name": "Islemeli Sapka",
    "price": 530,
    "gender": "man",
    "category": "Aksesuar",
    "image": "/images/man/aksesuar/islemeli-sapka.jpg",
    "sizes": {
      "STD": 5
    }
  },
  {
    "id": 138,
    "name": "Orgu Kemer",
    "price": 610,
    "gender": "man",
    "category": "Aksesuar",
    "image": "/images/man/aksesuar/orgu-kemer.jpg",
    "sizes": {
      "STD": 5
    }
  },
  {
    "id": 139,
    "name": "Sunset Downtoen Las Vegas",
    "price": 690,
    "gender": "man",
    "category": "Aksesuar",
    "image": "/images/man/aksesuar/sunset-downtoen-las-vegas.jpg",
    "sizes": {
      "STD": 5
    }
  },
  {
    "id": 140,
    "name": "Asimetrik Detaylı Spor Ayakkabı",
    "price": 1280,
    "gender": "man",
    "category": "Ayakkabı",
    "image": "/images/man/ayakkabi/asimetrik-detayli-spor-ayakkabi.jpg",
    "sizes": {
      "40": 4,
      "41": 0,
      "42": 2,
      "43": 4,
      "44": 0
    }
  },
  {
    "id": 141,
    "name": "Blucher Ayakkabı",
    "price": 1360,
    "gender": "man",
    "category": "Ayakkabı",
    "image": "/images/man/ayakkabi/blucher-ayakkabi.jpg",
    "sizes": {
      "40": 4,
      "41": 0,
      "42": 2,
      "43": 4,
      "44": 0
    }
  },
  {
    "id": 142,
    "name": "Hacimli Spor Ayakkabı",
    "price": 1440,
    "gender": "man",
    "category": "Ayakkabı",
    "image": "/images/man/ayakkabi/hacimli-spor-ayakkabi.jpg",
    "sizes": {
      "40": 4,
      "41": 0,
      "42": 2,
      "43": 4,
      "44": 0
    }
  },
  {
    "id": 143,
    "name": "Kalin Tabanli Kaykay Ayakkabisi",
    "price": 1520,
    "gender": "man",
    "category": "Ayakkabı",
    "image": "/images/man/ayakkabi/kalin-tabanli-kaykay-ayakkabisi.jpg",
    "sizes": {
      "40": 4,
      "41": 0,
      "42": 2,
      "43": 4,
      "44": 0
    }
  },
  {
    "id": 144,
    "name": "Kalin Tabanli Spor Ayakkabı",
    "price": 1200,
    "gender": "man",
    "category": "Ayakkabı",
    "image": "/images/man/ayakkabi/kalin-tabanli-spor-ayakkabi.jpg",
    "sizes": {
      "40": 4,
      "41": 0,
      "42": 2,
      "43": 4,
      "44": 0
    }
  },
  {
    "id": 145,
    "name": "Kaykay Ayakkabisi",
    "price": 1280,
    "gender": "man",
    "category": "Ayakkabı",
    "image": "/images/man/ayakkabi/kaykay-ayakkabisi.jpg",
    "sizes": {
      "40": 4,
      "41": 0,
      "42": 2,
      "43": 4,
      "44": 0
    }
  },
  {
    "id": 146,
    "name": "Boxy Fit Suni Deri Ceket",
    "price": 1430,
    "gender": "man",
    "category": "Ceket",
    "image": "/images/man/ceket/boxy-fit-suni-deri-ceket.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 147,
    "name": "Kapüşonlu Suni Deri Ceket",
    "price": 1510,
    "gender": "man",
    "category": "Ceket",
    "image": "/images/man/ceket/kapusonlu-suni-deri-ceket.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 148,
    "name": "Kapüşonlu Teknik Ceket",
    "price": 1590,
    "gender": "man",
    "category": "Ceket",
    "image": "/images/man/ceket/kapusonlu-teknik-ceket.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 149,
    "name": "Olgulu Detaylı Bot",
    "price": 1670,
    "gender": "man",
    "category": "Ceket",
    "image": "/images/man/ceket/olgulu-detayli-bot.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 150,
    "name": "Suet Gorunumlu Ceket",
    "price": 1350,
    "gender": "man",
    "category": "Ceket",
    "image": "/images/man/ceket/suet-gorunumlu-ceket.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 151,
    "name": "Suni Deri Boxy Fit Ceket",
    "price": 1430,
    "gender": "man",
    "category": "Ceket",
    "image": "/images/man/ceket/suni-deri-boxy-fit-ceket.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 152,
    "name": "Teknik Kapüşonlu Ceket",
    "price": 1510,
    "gender": "man",
    "category": "Ceket",
    "image": "/images/man/ceket/teknik-kapusonlu-ceket.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 153,
    "name": "Boxy Fit Kısa Kollu Gömlek",
    "price": 780,
    "gender": "man",
    "category": "Gömlek",
    "image": "/images/man/gomlek/boxy-fit-kisa-kollu-gomlek.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 154,
    "name": "Ince Siyah Ceket",
    "price": 860,
    "gender": "man",
    "category": "Gömlek",
    "image": "/images/man/gomlek/ince-siyah-ceket.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 155,
    "name": "Kısa Kollu Beyaz Desenli Gömlek",
    "price": 940,
    "gender": "man",
    "category": "Gömlek",
    "image": "/images/man/gomlek/kisa-kollu-beyaz-desenli-gomlek.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 156,
    "name": "Kısa Kollu Siyah Gömlek",
    "price": 1020,
    "gender": "man",
    "category": "Gömlek",
    "image": "/images/man/gomlek/kisa-kollu-siyah-gomlek.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 157,
    "name": "Oversize Kısa Kollu Gömlek",
    "price": 700,
    "gender": "man",
    "category": "Gömlek",
    "image": "/images/man/gomlek/oversize-kisa-kollu-gomlek.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 158,
    "name": "Oversize Nakışlı Gömlek",
    "price": 780,
    "gender": "man",
    "category": "Gömlek",
    "image": "/images/man/gomlek/oversize-nakisli-gomlek.jpg",
    "sizes": {
      "XS": 2,
      "S": 3,
      "M": 5,
      "L": 1
    }
  },
  {
    "id": 159,
    "name": "Baggy Fit Jean",
    "price": 1030,
    "gender": "man",
    "category": "Jean",
    "image": "/images/man/jean/baggy-fit-jean.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 160,
    "name": "Barrel Fit Jean",
    "price": 1110,
    "gender": "man",
    "category": "Jean",
    "image": "/images/man/jean/barrel-fit-jean.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 161,
    "name": "Barrel Fitjean",
    "price": 1190,
    "gender": "man",
    "category": "Jean",
    "image": "/images/man/jean/barrel-fitjean.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 162,
    "name": "Cigili Barrel Fit Jean",
    "price": 1270,
    "gender": "man",
    "category": "Jean",
    "image": "/images/man/jean/cigili-barrel-fit-jean.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 163,
    "name": "Straight Fit Jean",
    "price": 950,
    "gender": "man",
    "category": "Jean",
    "image": "/images/man/jean/straight-fit-jean.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 164,
    "name": "Super Baby Jean",
    "price": 1030,
    "gender": "man",
    "category": "Jean",
    "image": "/images/man/jean/super-baby-jean.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 165,
    "name": "Baggy Rustik Pantolon",
    "price": 1030,
    "gender": "man",
    "category": "Pantolon",
    "image": "/images/man/pantolon/baggy-rustik-pantolon.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 166,
    "name": "Interlok Balon Pantolon",
    "price": 1110,
    "gender": "man",
    "category": "Pantolon",
    "image": "/images/man/pantolon/interlok-balon-pantolon.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 167,
    "name": "Super Baggy Fit Pensli Pantolon",
    "price": 1190,
    "gender": "man",
    "category": "Pantolon",
    "image": "/images/man/pantolon/super-baggy-fit-pensli-pantolon.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 168,
    "name": "Tas Rengi Super Baggy Pantolon",
    "price": 1270,
    "gender": "man",
    "category": "Pantolon",
    "image": "/images/man/pantolon/tas-rengi-super-baggy-pantolon.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 169,
    "name": "Yamali Baggy Jean",
    "price": 950,
    "gender": "man",
    "category": "Pantolon",
    "image": "/images/man/pantolon/yamali-baggy-jean.jpg",
    "sizes": {
      "XS": 4,
      "S": 5,
      "M": 1,
      "L": 3
    }
  },
  {
    "id": 170,
    "name": "Basic Mayo",
    "price": 730,
    "gender": "man",
    "category": "Plaj Giyimi",
    "image": "/images/man/plaj-giyimi/basic-mayo.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 171,
    "name": "Boxy Fit Cizgili Mayo",
    "price": 810,
    "gender": "man",
    "category": "Plaj Giyimi",
    "image": "/images/man/plaj-giyimi/boxy-fit-cizgili-mayo.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 172,
    "name": "Desenli Mayo",
    "price": 890,
    "gender": "man",
    "category": "Plaj Giyimi",
    "image": "/images/man/plaj-giyimi/desenli-mayo.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 173,
    "name": "Kareli Mayo",
    "price": 970,
    "gender": "man",
    "category": "Plaj Giyimi",
    "image": "/images/man/plaj-giyimi/kareli-mayo.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 174,
    "name": "Kırmızı Boxy Fit Cizgili Mayo",
    "price": 650,
    "gender": "man",
    "category": "Plaj Giyimi",
    "image": "/images/man/plaj-giyimi/kirmizi-boxy-fit-cizgili-mayo.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 175,
    "name": "Baskili Genis Bermuda",
    "price": 680,
    "gender": "man",
    "category": "Şort",
    "image": "/images/man/sort/baskili-genis-bermuda.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 176,
    "name": "Denim Skater Bermuda",
    "price": 760,
    "gender": "man",
    "category": "Şort",
    "image": "/images/man/sort/denim-skater-bermuda.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 177,
    "name": "Islemeli Denim Bermuda",
    "price": 840,
    "gender": "man",
    "category": "Şort",
    "image": "/images/man/sort/islemeli-denim-bermuda.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 178,
    "name": "Kargo Parasut Bermuda",
    "price": 920,
    "gender": "man",
    "category": "Şort",
    "image": "/images/man/sort/kargo-parasut-bermuda.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 179,
    "name": "Sardonlu Bermuda",
    "price": 600,
    "gender": "man",
    "category": "Şort",
    "image": "/images/man/sort/sardonlu-bermuda.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 180,
    "name": "Skater Denim Bermuda",
    "price": 680,
    "gender": "man",
    "category": "Şort",
    "image": "/images/man/sort/skater-denim-bermuda.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 181,
    "name": "Baskili Kapüşonlu Sweatshirt",
    "price": 880,
    "gender": "man",
    "category": "Sweatshirt",
    "image": "/images/man/sweatshirt/baskili-kapusonlu-sweatshirt.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 182,
    "name": "Baskili Uzun Kollu Polo Sweatshirt",
    "price": 960,
    "gender": "man",
    "category": "Sweatshirt",
    "image": "/images/man/sweatshirt/baskili-uzun-kollu-polo-sweatshirt.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 183,
    "name": "Boxy Fit Yikamali Sweatshirt",
    "price": 1040,
    "gender": "man",
    "category": "Sweatshirt",
    "image": "/images/man/sweatshirt/boxy-fit-yikamali-sweatshirt.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 184,
    "name": "Boxy Nakışlı Sweatshirt",
    "price": 1120,
    "gender": "man",
    "category": "Sweatshirt",
    "image": "/images/man/sweatshirt/boxy-nakisli-sweatshirt.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 185,
    "name": "Fermuarlı Gri Kaucuk Kumas Sweatshirt",
    "price": 800,
    "gender": "man",
    "category": "Sweatshirt",
    "image": "/images/man/sweatshirt/fermuarli-gri-kaucuk-kumas-sweatshirt.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 186,
    "name": "Fermuarlı Tom Jerry Sweatshirt",
    "price": 880,
    "gender": "man",
    "category": "Sweatshirt",
    "image": "/images/man/sweatshirt/fermuarli-tom-jerry-sweatshirt.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 187,
    "name": "Mavi Sweatshirt",
    "price": 960,
    "gender": "man",
    "category": "Sweatshirt",
    "image": "/images/man/sweatshirt/mavi-sweatshirt.jpg",
    "sizes": {
      "XS": 0,
      "S": 1,
      "M": 3,
      "L": 5
    }
  },
  {
    "id": 188,
    "name": "Baskili Sonil Bisiklet Yaka Kazak",
    "price": 930,
    "gender": "man",
    "category": "Triko",
    "image": "/images/man/triko/baskili-sonil-bisiklet-yaka-kazak.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 189,
    "name": "Bisiklet Yaka Baskili Kazak",
    "price": 1010,
    "gender": "man",
    "category": "Triko",
    "image": "/images/man/triko/bisiklet-yaka-baskili-kazak.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 190,
    "name": "Boxy Fit Polo Yaka Kazak",
    "price": 1090,
    "gender": "man",
    "category": "Triko",
    "image": "/images/man/triko/boxy-fit-polo-yaka-kazak.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 191,
    "name": "Cizgili Baskili Suveter",
    "price": 1170,
    "gender": "man",
    "category": "Triko",
    "image": "/images/man/triko/cizgili-baskili-suveter.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 192,
    "name": "Grafik Baskili File Kazak",
    "price": 850,
    "gender": "man",
    "category": "Triko",
    "image": "/images/man/triko/grafik-baskili-file-kazak.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 193,
    "name": "Havlu Efektli Baskili Jarse",
    "price": 930,
    "gender": "man",
    "category": "Triko",
    "image": "/images/man/triko/havlu-efektli-baskili-jarse.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 194,
    "name": "Islemlei Fermuarlı Gri Ceket",
    "price": 1010,
    "gender": "man",
    "category": "Triko",
    "image": "/images/man/triko/islemlei-fermuarli-gri-ceket.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 195,
    "name": "Bej Kısa Kollu T-shirt",
    "price": 510,
    "gender": "man",
    "category": "T-shirt ve Polo Yaka T-shirt",
    "image": "/images/man/tshirt-polo/bej-kisa-kollu-tshirt.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 196,
    "name": "Fermuarlı File Polo T-shirt",
    "price": 590,
    "gender": "man",
    "category": "T-shirt ve Polo Yaka T-shirt",
    "image": "/images/man/tshirt-polo/fermuarli-file-polo-tshirt.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 197,
    "name": "Kısa Kollu Baskili T-shirt",
    "price": 670,
    "gender": "man",
    "category": "T-shirt ve Polo Yaka T-shirt",
    "image": "/images/man/tshirt-polo/kisa-kollu-baskili-tshirt.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 198,
    "name": "Kısa Kollu Düğmeli T-shirt",
    "price": 750,
    "gender": "man",
    "category": "T-shirt ve Polo Yaka T-shirt",
    "image": "/images/man/tshirt-polo/kisa-kollu-dugmeli-tshirt.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 199,
    "name": "Kısa Kollu Orumcek Adam T-shirt",
    "price": 430,
    "gender": "man",
    "category": "T-shirt ve Polo Yaka T-shirt",
    "image": "/images/man/tshirt-polo/kisa-kollu-orumcek-adam-tshirt.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  },
  {
    "id": 200,
    "name": "Kısa Kollu Siyah T-shirt",
    "price": 510,
    "gender": "man",
    "category": "T-shirt ve Polo Yaka T-shirt",
    "image": "/images/man/tshirt-polo/kisa-kollu-siyah-tshirt.jpg",
    "sizes": {
      "XS": 1,
      "S": 2,
      "M": 4,
      "L": 0
    }
  }
];

const users = [
  {
    id: 1,
    name: "Test Kullanıcı",
    email: "test@mail.com"
  }
];

const subscriptions = [];
const favorites = [];
const carts = [];
const notifications = [];

module.exports = {
  products,
  users,
  subscriptions,
  favorites,
  carts,
  notifications
};

