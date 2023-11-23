import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {


  malayalamFilms = [
    {
      "image": "https://images-na.ssl-images-amazon.com/images/I/71uDxcc9O+L._SX600_.jpg",
      "title": "Premam",
      "review": "A coming-of-age romantic drama that beautifully explores the complexities of love and relationships.",
      "rating": 4.5,
      "year": 2015
    },
    {
      "image": "https://resizing.flixster.com/sLx0lPNRP1npxbATKi_FsjJwHwQ=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzQ0NDJkOWE2LTY3OTQtNGI3OS1hOGZmLTU3ZDNkMTQxMmVkOC53ZWJw",
      "title": "Drishyam",
      "review": "A gripping thriller that keeps you on the edge of your seat with its suspenseful storytelling.",
      "rating": 4.7,
      "year": 2013
    },
    {
      "image": "https://i.pinimg.com/originals/a9/88/a8/a988a84fb459fdc2c7883e8290afd52b.jpg",
      "title": "Bangalore Days",
      "review": "A heartwarming tale of friendship and self-discovery, beautifully shot in multiple locations.",
      "rating": 4.3,
      "year": 2014
    },
    {
      "image": "https://th.bing.com/th/id/OIP.x8OsI7E3R6BrPIHt-dPLRwHaK0?rs=1&pid=ImgDetMain",
      "title": "Kumbalangi Nights",
      "review": "A thought-provoking family drama that delves into the complexities of relationships.",
      "rating": 4.6,
      "year": 2019
    },
    {
      "image": "https://m.media-amazon.com/images/M/MV5BZjlmZjQ5ZTAtNmY0Ny00ODNjLWEyYmQtNTUyMzk2MzUzNTU5XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_FMjpg_UX720_.jpg",
      "title": "Uyare",
      "review": "A powerful film addressing societal issues, with a strong and inspiring female lead.",
      "rating": 4.4,
      "year": 2019
    }

  ]

  HindhiFilms = [
    {
      "image": "https://m.media-amazon.com/images/M/MV5BZDE4YzA3MGMtNmQ1ZS00NTkzLWFkYjQtMGQ2NDlhYTU4NjgxXkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_.jpg",
      "title": "Dangal",
      "review": "A compelling sports drama based on a true story, highlighting the pursuit of dreams against societal norms.",
      "rating": 4.8,
      "year": 2016
    },
    {
      "image": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11290399_p_v8_ad.jpg",
      "title": "PK",
      "review": "A satirical comedy-drama challenging religious dogmas, featuring a standout performance by Aamir Khan.",
      "rating": 4.5,
      "year": 2014
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
      "title": "3 Idiots",
      "review": "A humorous and poignant exploration of the education system's pressures and the pursuit of passion.",
      "rating": 4.7,
      "year": 2009
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/en/4/45/QueenMoviePoster7thMarch.jpg",
      "title": "Queen",
      "review": "A delightful journey of self-discovery, featuring Kangana Ranaut's stellar performance.",
      "rating": 4.6,
      "year": 2013
    },
    {
      "image": "https://4.bp.blogspot.com/-4c6wsIoHFsc/XMQ6FUGbI7I/AAAAAAAAQTg/2KBEcqpSgNkrokEu2b5MX5C7uKHy5Gi4wCLcBGAs/s1600/blog%2B-%2B2.jpg",
      "title": "Gully Boy",
      "review": "A gripping tale of a street rapper's rise, portraying Mumbai's underground hip-hop scene.",
      "rating": 4.5,
      "year": 2019
    },

  ]
  spanishFilms = [
    {
      "image": "https://upload.wikimedia.org/wikipedia/en/6/67/Pan%27s_Labyrinth.jpg",
      "title": "El laberinto del fauno (Pan's Labyrinth)",
      "review": "A visually stunning and dark fantasy masterpiece directed by Guillermo del Toro, blending reality and fantasy.",
      "rating": 4.8,
      "year": 2006
    },
    {
      "image": "https://m.media-amazon.com/images/I/91k+xV+QDqL._AC_UF894,1000_QL80_.jpg",
      "title": "Todo sobre mi madre (All About My Mother)",
      "review": "Pedro Almodóvar's emotionally rich drama exploring themes of motherhood, identity, and acceptance.",
      "rating": 4.7,
      "year": 1999
    },
    {
      "image": "https://d27csu38upkiqd.cloudfront.net/eyJidWNrZXQiOiJmZGMtc2l0ZXB1YmxpYy1tZWRpYS1wcm9kIiwia2V5IjoidXBsb2Fkc1wvMjAyM1wvMDNcLzI3MjE4LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTYwMCwiZml0IjoiY292ZXIifX19",
      "title": "Relatos salvajes (Wild Tales)",
      "review": "An anthology film presenting dark and satirical stories about human behavior, directed by Damián Szifron.",
      "rating": 4.5,
      "year": 2014
    },
    {
      "image": "https://m.media-amazon.com/images/M/MV5BMjE0NDk2NjgwMV5BMl5BanBnXkFtZTYwMTgyMzA3._V1_.jpg",
      "title": "Mar adentro (The Sea Inside)",
      "review": "Based on a true story, this Alejandro Amenábar film tells a moving tale of a paralyzed man's fight for the right to die.",
      "rating": 4.6,
      "year": 2004
    },
    {
      "image": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p27383_p_v8_ah.jpg",
      "title": "Amores perros",
      "review": "Alejandro González Iñárritu's gripping debut feature interweaving multiple stories in Mexico City.",
      "rating": 4.4,
      "year": 2000
    },
  ]

}
