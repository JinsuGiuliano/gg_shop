const INITIAL_STATE = {
  sections: [
    {
      title: 'Albania',
      imageUrl: 'assets/images/img-01.jpg',
      id: 1,
      gallery:['assets/images/img-01.jpg','assets/images/img-01.jpg','assets/images/img-01.jpg','assets/images/img-01.jpg'],
      text: 'shop/hats'
    },
    {
      title: 'Libano',
      imageUrl: 'assets/images/img-02.jpg',
      id: 2,
      gallery:['assets/images/img-02.jpg','assets/images/img-02.jpg','assets/images/img-02.jpg','assets/images/img-02.jpg'],
      text: 'shop/jackets'
    },
    {
      title: 'Ukraina',
      imageUrl: 'assets/images/img-03.jpg',
      id: 3,
      gallery:['assets/images/img-03.jpg','assets/images/img-03.jpg','assets/images/img-03.jpg','assets/images/img-03.jpg'],
      text: 'shop/sneakers'
    },
    {
      title: 'Congo',
      imageUrl: 'assets/images/img-04.jpg',
      size: 'large',
      id: 4,
      gallery:['assets/images/img-04.jpg','assets/images/img-04.jpg','assets/images/img-04.jpg','assets/images/img-04.jpg'],
      text: 'shop/womens'
    },
    {
      title: 'Uzbekistan',
      imageUrl: 'assets/images/img-05.jpg',
      size: 'large',
      id: 5,
      gallery:['assets/images/img-05.jpg','assets/images/img-05.jpg','assets/images/img-05.jpg','assets/images/img-05.jpg'],
      text: 'shop/mens'
    }
  ]
};

export const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
