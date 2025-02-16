// const array = [{ chave: 2 }, { chave2: 51 }, 3, "valor", "valor2"];

// export const artistArray = [
//   {
//     id: 1,
//     image: "https://cdn-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
//     name: "Eminem",
//     banner: "https://i.pinimg.com/originals/fa/ba/11/faba114ef2cf5182dbacfff9d91c2d0e.gif",
//   },
//   {
//     id: 2,
//     image: "https://hips.hearstapps.com/hmg-prod/images/kendrick-lamar-at-the-67th-grammy-awards-held-at-the-crypto-news-photo-1738959019.pjpeg?crop=1.00xw:0.667xh;0,0.0715xh&resize=640:*",
//     name: "Kendrick Lamar",
//     banner:
//       "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjNoam94ZW13ZGRlczJqdzdxNnMycm16d3d3a3dlY3IxNnNsZG96eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7jBNVboeHv6VjU2KN7/giphy.gif",
//   },
//   {
//     id: 3,
//     image: "https://b.fssta.com/uploads/application/soccer/headshots/713.vresize.350.350.medium.34.png",
//     name: "Neymar",
//     banner: "https://media1.tenor.com/m/-S1hLDFv1G0AAAAC/neymar-neymar-jr.gif",
//   },
//   {
//     id: 4,
//     image: "https://i.scdn.co/image/ab67616100005174b4c07f06044ca6f1a8548192",
//     name: "NATTAN",
//     banner: "https://i.scdn.co/image/ab67618600001016fc9f6be028f419e9e47c646f",
//   },
//   {
//     id: 5,
//     image: "https://i.scdn.co/image/ab676161000051747ffc3038ef5e67354ecdede1",
//     name: "Grupo Menos É Mais",
//     banner: "https://i.scdn.co/image/ab67618600001016e06c8846b7f03fdb987739fb",
//   },
//   {
//     id: 6,
//     image: "https://i.scdn.co/image/ab676161000051747098ffe23a919f7742979c6e",
//     name: "Zé Neto & Cristiano",
//     banner: "https://i.scdn.co/image/ab6761860000101695c836c767102509e662cb63",
//   },
//   {
//     id: 7,
//     image: "https://i.scdn.co/image/ab67616100005174b97627e4ea832ed67617627a",
//     name: "Matheus & Kauan",
//     banner: "https://i.scdn.co/image/ab676186000010162c57b647c5d5994151c5ef4d",
//   },
//   {
//     id: 8,
//     image: "https://i.scdn.co/image/ab67616100005174668a5535093f4cc53b1fef45",
//     name: "Oruam",
//     banner:
//       "https://www.hashtagtreinamentos.com/wp-content/uploads/2025/02/oruam.png",
//   },
//   {
//     id: 9,
//     image: "https://i.scdn.co/image/ab67616100005174acfec0b96ba96562ad2e7fa3",
//     name: "Murilo Huff",
//     banner: "https://i.scdn.co/image/ab67618600001016909a162796dbc3629a1fadeb",
//   },
//   {
//     id: 10,
//     image: "https://i.scdn.co/image/ab6761610000517483f19000f18fbec5cf328f59",
//     name: "Hugo & Guilherme",
//     banner: "https://i.scdn.co/image/ab67618600001016e530cc641fb0c98881d25c7b",
//   },
//   {
//     id: 11,
//     image: "https://i.scdn.co/image/ab67616100005174ec1fef19ee9676f9ce662f39",
//     name: "MC LUUKY",
//     banner: "https://i.scdn.co/image/ab676186000010161db163263f4389becf8f10b2",
//   },
//   {
//     id: 12,
//     image: "https://i.scdn.co/image/ab67616100005174281fcf09827f1223ca4d729c",
//     name: "Léo Foguete",
//     banner: "https://i.scdn.co/image/ab6761860000101626675729154154577b58cf48",
//   },
//   {
//     id: 13,
//     image: "https://i.scdn.co/image/ab67616100005174dbfd9763ee6948c110999581",
//     name: "Gusttavo Lima",
//     banner: "https://i.scdn.co/image/ab676186000010168c28ce6bfae4955fc9e07a4f",
//   },
//   {
//     id: 14,
//     image: "https://i.scdn.co/image/ab676161000051744ba71e7bb7139281802eb42e",
//     name: "Nilo",
//     banner: "https://i.scdn.co/image/ab67618600001016fbb9f8fe09bac68f3b7ad0d0",
//   },
//   {
//     id: 15,
//     image: "https://i.scdn.co/image/ab67616100005174121da419911d33812cfd481e",
//     name: "Luan Pereira",
//     banner: "https://i.scdn.co/image/ab67618600001016293cffc5c4ade8d601fc9042",
//   },
//   {
//     id: 16,
//     image: "https://i.scdn.co/image/ab67616100005174946d345050cf85e1b67e00d3",
//     name: "Guilherme & Benuto",
//     banner: "https://i.scdn.co/image/ab676186000010167e05defd0907af8848945096",
//   },
//   {
//     id: 17,
//     image: "https://i.scdn.co/image/ab67616100005174ffaebdbc972967729f688e25",
//     name: "Marília Mendonça",
//     banner: "https://i.scdn.co/image/ab676186000010169e292b87a6e3a0900e871692",
//   },
//   {
//     id: 18,
//     image: "https://i.scdn.co/image/ab67616100005174fde13b4ff04ee1c0f33c6878",
//     name: "Luan Santana",
//     banner: "https://i.scdn.co/image/ab676186000010168b1f0064bf4dcb45cbae94e0",
//   },
//   {
//     id: 19,
//     image: "https://i.scdn.co/image/ab67616100005174a291b99de1602566f8d57725",
//     name: "Gustavo Mioto",
//     banner: "https://i.scdn.co/image/ab67618600001016404a5d03d5a37547177c0f2a",
//   },
//   {
//     id: 20,
//     image: "https://i.scdn.co/image/ab67616100005174a4d221889e774d4b173aeaa0",
//     name: "Henry Freitas",
//     banner: "https://i.scdn.co/image/ab676186000010169415572375bac1960f9de7e5",
//   },
// ];

import { artistArray } from "../../../api/api.js"

export {artistArray}
