import xps from '../assets/laptops-img/xps-13.jpg'
import dell_g5_gaming from '../assets/laptops-img/dell-g5-gaming.webp'
import lenevo_p50 from '../assets/laptops-img/lenevo-p50.webp'
import alienware from '../assets/laptops-img/alienware_x17.jpeg'
import asus_zenbook from '../assets/laptops-img/asus-zenbook'
import lenevo_yoga from '../assets/laptops-img/lenevo-yoga.jpg'
import elite_book_x_360 from '../assets/laptops-img/hp_elitebook_x360.jpg'
import hp_dv6 from '../assets/laptops-img/hp_dv6.jpeg'
import acer_gaming from '../assets/laptops-img/acer_gaming.jpeg'

export const laptopList = [
    {
        name: 'DELL XPS 13',
        typeStockage: 'SSD',
        id: '1ed',
        isBestSale: true,
        isSpecialOffer: true,
        processor: 'Intel® Core™ i5-1135G7',
        frequency: '2.40 ~ 4.20',
        rate: 5,
        cover: xps,
        price: 550000
    },
    {
        name: 'Dell G5 AMD 15 Gaming',
        typeStockage: 'SSD',
        id: '2ab',
        isBestSale: true,
        processor: 'AMD Ryzen™ 7 4800H',
        frequency: '2.9 ~ 4.2',
        rate: 4,
        cover: dell_g5_gaming,
        price: 720000
    },
    {
        name: 'ThinkPad P50',
        typeStockage: 'SSD',
        id: '3sd',
        isBestSale: false,
        processor: 'Intel® Core™ i7 i7-6700HQ',
        frequency: '2.6 ~ 3.50',
        rate: 4,
        cover: lenevo_p50,
        price: 460000
    },
    {
        name: 'Alienware X17',
        typeStockage: 'SSD',
        id: '4kk',
        isBestSale: true,
        isSpecialOffer: true,
        processor: 'Intel® Core™ i7-11800H',
        frequency: '1.90 ~ 4.50',
        rate: 4,
        cover: alienware,
        price: 2500000
    },
    {
        name: 'Zenbook Pro Duo (UX581)',
        typeStockage: 'SSD',
        id: '5pl',
        isBestSale: true,
        processor: 'Intel® Core™ i9-9980HK',
        frequency: '2.4 ~ 5.0',
        rate: 4,
        cover: asus_zenbook,
        price: 1400000
    },
    {
        name: 'Lenevo Yoga 9i',
        typeStockage: 'SSD',
        id: '6uo',
        isBestSale: true,
        processor: 'Intel® Core™ i7-1185G7',
        frequency: '3.00 ~ 4.8',
        rate: 4,
        cover: lenevo_yoga,
        price: 900000
    },
    {
        name: 'HP EliteBook x360 830 G7',
        typeStockage: 'HDD',
        id: '7ie',
        isBestSale: false,
        processor: 'Intel® Core™ i7-1071',
        frequency: '1.10 ~ 4.70',
        rate: 3,
        cover: elite_book_x_360,
        price: 1110000
    },
    {
        name: 'HP Pavilion dv6-6c14nr',
        typeStockage: 'HDD',
        id: '8fp',
        isBestSale: false,
        processor: 'Intel® Core i5-2450M',
        frequency: '2,50 ~ 3.10',
        rate: 3,
        cover: hp_dv6,
        price: 300000
    },
    {
        name: 'ACER Nitro AN517-52-505S',
        typeStockage: 'SSD',
        id: '9vn',
        isBestSale: true,
        isSpecialOffer: true,
        processor: 'Intel® Core i5 10300H',
        frequency: '2.50 ~ 4.50',
        rate: 4,
        cover: acer_gaming,
        price: 720000
    }
]
