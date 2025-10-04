export const mesures = [
  {
    shortLabel: 'SAUV',
    longLabel: 'Sauvegarde de Justice',
    operationsBancaires: [
      {
        shortLabel: 'OUV',
        longLabel: 'Ouverture',
        details: [
          {
            shortLabel: 'CCBQEHAB',
            longLabel: 'Compte Courant dans la Banque Habituelle',
            resultat: {
              ati: true,
              juge: true,
              majeur: true
            }
          },
          {
            shortLabel: 'CCNOUVBQE',
            longLabel: 'Compte Courant dans une Nouvelle Banque',
            resultat: {
              ati: true,
              juge: true,
              majeur: true
            }
          },
          {
            shortLabel: 'LIVBQEHAB',
            longLabel: 'Livret dans la Banque Habituelle',
            resultat: {
              ati: true,
              juge: true,
              majeur: true
            }
          },
          {
            shortLabel: 'LIVNOUVBQE',
            longLabel: 'Livret dans une Nouvelle Banque',
            resultat: {
              ati: true,
              juge: true,
              majeur: true
            }
          }
        ]
      },
      {
        shortLabel: 'CLOT',
        longLabel: 'Clôture',
        details: [
          {
            shortLabel: 'CCAVANTMES',
            longLabel: 'Compte Courant ouvert avant la mesure',
            resultat: {
              ati: true,
              juge: true,
              majeur: true
            }
          },
          {
            shortLabel: 'CCAPRESMES',
            longLabel: 'Compte Courant ouvert après la mesure',
            resultat: {
              ati: true,
              juge: true,
              majeur: true
            }
          },
          {
            shortLabel: 'LIVAVANTMES',
            longLabel: 'Livret ouvert avant la mesure',
            resultat: {
              ati: true,
              juge: true,
              majeur: true
            }
          },
          {
            shortLabel: 'LIVAPRESMES',
            longLabel: 'Livret ouvert après la mesure',
            resultat: {
              ati: true,
              juge: true,
              majeur: true
            }
          }
        ]
      },
      {
        shortLabel: 'PLCT',
        longLabel: 'Placement',
        details: [
          {
            shortLabel: 'CC',
            longLabel: 'Compte Courant',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          },
          {
            shortLabel: 'LIV',
            longLabel: 'Livret',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          }
        ]
      },
      {
        shortLabel: 'DEPLCT',
        longLabel: 'Déplacement',
        details: [
          {
            shortLabel: 'CC',
            longLabel: 'Compte Courant',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          },
          {
            shortLabel: 'CPE',
            longLabel: 'Compte Espèces',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          },
          {
            shortLabel: 'LIV',
            longLabel: 'Livret',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          }
        ]
      },
      {
        shortLabel: 'DESOL',
        longLabel: 'Désolidarisation',
        details: [
          {
            shortLabel: 'CJ',
            longLabel: 'Compte Joint',
            resultat: {
              ati: true,
              juge: true,
              majeur: true
            }
          }
        ]
      },
      {
        shortLabel: 'OP_ASSVIE',
        longLabel: 'Opérations sur les Assurances Vie',
        details: [
          {
            shortLabel: 'SOUSCRIPTION',
            longLabel: 'Souscrire une Assurance Vie',
            resultat: {
              ati: false,
              juge: false,
              majeur: true
            }
          },
          {
            shortLabel: 'PLCTASSVIE',
            longLabel: 'Placer sur une Assurance Vie',
            resultat: {
              ati: true,
              juge: true,
              majeur: true
            }
          },
          {
            shortLabel: 'RCHTPARTIEL',
            longLabel: 'Racheter partiellement une Assurance Vie',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          },
          {
            shortLabel: 'RCHTTOTAL',
            longLabel: 'Racheter totalement une Assurance Vie',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          },
          {
            shortLabel: 'BENEFICIAIRE',
            longLabel: 'Modifier la clause bénéficiaire d\'une Assurance Vie',
            resultat: {
              ati: true,
              juge: true,
              majeur: true
            }
          }
        ]
      },
      {
        shortLabel: 'CB',
        longLabel: 'Carte Bancaire',
        details: [
          {
            shortLabel: 'CPE',
            longLabel: 'Compte Espèces',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          }
        ]
      }
    ]
  },
  {
    shortLabel: 'CR',
    longLabel: 'Curatelle Renforcée',
    operationsBancaires: [
      {
        shortLabel: 'OUV',
        longLabel: 'Ouverture',
        details: [
          {
            shortLabel: 'CCBQEHAB',
            longLabel: 'Compte Courant dans la Banque Habituelle',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          },
          {
            shortLabel: 'CCNOUVBQE',
            longLabel: 'Compte Courant dans une Nouvelle Banque',
            resultat: {
              ati: true,
              juge: true,
              majeur: true
            }
          },
          {
            shortLabel: 'LIVBQEHAB',
            longLabel: 'Livret dans la Banque Habituelle',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          },
          {
            shortLabel: 'LIVNOUVBQE',
            longLabel: 'Livret dans une Nouvelle Banque',
            resultat: {
              ati: true,
              juge: true,
              majeur: true
            }
          }
        ]
      },
      {
        shortLabel: 'CLOT',
        longLabel: 'Clôture',
        details: [
          {
            shortLabel: 'CCAVANTMES',
            longLabel: 'Compte Courant ouvert avant la mesure',
            resultat: {
              ati: true,
              juge: true,
              majeur: true
            }
          },
          {
            shortLabel: 'CCAPRESMES',
            longLabel: 'Compte Courant ouvert après la mesure',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          },
          {
            shortLabel: 'LIVAVANTMES',
            longLabel: 'Livret ouvert avant la mesure',
            resultat: {
              ati: true,
              juge: true,
              majeur: true
            }
          },
          {
            shortLabel: 'LIVAPRESMES',
            longLabel: 'Livret ouvert après la mesure',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          }
        ]
      },
      {
        shortLabel: 'PLCT',
        longLabel: 'Placement',
        details: [
          {
            shortLabel: 'CC',
            longLabel: 'Compte Courant',
            resultat: {
              ati: false,
              juge: false,
              majeur: true
            }
          },
          {
            shortLabel: 'LIV',
            longLabel: 'Livret',
            resultat: {
              ati: false,
              juge: false,
              majeur: true
            }
          }
        ]
      },
      {
        shortLabel: 'DEPLCT',
        longLabel: 'Déplacement',
        details: [
          {
            shortLabel: 'CC',
            longLabel: 'Compte Courant',
            resultat: {
              ati: true,
              juge: false,
              majeur: false
            }
          },
          {
            shortLabel: 'CPE',
            longLabel: 'Compte Espèces',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          },
          {
            shortLabel: 'LIV',
            longLabel: 'Livret',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          }
        ]
      },
      {
        shortLabel: 'DESOL',
        longLabel: 'Désolidarisation',
        details: [
          {
            shortLabel: 'CJ',
            longLabel: 'Compte Joint',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          }
        ]
      },
      {
        shortLabel: 'OP_ASSVIE',
        longLabel: 'Opérations sur les Assurances Vie',
        details: [
          {
            shortLabel: 'SOUSCRIPTION',
            longLabel: 'Souscrire une Assurance Vie',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          },
          {
            shortLabel: 'PLCTASSVIE',
            longLabel: 'Placer sur une Assurance Vie',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          },
          {
            shortLabel: 'RCHTPARTIEL',
            longLabel: 'Racheter partiellement une Assurance Vie',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          },
          {
            shortLabel: 'RCHTTOTAL',
            longLabel: 'Racheter totalement une Assurance Vie',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          },
          {
            shortLabel: 'BENEFICIAIRE',
            longLabel: 'Modifier la clause bénéficiaire d\'une Assurance Vie',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          }
        ]
      },
      {
        shortLabel: 'CB',
        longLabel: 'Carte Bancaire',
        details: [
          {
            shortLabel: 'CPE',
            longLabel: 'Compte Espèces',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          }
        ]
      }
    ]
  },
  {
    shortLabel: 'CS',
    longLabel: 'Curatelle Simple',
    operationsBancaires: [
      {
        shortLabel: 'OUV',
        longLabel: 'Ouverture',
        details: [
          {
            shortLabel: 'CCBQEHAB',
            longLabel: 'Compte Courant dans la Banque Habituelle',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          },
          {
            shortLabel: 'CCNOUVBQE',
            longLabel: 'Compte Courant dans une Nouvelle Banque',
            resultat: {
              ati: true,
              juge: true,
              majeur: true
            }
          },
          {
            shortLabel: 'LIVBQEHAB',
            longLabel: 'Livret dans la Banque Habituelle',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          },
          {
            shortLabel: 'LIVNOUVBQE',
            longLabel: 'Livret dans une Nouvelle Banque',
            resultat: {
              ati: true,
              juge: true,
              majeur: true
            }
          }
        ]
      },
      {
        shortLabel: 'CLOT',
        longLabel: 'Clôture',
        details: [
          {
            shortLabel: 'CCAVANTMES',
            longLabel: 'Compte Courant ouvert avant la mesure',
            resultat: {
              ati: true,
              juge: true,
              majeur: true
            }
          },
          {
            shortLabel: 'CCAPRESMES',
            longLabel: 'Compte Courant ouvert après la mesure',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          },
          {
            shortLabel: 'LIVAVANTMES',
            longLabel: 'Livret ouvert avant la mesure',
            resultat: {
              ati: true,
              juge: true,
              majeur: true
            }
          },
          {
            shortLabel: 'LIVAPRESMES',
            longLabel: 'Livret ouvert après la mesure',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          }
        ]
      },
      {
        shortLabel: 'PLCT',
        longLabel: 'Placement',
        details: [
          {
            shortLabel: 'CC',
            longLabel: 'Compte Courant',
            resultat: {
              ati: false,
              juge: false,
              majeur: true
            }
          },
          {
            shortLabel: 'LIV',
            longLabel: 'Livret',
            resultat: {
              ati: false,
              juge: false,
              majeur: true
            }
          }
        ]
      },
      {
        shortLabel: 'DEPLCT',
        longLabel: 'Déplacement',
        details: [
          {
            shortLabel: 'CC',
            longLabel: 'Compte Courant',
            resultat: {
              ati: false,
              juge: false,
              majeur: true
            }
          },
          {
            shortLabel: 'LIV',
            longLabel: 'Livret',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          }
        ]
      },
      {
        shortLabel: 'DESOL',
        longLabel: 'Désolidarisation',
        details: [
          {
            shortLabel: 'CJ',
            longLabel: 'Compte Joint',
            resultat: {
              ati: false,
              juge: false,
              majeur: true
            }
          }
        ]
      },
      {
        shortLabel: 'OP_ASSVIE',
        longLabel: 'Opérations sur les Assurances Vie',
        details: [
          {
            shortLabel: 'SOUSCRIPTION',
            longLabel: 'Souscrire une Assurance Vie',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          },
          {
            shortLabel: 'PLCTASSVIE',
            longLabel: 'Placer sur une Assurance Vie',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          },
          {
            shortLabel: 'RCHTPARTIEL',
            longLabel: 'Racheter partiellement une Assurance Vie',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          },
          {
            shortLabel: 'RCHTTOTAL',
            longLabel: 'Racheter totalement une Assurance Vie',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          },
          {
            shortLabel: 'BENEFICIAIRE',
            longLabel: 'Modifier la clause bénéficiaire d\'une Assurance Vie',
            resultat: {
              ati: true,
              juge: false,
              majeur: true
            }
          }
        ]
      }
    ]
  },
  {
    shortLabel: 'TUT',
    longLabel: 'Tutelle',
    operationsBancaires: [
      {
        shortLabel: 'OUV',
        longLabel: 'Ouverture',
        details: [
          {
            shortLabel: 'CCBQEHAB',
            longLabel: 'Compte Courant dans la Banque Habituelle',
            resultat: {
              ati: true,
              juge: false,
              majeur: false
            }
          },
          {
            shortLabel: 'CCNOUVBQE',
            longLabel: 'Compte Courant dans une Nouvelle Banque',
            resultat: {
              ati: true,
              juge: true,
              majeur: false
            }
          },
          {
            shortLabel: 'LIVBQEHAB',
            longLabel: 'Livret dans la Banque Habituelle',
            resultat: {
              ati: true,
              juge: false,
              majeur: false
            }
          },
          {
            shortLabel: 'LIVNOUVBQE',
            longLabel: 'Livret dans une Nouvelle Banque',
            resultat: {
              ati: true,
              juge: true,
              majeur: false
            }
          }
        ]
      },
      {
        shortLabel: 'CLOT',
        longLabel: 'Clôture',
        details: [
          {
            shortLabel: 'CCAVANTMES',
            longLabel: 'Compte Courant ouvert avant la mesure',
            resultat: {
              ati: true,
              juge: true,
              majeur: false
            }
          },
          {
            shortLabel: 'CCAPRESMES',
            longLabel: 'Compte Courant ouvert après la mesure',
            resultat: {
              ati: true,
              juge: false,
              majeur: false
            }
          },
          {
            shortLabel: 'LIVAVANTMES',
            longLabel: 'Livret ouvert avant la mesure',
            resultat: {
              ati: true,
              juge: true,
              majeur: false
            }
          },
          {
            shortLabel: 'LIVAPRESMESPLCTCC',
            longLabel: 'Livret ouvert après la mesure avec placement sur un Compte Courant',
            resultat: {
              ati: true,
              juge: true,
              majeur: false
            }
          },
          {
            shortLabel: 'LIVAPRESMESPLCTLIV',
            longLabel: 'Livret ouvert après la mesure avec placement sur un Livret',
            resultat: {
              ati: true,
              juge: false,
              majeur: false
            }
          }
        ]
      },
      {
        shortLabel: 'PLCT',
        longLabel: 'Placement',
        details: [
          {
            shortLabel: 'CC',
            longLabel: 'Compte Courant',
            resultat: {
              ati: true,
              juge: false,
              majeur: false
            }
          },
          {
            shortLabel: 'LIV',
            longLabel: 'Livret',
            resultat: {
              ati: true,
              juge: false,
              majeur: false
            }
          }
        ]
      },
      {
        shortLabel: 'DEPLCT',
        longLabel: 'Déplacement',
        details: [
          {
            shortLabel: 'CC',
            longLabel: 'Compte Courant',
            resultat: {
              ati: true,
              juge: false,
              majeur: false
            }
          },
          {
            shortLabel: 'CPE',
            longLabel: 'Compte Espèces',
            resultat: {
              ati: true,
              juge: false,
              majeur: false
            }
          },
          {
            shortLabel: 'LIV',
            longLabel: 'Livret',
            resultat: {
              ati: true,
              juge: true,
              majeur: false
            }
          }
        ]
      },
      {
        shortLabel: 'DESOL',
        longLabel: 'Désolidarisation',
        details: [
          {
            shortLabel: 'CJ',
            longLabel: 'Compte Joint',
            resultat: {
              ati: true,
              juge: true,
              majeur: false
            }
          }
        ]
      },
      {
        shortLabel: 'OP_ASSVIE',
        longLabel: 'Opérations sur les Assurances Vie',
        details: [
          {
            shortLabel: 'SOUSCRIPTION',
            longLabel: 'Souscrire une Assurance Vie',
            resultat: {
              ati: true,
              juge: true,
              majeur: false
            }
          },
          {
            shortLabel: 'PLCTASSVIE',
            longLabel: 'Placer sur une Assurance Vie',
            resultat: {
              ati: true,
              juge: true,
              majeur: false
            }
          },
          {
            shortLabel: 'RCHTPARTIEL',
            longLabel: 'Racheter partiellement une Assurance Vie',
            resultat: {
              ati: true,
              juge: true,
              majeur: false
            }
          },
          {
            shortLabel: 'RCHTTOTAL',
            longLabel: 'Racheter totalement une Assurance Vie',
            resultat: {
              ati: true,
              juge: true,
              majeur: false
            }
          },
          {
            shortLabel: 'BENEFICIAIRE',
            longLabel: 'Modifier la clause bénéficiaire d\'une Assurance Vie',
            resultat: {
              ati: true,
              juge: true,
              majeur: false
            }
          }
        ]
      },
      {
        shortLabel: 'CB',
        longLabel: 'Carte Bancaire',
        details: [
          {
            shortLabel: 'CPE',
            longLabel: 'Compte Espèces',
            resultat: {
              ati: true,
              juge: false,
              majeur: false
            }
          }
        ]
      }
    ]
  }
]