const menu = [
    {
        id: 1,
        title: 'shoes',
        category: 'sport',
        price: 15.99,
        qty: 0,
        status: false,
        img: 'data:image/jpeg;base64,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',
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
