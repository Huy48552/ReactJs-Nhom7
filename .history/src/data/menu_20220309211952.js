const menu = [
    {
        id: 1,
        title: 'shoes',
        category: 'sport',
        price: 15.99,
        qty: 0,
        status: false,
        img: 'https://ld-wp73.template-help.com/wordpress/prod_23279/v3/wp-content/uploads/2019/04/Depositphotos_3440976_ordata:image/jpeg;base64,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iginal_resize-480x380.jpg',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi tempore quas unde, maxime quam cumque, consequatur iusto eum natus tempora corrupti voluptates architecto doloribus aperiam. Explicabo facilis voluptates consequatur!`,
    },
    {
        id: 2,
        title: 'fridge',
        category: 'Houseware',
        price: 13.99,
        status: true,
        img: 'https://ld-wp73.template-help.com/wordpress/prod_23279/v3/wp-content/uploads/2019/04/Depositphotos_2753869_original_resize-480x380.jpg',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi tempore quas unde, maxime quam cumque, consequatur iusto eum natus tempora corrupti voluptates architecto doloribus aperiam. Explicabo facilis voluptates consequatur!`,
    },
    {
        id: 3,
        title: 'telephone',
        category: 'electronice device',
        price: 6.99,
        status: true,
        img: 'https://ld-wp73.template-help.com/wordpress/prod_23279/v3/wp-content/uploads/2019/04/Depositphotos_67851995_original_resize_2-480x380.jpg',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi tempore quas unde, maxime quam cumque, consequatur iusto eum natus tempora corrupti voluptates architecto doloribus aperiam. Explicabo facilis voluptates consequatur!`,
    },
    {
        id: 4,
        title: 'exercise machine',
        category: 'sport',
        price: 20.99,
        status: true,
        img: 'https://ld-wp73.template-help.com/wordpress/prod_23279/v3/wp-content/uploads/2019/04/Depositphotos_2753895_original_resize-480x380.jpg',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi tempore quas unde, maxime quam cumque, consequatur iusto eum natus tempora corrupti voluptates architecto doloribus aperiam. Explicabo facilis voluptates consequatur!`,
    },
    {
        id: 5,
        title: 'tablet computer',
        category: 'electronice device',
        price: 22.99,
        status: true,
        img: 'https://ld-wp73.template-help.com/wordpress/prod_23279/v3/wp-content/uploads/2019/04/Depositphotos_2363342_original_resize-480x380.jpg',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi tempore quas unde, maxime quam cumque, consequatur iusto eum natus tempora corrupti voluptates architecto doloribus aperiam. Explicabo facilis voluptates consequatur!`,
    },
    {
        id: 6,
        title: 'fridge',
        category: 'Houseware',
        price: 18.99,
        status: true,
        img: 'https://ld-wp73.template-help.com/wordpress/prod_23279/v3/wp-content/uploads/2019/04/Depositphotos_3440976_original_resize-480x380.jpg',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi tempore quas unde, maxime quam cumque, consequatur iusto eum natus tempora corrupti voluptates architecto doloribus aperiam. Explicabo facilis voluptates consequatur!`,
    },
    {
        id: 7,
        title: 'fridge',
        category: 'Houseware',
        price: 8.99,
        status: true,
        img: 'https://ld-wp73.template-help.com/wordpress/prod_23279/v3/wp-content/uploads/2019/04/Depositphotos_5541094_original_resize-480x380-300x300.jpg',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi tempore quas unde, maxime quam cumque, consequatur iusto eum natus tempora corrupti voluptates architecto doloribus aperiam. Explicabo facilis voluptates consequatur!`,
    },
    {
        id: 8,
        title: 'shoes',
        category: 'sport',
        price: 12.99,
        status: false,
        img: 'https://ld-wp73.template-help.com/wordpress/prod_23279/v3/wp-content/uploads/2019/04/Depositphotos_58454549_original_resize-480x380-300x300.jpg',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi tempore quas unde, maxime quam cumque, consequatur iusto eum natus tempora corrupti voluptates architecto doloribus aperiam. Explicabo facilis voluptates consequatur!`,
    },
];
export default menu;
