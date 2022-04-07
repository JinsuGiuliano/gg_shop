const INITIAL_STATE = {
  values: [
    {
      title: 'Missie',
      imageUrl: 'assets/images/img-01.jpg',
      id: 1,
      text: 'Stichting Wereldvriendschap in Nood biedt hulp aan mensen die de gevolgen ervaren van diverse acute noodsituaties, zoals bijv. natuurrampen, oorlogssituaties e.d., en ondersteunt anderzijds de bevordering van projecten op langere termijn ten behoeve van het welzijn van mensen in minder gunstige leefomstandigheden.'
    },
    {
      title: 'Visie',
      imageUrl: 'assets/images/img-02.jpg',
      id: 2,
      text: 'Vanuit het idee dat wij als wereldgemeenschap één familie zijn, die ondanks verschillende culturen en gebruiken dezelfde universele waarden delen, hetzelfde menszijn beleven met de integriteit van het hart en de vreugde iets voor elkaar te willen betekenen, willen wij het belang onderstrepen en de visie naleven van het ons inzetten voor elkaar en mensen in faciliteren in samenwerking met de kunde van de lokale gemeenschap, opdat de kennis en creativiteit gebundeld kunnen, voor innovatieve en duurzame oplossingen voor toekomstige generaties.'
    },
    {
      title: 'Kernwaarden',
      imageUrl: 'assets/images/img-03.jpg',
      id: 3,
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ]
};

export const valuesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};
