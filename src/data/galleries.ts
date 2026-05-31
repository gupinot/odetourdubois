export interface Photo {
  src: string;
  title: string;
}

export interface Gallery {
  id: string;
  label: string;
  photos: Photo[];
}

export const galleries: Gallery[] = [
  {
    id: "sculptures-2021-2025",
    label: "Sculptures 2021-2025",
    photos: [
      { src: "/images/sculptures-2021-2025/20220401_Roland_Pinot-154.jpg", title: "photo Gérald Kapski" },
      { src: "/images/sculptures-2021-2025/bateau_ivre.jpg", title: "bateau ivre" },
      { src: "/images/sculptures-2021-2025/IMG_2594.jpg", title: "" },
      { src: "/images/sculptures-2021-2025/IMG_2598.jpg", title: "" },
    ],
  },
  {
    id: "sculptures-2019-2020",
    label: "Sculptures 2019-2020",
    photos: [
      { src: "/images/sculptures-2019-2020/original.jpg", title: "éphémère danse" },
      { src: "/images/sculptures-2019-2020/ephemere_danse.jpg", title: "éphémère danse" },
      { src: "/images/sculptures-2019-2020/voyageur_galactique.jpg", title: "oiseau galactique fugace" },
      { src: "/images/sculptures-2019-2020/P1090727.jpg", title: "éléphanteau" },
    ],
  },
  {
    id: "sculptures-2015-2018",
    label: "Sculptures 2015-2018",
    photos: [
      { src: "/images/sculptures-2015-2018/P1090668.jpg", title: "déambulation spatiale" },
      { src: "/images/sculptures-2015-2018/P1090669.jpg", title: "déambulation spatiale" },
      { src: "/images/sculptures-2015-2018/P1090671.jpg", title: "déambulation spatiale" },
      { src: "/images/sculptures-2015-2018/GRACIEUSE_CONTORSION.jpg", title: "contorsion figée" },
      { src: "/images/sculptures-2015-2018/P1080728.jpg", title: "contorsion figée" },
      { src: "/images/sculptures-2015-2018/P1080682.jpg", title: "contorsion figée" },
      { src: "/images/sculptures-2015-2018/P10906.jpg", title: "galet poli" },
      { src: "/images/sculptures-2015-2018/P109067.jpg", title: "galet poli" },
      { src: "/images/sculptures-2015-2018/12.jpg", title: "galet poli" },
      { src: "/images/sculptures-2015-2018/50.jpg", title: "élégance ventée" },
      { src: "/images/sculptures-2015-2018/P1070871.jpg", title: "élégance ventée" },
      { src: "/images/sculptures-2015-2018/P1070869.jpg", title: "élégance ventée" },
      { src: "/images/sculptures-2015-2018/lenvolee_sauvage.jpg", title: "envolée sauvage" },
      { src: "/images/sculptures-2015-2018/P1080460.jpg", title: "envolée sauvage" },
      { src: "/images/sculptures-2015-2018/P1080458.jpg", title: "envolée sauvage" },
      { src: "/images/sculptures-2015-2018/P1090685.jpg", title: "mauve ondulation" },
      { src: "/images/sculptures-2015-2018/P1090689.jpg", title: "mauve ondulation" },
      { src: "/images/sculptures-2015-2018/P1090686.jpg", title: "mauve ondulation" },
      { src: "/images/sculptures-2015-2018/P1090.jpg", title: "toutes voiles dehors" },
      { src: "/images/sculptures-2015-2018/P10907.jpg", title: "toutes voiles dehors" },
      { src: "/images/sculptures-2015-2018/P0717.jpg", title: "toutes voiles dehors" },
      { src: "/images/sculptures-2015-2018/comete_surealiste.jpg", title: "cométe suréaliste" },
      { src: "/images/sculptures-2015-2018/P1090758_2.jpg", title: "tour de babylone" },
      { src: "/images/sculptures-2015-2018/P1070405.jpg", title: "sourire multicolore" },
      { src: "/images/sculptures-2015-2018/GALAXIE_LACTEE.jpg", title: "spirale ensorcelée" },
      { src: "/images/sculptures-2015-2018/elipse_copie_copie.jpg", title: "ellipse lascive" },
      { src: "/images/sculptures-2015-2018/droppedImage.jpg", title: "" },
    ],
  },
  {
    id: "sculptures-1990-2014",
    label: "Sculptures 1990-2014",
    photos: [
      { src: "/images/sculptures-1990-2014/CORS_A_CORPS.jpg", title: "corps à corps" },
      { src: "/images/sculptures-1990-2014/P1060251.jpg", title: "stature massive" },
      { src: "/images/sculptures-1990-2014/P1060240.jpg", title: "flamenca" },
      { src: "/images/sculptures-1990-2014/P1060245.jpg", title: "déhanchement" },
      { src: "/images/sculptures-1990-2014/LA_MAIN_5.jpg", title: "la main" },
      { src: "/images/sculptures-1990-2014/travail-sculpt.jpg", title: "aile du désir" },
      { src: "/images/sculptures-1990-2014/P1060121.jpg", title: "jumelles dansantes" },
      { src: "/images/sculptures-1990-2014/MASQUE_GREC_5.jpg", title: "masque grecque antique" },
    ],
  },
];
