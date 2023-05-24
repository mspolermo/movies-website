import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; 
import App from "../App";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from '../store';
import { act } from 'react-dom/test-utils';
import axios from "axios";
    
//НЕ РАБОТАЕТ (
//const axios = require('axios');
//jest.mock('axios');
jest.mock('axios', () => {
  return {
    create: jest.fn(() => ({
      get: jest.fn(),
      interceptors: {
        request: { use: jest.fn(), eject: jest.fn() },
        response: { use: jest.fn(), eject: jest.fn() }
      }
    }))
  }
})

class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
}

describe('FilmPage test-suite', () => {
    window.ResizeObserver = ResizeObserver;

    let response:any;
    beforeEach( () => {
        response = {
            data: {
                "film": {
                    "id": 1,
                    "trailerName": null,
                    "trailerUrl": null,
                    "ratingKp": 7.534,
                    "votesKp": 58011,
                    "ratingImdb": 6.5,
                    "votesImdb": 409,
                    "ratingFilmCritics": 0,
                    "votesFilmCritics": 0,
                    "ratingRussianFilmCritics": 0,
                    "votesRussianFilmCritics": 0,
                    "movieLength": 164,
                    "originalFilmLanguage": null,
                    "filmNameRu": "Вызов",
                    "filmNameEn": null,
                    "description": "Торакальный хирург Женя за месяц должна подготовиться к космическому полету, чтобы отправиться на МКС и спасти заболевшего космонавта. Ей придётся преодолеть неуверенность и страхи, а также провести сложнейшую операцию в условиях невесомости, от которой зависят шансы космонавта вернуться на Землю живым.",
                    "premiereCountry": null,
                    "slogan": null,
                    "bigPictureUrl": "https://st.kp.yandex.net/images/film_big/4448519.jpg",
                    "smallPictureUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_4448519.jpg",
                    "year": 2023,
                    "top10": null,
                    "top250": null,
                    "premiereWorldDate": "2023-04-20T00:00:00.000Z",
                    "createdAt": "2023-05-07T21:03:42.232Z",
                    "persons": [
                        {
                            "id": 1,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_1537279.jpg",
                            "nameRu": "Юлия Пересильд",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 1
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 1,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 2,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_1189311.jpg",
                            "nameRu": "Милош Бикович",
                            "nameEn": "Milos Bikovic",
                            "FilmPerson": {
                                "A": 1,
                                "B": 2
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 2,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 3,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_733.jpg",
                            "nameRu": "Владимир Машков",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 3
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 3,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 4,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_5970242.jpg",
                            "nameRu": "Олег Новицкий",
                            "nameEn": "Oleg Novitsky",
                            "FilmPerson": {
                                "A": 1,
                                "B": 4
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 4,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 5,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_5154087.jpg",
                            "nameRu": "Антон Шкаплеров",
                            "nameEn": "Anton Shkaplerov",
                            "FilmPerson": {
                                "A": 1,
                                "B": 5
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 5,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 6,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_6666003.jpg",
                            "nameRu": "Пётр Дубров ",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 6
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 6,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 7,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_304561.jpg",
                            "nameRu": "Елена Валюшкина",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 7
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 7,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 8,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_6198375.jpg",
                            "nameRu": "Варвара Володина",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 8
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 8,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 9,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_301167.jpg",
                            "nameRu": "Андрей Щепочкин",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 9
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 9,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 10,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_56447.jpg",
                            "nameRu": "Александр Балуев",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 10
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 10,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 11,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_735392.jpg",
                            "nameRu": "Игорь Гордин",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 11
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 11,
                                        "B": 1
                                    }
                                },
                                {
                                    "id": 8,
                                    "name": "актеры дубляжа",
                                    "PersonProfession": {
                                        "A": 11,
                                        "B": 8
                                    }
                                }
                            ]
                        },
                        {
                            "id": 12,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_1144128.jpg",
                            "nameRu": "Алексей Гришин",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 12
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 12,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 13,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_2363725.jpg",
                            "nameRu": "Артур Бесчастный",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 13
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 13,
                                        "B": 1
                                    }
                                },
                                {
                                    "id": 8,
                                    "name": "актеры дубляжа",
                                    "PersonProfession": {
                                        "A": 13,
                                        "B": 8
                                    }
                                }
                            ]
                        },
                        {
                            "id": 14,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_2318104.jpg",
                            "nameRu": "Беник Аракелян",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 14
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 14,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 15,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_6918367.jpg",
                            "nameRu": "Юлия Конюхова",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 15
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 15,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 16,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_1678219.jpg",
                            "nameRu": "Семён Штейнберг",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 16
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 16,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 17,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_1896085.jpg",
                            "nameRu": "Евгения Ахременко",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 17
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 17,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 18,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_231322.jpg",
                            "nameRu": "Андрей Кузичев",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 18
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 18,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 19,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_3502474.jpg",
                            "nameRu": "Максим Стоянов",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 19
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 19,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 20,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_231269.jpg",
                            "nameRu": "Александр Самойленко",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 20
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 20,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 21,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_1524935.jpg",
                            "nameRu": "Софья Ская",
                            "nameEn": "Sofya Skya",
                            "FilmPerson": {
                                "A": 1,
                                "B": 21
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 21,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 22,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_2933481.jpg",
                            "nameRu": "Михаил Тройник",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 22
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 22,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 23,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_1757825.jpg",
                            "nameRu": "Сергей Годин",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 23
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 23,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 24,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_2431986.jpg",
                            "nameRu": "Максим Виноградов",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 24
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 24,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 25,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_5550579.jpg",
                            "nameRu": "Альбина Кабалина",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 25
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 25,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 26,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_7127612.jpg",
                            "nameRu": "Анатолий Забрусков",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 26
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 26,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 27,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_1624666.jpg",
                            "nameRu": "Михаил Бабичев",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 27
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 27,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 28,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_3297382.jpg",
                            "nameRu": "Виктор Грудев",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 28
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 28,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 29,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_1605237.jpg",
                            "nameRu": "Марианна Коробейникова",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 29
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 29,
                                        "B": 1
                                    }
                                },
                                {
                                    "id": 8,
                                    "name": "актеры дубляжа",
                                    "PersonProfession": {
                                        "A": 29,
                                        "B": 8
                                    }
                                }
                            ]
                        },
                        {
                            "id": 30,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_37393.jpg",
                            "nameRu": "Анна Алексахина",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 30
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 30,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 31,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_7127613.jpg",
                            "nameRu": "Данила Федюнин",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 31
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 31,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 32,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_6442694.jpg",
                            "nameRu": "Алиса Клагиш",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 32
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 32,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 33,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_277510.jpg",
                            "nameRu": "Юлия Силаева",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 33
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 33,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 34,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_1615175.jpg",
                            "nameRu": "Артем Волобуев",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 34
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 34,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 35,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_6917924.jpg",
                            "nameRu": "Марта Евстигнеева",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 35
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 35,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 36,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_1203463.jpg",
                            "nameRu": "Евгений Вальц",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 36
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 36,
                                        "B": 1
                                    }
                                },
                                {
                                    "id": 8,
                                    "name": "актеры дубляжа",
                                    "PersonProfession": {
                                        "A": 36,
                                        "B": 8
                                    }
                                }
                            ]
                        },
                        {
                            "id": 37,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_7141234.jpg",
                            "nameRu": "Александра Овчинникова",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 37
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 37,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 38,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_7120587.jpg",
                            "nameRu": "Нелли Хапёрская",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 38
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 38,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 39,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_3691140.jpg",
                            "nameRu": "Яна Трофимова",
                            "nameEn": "Yana Trofimova",
                            "FilmPerson": {
                                "A": 1,
                                "B": 39
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 39,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 40,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_5996119.jpg",
                            "nameRu": "Нина Тушишвили",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 40
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 40,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 41,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_7141237.jpg",
                            "nameRu": "Олег Куйбида",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 41
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 41,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 42,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_1757860.jpg",
                            "nameRu": "Сергей Федюшкин",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 42
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 42,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 43,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_4045619.jpg",
                            "nameRu": "Дмитрий Капранов",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 43
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 43,
                                        "B": 1
                                    }
                                }
                            ]
                        },
                        {
                            "id": 44,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_1596759.jpg",
                            "nameRu": "Николай Ростов",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 44
                            },
                            "professions": [
                                {
                                    "id": 2,
                                    "name": "композиторы",
                                    "PersonProfession": {
                                        "A": 44,
                                        "B": 2
                                    }
                                }
                            ]
                        },
                        {
                            "id": 45,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_4514872.jpg",
                            "nameRu": "Сергей Черемисинов",
                            "nameEn": "Sergey Cheremisinov",
                            "FilmPerson": {
                                "A": 1,
                                "B": 45
                            },
                            "professions": [
                                {
                                    "id": 2,
                                    "name": "композиторы",
                                    "PersonProfession": {
                                        "A": 45,
                                        "B": 2
                                    }
                                }
                            ]
                        },
                        {
                            "id": 46,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_2336031.jpg",
                            "nameRu": "Сергей Тырин",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 46
                            },
                            "professions": [
                                {
                                    "id": 3,
                                    "name": "художники",
                                    "PersonProfession": {
                                        "A": 46,
                                        "B": 3
                                    }
                                }
                            ]
                        },
                        {
                            "id": 47,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_3923004.jpg",
                            "nameRu": "Виктория Ефимова-Шестаковская",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 47
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 47,
                                        "B": 1
                                    }
                                },
                                {
                                    "id": 3,
                                    "name": "художники",
                                    "PersonProfession": {
                                        "A": 47,
                                        "B": 3
                                    }
                                }
                            ]
                        },
                        {
                            "id": 48,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_1212038.jpg",
                            "nameRu": "Клим Шипенко",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 48
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 48,
                                        "B": 1
                                    }
                                },
                                {
                                    "id": 4,
                                    "name": "режиссеры",
                                    "PersonProfession": {
                                        "A": 48,
                                        "B": 4
                                    }
                                },
                                {
                                    "id": 6,
                                    "name": "операторы",
                                    "PersonProfession": {
                                        "A": 48,
                                        "B": 6
                                    }
                                },
                                {
                                    "id": 9,
                                    "name": "редакторы",
                                    "PersonProfession": {
                                        "A": 48,
                                        "B": 9
                                    }
                                }
                            ]
                        },
                        {
                            "id": 49,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_2907394.jpg",
                            "nameRu": "Тим Павелко",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 49
                            },
                            "professions": [
                                {
                                    "id": 5,
                                    "name": "монтажеры",
                                    "PersonProfession": {
                                        "A": 49,
                                        "B": 5
                                    }
                                }
                            ]
                        },
                        {
                            "id": 50,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_1050997.jpg",
                            "nameRu": "Борис Литовченко",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 50
                            },
                            "professions": [
                                {
                                    "id": 6,
                                    "name": "операторы",
                                    "PersonProfession": {
                                        "A": 50,
                                        "B": 6
                                    }
                                }
                            ]
                        },
                        {
                            "id": 51,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_231415.jpg",
                            "nameRu": "Константин Эрнст",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 51
                            },
                            "professions": [
                                {
                                    "id": 7,
                                    "name": "продюсеры",
                                    "PersonProfession": {
                                        "A": 51,
                                        "B": 7
                                    }
                                }
                            ]
                        },
                        {
                            "id": 52,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_2433828.jpg",
                            "nameRu": "Дмитрий Рогозин",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 52
                            },
                            "professions": [
                                {
                                    "id": 7,
                                    "name": "продюсеры",
                                    "PersonProfession": {
                                        "A": 52,
                                        "B": 7
                                    }
                                }
                            ]
                        },
                        {
                            "id": 53,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_1627437.jpg",
                            "nameRu": "Сергей Титинков",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 53
                            },
                            "professions": [
                                {
                                    "id": 7,
                                    "name": "продюсеры",
                                    "PersonProfession": {
                                        "A": 53,
                                        "B": 7
                                    }
                                }
                            ]
                        },
                        {
                            "id": 54,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_1956790.jpg",
                            "nameRu": "Эдуард Илоян",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 54
                            },
                            "professions": [
                                {
                                    "id": 7,
                                    "name": "продюсеры",
                                    "PersonProfession": {
                                        "A": 54,
                                        "B": 7
                                    }
                                }
                            ]
                        },
                        {
                            "id": 55,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_1055853.jpg",
                            "nameRu": "Александр Устюгов",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 55
                            },
                            "professions": [
                                {
                                    "id": 1,
                                    "name": "актеры",
                                    "PersonProfession": {
                                        "A": 55,
                                        "B": 1
                                    }
                                },
                                {
                                    "id": 8,
                                    "name": "актеры дубляжа",
                                    "PersonProfession": {
                                        "A": 55,
                                        "B": 8
                                    }
                                }
                            ]
                        },
                        {
                            "id": 56,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_2774633.jpg",
                            "nameRu": "Дмитрий Козельский",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 56
                            },
                            "professions": [
                                {
                                    "id": 8,
                                    "name": "актеры дубляжа",
                                    "PersonProfession": {
                                        "A": 56,
                                        "B": 8
                                    }
                                }
                            ]
                        },
                        {
                            "id": 57,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_544319.jpg",
                            "nameRu": "Бакур Бакурадзе",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 57
                            },
                            "professions": [
                                {
                                    "id": 7,
                                    "name": "продюсеры",
                                    "PersonProfession": {
                                        "A": 57,
                                        "B": 7
                                    }
                                },
                                {
                                    "id": 9,
                                    "name": "редакторы",
                                    "PersonProfession": {
                                        "A": 57,
                                        "B": 9
                                    }
                                }
                            ]
                        },
                        {
                            "id": 58,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_6565422.jpg",
                            "nameRu": "Иван Заморов",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 58
                            },
                            "professions": [
                                {
                                    "id": 9,
                                    "name": "редакторы",
                                    "PersonProfession": {
                                        "A": 58,
                                        "B": 9
                                    }
                                }
                            ]
                        },
                        {
                            "id": 59,
                            "photoUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_2896150.jpg",
                            "nameRu": "Иля Малахова",
                            "nameEn": null,
                            "FilmPerson": {
                                "A": 1,
                                "B": 59
                            },
                            "professions": [
                                {
                                    "id": 9,
                                    "name": "редакторы",
                                    "PersonProfession": {
                                        "A": 59,
                                        "B": 9
                                    }
                                }
                            ]
                        }
                    ],
                    "countries": [
                        {
                            "id": 1,
                            "countryName": "Россия",
                            "countryNameEn": "Russia",
                            "FilmCountry": {
                                "A": 1,
                                "B": 1
                            }
                        }
                    ],
                    "genres": [
                        {
                            "id": 1,
                            "nameRu": "драма",
                            "nameEn": "drama",
                            "FilmGenre": {
                                "A": 1,
                                "B": 1
                            }
                        }
                    ],
                    "fact": {
                        "id": 1,
                        "value": "Часть фильма была снята на борту МКС в 400 км от Земли. 5 октября 2021 года на орбиту отправился первый в истории киноэкипаж — актриса <a href=\"/name/1537279/\" class=\"all\">Юлия Пересильд</a>, режиссер <a href=\"/name/1212038/\" class=\"all\">Клим Шипенко</a> и командир корабля <a href=\"/name/5154087/\" class=\"all\">Антон Шкаплеров</a>.",
                        "type": "FACT",
                        "spoiler": false,
                        "filmId": 1
                    }
                },
                "similarFilms": [
                    {
                        "id": 1,
                        "trailerName": null,
                        "trailerUrl": null,
                        "ratingKp": 7.534,
                        "votesKp": 58011,
                        "ratingImdb": 6.5,
                        "votesImdb": 409,
                        "ratingFilmCritics": 0,
                        "votesFilmCritics": 0,
                        "ratingRussianFilmCritics": 0,
                        "votesRussianFilmCritics": 0,
                        "movieLength": 164,
                        "originalFilmLanguage": null,
                        "filmNameRu": "Вызов",
                        "filmNameEn": null,
                        "description": "Торакальный хирург Женя за месяц должна подготовиться к космическому полету, чтобы отправиться на МКС и спасти заболевшего космонавта. Ей придётся преодолеть неуверенность и страхи, а также провести сложнейшую операцию в условиях невесомости, от которой зависят шансы космонавта вернуться на Землю живым.",
                        "premiereCountry": null,
                        "slogan": null,
                        "bigPictureUrl": "https://st.kp.yandex.net/images/film_big/4448519.jpg",
                        "smallPictureUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_4448519.jpg",
                        "year": 2023,
                        "top10": null,
                        "top250": null,
                        "premiereWorldDate": "2023-04-20T00:00:00.000Z",
                        "createdAt": "2023-05-07T21:03:42.232Z",
                        "genres": [
                            {
                                "id": 1,
                                "nameRu": "драма",
                                "nameEn": "drama",
                                "FilmGenre": {
                                    "A": 1,
                                    "B": 1
                                }
                            }
                        ]
                    },
                    {
                        "id": 224,
                        "trailerName": "La La Land (2016 Movie) Official Trailer – 'Dreamers'",
                        "trailerUrl": "https://www.youtube.com/embed/0pdqf4P9MB8",
                        "ratingKp": 7.961,
                        "votesKp": 297476,
                        "ratingImdb": 8,
                        "votesImdb": 611925,
                        "ratingFilmCritics": 8.7,
                        "votesFilmCritics": 470,
                        "ratingRussianFilmCritics": 100,
                        "votesRussianFilmCritics": 32,
                        "movieLength": 128,
                        "originalFilmLanguage": "English",
                        "filmNameRu": "Ла-Ла Ленд",
                        "filmNameEn": "La La Land",
                        "description": "Это история любви старлетки, которая между прослушиваниями подает кофе состоявшимся кинозвездам, и фанатичного джазового музыканта, вынужденного подрабатывать в заштатных барах. Но пришедший к влюбленным успех начинает подтачивать их отношения.",
                        "premiereCountry": null,
                        "slogan": "Бесстрашным мечтателям посвящается…",
                        "bigPictureUrl": "https://st.kp.yandex.net/images/film_big/841081.jpg",
                        "smallPictureUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_841081.jpg",
                        "year": 2016,
                        "top10": null,
                        "top250": 249,
                        "premiereWorldDate": "2016-08-31T00:00:00.000Z",
                        "createdAt": "2023-05-07T21:10:27.854Z",
                        "genres": [
                            {
                                "id": 1,
                                "nameRu": "драма",
                                "nameEn": "drama",
                                "FilmGenre": {
                                    "A": 224,
                                    "B": 1
                                }
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "trailerName": "трейлер русской фантастики МИРА, в кино с 22 декабря",
                        "trailerUrl": "https://www.youtube.com/embed/dBbOo8J0G18",
                        "ratingKp": 7.439,
                        "votesKp": 191490,
                        "ratingImdb": 0,
                        "votesImdb": 0,
                        "ratingFilmCritics": 0,
                        "votesFilmCritics": 0,
                        "ratingRussianFilmCritics": 0,
                        "votesRussianFilmCritics": 1,
                        "movieLength": 110,
                        "originalFilmLanguage": null,
                        "filmNameRu": "Мира",
                        "filmNameEn": null,
                        "description": "Недалекое будущее. 15-летняя Лера Арабова живет во Владивостоке. Ее отец много лет работает на орбитальной космической станции и давно потерял контакт с дочерью, превратившись лишь в голос в телефоне. После того как на город обрушивается метеоритный дождь, у Леры остается только один шанс спасти близких и город от новой катастрофы. В этом ей помогает отец, использующий любую возможность передать сообщение дочери, следя сверху со станции за каждым ее шагом.",
                        "premiereCountry": null,
                        "slogan": "Для семьи космос не расстояние",
                        "bigPictureUrl": "https://st.kp.yandex.net/images/film_big/1227997.jpg",
                        "smallPictureUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_1227997.jpg",
                        "year": 2022,
                        "top10": null,
                        "top250": null,
                        "premiereWorldDate": null,
                        "createdAt": "2023-05-07T21:03:46.159Z",
                        "genres": [
                            {
                                "id": 1,
                                "nameRu": "драма",
                                "nameEn": "drama",
                                "FilmGenre": {
                                    "A": 7,
                                    "B": 1
                                }
                            }
                        ]
                    },
                    {
                        "id": 10,
                        "trailerName": "Трейлер №2",
                        "trailerUrl": "https://www.youtube.com/watch?v=YES0lLXIIz4",
                        "ratingKp": 7.272,
                        "votesKp": 60967,
                        "ratingImdb": 7.3,
                        "votesImdb": 154793,
                        "ratingFilmCritics": 7.8,
                        "votesFilmCritics": 237,
                        "ratingRussianFilmCritics": 80,
                        "votesRussianFilmCritics": 5,
                        "movieLength": 133,
                        "originalFilmLanguage": "English",
                        "filmNameRu": "Баллада Бастера Скраггса",
                        "filmNameEn": "The Ballad of Buster Scruggs",
                        "description": "События разворачиваются на Диком Западе в маленьких захолустных городках среди бескрайних американских прерий и высокогорных равнин. В этом суровом мире, где каждый сам за себя, царит один закон: выживает сильнейший.",
                        "premiereCountry": null,
                        "slogan": "How the West Was Won (more or less)",
                        "bigPictureUrl": "https://st.kp.yandex.net/images/film_big/1008879.jpg",
                        "smallPictureUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_1008879.jpg",
                        "year": 2018,
                        "top10": null,
                        "top250": null,
                        "premiereWorldDate": "2018-08-31T00:00:00.000Z",
                        "createdAt": "2023-05-07T21:03:49.480Z",
                        "genres": [
                            {
                                "id": 1,
                                "nameRu": "драма",
                                "nameEn": "drama",
                                "FilmGenre": {
                                    "A": 10,
                                    "B": 1
                                }
                            }
                        ]
                    },
                    {
                        "id": 13,
                        "trailerName": null,
                        "trailerUrl": null,
                        "ratingKp": 7.485,
                        "votesKp": 4819,
                        "ratingImdb": 0,
                        "votesImdb": 0,
                        "ratingFilmCritics": 0,
                        "votesFilmCritics": 0,
                        "ratingRussianFilmCritics": 0,
                        "votesRussianFilmCritics": 0,
                        "movieLength": 84,
                        "originalFilmLanguage": null,
                        "filmNameRu": "Русский крест",
                        "filmNameEn": null,
                        "description": "Простой человек Иван Росток, достигнув предела в своем падении, кается и духовно возрождается. Он обретает веру после явления ему святого Георгия и ставит перед собой задачу — восстановить разрушенный в советское время деревенский храм.",
                        "premiereCountry": null,
                        "slogan": null,
                        "bigPictureUrl": "https://st.kp.yandex.net/images/film_big/4676639.jpg",
                        "smallPictureUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_4676639.jpg",
                        "year": 2023,
                        "top10": null,
                        "top250": null,
                        "premiereWorldDate": null,
                        "createdAt": "2023-05-07T21:03:53.429Z",
                        "genres": [
                            {
                                "id": 1,
                                "nameRu": "драма",
                                "nameEn": "drama",
                                "FilmGenre": {
                                    "A": 13,
                                    "B": 1
                                }
                            }
                        ]
                    },
                    {
                        "id": 18,
                        "trailerName": "Official Trailer",
                        "trailerUrl": "https://www.youtube.com/embed/wxN1T1uxQ2g",
                        "ratingKp": 7.227,
                        "votesKp": 467626,
                        "ratingImdb": 7.9,
                        "votesImdb": 438596,
                        "ratingFilmCritics": 8.6,
                        "votesFilmCritics": 392,
                        "ratingRussianFilmCritics": 88.8889,
                        "votesRussianFilmCritics": 9,
                        "movieLength": 139,
                        "originalFilmLanguage": "English",
                        "filmNameRu": "Всё везде и сразу",
                        "filmNameEn": "Everything Everywhere All at Once",
                        "description": "В жизни Эвелин царит бардак. Она никак не может составить налоговый отчёт, пожилой отец постоянно требует внимания, муж витает в облаках, а ещё и дочка привела свою девушку знакомиться с семьёй. Во время визита в налоговую всё запутывается ещё сильнее — оказывается, Эвелин может скакать по параллельным вселенным и получать доступ к воспоминаниям и навыкам других версий самой себя. И теперь, в полнейшем хаосе, женщине придётся противостоять загадочной злой сущности, которая решила разрушить не только этот мир, но и всю мультивселенную.",
                        "premiereCountry": null,
                        "slogan": null,
                        "bigPictureUrl": "https://st.kp.yandex.net/images/film_big/1322324.jpg",
                        "smallPictureUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_1322324.jpg",
                        "year": 2021,
                        "top10": null,
                        "top250": null,
                        "premiereWorldDate": "2022-03-11T00:00:00.000Z",
                        "createdAt": "2023-05-07T21:03:57.095Z",
                        "genres": [
                            {
                                "id": 1,
                                "nameRu": "драма",
                                "nameEn": "drama",
                                "FilmGenre": {
                                    "A": 18,
                                    "B": 1
                                }
                            }
                        ]
                    },
                    {
                        "id": 64,
                        "trailerName": null,
                        "trailerUrl": null,
                        "ratingKp": 8.355,
                        "votesKp": 384338,
                        "ratingImdb": 8.5,
                        "votesImdb": 897874,
                        "ratingFilmCritics": 8.6,
                        "votesFilmCritics": 307,
                        "ratingRussianFilmCritics": 100,
                        "votesRussianFilmCritics": 14,
                        "movieLength": 106,
                        "originalFilmLanguage": null,
                        "filmNameRu": "Одержимость",
                        "filmNameEn": "Whiplash",
                        "description": "Эндрю мечтает стать великим. Казалось бы, вот-вот его мечта осуществится. Юношу замечает настоящий гений, дирижер лучшего в стране оркестра. Желание Эндрю добиться успеха быстро становится одержимостью, а безжалостный наставник продолжает подталкивать его все дальше и дальше – за пределы человеческих возможностей. Кто выйдет победителем из этой схватки?",
                        "premiereCountry": null,
                        "slogan": "The road to greatness can take you to the edge",
                        "bigPictureUrl": "https://st.kp.yandex.net/images/film_big/725190.jpg",
                        "smallPictureUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_725190.jpg",
                        "year": 2013,
                        "top10": null,
                        "top250": 83,
                        "premiereWorldDate": "2014-01-16T00:00:00.000Z",
                        "createdAt": "2023-05-07T21:04:46.443Z",
                        "genres": [
                            {
                                "id": 1,
                                "nameRu": "драма",
                                "nameEn": "drama",
                                "FilmGenre": {
                                    "A": 64,
                                    "B": 1
                                }
                            }
                        ]
                    },
                    {
                        "id": 22,
                        "trailerName": null,
                        "trailerUrl": null,
                        "ratingKp": 7.851,
                        "votesKp": 34667,
                        "ratingImdb": 0,
                        "votesImdb": 0,
                        "ratingFilmCritics": 0,
                        "votesFilmCritics": 0,
                        "ratingRussianFilmCritics": 0,
                        "votesRussianFilmCritics": 1,
                        "movieLength": 110,
                        "originalFilmLanguage": null,
                        "filmNameRu": "Поехавшая",
                        "filmNameEn": null,
                        "description": "Обычная жительница мегаполиса Аня Смолина после череды неудач решает: пришло время все изменить. Она достает запылившийся велосипед, сажает в прицеп таксу Капу и отправляется через всю Россию — мириться с мамой.\nЕе ждет долгая и трудная дорога с массой испытаний, борьба с самой собой, дружелюбные (и не очень) дальнобойщики и пирожки с трассы. И, конечно, это путешествие принесет судьбоносные встречи.",
                        "premiereCountry": null,
                        "slogan": null,
                        "bigPictureUrl": "https://st.kp.yandex.net/images/film_big/4686066.jpg",
                        "smallPictureUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_4686066.jpg",
                        "year": 2023,
                        "top10": null,
                        "top250": null,
                        "premiereWorldDate": null,
                        "createdAt": "2023-05-07T21:04:02.014Z",
                        "genres": [
                            {
                                "id": 1,
                                "nameRu": "драма",
                                "nameEn": "drama",
                                "FilmGenre": {
                                    "A": 22,
                                    "B": 1
                                }
                            }
                        ]
                    },
                    {
                        "id": 23,
                        "trailerName": "Official Trailer",
                        "trailerUrl": "https://www.youtube.com/embed/eqCYw_o5lng",
                        "ratingKp": 6.545,
                        "votesKp": 1841,
                        "ratingImdb": 7,
                        "votesImdb": 21052,
                        "ratingFilmCritics": 7.1,
                        "votesFilmCritics": 15,
                        "ratingRussianFilmCritics": 0,
                        "votesRussianFilmCritics": 0,
                        "movieLength": 111,
                        "originalFilmLanguage": null,
                        "filmNameRu": "Последнее королевство: Семь королей должны умереть",
                        "filmNameEn": "The Last Kingdom: Seven Kings Must Die",
                        "description": "После смерти короля Эдуарда Утред Беббанбургский и его товарищи отправляются в путешествие по расколотому королевству в надежде наконец объединить Англию.",
                        "premiereCountry": null,
                        "slogan": null,
                        "bigPictureUrl": "https://st.kp.yandex.net/images/film_big/4684810.jpg",
                        "smallPictureUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_4684810.jpg",
                        "year": 2023,
                        "top10": null,
                        "top250": null,
                        "premiereWorldDate": "2023-04-14T00:00:00.000Z",
                        "createdAt": "2023-05-07T21:04:02.599Z",
                        "genres": [
                            {
                                "id": 1,
                                "nameRu": "драма",
                                "nameEn": "drama",
                                "FilmGenre": {
                                    "A": 23,
                                    "B": 1
                                }
                            }
                        ]
                    },
                    {
                        "id": 24,
                        "trailerName": "Official Trailer",
                        "trailerUrl": "https://www.youtube.com/embed/-BLM1naCfME",
                        "ratingKp": 7.09,
                        "votesKp": 19293,
                        "ratingImdb": 7.4,
                        "votesImdb": 41184,
                        "ratingFilmCritics": 6.7,
                        "votesFilmCritics": 176,
                        "ratingRussianFilmCritics": 50,
                        "votesRussianFilmCritics": 4,
                        "movieLength": 118,
                        "originalFilmLanguage": null,
                        "filmNameRu": "Тетрис",
                        "filmNameEn": "Tetris",
                        "description": "Увидев в 1988 году на выставке в Лас-Вегасе видеоигру «Тетрис», созданную советским программистом Алексеем Пажитновым, предприниматель Хенк Роджерс тут же купил права на дистрибуцию игры в Японии, так как распространение в остальном мире уже принадлежало компании Mirrorsoft. Ушлый бизнесмен также сумел договориться о сотрудничестве с компанией Nintendo, а когда та собралась выпускать революционное устройство Game Boy, Хенк решает сам отправиться в Москву, чтобы лицензировать популярную игру на новой игровой системе.",
                        "premiereCountry": null,
                        "slogan": null,
                        "bigPictureUrl": "https://st.kp.yandex.net/images/film_big/1396300.jpg",
                        "smallPictureUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_1396300.jpg",
                        "year": 2022,
                        "top10": null,
                        "top250": null,
                        "premiereWorldDate": "2023-03-15T00:00:00.000Z",
                        "createdAt": "2023-05-07T21:04:03.570Z",
                        "genres": [
                            {
                                "id": 1,
                                "nameRu": "драма",
                                "nameEn": "drama",
                                "FilmGenre": {
                                    "A": 24,
                                    "B": 1
                                }
                            }
                        ]
                    }
                ]
            }
        }
    })

    test('Open Film page check', () => {

        render(
            <MemoryRouter initialEntries={['/movies-website/film/1']}>
                <Provider store={store}> 
                    <App />
                </Provider>
            </MemoryRouter>  
        );

        expect(screen.getByTestId('filmPage')).toBeInTheDocument();
    });

    test('Internal blocks exist check', async () => {
        //@ts-ignore
        axios.get.mockRetunrValue(response)
        
        render(
            <MemoryRouter initialEntries={['/movies-website/film/1/']}>
                <Provider store={store}> 
                    <App />
                </Provider>
            </MemoryRouter>  
        );
        
        

        const sum = await screen.findByTestId('summaryBlock')
        expect((sum)).toBeInTheDocument();

    });
});