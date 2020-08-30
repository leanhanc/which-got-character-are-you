export default {
  ES: {
    preHeader: 'QUIEN SOS EN',
    subHeader: 'HACE EL TEST Y ENTERATE',
    questions: [
      'Si alguien te dice que tu pareja te es infiel, ¿qué harías?',
      'Si pudises viajar a los tiempos de la Independencia de tu país, ¿qué harías?',
      '¿Qué opinión te merece la astrología?',
      '¿Que cósas te harían feliz? ¿Cuáles son tus metas?',
    ],
    answers: [
      [
        'Desestimaría la acusación porque confío en la persona que elegí.',
        'Pensaría que puede ser cierto y que probablemente tenga algo de culpa, porque quizás signfique que no pude darle lo que quiere o necesita.',
        'Se lo planteo a mi pareja cara a cara, le pediría que me mire a los ojos y me diga la verdad.',
        'Observaría cuidadosamente cada paso que dé. Buscaría pruebas y, de encontrarlas, vería cómo se la devuelvo. Conmigo no se jode.',
        'Puede que sea cierto o no, pero primero analizaría quién me lo dice: puede ser parte interesada en que mi pareja quede libre de compromisos.',
        'No lo sé, pero llegado el caso, quizás podría perdonar una infidelidad.',
      ],
      [
        'Me uniría al ejército de San Martín o Bolívar.',
        'Me cuesta imaginarlo. Los temas políticos no me interesan mucho.',
        'Me veo llevando a cabo una iniciativa política para liberar esclavos y llevarlos a la batalla contra los realistas. Tengo facilidad para el liderazgo.',
        'Me cubriría apoyando a los a los realistas por si ganan, pero secretamente le vendería armas a los independentistas.',
        'Mientras mi familia salga bien parada del conflicto, no creo que me importe demasiado qué lado gane.',
        'Dado que mi mejor arma no es la destreza física sino la palabra, alertaría los riesgos que conlleva declarar una independencia, sopesaría todas las estrategias y recomendaría la más conveniente para conseguirla.',
      ],
      [
        'Aunque parezca loco, los horóscopos la pegan bastante.',
        'Es una estupidez pseudo-científica.',
        'Me tiene sin cuidado la astrología y los horóscopos. No necesito preguntarle de qué signo son a las personas porque tengo facilidad para leerlas y sacarles rápido la ficha.',
        'Quizás le dé una ojeada cuando leo el diario pero no le doy mucha bolilla, pues forjo mi destino a través de mis propios actos.',
        'Sólo sirve para darle una ilusión a la gente débil, es un placebo.',
        'El horóscopo es una de mis partes favoritas del diario. Aún así, en última instancia, nuestro destino está en manos de la voluntad de Dios.',
      ],
      [
        'Formar una hermosa familia.',
        'Ver sufrir a los que me hicieron daño.',
        'Estar a la altura de que lo que mis seres queridos esperan de mí.',
        'Luchar por la igualdad, ayudar a los más vulnerables.',
        'No pido demasiado. Soy feliz mientras pueda entregarme a los placeres de la vida. El más importante es el buen sexo.',
        'Dinero, fama y poder.',
      ],
    ],
    character: {
      sansa: {
        bio: `Sos la joven Sansa Stark. Sos una persona cándida, soñadora y un poco inocente. Esas cualidades te llevan a ser descepcionada por un mundo que, muchas vececes, te parece demasiado sombrío y difícil de afrontar. <br>
        No te interesa mucho la política y pensás que los que se dedican a ella suelen ser deshonestos y un poco perversos. <br>
        Sí te interesa la estética y gustarle a las personas, por eso algunos te creen demasiado superficial. Pero no les hacés caso, vos sabés bien que no hay nada mejor que la gentileza y la belleza para contrarrestar la violencia y la oscuridad del mundo.`,
        dixit: 'El Rey Joffrey volverá. Los peores siempre sobreviven',
      },
      jon: {
        bio: `Sos Jon Snow. Los valores más importantes para vos son la honestidad y la honorabilidad. Practicás el estoicismo, tenés un alto sentido del deber y del sacrificio. <br>
        Algunos ven ingenuidad en tus actos, dicen que creer en las personas te juega malas pasadas pero, tengan o no razón, vos sabés bien que lo hacés porque esperás que el resto se rija por las mismas exigencias de conducta que te auto-imponés: siempre dar todo por los tuyos, sin quejarse ni pedir nada a cambio.`,
        dixit: `Juré lealtad a la Guardia de la Noche, si no cumplo mi palabra, ¿qué clase de "Rey de Winteferll" sería?`,
      },
      daenerys: {
        bio: `Sos Daenarys Targaryen, alias Daenarys de la Tormenta, alias Khalessi, Madre de Dragones. O simplemente Dany. <br>
        Valorás mucho la lealtad y sos exigente con tus amigos. Esperás que se jueguen por vos como vos lo hacés por ellos. <br>
        Sos una persona extremadamente empática, que puede ponerse en el lugar de los más vulnerables. <br>
        No te tiembla el pulso a la hora de impartir justicia. Quizás parezca que a veces se te va la mano y que te dejás llevar por las emociones, ese fuego que llevás adentro y se refleja en tus ojos. <br>
        Pero vos sabes que tu corazón esta en el lugar indicado. Querés dejar tu marca haciendo el mundo un lugar más libre y justo.`,
        dixit: `-La ciudad ya es tuya. A veces es conveniente responderle a la injusticia con piedad <br> 
          -Voy a responderle a la injusticia con justicia.`,
      },
      petyr: {
        bio: `Sos Petyr Baelish. Tu ambición no conoce límites, tu astucia tampoco. <br>
        Sabés que la vida no es más que un juego y, aunque te den golpes en el camino, nunca vas a dejar de levantarte y perseverar hasta cumplir tus objetivos. Te hacés de abajo y vas por todo.<br>
        Tenés la capacidad de leer a las personas, de anticiparte a sus movimientos. <br>
        Algunos ven en vos cinismo y egoísmo pero no escuchás y seguís porque tu convicción es que el hombre es el lobo del hombre. No confías en nadie y tampoco esperás que nadie confíe en vos.`,
        dixit: `Cuando no conozco las intenciones de una persona y trato de entenderlas, hago un pequeño jueguito: asumo lo peor`,
      },
      tyrion: {
        bio: `Sos Tyrion Lannister. Sos una persona empática, ilustrada, prudente y siempre con la palabra justa. <br>
          Te destacás dando buenos consejos a tus amigos. <br>
          A alguno puede sonarle a estereotipo de intelectual, pero no los sos: sabés que de nada sirve la vida si uno no se puede entregar a sus placeres. <br>
          Sabés darte gustos, sean o no bien vistos por la moral de tu época. <br>
          Además, que seas racional y un poco hedonista, no significa que no tengas un costado sensible.  Tu corazón siempre está del lado correcto.`,
        dixit:
          "Es fácil confundir como 'son' las cosas con cómo 'deben' ser, sobretodo si el cómo 'son' siempre te ha beneficiado",
      },
      cersei: {
        bio: `Sos Cersei Lannister. Sos puro fuego. <br>
        Tenés la capacidad de albergar en tu corazón la misma dosis de amor por tu familia que de odio hacia quienes se atrevieron a hacerte daño. Te asegurás que no haya agresión que no sea retribuida, a veces infligiendo en tus enemigos el doble del dolor que te provocaron. <br>
        Tu familia es lo único que importa en el mundo, el resto te tiene sin cuidado. <br>
        Algunos dicen que sos un ser rencoroso, hasta odioso, pero a vos no te importan los comentarios de esa gente.`,
        dixit: 'A su hijo: Todo aquel que no sea nosotros, es un enemigo',
      },
    },
    postgame: {
      youAre: 'Sos ',
      extraFeedbackLike: 'También podemos decirte que ',
      extraFeedbackUnLike: ' y que estás lejos de ',
      restart: 'Rehacer test',
      shareInTwitter: 'Compartir en Twitter',
    },
  },
  EN: {
    preHeader: 'WHICH CHARACTER ARE YOU',
    subHeader: 'TAKE THE TEST AND FIND OUT',
    questions: [
      'What would you do if someone tells you that your partner is cheating on you?',
      'What would to do if you could time travel back to the time of the Independence of your contry?',
      "What's your take on astrology?",
      'What makes you happy? What are your goals?',
    ],
    answers: [
      [
        "I would disregard the accusation because I would trust the person I've chosen.",
        "I might think that it could be true and it probably would partly be my fault because that could mean I wouldn't have given my partner what he or she wanted or needed.",
        'I would confront my partner, tell him or her to look me in the eyes and ask for the truth.',
        "I would watch carefully each step he or she takes. I would look for proof, and if I find out it is truth, I would see how to get revenge. You don't mess with me.",
        'It may be true or not, but the first thing I would do is contemplate who is telling me that. Maybe it is an interested party that wants my partner to be free of commitments.',
        "I don't know, but if it comes to that I might forgive an affair",
      ],
      [
        'I would join the military forces fighting for the independence.',
        "It is hard for me to say. I'm not interested in politics all that much.",
        'I see myself taking political initiative, trying to free slaves so they can join the rebel forces. Leadership comes easy to me.',
        'I would back de loyalists in case they win, but secretly sell weapons to the independentists.',
        "I wouldn't really care as long as my family emerges well positioned out of the conflict.",
        'Given that my strongest weapon is my tongue and not my physical strength I would give advice regarding the risks associated to declaring independence, weight all possible strategies and recommend the most convenient in order to achieve it.',
      ],
      [
        'As strange as it sounds, often times horoscopes are spot-on.',
        'It is pseudo-science garbage.',
        "I don't pay attention to astrolgy or horoscopes. I dont't need to ask people about their zodiac sign to read them as an open book.",
        "I might take a look at the horoscopes from time to time, but I don't read much into it, for I forge my destiny through my own actions.",
        "It only serves as an illusion for weak people. It's a placebo.",
        'I love horoscopes. Having said that, our destiny is in the hands of God.',
      ],
      [
        'To form a beautiful family.',
        'Seeing those who did me wrong suffer.',
        'To be up to the expectations of my loved ones.',
        'To help the oppressed and fight for social equality.',
        "I don't ask for too much. I am happy as long I can give in to the pleasures of life. The most important one of those is sex.",
        'Money, power and fame.',
      ],
    ],
    character: {
      sansa: {
        bio: `You are young Sansa Stark. Yo are a candid person, a dreamer and a bit innocent. <br>
        This characteristics sometimes result in being disappointed by a world that many times that seems too dark and hard for you to deal with. <br>
        You are not interestest in politics and think that those that get involved in it are usually dishonest and a bit wicked. <br>
        You enjoy aestethics and also enjoy being liked by other people, leading people to believe you are too shallow. But you ignore them because you know that there is nothing better than gentleness and beauty to 
        counter the violence and darkness in this world.`,
        dixit: 'King Joffrey will come back. The worst ones always live.',
      },
      jon: {
        bio: `
        You are Jon Snow. The personal values more important to you are honesty and honourability. You practice stoicisism and have a huge sense of duty and self-sacrifice. <br>
        Some see naiveness in your deeds, they say trusting people get you into trouble, but wheter or not that is accurate you know very well that you do it because you expect everybody to be held to the same standards you impose to yourself: always giving it all for the people you care about without complaints and without asking anything in return.`,
        dixit: `I've sworn allegiance to the Night's Watch. If I don't keep my word, what kind of king would I be?`,
      },
      daenerys: {
        bio: `You are Daenerys Targaryien, aka Daenarys Stormborn, aka Khalessi, aka Mother of Dragons, or just Dany. <br> 
        You care a lot about loyalty and you are demanding of your friends. You expect them to go the extra mile for you as you do for them. <br>
        You are an extremely empathic person. You are able to put yourself in the shoes those who are vulnerable. <br> 
        You don't hesitate to dispense justice. It may seem at times that you get carried away, that you let emotions (that fire you carry 
        inside) and it's reflected in your eyes get to you. But you know your heart is in the right place. You want to leave your mark and make the world more free and fair.`,
        dixit: `-The city is yours. Sometimes is better to answer injustice with mercy <br>
      -I will anwser injustice with justice`,
      },
      petyr: {
        bio: `You are Petyr Baelish. Your ambition is limitless and your cunningness is too. <br>
        You know life is nothing but a game and even if they knock you down sometimes along the way you always get up and 
        persevere until you achieve your goals. You come from behind to take it all. <br>
        You have the ability to read people and anticipate their every move.<br>
        Some see you as a selfish and shameless person, but you don't listen and keep doing your thing
        because you are sure that the man is a wolf to man. You trust no one and you don't expect anyone to trust you either.
        `,
        dixit:
          'Sometimes when I try to understand a person’s motives I play a little game. I assume the worst.',
      },
      tyrion: {
        bio: `You are Tyrion Lannister. You are emphatic, enlightened and wise. You always say the right thing. 
        You excel at giving your friends good advice. <br>
        Although this sounds like a stereotype intellectual, you are not. You know that life isn't any good if
        one can't surrender to its pleasures whether or not some of those are frowned upon by the morals of your time.
         You know how to indulge yourself. <br>
        Furthermore, the fact that you are rational and bit hedonist doesn't mean that you don't have a sensitive side. <br>
        Your heart is always in the right place.
        `,
        dixit:
          "It's easy to confuse ‘what is’ with ‘what ought to be,’ especially when ‘what is’ has worked out in your favor.",
      },
      cersei: {
        bio: `You are Cersei Lannister. You are pure fire. <br>
        You have the ability to give shelter in your hearth the same doses of love for your family
        as of hate to those who dared to hurt you.
        You make sure that there is no aggression that goes without retribution, sometimes inflicting twice as pain
        in your enemies compared to what they caused you. <br>
        Your family is the only thing that matters to you in this world, you couldn't care less about the rest. <br>
        Some say that you are spiteful, event hateful, but you don't listen to the words of mediocre individuals. Most of the time
        those are just people from the pleb. You just look at them over your shoulders and offer them your best face of disgust.<br>
        `,
        dixit: "To his son: Everyone who isn't us is an enemy",
      },
    },
    postgame: {
      youAre: 'You are ',
      extraFeedbackLike: 'We can also tell you that ',
      extraFeedbackUnLike: ' and that you are far from being like ',
      restart: 'Do test again',
      shareInTwitter: 'Share in Twitter',
    },
  },
};
