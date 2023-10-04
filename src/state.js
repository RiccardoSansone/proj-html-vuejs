import { reactive } from "vue";

export const state = reactive({
    menu: [
        'HOME','ABOUT', 'SERVICE', 'PORTFOLIO', 'SHOP', 'BLOG', 'CONTACT'
    ],
    footer: {
        col_1: {
            image: 'footer-logo.png',
            paragraph: 'War Should never be entered upon until every agency peace has failed not to be good',
            icons: [
                "fa-brands fa-facebook-f",
                "fa-brands fa-google-plus-g",
                "fa-brands fa-twitter",
                "fa-brands fa-pinterest-p",
            ]
        },
        col_2: {
            title: 'Emergency Link.',
            items: [
                'Organic Food Shop',
                'Our Term & Condition.',
                'Gogrin Faq Section',
                'Our Team Member',
                'Our Latest News  Feed',
            ]
        },
        col_3: {
            title: 'Our Latest Blog',
            rows: [
                {
                    image: './src/assets/img/blo1-70x70.jpg',
                    paragraph: 'Where i live, i am surrounded by fresh, organic food,so i eat really well',
                    date: 'December 17,2022'
                },
                {
                    image: './src/assets/img/blo2-70x70.jpg',
                    paragraph: 'What we get at home is 100% organic food. We are also 90% vegetarian',
                    date: 'December 16,2022'
                }
            ]
        },
        col_4: {
            title: 'Our Gallery',
            images: [
                './src/assets/img/blo1-70x70.jpg',
                './src/assets/img/blo9-70x70.jpg',
                './src/assets/img/blo8-70x70.jpg',
                './src/assets/img/blo7-70x70.jpg',
                './src/assets/img/blo4-70x70.jpg',
                './src/assets/img/blo3-70x70.jpg'
            ]
        },
        green: {
            copy: `Copyright \u00a9 gogrin all rights reserved.`,
            info: [
                'Service',
                'Pricing Table',
                'Contact'
            ]
        }
    }
})